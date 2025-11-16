import React, { useState } from "react";

export default function App() {
  const header = (
    <div
      style={{
        backgroundColor: "#fff7e6",
        color: "#000",
        textAlign: "center",
        padding: "14px 0",
        fontSize: "26px",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        letterSpacing: "0.5px",
      }}
    >
      PET Image Construction Platform
    </div>
  );

  const [phase, setPhase] = useState("home");
  const [progress, setProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [trainingDone, setTrainingDone] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [predicting, setPredicting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const [loadingData, setLoadingData] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // ---------- Training ----------
  const startTraining = () => {
    setPhase("training");
    setProgress(0);
    setTerminalLogs([]);

    const totalEpoch = 5;
    const stepsPerEpoch = 5;
    const totalSteps = totalEpoch * stepsPerEpoch;
    const duration = 20000;
    const stepTime = duration / totalSteps;
    let step = 0;

    const loss = (s) =>
      (8 - (7.8 * s) / totalSteps + (Math.random() - 0.5) * 0.3).toFixed(2);
    const acc = (s) =>
      Math.min(1, 0.1 + (0.85 * s) / totalSteps + (Math.random() - 0.5) * 0.05).toFixed(2);

    const timer = setInterval(() => {
      const ep = Math.floor(step / stepsPerEpoch);
      // show accuracy as percentage (one decimal place)
      const accPct = (parseFloat(acc(step)) * 100).toFixed(1) + "%";
      setTerminalLogs((p) => [
        ...p,
        `==> Epoch ${ep + 1} | training error: ${loss(step)} | validation accuracy: ${accPct}`,
      ]);
      step++;
      setProgress(Math.round((step / totalSteps) * 100));
      if (step >= totalSteps) {
        clearInterval(timer);
        setTimeout(() => setPhase("alert"), 600);
      }
    }, stepTime);
  };

  // ---------- Predict ----------
  const startPredict = () => {
    setPredicting(true);
    setImageLoaded(false);
    setProgress(0);
    const duration = 2000;
    const steps = 40;
    const stepTime = duration / steps;
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
    }, stepTime);
  };

  // ---------- Load PET data ----------
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
          setLoadProgress(100);
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
        gap: "30px",
      }}
    >
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <button
          onClick={handleLoadData}
          disabled={loadingData}
          style={{
            width: 260,
            height: 68,
            backgroundColor: "#e67e22",
            color: "#fff",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          {loadingData ? "Loading..." : "Load PET Data"}
        </button>

        {/* progress */}
        {loadingData && (
          <div
            style={{
              margin: "14px auto",
              width: "260px",
              height: "14px",
              border: "1px solid #120101ff",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#fafafa",
            }}
          >
            <div
              style={{
                width: `${loadProgress}%`,
                height: "100%",
                background: "#e67e22",
                transition: "width 0.1s linear",
              }}
            ></div>
          </div>
        )}

        {/* success */}
        {dataLoaded && !loadingData && (
          <div
            style={{
              marginTop: "16px",
              backgroundColor: "rgba(240,240,240,0.9)",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px 14px",
              color: "#222",
              fontSize: "15px",
              maxWidth: "480px",
              textAlign: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            ✅ Successfully uploaded PET training data from <br />
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
              ~/Desktop/OpenIE biomarker/pet_data.csv
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
        ...baseBg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2 style={{ color: "#222" }}>Training PET Model...</h2>
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
        {terminalLogs.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div style={{ marginTop: 8, color: "#fff" }}>{progress}%</div>
    </div>
  );

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

  // ---------- TEST view ----------
  const renderTest = () => (
    <div style={{ display: "flex", height: "100vh", ...baseBg }}>
      <div
        style={{
          flex: "0 0 250px",
          borderRight: "1px solid #ccc",
          padding: 20,
          background: "rgba(255,255,255,0.85)",
        }}
      >
        <h3>Test Samples</h3>
        {Array.from({ length: 5 }).map((_, i) => {
          const id = i + 1;
          const selected = selectedPatient === id;
          return (
            <div key={id}>
              <div
                onClick={() => {
                  setSelectedPatient(id);
                  setSelectedSub(null);
                  setImageLoaded(false);
                }}
                style={{
                  margin: "10px 0",
                  padding: "10px",
                  borderRadius: 4,
                  cursor: "pointer",
                  background: selected ? "#dce9ff" : "transparent",
                }}
              >
                Patient {id}
              </div>
              {selected && (
                <div style={{ marginLeft: 20 }}>
                  {["Abeta", "N", "Tau"].map((sub) => (
                    <div
                      key={sub}
                      onClick={() => {
                        setSelectedSub(sub);
                        setImageLoaded(false);
                      }}
                      style={{
                        margin: "6px 0",
                        padding: "6px 10px",
                        borderRadius: 4,
                        cursor: "pointer",
                        background:
                          selectedSub === sub ? "#b3d2ff" : "transparent",
                        fontSize: 15,
                      }}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
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
          <h3>Select a patient to test</h3>
        ) : !selectedSub ? (
          <h3>Select a factor to test</h3>
        ) : predicting ? (
          <>
            <h3>
              Predicting on Patient {selectedPatient} ({selectedSub})...
            </h3>
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
                  transition: "width 0.1s linear",
                }}
              ></div>
            </div>
            <div style={{ marginTop: 8 }}>{progress}%</div>
          </>
        ) : imageLoaded ? (
          <>
            <h3>
              PET Model Prediction Result (Patient {selectedPatient}, {selectedSub}, age 67)
            </h3>
            <img
              src={`./images/image_p${selectedPatient}_${selectedSub.toLowerCase()}.png`}
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
              width: 220,
              height: 60,
              fontSize: 18,
              background: "#1d70f7",
              color: "#fff",
              border: "none",
              borderRadius: 6,
            }}
            onClick={startPredict}
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