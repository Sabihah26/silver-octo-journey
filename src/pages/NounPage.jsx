// src/pages/NounPage.jsx

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import nouns from "../data/nouns";

// ⭐ FONT SYSTEM — all font sizes controlled here
const FONT = {
  arabicMain: "40px",
  arabicNumber: "40px",
  arabicExample: "35px",

  arabicRoot: "35px",

  rootLabel: "18px",
  rootArabicOnly: "35px",

  englishMain: "22px",
  englishInfo: "18px",
  englishExample: "18px",

  notes: "21px",
  sectionTitle: "26px",
  numberLabel: "16px",
  backLink: "18px",
  levelBtn: "16px",
  levelActive: "16px",
};

export default function NounPage() {
  const { id } = useParams();

  // ⭐ FIXED — your noun IDs are now strings ("N1", "N204")
  const noun = nouns.find((n) => n.id === id);

  const [level, setLevel] = useState("beginner");

  const speak = (text) => {
    if (!text) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ar-SA";
    speechSynthesis.speak(utter);
  };

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

        {/* COLUMN 1 */}
        <div style={styles.headerCol}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
            <h1 style={styles.arabic}>{noun.arabic}</h1>

            <button
              onClick={() => speak(noun.arabic)}
              style={styles.audioBtn}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              🔊
            </button>
          </div>

          {/* ⭐ ID DISPLAY */}
          <div style={styles.idTag}>{noun.id}</div>

          {/* ⭐ REPORT ERROR BUTTON — AUTO‑FILLED */}
          <Link
            to={`/report-error?type=noun&number=${noun.id}`}
            style={{
              display: "inline-block",
              background: "#f59e0b",
              color: "#0A1A3A",
              padding: "8px 14px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            ⚠️ Report Error
          </Link>

          {noun.transliteration && (
            <p style={styles.translit}>
              <strong>Transliteration:</strong> {noun.transliteration}
            </p>
          )}
        </div>

        {/* COLUMN 2 */}
        <div style={styles.headerCol}>
          <p style={styles.english}>{noun.english}</p>

          {noun.notes && (
            <p style={styles.notes}>{noun.notes}</p>
          )}
        </div>

        {/* COLUMN 3 */}
        <div style={styles.headerCol}>
          {noun.root && (
            <p style={styles.rootLine}>
              <span style={styles.rootLabel}>Root:</span>{" "}
              <span style={styles.rootArabicOnly}>{noun.root}</span>
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
          
          {/* SINGULAR */}
          <div style={styles.numberCard}>
            <div style={styles.numberArabic}>{noun.singular || noun.arabic}</div>

            <button
              onClick={() => speak(noun.singular || noun.arabic)}
              style={styles.audioBtn}
            >
              🔊
            </button>

            <div style={styles.numberLabel}>Singular</div>
          </div>

          {/* DUAL */}
          {typeof noun.dual === "string" && noun.dual.trim() !== "" && (
            <div style={styles.numberCard}>
              <div style={styles.numberArabic}>{noun.dual}</div>

              <button
                onClick={() => speak(noun.dual)}
                style={styles.audioBtn}
              >
                🔊
              </button>

              <div style={styles.numberLabel}>Dual</div>
            </div>
          )}

          {/* PLURAL */}
          {noun.plural && (
            <div style={styles.numberCard}>
              <div style={styles.numberArabic}>{noun.plural}</div>

              <button
                onClick={() => speak(noun.plural)}
                style={styles.audioBtn}
              >
                🔊
              </button>

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

      {/* EXAMPLES */}
      {examples.length > 0 && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Examples ({level})</h2>

          {examples.map((ex, i) => (
            <div key={i} style={styles.exampleGrid}>

              <div style={styles.exampleLeft}>
                {ex.tr && <p style={styles.exampleTranslit}>{ex.tr}</p>}
                <p style={styles.exampleEnglish}>{ex.en}</p>
              </div>

              <div style={styles.exampleRight}>
                <p style={styles.exampleArabic}>{ex.ar}</p>

                <button
                  onClick={() => speak(ex.ar)}
                  style={styles.audioBtn}
                >
                  🔊
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      <div style={styles.links}>
        <Link to="/nouns/categories" style={styles.backLink}>← Back to Noun List</Link>
        <Link to="/" style={styles.backLink}>Home</Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "10px",
    maxWidth: "1100px",
    margin: "0 auto",
    color: "white",
    minHeight: "100vh",
  },

  headerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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
    fontSize: FONT.arabicMain,
    marginBottom: "10px",
  },

  idTag: {
    fontSize: "18px",
    opacity: 0.7,
    marginTop: "4px",
    textAlign: "center",
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
    fontSize: FONT.englishMain,
    marginBottom: "10px",
  },

  translit: {
    fontSize: FONT.englishInfo,
    marginTop: "6px",
  },

  info: {
    fontSize: FONT.englishInfo,
    marginBottom: "6px",
  },

  rootLine: {
    marginBottom: "6px",
  },

  rootLabel: {
    fontSize: FONT.rootLabel,
    fontWeight: "bold",
    marginRight: "6px",
  },

  rootArabicOnly: {
    fontSize: FONT.rootArabicOnly,
  },

  notes: {
    marginTop: "10px",
    fontStyle: "italic",
    fontSize: FONT.notes,
    opacity: 0.8,
  },

  section: {
    marginTop: "30px",
  },

  sectionTitle: {
    fontSize: FONT.sectionTitle,
    marginBottom: "10px",
    textAlign: "center",
  },

  numberRow: {
    display: "flex",
    flexDirection: "row-reverse",   // ⭐ RTL FIX
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
    fontSize: FONT.arabicNumber,
    direction: "rtl",
    marginBottom: 8,
  },

  numberLabel: {
    fontSize: FONT.numberLabel,
    color: "#6b7280",
  },

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

  exampleArabic: {
    fontSize: FONT.arabicExample,
    direction: "rtl",
  },

  exampleTranslit: {
    fontSize: FONT.englishInfo,
    opacity: 0.7,
  },

  exampleEnglish: {
    fontSize: FONT.englishExample,
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
    fontSize: FONT.backLink,
    textDecoration: "underline",
  },

  levelBtn: {
    padding: "10px 20px",
    margin: "0 10px",
    background: "#0A1A3A",
    color: "white",
    borderRadius: "18px",
    border: "none",
    cursor: "pointer",
    fontSize: FONT.levelBtn,
  },

  levelActive: {
    padding: "10px 20px",
    margin: "0 10px",
    background: "#f59e0b",
    color: "#0A1A3A",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: FONT.levelActive,
    fontWeight: "bold",
  },
};
