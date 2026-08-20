// src/pages/NounPage.jsx

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import nouns from "../data/nouns";

export default function NounPage() {
  const { id } = useParams();
  const noun = nouns.find((n) => n.id === Number(id));

  const [level, setLevel] = useState("beginner");

  if (!noun) {
    return (
      <div style={styles.page}>
        <h1>Noun not found</h1>
        <Link to="/nouns" style={styles.backLink}>Back to Noun List</Link>
      </div>
    );
  }

  const examples = noun.examples?.[level] || [];

  return (
    <div style={styles.page}>

      {/* Back to Category */}
      {noun.category && (
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <Link
            to={`/nouns/category/${noun.category}`}
            style={{ color: "white", textDecoration: "underline" }}
          >
            ← Back to {noun.category}
          </Link>
        </div>
      )}

      {/* HEADER GRID */}
      <div style={styles.headerGrid}>

        {/* COLUMN 1 — Arabic + Audio */}
        <div style={styles.headerCol}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
            <h1 style={styles.arabic}>{noun.arabic}</h1>

            <button
              onClick={() => {
                const audio = new Audio(`/audio/nouns/${noun.id}.mp3`);
                audio.play();
              }}
              style={styles.audioBtn}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              🔊
            </button>
          </div>

          {noun.transliteration && (
            <p style={styles.translit}>
              <strong>Transliteration:</strong> {noun.transliteration}
            </p>
          )}
        </div>

        {/* COLUMN 2 — English + Notes */}
        <div style={styles.headerCol}>
          <p style={styles.english}>{noun.english}</p>

          {noun.notes && (
            <p style={styles.notes}>{noun.notes}</p>
          )}
        </div>

        {/* COLUMN 3 — Root, Gender, Category, Topics */}
        <div style={styles.headerCol}>

          {noun.root && (
            <p style={styles.rootArabic}>
              <strong>Root:</strong> {noun.root}
            </p>
          )}

          {noun.gender && (
            <p style={styles.info}>
              <strong>Gender:</strong>{" "}
              {noun.gender === "m" ? "Masculine" : "Feminine"}
            </p>
          )}

          {noun.category && (
            <p style={styles.info}>
              <strong>Category:</strong> {noun.category}
            </p>
          )}

          {noun.topics && noun.topics.length > 0 && (
            <p style={styles.info}>
              <strong>Topics:</strong> {noun.topics.join(", ")}
            </p>
          )}

        </div>
      </div>

      {/* NUMBER FORMS */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Number Forms</h2>

        <div style={styles.numberRow}>
          <div style={styles.numberCard}>
            <div style={styles.numberArabic}>{noun.singular || noun.arabic}</div>
            <div style={styles.numberLabel}>Singular</div>
          </div>

          {noun.dual && (
            <div style={styles.numberCard}>
              <div style={styles.numberArabic}>{noun.dual}</div>
              <div style={styles.numberLabel}>Dual</div>
            </div>
          )}

          {noun.plural && (
            <div style={styles.numberCard}>
              <div style={styles.numberArabic}>{noun.plural}</div>
              <div style={styles.numberLabel}>Plural</div>
            </div>
          )}
        </div>
      </div>

      {/* LEVEL BUTTONS */}
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <button
          onClick={() => setLevel("beginner")}
          style={level === "beginner" ? styles.levelActive : styles.levelBtn}
        >
          Beginner
        </button>

        <button
          onClick={() => setLevel("medium")}
          style={level === "medium" ? styles.levelActive : styles.levelBtn}
        >
          Medium
        </button>

        <button
          onClick={() => setLevel("advanced")}
          style={level === "advanced" ? styles.levelActive : styles.levelBtn}
        >
          Advanced
        </button>
      </div>

      {/* EXAMPLES — TWO COLUMNS */}
      {examples.length > 0 && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Examples ({level})</h2>

          {examples.map((ex, i) => (
            <div key={i} style={styles.exampleGrid}>

              {/* LEFT COLUMN — English + Transliteration */}
              <div style={styles.exampleLeft}>
                {ex.tr && <p style={styles.exampleTranslit}>{ex.tr}</p>}
                <p style={styles.exampleEnglish}>{ex.en}</p>
              </div>

              {/* RIGHT COLUMN — Arabic */}
              <div style={styles.exampleRight}>
                <p style={styles.exampleArabic}>{ex.ar}</p>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* BACK LINKS */}
      <div style={styles.links}>
        <Link to="/nouns" style={styles.backLink}>← Back to Noun List</Link>
        <Link to="/" style={styles.backLink}>Home</Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "10px",
    maxWidth: "1000px",
    margin: "0 auto",
    color: "white",
    minHeight: "100vh",
  },

  headerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    background: "white",
    color: "#0A1A3A",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    marginBottom: "20px",
  },

  headerCol: {
    textAlign: "center",
  },

  arabic: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  audioBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 36,
    padding: 6,
    transition: "0.2s",
  },

  english: {
    fontSize: "22px",
    marginBottom: "10px",
  },

  translit: {
    fontSize: "18px",
    marginTop: "6px",
  },

  info: {
    fontSize: "18px",
    marginBottom: "6px",
  },

  /* ROOT — restored to original small size */
  rootArabic: {
    fontSize: "18px",
    marginBottom: "6px",
  },

  notes: {
    marginTop: "10px",
    fontStyle: "italic",
    opacity: 0.8,
  },

  section: {
    marginTop: "30px",
  },

  sectionTitle: {
    fontSize: "26px",
    marginBottom: "10px",
    textAlign: "center",
  },

  numberRow: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  numberCard: {
    background: "white",
    color: "#0A1A3A",
    padding: 20,
    borderRadius: 12,
    minWidth: 220,
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  numberArabic: {
    fontSize: 40,
    direction: "rtl",
    marginBottom: 8,
  },

  numberLabel: {
    fontSize: 16,
    color: "#6b7280",
  },

  /* TWO-COLUMN EXAMPLES */
  exampleGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    background: "white",
    color: "#0A1A3A",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  exampleLeft: {
    textAlign: "left",
  },

  exampleRight: {
    textAlign: "right",
    direction: "rtl",
  },

  /* Arabic examples now 35px */
  exampleArabic: {
    fontSize: "35px",
    direction: "rtl",
  },

  exampleTranslit: {
    fontSize: "18px",
    opacity: 0.7,
  },

  exampleEnglish: {
    fontSize: "18px",
    marginTop: "6px",
  },

  links: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },

  backLink: {
    color: "white",
    fontSize: "18px",
    textDecoration: "underline",
  },

  levelBtn: {
    padding: "10px 20px",
    margin: "0 10px",
    background: "#0A1A3A",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },

  levelActive: {
    padding: "10px 20px",
    margin: "0 10px",
    background: "#f59e0b",
    color: "#0A1A3A",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};
