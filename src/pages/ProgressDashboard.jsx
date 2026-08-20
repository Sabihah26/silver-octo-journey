// src/pages/ProgressDashboard.jsx
import React, { useEffect, useState } from "react";
import { loadStudyProgress } from "../utils/studyStorage";

export default function ProgressDashboard() {
  const [progress, setProgress] = useState({
    studied: 0,
    due: 0,
  });

  useEffect(() => {
    const data = loadStudyProgress();

    // ⭐ Ensure fallback values
    setProgress({
      studied: data?.studied || 0,
      due: data?.due || 0,
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#1e293b",
          padding: 30,
          borderRadius: 12,
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ marginBottom: 20 }}>Progress Dashboard</h1>

        <p style={{ fontSize: 20, marginBottom: 10 }}>
          Total studied words: <strong>{progress.studied}</strong>
        </p>

        <p style={{ fontSize: 20 }}>
          Words due for review: <strong>{progress.due}</strong>
        </p>
      </div>
    </div>
  );
}
