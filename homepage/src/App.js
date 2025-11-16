import React, { useState, useRef, useEffect } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";

const openInNewTab = (url) => window.open(url, "_blank", "noopener,noreferrer");

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
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  const simulateLoadingAndRedirect = () => {
    setLoading(true);
    setProgress(0);
    const duration = 3000;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setProgress(Math.min(100, Math.round((current / steps) * 100)));
      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          openInNewTab("http://localhost:3000/");
          setLoading(false);
          setProgress(0);
        }, 150);
      }
    }, stepTime);
  };

  const baseBg = {
    backgroundImage: "url('./bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // refs for arrows
  const refCausal = useRef(null);
  const refCSF = useRef(null);
  const refPET = useRef(null);
  const refPersonal = useRef(null);

  return (
    <div
      style={{
        ...baseBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "60px",
      }}
    >
      {!loading && (
        <h1
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#000",
            backgroundColor: "rgba(230,242,255,0.8)",
            padding: "10px 30px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: 5,
          }}
        >
          Alzheimer's Digital Twin Project
        </h1>
      )}

      {loading ? (
        <>
          <div
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#050",
              marginBottom: 12,
            }}
          >
            Analyzing research papers, extracting biomarker graphs...
          </div>
          <div
            style={{
              width: 320,
              height: 20,
              border: "1px solid #ccc",
              borderRadius: 10,
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
          <div style={{ marginTop: 8 }}>{progress}%</div>
        </>
      ) : (
        <Xwrapper>
          {/* 第一行 */}
          <div id="causalBox" ref={refCausal}>
            <button
              style={{ ...buttonStyle, backgroundColor: "#1d70f7" }}
              onClick={simulateLoadingAndRedirect}
            >
              Causal Network Construction
            </button>
          </div>

          {/* 第二行 */}
          <div style={{ display: "flex", gap: "120px", marginTop: 60 }}>
            <div id="csfBox" ref={refCSF}>
              <button
                style={{ ...buttonStyle, backgroundColor: "#28a745" }}
                onClick={() => openInNewTab("http://localhost:4000/")}
              >
                CSF Model
              </button>
            </div>
            <div id="petBox" ref={refPET}>
              <button
                style={{ ...buttonStyle, backgroundColor: "#ff8c00" }}
                onClick={() => openInNewTab("http://localhost:5001/")}
              >
                PET Images
              </button>
            </div>
          </div>

          {/* 第三行 */}
          <div style={{ marginTop: 70 }} id="persBox" ref={refPersonal}>
            <button
              style={{ ...buttonStyle, backgroundColor: "#800080" }}
              onClick={() => openInNewTab("http://localhost:6001/")}
            >
              Personalized Dosing Regimens
            </button>
          </div>

          {/* 箭头 */}
          <Xarrow
            start={refCausal}
            end={refCSF}
            startAnchor="bottom"
            endAnchor="top"
            curveness={0.7}
            color="#444"
            showHead
          />
          <Xarrow
            start={refCausal}
            end={refPET}
            startAnchor="bottom"
            endAnchor="top"
            curveness={0.7}
            color="#444"
            showHead
          />
          <Xarrow
            start={refCSF}
            end={refPersonal}
            startAnchor="bottom"
            endAnchor="top"
            curveness={0.5}
            color="#444"
            showHead
          />
          <Xarrow
            start={refPET}
            end={refPersonal}
            startAnchor="bottom"
            endAnchor="top"
            curveness={0.5}
            color="#444"
            showHead
          />
        </Xwrapper>
      )}
    </div>
  );
}