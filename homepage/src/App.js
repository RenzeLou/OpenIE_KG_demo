import React, { useState, useRef } from "react";
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

  // 点击 Causal Network 时的加载
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

  // refs for arrows and layout components
  const refPhysical = useRef(null);
  const refDigital = useRef(null);
  const refCSF = useRef(null);
  const refCausal = useRef(null);
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
        paddingTop: "50px",   // 整体下移约50px
      }}
    >
      {!loading && (
        <h1
          style={{
            position: "absolute",
            top: "1px",
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
          {/* 整体水平布局 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "140px",
              marginBottom: "100px",
            }}
          >
            {/* 左侧 Physical Twin */}
            <div
              ref={refPhysical}
              id="physicalTwin"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "25px",          // 给箭头一点外沿空间
                borderRadius: "12px",
                background: "rgba(255,255,255,0.0)",
              }}
            >
              {/* <img
                src="./physical_twin.png"
                alt="Physical Twin"
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: "10px",
                  border: "2px solid #c00",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                }}
              /> */}
              <img
                src="./physical_twin.png"
                alt="Physical Twin"
                onLoad={() => window.dispatchEvent(new Event("resize"))}
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: "10px",
                  border: "2px solid #c00",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                  display: "block",
                }}
              />
            </div>

            {/* 中间垂直四个按钮 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "45px",
              }}
            >
              <div ref={refCSF} id="csf">
                <button
                  style={{ ...buttonStyle, backgroundColor: "#28a745" }}
                  onClick={() => openInNewTab("http://localhost:4000/")}
                >
                  CSF Model
                </button>
              </div>

              <div ref={refCausal} id="causal">
                <button
                  style={{ ...buttonStyle, backgroundColor: "#1d70f7" }}
                  onClick={simulateLoadingAndRedirect}
                >
                  Causal Network Construction
                </button>
              </div>

              <div ref={refPET} id="pet">
                <button
                  style={{ ...buttonStyle, backgroundColor: "#ff8c00" }}
                  onClick={() => openInNewTab("http://localhost:5001/")}
                >
                  PET Images
                </button>
              </div>
            </div>

            {/* 右侧 Digital Twin */}
            <div
              ref={refDigital}
              id="digitalTwin"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "25px",          // 同理添加 padding
                borderRadius: "12px",
                background: "rgba(255,255,255,0.0)",
              }}
            >
              <img
                src="./digital_twin.png"
                alt="AI‑Driven Digital Twin"
                style={{
                  width: 200,
                  height: "auto",
                  borderRadius: "10px",
                  border: "2px solid #6038a1",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                }}
              />
              
                {/* <img
                  src="./digital_twin.png"
                  alt="AI‑Driven Digital Twin"
                  onLoad={() => window.dispatchEvent(new Event("resize"))}
                  style={{
                    width: 200,
                    height: "auto",
                    borderRadius: "10px",
                    border: "2px solid #6038a1",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                    display: "block",
                  }}
                /> */}

            </div>
          </div>

          {/* Personalized Dosing 在下方 */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div ref={refPersonal} id="personal">
              <button
                style={{ ...buttonStyle, backgroundColor: "#800080" }}
                onClick={() => openInNewTab("http://localhost:6001/")}
              >
                Personalized Dosing Regimens
              </button>
            </div>
          </div>

          {/* ---------- 箭头 ---------- */}
          {/* physical -> 三个中间按钮 */}
          <Xarrow
            start={refPhysical}
            end={refCSF}
            startAnchor="right"
            endAnchor="left"
            curveness={0.4}
            color="#444"
            headSize={4}
          />
          <Xarrow
            start={refPhysical}
            end={refCausal}
            startAnchor="right"
            endAnchor="left"
            curveness={0.4}
            color="#444"
            headSize={4}
          />
          <Xarrow
            start={refPhysical}
            end={refPET}
            startAnchor="right"
            endAnchor="left"
            curveness={0.4}
            color="#444"
            headSize={4}
          />

          {/* 中间三个 -> Digital Twin */}
          <Xarrow
            start={refCSF}
            end={refDigital}
            startAnchor="right"
            endAnchor="left"
            curveness={0.4}
            color="#444"
            headSize={4}
          />
          <Xarrow
            start={refCausal}
            end={refDigital}
            startAnchor="right"
            endAnchor="left"
            curveness={0.4}
            color="#444"
            headSize={4}
          />
          <Xarrow
            start={refPET}
            end={refDigital}
            startAnchor="right"
            endAnchor="left"
            curveness={0.4}
            color="#444"
            headSize={4}
          />

          {/* Causal Network 上下箭头 */}
          <Xarrow
            start={refCausal}
            end={refCSF}
            startAnchor="top"
            endAnchor="bottom"
            curveness={0.5}
            color="#6c757d"
            headSize={4}
          />
          <Xarrow
            start={refCausal}
            end={refPET}
            startAnchor="bottom"
            endAnchor="top"
            curveness={0.5}
            color="#6c757d"
            headSize={4}
          />

          {/* Digital Twin -> Personalized */}
          <Xarrow
            start={refDigital}
            end={refPersonal}
            startAnchor="bottom"
            endAnchor="right"
            curveness={0.6}
            color="#444"
            headSize={4}
          />

          {/* Personalized -> Physical */}
          <Xarrow
            start={refPersonal}
            end={refPhysical}
            startAnchor="left"
            endAnchor="bottom"
            curveness={0.6}
            color="#444"
            headSize={4}
          />
        </Xwrapper>
      )}
    </div>
  );
}