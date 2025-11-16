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
      Agentic Personalized Intervention
    </div>
  );

  const [phase, setPhase] = useState("home");
  const [progress, setProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [trainingDone, setTrainingDone] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [predicting, setPredicting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // ---------- training simulation ----------
  const startTraining = () => {
    setPhase("training");
    setProgress(0);
    setTerminalLogs([]);
    const totalEpoch = 5;
    const stepsPerEpoch = 5;
    const totalSteps = totalEpoch * stepsPerEpoch;
    const duration = 20000;
    const stepTime = duration / totalSteps;
    let s = 0;

    const loss = (step) =>
      (8 - (7.8 * step) / totalSteps + (Math.random() - 0.5) * 0.3).toFixed(2);
    const acc = (step) =>
      Math.min(1, 0.1 + (0.85 * step) / totalSteps + (Math.random() - 0.5) * 0.05).toFixed(2);

    const timer = setInterval(() => {
      const ep = Math.floor(s / stepsPerEpoch);
      const lossVal = loss(s);
      const accVal = (parseFloat(acc(s)) * 100).toFixed(1) + "%";
      setTerminalLogs((prev) => [
        ...prev,
        `==> Epoch ${ep + 1} | training error: ${lossVal} | validation accuracy: ${accVal}`,
      ]);
      s++;
      setProgress(Math.round((s / totalSteps) * 100));
      if (s >= totalSteps) {
        clearInterval(timer);
        setTimeout(() => setPhase("alert"), 500);
      }
    }, stepTime);
  };

  // ---------- predict ----------
  const startPredict = (id) => {
    setPredicting(true);
    setImageLoaded(false);
    setProgress(0);
    const duration = 2000;
    const steps = 40;
    const t = duration / steps;
    let s = 0;
    const timer = setInterval(() => {
      s++;
      setProgress(Math.round((s / steps) * 100));
      if (s >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setImageLoaded(true);
          setPredicting(false);
        }, 200);
      }
    }, t);
  };

  // ---------- load RL data ----------
  const handleLoadData = () => {
    setLoadingData(true);
    setDataLoaded(false);
    setLoadProgress(0);
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    let s = 0;
    const timer = setInterval(() => {
      s++;
      setLoadProgress(Math.round((s / steps) * 100));
      if (s >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setLoadingData(false);
          setDataLoaded(true);
        }, 100);
      }
    }, stepTime);
  };

  const baseBg = {
    backgroundImage: "url('./bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // ---------- home ----------
  const renderHome = () => (
    <div
      style={{
        ...baseBg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "28px",
      }}
    >
      <div style={{ marginBottom: 50, textAlign: "center" }}>
        <button
          onClick={handleLoadData}
          disabled={loadingData}
          style={{
            width: 260,
            height: 68,
            backgroundColor: "#ff8c00",
            color: "#fff",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          {loadingData ? "Loading..." : "Load RL Data"}
        </button>

        {loadingData && (
          <div
            style={{
              margin: "14px auto",
              width: 260,
              height: 14,
              border: "1px solid #ccc",
              borderRadius: 8,
              overflow: "hidden",
              background: "#fafafa",
            }}
          >
            <div
              style={{
                width: `${loadProgress}%`,
                height: "100%",
                background: "#ff8c00",
                transition: "width 0.1s linear",
              }}
            ></div>
          </div>
        )}

        {dataLoaded && !loadingData && (
          <div
            style={{
              marginTop: 16,
              background: "rgba(240,240,240,0.9)",
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: "10px 14px",
              color: "#222",
              fontSize: 15,
              maxWidth: 480,
              textAlign: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            ✅ Successfully uploaded RL training data from <br />
            <pre
              style={{
                display: "inline-block",
                backgroundColor: "#2d2d2d",
                color: "#00ff99",
                padding: "6px 10px",
                borderRadius: "6px",
                fontFamily: "Consolas, monospace",
                marginTop: "6px",
              }}
            >
              ~/Desktop/OpenIE biomarker/RL_dosing_data.csv
            </pre>
          </div>
        )}
      </div>

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
        Train Algorithm
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
        Test Samples
      </button>
    </div>
  );

  // ---------- training ----------
  const renderTraining = () => (
    <div
      style={{
        ...baseBg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2>Training RL Model...</h2>
      <div
        style={{
          width: "80%",
          height: 20,
          border: "1px solid #ccc",
          borderRadius: 10,
          overflow: "hidden",
          background: "#fff",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#1d70f7",
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
        {terminalLogs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <div style={{ marginTop: 8, color: "#fff" }}>{progress}%</div>
    </div>
  );

  // ---------- alert ----------
  const renderAlert = () => (
    <div
      style={{
        ...baseBg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2>Algorithm training finished!</h2>
      <p>Go test your RL model!</p>
      <button
        style={{
          marginTop: 20,
          padding: "14px 28px",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          fontSize: 18,
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

  // ---------- test ----------
  const renderTest = () => (
    <div style={{ display: "flex", height: "100vh", ...baseBg }}>
      <div
        style={{
          flex: "0 0 200px",
          borderRight: "1px solid #ccc",
          padding: 20,
          background: "rgba(255,255,255,0.85)",
        }}
      >
        <h3>Test Samples</h3>
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
              Patient {id}
            </div>
          );
        })}
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.9)",
        }}
      >
        {!selectedPatient ? (
          <h3>Select a patient to test</h3>
        ) : predicting ? (
          <>
            <h3>Predicting on Patient {selectedPatient} and plotting results...</h3>
            <div
              style={{
                width: "60%",
                height: 20,
                border: "1px solid #ccc",
                borderRadius: 10,
                overflow: "hidden",
                background: "#f5f5f5",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#1d70f7",
                }}
              ></div>
            </div>
            <div style={{ marginTop: 8 }}>{progress}%</div>
          </>
        ) : imageLoaded ? (
          <>
            <h3>RL Model Prediction Result (Personalized Intervention) for Patient {selectedPatient}</h3>
            <img
              src={`./images/treat_${selectedPatient}.png`}
              alt="result"
              style={{
                width: "70%",
                border: "1px solid #ccc",
                borderRadius: 8,
                marginTop: 12,
              }}
            />
          </>
        ) : (
          <button
            style={{
              width: 200,
              height: 60,
              fontSize: 18,
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