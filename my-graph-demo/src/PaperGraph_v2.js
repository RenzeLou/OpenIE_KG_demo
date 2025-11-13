import React, { useEffect, useRef, useState } from "react";
import * as vis from "vis-network";
import { DataSet } from "vis-data";

// ----------- 辅助函数：通用归一 -----------
function normalizeName(name) {
  return name ? name.replace(/\s+/g, "").toLowerCase() : "";
}

// ----------- 单论文去重节点 -----------
function getUniqueNodes(relations, biomarkers) {
  const nodeMap = new Map();
  if (relations && relations.length > 0) {
    relations.forEach(({ cause, effect }) => {
      [cause, effect].forEach((entity) => {
        const norm = normalizeName(entity.name);
        if (entity && entity.name && !nodeMap.has(norm)) {
          nodeMap.set(norm, entity);
        }
      });
    });
  }
  if (biomarkers && biomarkers.length > 0) {
    biomarkers.forEach((entity) => {
      const norm = normalizeName(entity.name);
      if (entity && entity.name && !nodeMap.has(norm)) {
        nodeMap.set(norm, entity);
      }
    });
  }
  return Array.from(nodeMap.values());
}

// ----------- 聚合生成函数 -----------
function aggregatePapers(papers) {
  const nodeCntMap = new Map(); // normName -> {entity, count}
  const edgeCntMap = new Map(); // "A->B" -> {forward: n, reverse: m}

  papers.forEach((p) => {
    const rels = p.refined_relations || [];
    const biom = p.biomarkers || [];

    // 节点计数
    biom.forEach((b) => {
      const norm = normalizeName(b.name);
      if (!norm) return;
      if (!nodeCntMap.has(norm)) {
        nodeCntMap.set(norm, { entity: b, count: 1 });
      } else {
        nodeCntMap.get(norm).count += 1;
      }
    });

    // 边计数
    rels.forEach((r) => {
      const a = normalizeName(r.cause.name);
      const b = normalizeName(r.effect.name);
      if (!a || !b) return;
      const key = `${a}->${b}`;
      const revKey = `${b}->${a}`;
      if (!edgeCntMap.has(key)) {
        edgeCntMap.set(key, { forward: 1, reverse: 0 });
      } else {
        edgeCntMap.get(key).forward += 1;
      }
      // 同时要保证reverse存在
      if (!edgeCntMap.has(revKey)) {
        edgeCntMap.set(revKey, { forward: 0, reverse: 0 });
      }
    });
  });

  // 返回数组
  const nodes = Array.from(nodeCntMap.values()).map((v) => ({
    id: normalizeName(v.entity.name),
    label: v.entity.name,
    count: v.count,
  }));

  const edges = [];
  for (const [key, val] of edgeCntMap.entries()) {
    const [a, b] = key.split("->");
    if (val.forward === 0 && val.reverse === 0) continue;
    edges.push({
      id: key,
      from: a,
      to: b,
      forward: val.forward,
      reverse: val.reverse,
    });
  }
  return { nodes, edges };
}

