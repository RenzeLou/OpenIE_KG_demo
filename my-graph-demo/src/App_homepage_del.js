import React, { useState } from "react";
import { PAPERS } from "./data";
import PaperGraph from "./PaperGraph";
import HomePage from "./HomePage"; // 新增导入

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [aggregatedPapers, setAggregatedPapers] = useState(null);
  const [showHome, setShowHome] = useState(true); // 控制是否显示首页

  if (showHome) {
    return <HomePage onEnterCausalNetwork={() => setShowHome(false)} />;
  }

  const handleRandomSelect = (numStr) => {
    const n = parseInt(numStr);
    if (isNaN(n) || n <= 0) return alert("Please enter a valid positive number.");
    const shuffled = [...PAPERS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(n, PAPERS.length));
    setAggregatedPapers(selected);
  };

  const handleSelectAll = () => setAggregatedPapers([...PAPERS]);
  const handleReset = () => setAggregatedPapers(null);

  const paper = PAPERS[selectedIdx];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 300, borderRight: "1px solid #eee", padding: 10 }}>
        <h2>Papers</h2>
        <div
          style={{
            marginBottom: 20,
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: 4,
            background: "#fafafa"
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

          <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
            <button onClick={handleSelectAll}>All</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>

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
                  selectedIdx === idx && !aggregatedPapers ? "#f0f8ff" : "",
                fontWeight:
                  selectedIdx === idx && !aggregatedPapers ? "bold" : "normal"
              }}
            >
              {p.title}
            </li>
          ))}
        </ul>
      </div>

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