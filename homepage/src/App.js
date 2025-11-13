import React, { useState } from "react";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const buttonStyle = {
    width: "300px",
    height: "70px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const simulateLoadingAndRedirect = () => {
    setLoading(true);
    setProgress(0);
    const duration = 3000; // 3秒（可自行调整）
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      setProgress(Math.min(100, Math.round((current / steps) * 100)));

      if (current >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          openInNewTab("http://localhost:3000/");
          setLoading(false);
          setProgress(0);
        }, 200);
      }
    }, stepTime);
  };

  const baseBg = {
    backgroundImage: "url('./bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={{
        ...baseBg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "24px",
      }}
    >
            {/* 顶部标题 */}
      {!loading && (
        <h1
          style={{
            position: "absolute",       // 👈 固定定位
            top: "40px",                // 👈 距离窗口顶部 40 px
            left: "50%",
            transform: "translateX(-50%)", // 居中
            fontSize: "32px",
            fontWeight: "bold",
            color: "#000",
            textAlign: "center",
            backgroundColor: "rgba(230,242,255,0.8)",
            padding: "10px 30px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: 1000,               // 保证在最上层
          }}
        >
          Alzheimer's  Digital  Twin  Project
        </h1>
      )}
      {loading ? (
        <>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#060000ff",
              marginBottom: "12px",
              textShadow: "1px 1px 3px #f2ebebff",
            }}
          >
            Analyzing research papers, extracting biomarker graphs...
          </div>
          <div
            style={{
              width: "320px",
              height: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0.8)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "#1d70f7",
                transition: "width 0.1s linear",
              }}
            />
          </div>
          <div
            style={{
              marginTop: 8,
              color: "#0c0c0cff",
              fontSize: "16px",
              textShadow: "1px 1px 2px #f1ebebff",
            }}
          >
            {progress}%
          </div>
        </>
      ) : (
        <>
          <button
            style={{ ...buttonStyle, backgroundColor: "#1d70f7" }}
            onClick={simulateLoadingAndRedirect}
          >
            Causal Network Construction
          </button>

          <div style={{ display: "flex", gap: "40px" }}>
            <button
              style={{ ...buttonStyle, backgroundColor: "#28a745" }}
              onClick={() => openInNewTab("http://localhost:4000/")}
            >
              CSF Model
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: "#ff8c00" }}
              onClick={() => openInNewTab("http://localhost:5000/")}
            >
              PET Images
            </button>
          </div>

          <button
            style={{ ...buttonStyle, backgroundColor: "#800080" }}
            onClick={() => openInNewTab("http://localhost:6000/")}
          >
            Personalized Dosing Regimens
          </button>
        </>
      )}
    </div>
  );
}