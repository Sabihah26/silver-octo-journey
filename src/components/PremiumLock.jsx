// src/components/PremiumLock.jsx
import React from "react";

export default function PremiumLock({ onUpgrade, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 12,
          width: 350,
          textAlign: "center",
        }}
      >
        <h2>🔒 Premium Feature</h2>
        <p>This content is available for Premium members.</p>

        <button
          onClick={onUpgrade}
          style={{
            width: "100%",
            padding: 12,
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 8,
            marginTop: 20,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Upgrade Now
        </button>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: 12,
            background: "#ddd",
            border: "none",
            borderRadius: 8,
            marginTop: 10,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
