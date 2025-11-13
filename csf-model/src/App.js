import React, { useState } from "react";

export default function App() {
    const header = (
    <div
      style={{
        backgroundColor: "#e6f2ff",
        color: "#000",
        textAlign: "center",
        padding: "14px 0",
        fontSize: "26px",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        letterSpacing: "0.5px",
      }}
    >
      CSF Model Deployment Platform
    </div>
  );
  const [phase, setPhase] = useState("home"); // home | training | alert | test
  const [progress, setProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [trainingDone, setTrainingDone] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [predicting, setPredicting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  /* ---------- start training simulation ---------- */
  const startTraining = () => {
    setPhase("training");
    setProgress(0);
    setTerminalLogs([]);

    const totalEpoch = 5;
    const stepsPerEpoch = 5;
    const totalSteps = totalEpoch * stepsPerEpoch;
    const duration = 20000; // 20s
    const stepTime = duration / totalSteps;
    let currentStep = 0;

    const getLoss = (step) => {
      const base = 8 - (7.8 * step) / totalSteps; // 从8降到0.2左右
      return (base + (Math.random() - 0.5) * 0.3).toFixed(2);
    };
    const getAcc = (step) => {
      const base = 0.1 + (0.85 * step) / totalSteps;
      return Math.min(1, base + (Math.random() - 0.5) * 0.05).toFixed(2);
    };

    const interval = setInterval(() => {
      const epoch = Math.floor(currentStep / stepsPerEpoch);
      const loss = getLoss(currentStep);
      const acc = getAcc(currentStep);
      setTerminalLogs((prev) => [
        ...prev,
        `Epoch ${epoch + 1}: training loss ${loss}, dev accuracy ${acc}`,
      ]);
      currentStep++;
      setProgress(Math.round((currentStep / totalSteps) * 100));

      if (currentStep >= totalSteps) {
        clearInterval(interval);
        setTimeout(() => setPhase("alert"), 500);
      }
    }, stepTime);
  };

  /* ---------- handle test phase ---------- */
  const startPredict = (id) => {
    setPredicting(true);
    setImageLoaded(false);
    setProgress(0);
    const duration = 2000;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setProgress(Math.round((current / steps) * 100));
      if (current >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setImageLoaded(true);
          setPredicting(false);
        }, 200);
      }
    }, stepTime);
  };

  /* ---------- components ---------- */

  const baseBgStyle = {
    backgroundImage: "url('./bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const renderHome = () => (
    <div
      style={{
        ...baseBgStyle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "30px",
      }}
    >
      <button
        style={{
          width: 220,
          height: 70,
          backgroundColor: "#1d70f7",
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
        onClick={startTraining}
      >
        Train Algorithm
      </button>

      <button
        disabled={!trainingDone}
        style={{
          width: 220,
          height: 70,
          backgroundColor: trainingDone ? "#28a745" : "#ccc",
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          border: "none",
          borderRadius: 6,
          cursor: trainingDone ? "pointer" : "not-allowed",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
        onClick={() => setPhase("test")}
      >
        Test Samples
      </button>
    </div>
  );

  const renderTraining = () => (
    <div
      style={{
        ...baseBgStyle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2 style={{ color: "#080808ff"}}>
        Training CSF Model...
      </h2>
      <div
        style={{
          width: "80%",
          height: 20,
          border: "1px solid #ccc",
          borderRadius: 10,
          backgroundColor: "#fff",
          overflow: "hidden",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#1d70f7",
            transition: "width 0.2s linear",
          }}
        ></div>
      </div>
      <div
        style={{
          width: "80%",
          height: "50%",
          backgroundColor: "rgba(0,0,0,0.85)",
          color: "#0f0",
          fontFamily: "monospace",
          fontSize: 14,
          padding: 10,
          overflowY: "auto",
          borderRadius: 6,
        }}
      >
        {terminalLogs.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <div style={{ marginTop: 8, color: "#fff" }}>{progress}%</div>
    </div>
  );

  const renderAlert = () => (
    <div
      style={{
        ...baseBgStyle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "#050404ff",
        textShadow: "1px 1px 3px #faf8f8ff",
      }}
    >
      <h2>Algorithm training finished!</h2>
      <p>Go to play and test your model!</p>
      <button
        style={{
          marginTop: 20,
          padding: "14px 28px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          fontSize: "18px",
          cursor: "pointer",
        }}
        onClick={() => {
          setTrainingDone(true);
          setPhase("home");
        }}
      >
        OK
      </button>
    </div>
  );

  const renderTest = () => (
    <div style={{ display: "flex", height: "100vh", ...baseBgStyle }}>
      {/* 左侧患者列表 */}
      <div
        style={{
          flex: "0 0 200px",
          borderRight: "1px solid #ccc",
          padding: 20,
          background: "rgba(255,255,255,0.8)",
        }}
      >
        <h3 style={{ backgroundColor: "#e6f2ff" }}>Test Samples</h3>
        {Array.from({ length: 5 }).map((_, i) => {
          const id = i + 1;
          return (
            <div
              key={id}
              onClick={() => {
                setSelectedPatient(id);
                setImageLoaded(false);
              }}
              style={{
                margin: "10px 0",
                padding: "10px",
                borderRadius: 4,
                cursor: "pointer",
                background:
                  selectedPatient === id ? "#dce9ff" : "transparent",
              }}
            >
              Patient {id}
            </div>
          );
        })}
      </div>

      {/* 右侧预测区域 */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.85)",
        }}
      >
        {!selectedPatient ? (
          <h3 style={{ color: "#555" }}>Select a patient to test</h3>
        ) : predicting ? (
          <>
            <h3>Predicting on Patient {selectedPatient}...</h3>
            <div
              style={{
                width: "60%",
                height: 20,
                border: "1px solid #ccc",
                borderRadius: 10,
                background: "#f5f5f5",
                overflow: "hidden",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#1d70f7",
                  transition: "width 0.1s linear",
                }}
              ></div>
            </div>
            <div style={{ marginTop: 8 }}>{progress}%</div>
          </>
        ) : imageLoaded ? (
          <>
            <h3>CSF Model Prediction Result</h3>
            <iframe
              src={`./images/image_${selectedPatient}.pdf`}
              title={`result-${selectedPatient}`}
              width="80%"
              height="500px"
            />
          </>
        ) : (
          <button
            style={{
              width: 200,
              height: 60,
              fontSize: "18px",
              backgroundColor: "#1d70f7",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
            onClick={() => startPredict(selectedPatient)}
          >
            Predict
          </button>
        )}
      </div>
    </div>
  );

  /* ---------- render switch ---------- */
    switch (phase) {
    case "training":
      return (
        <>
          {header}
          {renderTraining()}
        </>
      );
    case "alert":
      return (
        <>
          {header}
          {renderAlert()}
        </>
      );
    case "test":
      return (
        <>
          {header}
          {renderTest()}
        </>
      );
    default:
      return (
        <>
          {header}
          {renderHome()}
        </>
      );
  }
}