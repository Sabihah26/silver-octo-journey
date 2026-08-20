// src/components/ExampleSentenceBox.jsx
import React from "react";

export default function ExampleSentenceBox({ examples }) {
  if (!examples || examples.length === 0) {
    return (
      <div style={styles.emptyBox}>
        <p style={styles.emptyText}>No example sentences available.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Example Sentences</h3>

      {/* ⭐ TWO‑COLUMN GRID (two cards side‑by‑side) ⭐ */}
      <div style={styles.grid}>
        {examples.map((ex, i) => (
          <div key={i} style={styles.card}>

            {/* ⭐ ROW: English + Arabic on SAME LINE ⭐ */}
            <div style={styles.row}>
              
              {/* LEFT COLUMN — English */}
              <div style={styles.leftCol}>
                <div style={styles.english}>{ex.en}</div>
              </div>

              {/* RIGHT COLUMN — Arabic */}
              <div
                style={styles.arabic}
                dangerouslySetInnerHTML={{ __html: ex.ar_colored || ex.ar }}
              />
            </div>

            {/* ⭐ Transliteration UNDER English ONLY ⭐ */}
            {ex.ar_translit && (
              <div style={styles.translit}>{ex.ar_translit}</div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

// -----------------------------
// Styles
// -----------------------------
const styles = {
  container: {
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    background: "#fafafa",
    border: "1px solid #ddd",
  },

  title: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
  },

  /* ⭐ TWO‑COLUMN GRID ⭐ */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  /* ⭐ CARD ⭐ */
  card: {
    padding: "16px",
    borderRadius: "10px",
    background: "white",
    border: "1px solid #eee",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },

  /* ⭐ ROW: English + Arabic SAME LINE ⭐ */
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    marginBottom: 6,
  },

  /* LEFT COLUMN */
  leftCol: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },

  english: {
    fontSize: 16,
    fontWeight: 600,
    color: "#0A1A3A",
  },

  /* RIGHT COLUMN — Arabic */
  arabic: {
    fontSize: 26,
    textAlign: "right",
    direction: "rtl",
    fontWeight: 700,
  },

  /* Transliteration under English only */
  translit: {
    fontSize: 15,
    color: "#666",
    textAlign: "left",
  },

  emptyBox: {
    padding: 20,
    borderRadius: 10,
    background: "#fafafa",
    border: "1px solid #ddd",
    textAlign: "center",
  },

  emptyText: {
    fontSize: 16,
    opacity: 0.7,
  },
};