// ========================================================
export default function PaperGraph({
  relations,
  biomarkers,
  aggregatedPapers,
  totalPaperCount,
}) {
  const container = useRef(null);
  const [detail, setDetail] = useState("");

  const isAggregated = !!aggregatedPapers;

  useEffect(() => {
    let nodesArr = [];
    let edgesArr = [];
    let nodeTooltipMap = {};
    let edgeTooltipMap = {};

    if (isAggregated) {
      // 聚合视图
      const { nodes, edges } = aggregatePapers(aggregatedPapers);
      nodesArr = nodes.map((n) => ({
        id: n.id,
        label: n.label,
      }));
      edgesArr = edges.map((e) => ({
        id: e.id,
        from: e.from,
        to: e.to,
        arrows: "to",
      }));
      // 构造 hover 信息
      nodes.forEach((n) => {
        nodeTooltipMap[n.id] = `<span style="color:#1d70f7;font-weight:bold;">[Biomarker]:</span> There are ${n.count} / ${totalPaperCount} papers mention this biomarker.`;
      });
      edges.forEach((e) => {
        if (e.reverse > 0) {
            edgeTooltipMap[e.id] =
            `<span style="color:#d22;font-weight:bold;">[Causal Relation]:</span> ` +
            `There are ${e.forward} / ${totalPaperCount} papers support this causal relation, while ${e.reverse} / ${totalPaperCount} papers found reverse relation.`;
        } else {
            edgeTooltipMap[e.id] =
            `<span style="color:#d22;font-weight:bold;">[Causal Relation]:</span> ` +
            `There are ${e.forward} / ${totalPaperCount} papers support this causal relation.`;
        }
      });
      } else {
      // 单论文视图
      const nodesRaw = getUniqueNodes(relations, biomarkers);
      nodesArr = nodesRaw.map((entity) => ({
        id: entity.name,
        label: entity.name,
      }));
      edgesArr = (relations || []).map((r, idx) => ({
        id: String(idx),
        from: r.cause.name,
        to: r.effect.name,
        arrows: "to",
      }));
      nodesRaw.forEach((e) => {
        const text = e.explanation || "";
        nodeTooltipMap[e.name] = `<span style="color:#1d70f7;font-weight:bold;">[Biomarker]:</span> ${text}`;
      });
      (relations || []).forEach((r, idx) => {
        const text = r.evidence_phrase || "";
        edgeTooltipMap[String(idx)] = `<span style="color:#d22;font-weight:bold;">[Causal Relation]:</span> ${text}`;
      });
    }

    const nodes = new DataSet(nodesArr);
    const edges = new DataSet(edgesArr);
    const network = new vis.Network(
      container.current,
      { nodes, edges },
      {
        nodes: {
          shape: "ellipse",
          color: "#6fa8dc",
          font: { color: "#222", size: 16 },
        },
        edges: {
          arrows: "to",
          width: 2,
          color: "#888",
        },
        interaction: { hover: true, tooltipDelay: 50 },
        physics: false,
      }
    );

    // hover 事件
    network.on("hoverNode", (params) => setDetail(nodeTooltipMap[params.node] || ""));
    network.on("blurNode", () => setDetail(""));
    network.on("hoverEdge", (params) => setDetail(edgeTooltipMap[params.edge] || ""));
    network.on("blurEdge", () => setDetail(""));

    return () => network.destroy();
  }, [relations, biomarkers, aggregatedPapers, totalPaperCount]);

  return (
    <div>
      <div
        ref={container}
        style={{ height: 460, border: "1px solid #ddd", marginTop: 15 }}
      />
      <div
        style={{
            marginTop: 18,
            minHeight: 44,
            padding: "10px 14px",
            background: "#f7faff",
            border: "1px solid #e5e5e5",
            color: "#226",
            fontSize: 16,
        }}
        dangerouslySetInnerHTML={{
            __html: detail
            ? detail
            : `<span style="color:#888;">Hover the mouse over a node or an edge to display detailed information.</span>`,
        }}
        />
            </div>
  );
}

// import React, { useEffect, useRef, useState } from "react";
// import { DataSet } from "vis-data";
// import { Network } from "vis-network";

// /* ----------- 工具函数区 ----------- */

// function normalize(name) {
//   return name ? name.replace(/\s+/g, "").toLowerCase() : "";
// }

// function getUniqueNodes(relations, biomarkers) {
//   const nodeMap = new Map();

//   if (relations?.length > 0) {
//     relations.forEach(({ cause, effect }) => {
//       [cause, effect].forEach((entity) => {
//         const norm = normalize(entity.name);
//         if (entity && entity.name && !nodeMap.has(norm)) {
//           nodeMap.set(norm, entity);
//         }
//       });
//     });
//   }
//   if (biomarkers?.length > 0) {
//     biomarkers.forEach((entity) => {
//       const norm = normalize(entity.name);
//       if (entity && entity.name && !nodeMap.has(norm)) {
//         nodeMap.set(norm, entity);
//       }
//     });
//   }
//   return Array.from(nodeMap.values());
// }

// // 计算聚合图：返回 {nodesArr, edgesArr, nodeSupportMap, edgeSupportMap}
// function buildAggregateGraph(papers, totalCount) {
//   const nodeCounter = new Map(); // normName -> {entity, count}
//   const edgeCounter = new Map(); // "A|B" -> {from, to, positive, reverse}

//   for (const p of papers) {
//     const relations = p.refined_relations || [];
//     const biomarkers = p.biomarkers || [];

//     // 收集节点
//     biomarkers.forEach((b) => {
//       const norm = normalize(b.name);
//       if (!norm) return;
//       const entry = nodeCounter.get(norm) || { entity: b, count: 0 };
//       entry.count += 1;
//       nodeCounter.set(norm, entry);
//     });

//     // 收集边
//     relations.forEach((r) => {
//       const source = normalize(r.cause.name);
//       const target = normalize(r.effect.name);
//       if (!source || !target) return;

