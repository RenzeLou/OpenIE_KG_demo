import React, { useEffect, useRef, useState } from "react";
import * as vis from "vis-network";
import { DataSet } from "vis-data";

function normalizeName(name) {
  return name ? name.replace(/\s+/g, "").toLowerCase() : "";
}

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

function aggregatePapers(papers) {
  const nodeCntMap = new Map();
  const edgeCntMap = new Map();

  papers.forEach((p) => {
    const rels = p.refined_relations || [];
    const biom = p.biomarkers || [];

    biom.forEach((b) => {
      const norm = normalizeName(b.name);
      if (!norm) return;
      if (!nodeCntMap.has(norm)) {
        nodeCntMap.set(norm, { entity: b, count: 1 });
      } else {
        nodeCntMap.get(norm).count += 1;
      }
    });

    rels.forEach((r) => {
      const a = normalizeName(r.cause.name);
      const b = normalizeName(r.effect.name);
      if (!a || !b) return;
      const key = `${a}->${b}`;
      const revKey = `${b}->${a}`;
      if (!edgeCntMap.has(key)) edgeCntMap.set(key, { forward: 1, reverse: 0 });
      else edgeCntMap.get(key).forward += 1;
      if (!edgeCntMap.has(revKey))
        edgeCntMap.set(revKey, { forward: 0, reverse: 0 });
    });
  });

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

// ==========================================================
export default function PaperGraph({
  relations,
  biomarkers,
  aggregatedPapers,
  totalPaperCount,
  customEdges,
  customDetailMap,
}) {
  const container = useRef(null);
  const [detail, setDetail] = useState("");
  const isAggregated = !!aggregatedPapers;

  useEffect(() => {
    let nodesArr = [];
    let edgesArr = [];
    let nodeTooltipMap = {};
    let edgeTooltipMap = {};

    if (customEdges) {
      // taxonomy 模式
      nodesArr = biomarkers.map((n) => ({
        id: n.id || n.name,
        label: n.label || n.name,
        color: n.color,
      }));
      edgesArr = customEdges;
      edgeTooltipMap = customDetailMap || {};
    } else if (isAggregated) {
      const { nodes, edges } = aggregatePapers(aggregatedPapers);
      nodesArr = nodes.map((n) => ({ id: n.id, label: n.label }));
      edgesArr = edges.map((e) => ({
        id: e.id,
        from: e.from,
        to: e.to,
        arrows: "to",
      }));
      nodes.forEach(
        (n) =>
          (nodeTooltipMap[n.id] = `<span style="color:#1d70f7;font-weight:bold;">[Biomarker]:</span> There are ${n.count} / ${totalPaperCount} papers mention this biomarker.`)
      );
      edges.forEach((e) => {
        edgeTooltipMap[e.id] =
          e.reverse > 0
            ? `<span style="color:#d22;font-weight:bold;">[Causal Relation]:</span> There are ${e.forward} / ${totalPaperCount} papers support this causal relation, while ${e.reverse} / ${totalPaperCount} papers found reverse relation.`
            : `<span style="color:#d22;font-weight:bold;">[Causal Relation]:</span> There are ${e.forward} / ${totalPaperCount} papers support this causal relation.`;
      });
    } else {
      const nodesRaw = getUniqueNodes(relations, biomarkers);
      nodesArr = nodesRaw.map((e) => ({ id: e.name, label: e.name }));
      edgesArr = (relations || []).map((r, idx) => ({
        id: idx,
        from: r.cause.name,
        to: r.effect.name,
        arrows: "to",
      }));
      nodesRaw.forEach(
        (e) =>
          (nodeTooltipMap[e.name] = `<span style="color:#1d70f7;font-weight:bold;">[Biomarker]:</span> ${
            e.explanation || ""
          }`)
      );
      (relations || []).forEach(
        (r, idx) =>
          (edgeTooltipMap[String(idx)] = `<span style="color:#d22;font-weight:bold;">[Causal Relation]:</span> ${
            r.evidence_phrase || ""
          }`)
      );
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

    network.on("hoverNode", (params) =>
      setDetail(nodeTooltipMap[params.node] || "")
    );
    network.on("blurNode", () => setDetail(""));
    network.on("hoverEdge", (params) =>
      setDetail(edgeTooltipMap[params.edge] || "")
    );
    network.on("blurEdge", () => setDetail(""));

    return () => network.destroy();
  }, [relations, biomarkers, aggregatedPapers, totalPaperCount, customEdges, customDetailMap]);

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