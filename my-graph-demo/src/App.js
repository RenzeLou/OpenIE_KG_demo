import React, { useState } from "react";
import { PAPERS } from "./data";
import PaperGraph from "./PaperGraph";

// ============================
// taxonomy meta data
// ============================
const TAXONOMY_NODES = [
  "APOE",
  "Amyloid Beta (β)",
  "Neurodegeneration",
  "Cognitive Decline",
  "Neuroinflammation",
  "Metabolism",
  "Tau",
];

const makeGraphs = () => {
  const structures = [
    [
      ["APOE", "Amyloid Beta (β)"],
      ["APOE", "Neuroinflammation"],
      ["Amyloid Beta (β)", "Neurodegeneration"],
      ["Neurodegeneration", "Cognitive Decline"],
      ["Neuroinflammation", "Metabolism"],
      ["Metabolism", "Tau"],
      ["Tau", "Cognitive Decline"],
    ],
    [
      ["APOE", "Metabolism"],
      ["APOE", "Tau"],
      ["Metabolism", "Neurodegeneration"],
      ["Tau", "Cognitive Decline"],
      ["Metabolism", "Cognitive Decline"],
    ],
    [
      ["Amyloid Beta (β)", "Tau"],
      ["APOE", "Neuroinflammation"],
      ["Neuroinflammation", "Metabolism"],
      ["Metabolism", "Cognitive Decline"],
    ],
    [
      ["APOE", "Amyloid Beta (β)"],
      ["Amyloid Beta (β)", "Metabolism"],
      ["Metabolism", "Tau"],
      ["Tau", "Neurodegeneration"],
    ],
    [ // ground truth  
      ["APOE", "Neurodegeneration"],
      ["APOE", "Neuroinflammation"],
      ["APOE", "Amyloid Beta (β)"],
      ["APOE", "Metabolism"],
      ["Amyloid Beta (β)", "Neurodegeneration"],
      ["Amyloid Beta (β)", "Tau"],
      ["Neurodegeneration", "Cognitive Decline"],
      ["Neuroinflammation", "Neurodegeneration"],
      ["Metabolism", "Neurodegeneration"],
      ["Metabolism", "Cognitive Decline"],
      ["Tau", "Neurodegeneration"]
    ],
    [
      ["Amyloid Beta (β)", "Neurodegeneration"],
      ["Neurodegeneration", "Tau"],
      ["Tau", "Cognitive Decline"],
      ["Neuroinflammation", "Metabolism"],
    ],
  ];
  return structures.map((edges, i) => ({
    id: i + 1,
    edges: edges.map(([from, to]) => ({
      from,
      to,
      weight: (0.4 + Math.random() * 0.57).toFixed(2),
    })),
  }));
};
const TAXONOMY_GRAPHS = makeGraphs();
// =====================

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [aggregatedPapers, setAggregatedPapers] = useState(null);
  const [showTaxonomy, setShowTaxonomy] = useState(false);
  const [taxonomyLoading, setTaxonomyLoading] = useState(false);
  const [selectedTaxGraph, setSelectedTaxGraph] = useState(0);
  const paper = PAPERS[selectedIdx];

  const handleRandomSelect = (numStr) => {
    const n = parseInt(numStr);
    if (isNaN(n) || n <= 0)
      return alert("Please enter a valid positive number.");
    const shuffled = [...PAPERS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(n, PAPERS.length));
    setAggregatedPapers(selected);
  };
  const handleSelectAll = () => setAggregatedPapers([...PAPERS]);
  const handleReset = () => {
    setAggregatedPapers(null);
    setShowTaxonomy(false);
  };
  const startTaxonomy = () => {
    setTaxonomyLoading(true);
    setTimeout(() => {
      setTaxonomyLoading(false);
      setShowTaxonomy(true);
    }, 2000);
  };

  // --- loading 状态 ---
  if (taxonomyLoading)
    return (
      <div
        style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", height: "100vh",
        }}
      >
        <h2>Categorizing and aggregating all graph nodes...</h2>
        <div
          style={{
            width: "50%", border: "1px solid #ccc", borderRadius: 8,
            overflow: "hidden", height: 20, marginTop: 10,
          }}
        >
          <div
            style={{
              width: "100%", height: "100%", background: "#1d70f7",
              animation: "fill 2s linear forwards",
            }}
          />
          <style>{`@keyframes fill{from{width:0}to{width:100%}}`}</style>
        </div>
      </div>
    );

  // --- taxonomy 页面 ---
  if (showTaxonomy) {
    const graph = TAXONOMY_GRAPHS[selectedTaxGraph];
    const nodes = TAXONOMY_NODES.map((name, i) => ({
      id: name,
      name,
      label: name,
      color: [
        "#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0",
      ][i],
    }));
    const edges = graph.edges.map((e, i) => ({
      id: i, from: e.from, to: e.to, arrows: "to",
    }));
    const detailMap = {};
    graph.edges.forEach(
      (e, i) =>
        (detailMap[i] = `<span style="color:#d22;font-weight:bold;">[Causal Relation Confidence]:</span> ${e.weight}`)
    );

    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: 300, borderRight: "1px solid #eee", padding: 10 }}>
          <h2>Aggregated Graphs</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {TAXONOMY_GRAPHS.map((g, i) => (
              <li
                key={g.id}
                onClick={() => setSelectedTaxGraph(i)}
                style={{
                  cursor: "pointer",
                  margin: "10px 0",
                  padding: "8px 12px",
                  borderRadius: 6,
                  background:
                    selectedTaxGraph === i ? "#dceaff" : "transparent",
                  fontWeight: selectedTaxGraph === i ? "bold" : "normal",
                  transition: "background 0.3s",
                }}
              >
                Aggregated Graph {g.id}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowTaxonomy(false)}
            style={{
              marginTop: 20, padding: "6px 12px", borderRadius: 6,
              border: "1px solid #aaa", cursor: "pointer",
            }}
          >
            ⬅ Back
          </button>
        </div>

        <div style={{ flex: 1, padding: 22 }}>
          <h2>Aggregated Graph {graph.id}</h2>
          <PaperGraph
            key={`tax${selectedTaxGraph}`}
            customEdges={edges}
            customDetailMap={detailMap}
            biomarkers={nodes}
          />
        </div>
      </div>
    );
  }

  // --- 默认页面 ---
  return (
    <div style={{ display: "flex" }}>
      {/* 左侧 Panel */}
      <div
        style={{
          width: 340,
          borderRight: "1px solid #eee",
          padding: 12,
          background: "#fafbfd",
        }}
      >
        <h2 style={{ marginBottom: 12 }}>Papers</h2>

        {/* 控制区 */}
        <div
          style={{
            marginBottom: 24,
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: 6,
            background: "#f9f9f9",
          }}
        >
          <div style={{ marginBottom: 6, fontWeight: "bold" }}>
            Random Select Papers to aggregate:
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              id="numInput"
              placeholder="Enter number"
              type="number"
              min="1"
              style={{
                width: 80, fontSize: 14, padding: "3px 6px",
                borderRadius: 4, border: "1px solid #ccc",
              }}
            />
            <button
              onClick={() => {
                const n = document.getElementById("numInput").value;
                handleRandomSelect(n);
              }}
              style={{
                fontSize: 13, padding: "4px 10px", borderRadius: 4,
                border: "1px solid #ccc", cursor: "pointer",
              }}
            >
              Enter
            </button>
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <button
              onClick={handleSelectAll}
              style={{
                flex: 1, padding: "5px 0", borderRadius: 4,
                border: "1px solid #ccc", cursor: "pointer",
              }}
            >
              All
            </button>
            <button
              onClick={handleReset}
              style={{
                flex: 1, padding: "5px 0", borderRadius: 4,
                border: "1px solid #ccc", cursor: "pointer",
              }}
            >
              Reset
            </button>
            <button
              onClick={startTaxonomy}
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "#ff69b4",
                color: "#fff",
                border: "none",
                fontSize: 18,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              title="Taxonomy"
            >
              🧩
            </button>
          </div>
        </div>

        {/* Paper 列表 */}
        <div
          style={{
            overflowY: "auto",
            maxHeight: "75vh",
            paddingRight: 6,
          }}
        >
          {PAPERS.map((p, idx) => (
            <div
              key={p.id}
              onClick={() => {
                setSelectedIdx(idx);
                setAggregatedPapers(null);
              }}
              style={{
                marginBottom: 10,
                padding: "10px 12px",
                borderRadius: 8,
                border:
                  selectedIdx === idx && !aggregatedPapers
                    ? "2px solid #1d70f7"
                    : "1px solid #ddd",
                background:
                  selectedIdx === idx && !aggregatedPapers
                    ? "#eef5ff"
                    : "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: 13,
                lineHeight: 1.3,
                wordWrap: "break-word",
              }}
            >
              {`${p.title}`}
            </div>
          ))}
        </div>
      </div>

      {/* 右侧 Graph */}
      <div style={{ flex: 1, padding: 22 }}>
        <h2>Information Extraction Result</h2>
        <PaperGraph
          key={aggregatedPapers ? "agg" : selectedIdx}
          aggregatedPapers={aggregatedPapers}
          relations={paper.refined_relations}
          biomarkers={paper.biomarkers}
          totalPaperCount={PAPERS.length}
        />
      </div>
    </div>
  );
}