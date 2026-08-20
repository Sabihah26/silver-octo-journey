import React, { useState } from "react";
import conjugate from "../utils/conjugate";

export default function RootPatternExplorerPage() {
  const [root, setRoot] = useState("ك ت ب");
  const [form, setForm] = useState(1);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    const res = conjugate(root, Number(form) || 1);
    setResult(res);
  };

  const pattern =
    result?.tables?.pattern || result?.rootPattern || "Pattern not available";

  return (
    <div style={{ padding: 20, fontSize: 22 }}>
      <h1 style={{ fontSize: 36 }}>Root Pattern Explorer</h1>

      <div style={{ marginTop: 20 }}>
        <label>
          Root:{" "}
          <input
            value={root}
            onChange={(e) => setRoot(e.target.value)}
            style={{ padding: 6, fontSize: 20, width: 160 }}
          />
        </label>
      </div>

      <div style={{ marginTop: 10 }}>
        <label>
          Form:{" "}
          <input
            type="number"
            min="1"
            max="10"
            value={form}
            onChange={(e) => setForm(e.target.value)}
            style={{ padding: 6, fontSize: 20, width: 80 }}
          />
        </label>
      </div>

      <button
        onClick={handleAnalyze}
        style={{ marginTop: 15, padding: "8px 16px", fontSize: 20 }}
      >
        Analyze
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>
          <p><strong>Weak Type:</strong> {result.weakType || "None"}</p>
          <p><strong>Pattern:</strong> {pattern}</p>
        </div>
      )}
    </div>
  );
}
