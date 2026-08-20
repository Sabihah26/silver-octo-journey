// src/components/ReportIssue.jsx
import React, { useState } from "react";
import { supabase } from "../supabase";

export default function ReportIssue({ onClose }) {
  const [message, setMessage] = useState("");

  async function submitReport() {
    if (!message.trim()) return;

    const { data, error } = await supabase
      .from("reports")
      .insert({ description: message });

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      alert("Insert failed: " + error.message);
      return;
    }

    alert("Thank you! Your report has been submitted.");
    onClose();
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 12,
          width: "90%",
          maxWidth: 400,
        }}
      >
        <h2 style={{ marginBottom: 10 }}>Report an Issue</h2>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe the issue..."
          style={{
            width: "100%",
            height: 120,
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />

        <button
          onClick={submitReport}
          style={{
            marginTop: 15,
            width: "100%",
            padding: "12px 16px",
            background: "#3B82F6",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 18,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Submit
        </button>

        <button
          onClick={onClose}
          style={{
            marginTop: 10,
            width: "100%",
            padding: "10px 16px",
            background: "#6B7280",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
