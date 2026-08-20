// src/components/ExampleSentenceBox.jsx
import React from "react";

export default function ExampleSentenceBox({ examples }) {
  if (!examples || examples.length === 0) return null;

  return (
    <div style={box}>
      <h3 style={title}>Example Sentences</h3>

      <div style={grid}>
        {examples.map((ex, i) => (
          <div key={i} style={card}>
            <div
              style={arabic}
              dangerouslySetInnerHTML={{ __html: ex.ar_colored }}
            />
            <div style={translit}>{ex.ar_translit}</div>
            <div style={english}>{ex.en}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== CONTAINER ===== */
const box = {
  marginTop: 30,
  padding: 20,
  borderRadius: 10,
  background: "#fafafa",
  border: "1px solid #ddd",
};

/* ===== TITLE ===== */
const title = {
  marginBottom: 15,
  fontSize: 20,
  fontWeight: "bold",
};

/* ⭐ TWO‑COLUMN GRID ⭐ */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
};

/* ===== CARD ===== */
const card = {
  padding: "16px",
  borderRadius: "10px",
  background: "white",
  border: "1px solid #eee",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
};

/* ===== ARABIC ===== */
const arabic = {
  fontSize: 24,
  textAlign: "right",
  direction: "rtl",
  marginBottom: 6,
};

/* ===== TRANSLIT ===== */
const translit = {
  fontSize: 15,
  color: "#666",
  marginBottom: 6,
};

/* ===== ENGLISH ===== */
const english = {
  fontSize: 16,
  opacity: 0.85,
};
