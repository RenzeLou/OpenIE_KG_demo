import React, { useState } from "react";
import { PAPERS } from "./data";
import PaperGraph from "./PaperGraph";

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [aggregatedPapers, setAggregatedPapers] = useState(null); // 聚合模式下保存选中的paper数组

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

        {/* 新增聚合控制区 */}
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

        {/* Paper 列表 */}
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

      {/* Main 展示区 */}
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


// import React, { useState } from "react";
// import { PAPERS } from "./data";
// import PaperGraph from "./PaperGraph";

// function randomSelect(arr, n) {
//   const shuffled = [...arr].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, n);
// }

// export default function App() {
//   const [selectedIdx, setSelectedIdx] = useState(0);
//   const [aggregateData, setAggregateData] = useState(null); // 用于存储聚合模式数据
//   const [numRandom, setNumRandom] = useState(2); // 默认随机两篇

//   const handleRandomSelect = () => {
//     const chosen = randomSelect(PAPERS, Math.min(numRandom, PAPERS.length));
//     setAggregateData({ type: "random", chosen });
//   };

//   const handleSelectAll = () => {
//     setAggregateData({ type: "all", chosen: PAPERS });
//   };

//   const handleReset = () => {
//     setAggregateData(null);
//   };

//   const paper = PAPERS[selectedIdx];

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ width: 300, borderRight: "1px solid #eee", padding: 10 }}>
//         <h2>Papers</h2>

//         {/* 控制区 */}
//         <div style={{ marginBottom: 20 }}>
//           <div style={{ marginBottom: 6 }}>
//             Random Select{" "}
//             <input
//               type="number"
//               value={numRandom}
//               onChange={(e) => setNumRandom(Number(e.target.value))}
//               min={1}
//               max={PAPERS.length}
//               style={{ width: 60 }}
//             />{" "}
//             Papers
//           </div>
//           <button onClick={handleRandomSelect} style={{ marginRight: 8 }}>
//             Random Select
//           </button>
//           <button onClick={handleSelectAll} style={{ marginRight: 8 }}>
//             All
//           </button>
//           <button onClick={handleReset}>Reset</button>
//         </div>

//         {/* 普通 Paper 列表 */}
//         {!aggregateData && (
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {PAPERS.map((p, idx) => (
//               <li
//                 key={p.id}
//                 onClick={() => setSelectedIdx(idx)}
//                 style={{
//                   cursor: "pointer",
//                   marginBottom: 12,
//                   background: selectedIdx === idx ? "#f0f8ff" : "",
//                   fontWeight: selectedIdx === idx ? "bold" : "normal",
//                 }}
//               >
//                 {p.title}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div style={{ flex: 1, padding: 22 }}>
//         {!aggregateData ? (
//           <>
//             <h2>Information Extraction Result</h2>
//             <PaperGraph
//               relations={paper.refined_relations}
//               biomarkers={paper.biomarkers}
//               totalPapers={PAPERS.length}
//             />
//           </>
//         ) : (
//           <>
//             <h2>
//               Aggregated Graph (
//               {aggregateData.type === "all"
//                 ? "All Papers"
//                 : `${aggregateData.chosen.length} Random Papers`}
//               )
//             </h2>
//             <PaperGraph
//               aggregatePapers={aggregateData.chosen}
//               totalPapers={PAPERS.length}
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// }