//       const key = `${source}|${target}`;
//       const revKey = `${target}|${source}`;
//       const existing = edgeCounter.get(key) || {
//         from: r.cause.name,
//         to: r.effect.name,
//         positive: 0,
//         reverse: 0,
//       };
//       existing.positive += 1;
//       edgeCounter.set(key, existing);

//       // 同时更新反向关系统计
//       if (edgeCounter.has(revKey)) {
//         const rev = edgeCounter.get(revKey);
//         rev.reverse = (rev.reverse || 0) + 1;
//         edgeCounter.set(revKey, rev);
//       }
//     });
//   }

//   const nodesArr = Array.from(nodeCounter.values()).map((v) => ({
//     id: v.entity.name,
//     label: v.entity.name,
//     count: v.count,
//   }));

//   const edgesArr = Array.from(edgeCounter.values()).map((v, i) => ({
//     id: String(i),
//     from: v.from,
//     to: v.to,
//     positive: v.positive,
//     reverse: v.reverse,
//   }));

//   return { nodesArr, edgesArr };
// }

// /* ----------- React组件 ----------- */

// export default function PaperGraph({
//   relations,
//   biomarkers,
//   aggregatePapers,
//   totalPapers,
// }) {
//   const container = useRef(null);
//   const [detail, setDetail] = useState("");

//   useEffect(() => {
//     let nodesArr = [];
//     let edgesArr = [];
//     const tooltipMap = {};

//     if (aggregatePapers) {
//       const { nodesArr: aggNodes, edgesArr: aggEdges } = buildAggregateGraph(
//         aggregatePapers,
//         totalPapers
//       );
//       nodesArr = aggNodes;
//       edgesArr = aggEdges;

//       // 生成 hover 提示逻辑
//       aggNodes.forEach((n) => {
//         tooltipMap[n.id] = `This biomarker appears in <b>${n.count}</b> / ${totalPapers} papers.`;
//       });
//       aggEdges.forEach((e) => {
//         tooltipMap[e.id] = `Relation supported by <b>${e.positive}</b> / ${totalPapers} papers; reversed in <b>${e.reverse}</b> / ${totalPapers} papers.`;
//       });
//     } else {
//       const uniqueNodes = getUniqueNodes(relations, biomarkers);
//       nodesArr = uniqueNodes.map((entity) => ({
//         id: entity.name,
//         label: entity.name,
//       }));
//       edgesArr = (relations || []).map((item, idx) => ({
//         id: String(idx),
//         from: item.cause.name,
//         to: item.effect.name,
//         arrows: "to",
//       }));
//       uniqueNodes.forEach((n) => {
//         tooltipMap[n.id] = n.explanation || "";
//       });
//       (relations || []).forEach((r, idx) => {
//         tooltipMap[String(idx)] = r.evidence_phrase || "";
//       });
//     }

//     const nodes = new DataSet(nodesArr);
//     const edges = new DataSet(edgesArr);

//     const network = new Network(container.current, { nodes, edges }, {
//       nodes: {
//         shape: "ellipse",
//         color: "#6fa8dc",
//         font: { color: "#222", size: 16 },
//       },
//       edges: {
//         arrows: "to",
//         width: 2,
//         color: "#888",
//       },
//       interaction: { hover: true, tooltipDelay: 50 },
//       physics: false,
//     });

//     network.on("hoverNode", (params) => {
//       const nodeId = params.node;
//       setDetail(tooltipMap[nodeId] || "");
//     });
//     network.on("blurNode", () => setDetail(""));
//     network.on("hoverEdge", (params) => {
//       const edgeId = params.edge;
//       setDetail(tooltipMap[edgeId] || "");
//     });
//     network.on("blurEdge", () => setDetail(""));

//     return () => network.destroy();
//   }, [relations, biomarkers, aggregatePapers]);

//   return (
//     <div>
//       <div
//         ref={container}
//         style={{ height: 430, border: "1px solid #ddd", marginTop: 15 }}
//       />
//       <div
//         style={{
//           marginTop: 18,
//           minHeight: 44,
//           padding: "10px 14px",
//           background: "#f7faff",
//           border: "1px solid #e5e5e5",
//           color: "#226",
//           fontSize: 16,
//         }}
//       >
//         {detail ? (
//           <span dangerouslySetInnerHTML={{ __html: detail }} />
//         ) : (
//           <span style={{ color: "#888" }}>
//             Hover the mouse over a node or an edge to display detailed
//             information.
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }