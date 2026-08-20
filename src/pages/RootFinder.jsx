// src/pages/RootFinder.jsx
import React, { useState } from "react";
import { extractRoot } from "../utils/rootFinder";
import RootResult from "../components/RootResult";

export default function RootFinder() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleExtract = () => {
    if (input.trim() === "") return;
    const r = extractRoot(input.trim());
    setResult(r);
  };

  return (
    <div style={{ padding: "20px", maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 20 }}>Arabic Root Finder</h1>

      <input
        type="text"
        placeholder="اكتب الكلمة هنا"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "20px",
          direction: "rtl",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={handleExtract}
        style={{
          width: "100%",
          padding: "12px",
          background: "#0047ab",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        استخراج الجذر
      </button>

      <RootResult result={result} />
    </div>
  );
}
