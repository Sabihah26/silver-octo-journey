// src/components/RootResult.jsx
import React from "react";

export default function RootResult({ result }) {
  if (!result) return null;

  const { root, pattern, confidence } = result;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "12px",
        background: "#f7f7f7",
        border: "1px solid #ddd",
      }}
    >
      <h2 style={{ marginBottom: 10 }}>Extracted Root</h2>

      {root.length === 3 ? (
        <div
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            direction: "rtl",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {root.join(" • ")}
        </div>
      ) : (
        <p style={{ color: "red" }}>No valid root found.</p>
      )}

      <p>
        <strong>Pattern:</strong> {pattern}
      </p>
      <p>
        <strong>Confidence:</strong> {(confidence * 100).toFixed(0)}%
      </p>
    </div>
  );
}
