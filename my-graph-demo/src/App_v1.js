import React, { useState } from "react";
import { PAPERS } from "./data";
import PaperGraph from "./PaperGraph";

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const paper = PAPERS[selectedIdx];
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 260, borderRight: "1px solid #eee", padding: 10 }}>
        <h2>Papers</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {PAPERS.map((p, idx) => (
            <li
              key={p.id}
              onClick={() => setSelectedIdx(idx)}
              style={{
                cursor: "pointer",
                marginBottom: 12,
                background: selectedIdx === idx ? "#f0f8ff" : "",
                fontWeight: selectedIdx === idx ? "bold" : "normal"
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
          relations={paper.refined_relations}
          biomarkers={paper.biomarkers}
        />
      </div>
    </div>
  );
}