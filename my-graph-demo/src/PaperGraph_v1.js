import React, { useEffect, useRef, useState } from "react";
import { DataSet } from "vis-data";
import { Network } from "vis-network";

// 方法一: 只显示 有relation的实体节点，或者当没有relation时，才显示所有biomarker节点
// function getUniqueNodes(relations, biomarkers) {
//   const nodeMap = new Map();
//   if (relations && relations.length > 0) {
//     relations.forEach(({ cause, effect }) => {
//       [cause, effect].forEach((entity) => {
//         if (entity && entity.name && !nodeMap.has(entity.name)) {
//           nodeMap.set(entity.name, entity);
//         }
//       });
//     });
//   }
//   if (nodeMap.size === 0 && biomarkers && biomarkers.length > 0) {
//     biomarkers.forEach(entity => {
//       if (entity && entity.name && !nodeMap.has(entity.name)) {
//         nodeMap.set(entity.name, entity);
//       }
//     });
//   }
//   return Array.from(nodeMap.values());
// }

// 方法二: 显示所有实体节点, 不管有没有relation
function getUniqueNodes(relations, biomarkers) {
  const nodeMap = new Map();

  if (relations && relations.length > 0) {
    relations.forEach(({ cause, effect }) => {
      [cause, effect].forEach((entity) => {
        // 忽略大小写+空格做key
        const normName = entity.name ? entity.name.replace(/\s+/g, '').toLowerCase() : "";
        if (entity && entity.name && !nodeMap.has(normName)) {
          nodeMap.set(normName, entity);
        }
      });
    });
  }
  if (biomarkers && biomarkers.length > 0) {
    biomarkers.forEach(entity => {
      const normName = entity.name ? entity.name.replace(/\s+/g, '').toLowerCase() : "";
      if (entity && entity.name && !nodeMap.has(normName)) {
        nodeMap.set(normName, entity);
      }
    });
  }
  return Array.from(nodeMap.values());
}


export default function PaperGraph({ relations, biomarkers }) {
  const container = useRef(null);
  const [detail, setDetail] = useState(""); // 用于显示详情栏内容

  // 用于 nodeName->explanation 的快速查找
  const nodeDetailMap = {};
  getUniqueNodes(relations, biomarkers).forEach((entity) => {
    nodeDetailMap[entity.name] = entity.explanation || "";
  });
  // edgeId->evidence_phrase
  const edgeDetailMap = {};
  if (relations) {
    relations.forEach((item, idx) => {
      edgeDetailMap[String(idx)] = item.evidence_phrase || "";
    });
  }

  useEffect(() => {
    const nodesArr = getUniqueNodes(relations, biomarkers).map((entity, idx) => ({
      id: entity.name,
      label: entity.name,
    }));
    const edgesArr = (relations || []).map((item, idx) => ({
      id: String(idx),
      from: item.cause.name,
      to: item.effect.name,
      arrows: "to",
      label: "", // 边不显示文本
    }));

    const nodes = new DataSet(nodesArr);
    const edges = new DataSet(edgesArr);

    const network = new Network(
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
          color: "#888"
        },
        interaction: {
          hover: true,
          tooltipDelay: 50
        },
        physics: false
      }
    );

    // 鼠标悬浮节点
    network.on("hoverNode", function(params) {
      const nodeId = params.node;
      setDetail(nodeDetailMap[nodeId] || "");
    });

    // 鼠标从节点移开
    network.on("blurNode", function() {
      setDetail("");
    });

    // 鼠标悬浮边
    network.on("hoverEdge", function(params) {
      const edgeId = params.edge;
      setDetail(edgeDetailMap[edgeId] || "");
    });

    network.on("blurEdge", function() {
      setDetail("");
    });

    return () => network.destroy();
  }, [relations, biomarkers]);

  return (
    <div>
      <div ref={container} style={{ height: 430, border: "1px solid #ddd", marginTop: 15 }} />
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
      >
        {detail ? detail : <span style={{ color: "#888" }}> Hover the mouse over a node or an edge to display detailed information. </span>}
      </div>
    </div>
  );
}