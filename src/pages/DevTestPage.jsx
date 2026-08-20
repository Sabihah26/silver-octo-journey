import React from "react";
import { runWeakVerbTests } from "../tests/testWeakVerbs";
import { runStrongVerbTests } from "../tests/testStrongVerbs";
import { Link } from "react-router-dom";

export default function DevTestPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 40,
        background: "#020617",
        color: "white"
      }}
    >
      <h1>Developer Test Suite</h1>
      <p style={{ color: "#cbd5f5" }}>
        Run console-based tests or open the visual inspector.
      </p>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20 }}>
        <button
          onClick={runWeakVerbTests}
          style={{
            padding: "10px 20px",
            background: "#444",
            color: "white",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontSize: 16
          }}
        >
          Run Weak Verb Tests
        </button>

        <button
          onClick={runStrongVerbTests}
          style={{
            padding: "10px 20px",
            background: "#1f6feb",
            color: "white",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontSize: 16
          }}
        >
          Run Strong Verb Tests
        </button>

        <Link
          to="/dev/inspector"
          style={{
            padding: "10px 20px",
            background: "#16a34a",
            color: "white",
            borderRadius: 8,
            textDecoration: "none",
            fontSize: 16
          }}
        >
          Open Conjugation Inspector
        </Link>
      </div>
    </div>
  );
}
