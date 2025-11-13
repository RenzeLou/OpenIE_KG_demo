import React from "react";

export default function HomePage({ onEnterCausalNetwork }) {
  const buttonStyle = {
    width: "280px",
    height: "80px",
    fontSize: "20px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "10px"
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f6f7fb"
      }}
    >
      {/* causal network construction */}
      <button
        style={{ ...buttonStyle, backgroundColor: "#007bff" }} // 蓝色
        onClick={() => {
          // 调用回调进入当前 causal network 界面
          onEnterCausalNetwork();
        }}
      >
        Causal Network Construction
      </button>

      {/* CSF model + PET images 同一行并列 */}
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <button
          style={{ ...buttonStyle, backgroundColor: "#28a745" }} // 绿色
          onClick={() => window.open("http://localhost:4000", "_blank")}
        >
          CSF Model
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "#ffc107" }} // 黄色
          onClick={() => window.open("http://localhost:5000", "_blank")}
        >
          PET Images
        </button>
      </div>

      {/* Personalized dosing regimens 单独一行 */}
      <button
        style={{ ...buttonStyle, backgroundColor: "#dc3545" }} // 红色
        onClick={() => window.open("http://localhost:6000", "_blank")}
      >
        Personalized Dosing Regimens
      </button>
    </div>
  );
}