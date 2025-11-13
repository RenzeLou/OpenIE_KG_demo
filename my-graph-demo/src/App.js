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
  return structures.map((edgeList, i) => ({
    id: i + 1,
    edges: edgeList.map(([from, to]) => ({
      from,
      to,
      weight: (0.4 + Math.random() * 0.57).toFixed(2),
    })),
  }));
};

const TAXONOMY_GRAPHS = makeGraphs();

// ============================

// App
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

  // ========== taxonomy loading UI ==========
  if (taxonomyLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h2>Categorizing and aggregating all graph nodes...</h2>
        <div
          style={{
            width: "50%",
            border: "1px solid #ccc",
            borderRadius: 8,
            overflow: "hidden",
            height: 20,
            marginTop: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#1d70f7",
              animation: "fill 2s linear forwards",
            }}
          />
          <style>{`
          @keyframes fill {
            from { width: 0; }
            to { width: 100%; }
          }`}</style>
        </div>
      </div>
    );
  }

  // ========== taxonomy page ==========
  if (showTaxonomy) {
    const graph = TAXONOMY_GRAPHS[selectedTaxGraph] || TAXONOMY_GRAPHS[0];
    const nodes = TAXONOMY_NODES.map((name, i) => ({
      id: name,
      name,
      label: name,
      explanation: "",
      color: [
        "#e6194B",
        "#3cb44b",
        "#ffe119",
        "#4363d8",
        "#f58231",
        "#911eb4",
        "#46f0f0",
      ][i],
    }));

    const edges = graph.edges.map((e, idx) => ({
      id: idx,
      from: e.from,
      to: e.to,
      arrows: "to",
    }));

    const detailMap = {};
    graph.edges.forEach((e, idx) => {
      detailMap[String(idx)] = `<span style="color:#d22;font-weight:bold;">[Causal Relation Confidence]:</span> ${e.weight}`;
    });

    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: 300,
            borderRight: "1px solid #eee",
            padding: 10,
          }}
        >
          <h2>Aggregated Graphs</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {TAXONOMY_GRAPHS.map((g, i) => (
              <li
                key={g.id}
                onClick={() => setSelectedTaxGraph(i)}
                style={{
                  cursor: "pointer",
                  margin: "10px 0",
                  background:
                    selectedTaxGraph === i ? "#eef5ff" : "transparent",
                  fontWeight:
                    selectedTaxGraph === i ? "bold" : "normal",
                }}
              >
                Aggregated Graph {g.id}
              </li>
            ))}
          </ul>
          <button style={{ marginTop: 20 }} onClick={() => setShowTaxonomy(false)}>
            Back
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

  // ========== default original pages ==========
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 300, borderRight: "1px solid #eee", padding: 10 }}>
        <h2>Papers</h2>

        {/* Control Panel */}
        <div
          style={{
            marginBottom: 20,
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: 4,
            background: "#fafafa",
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
              style={{ width: 80 }}
            />
            <button
              onClick={() => {
                const n = document.getElementById("numInput").value;
                handleRandomSelect(n);
              }}
            >
              Enter
            </button>
          </div>

          <div style={{ marginTop: 10, display: "flex", gap: 10, alignItems: "center" }}>
            <button onClick={handleSelectAll}>All</button>
            <button onClick={handleReset}>Reset</button>

            {/* 新增 taxonomy 按钮 */}
            <button
              onClick={startTaxonomy}
              style={{
                marginLeft: 20,
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#ff69b4",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
              title="Taxonomy"
            >
              🧩
            </button>
          </div>
        </div>

        {/* Paper List */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {PAPERS.map((p, idx) => (
            <li
              key={p.id}
              onClick={() => {
                setSelectedIdx(idx);
                setAggregatedPapers(null);
              }}
              style={{
                cursor: "pointer",
                marginBottom: 12,
                background:
                  selectedIdx === idx && !aggregatedPapers
                    ? "#f0f8ff"
                    : "",
                fontWeight:
                  selectedIdx === idx && !aggregatedPapers
                    ? "bold"
                    : "normal",
              }}
            >
              {p.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side */}
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