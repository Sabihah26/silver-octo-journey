// src/pages/AdverbPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import adverbs from "../data/Adverbs";

export default function AdverbPage() {
  const { id } = useParams();
  const adverb = adverbs.find((a) => a.id === Number(id));

  if (!adverb) {
    return (
      <div style={{ padding: 20, color: "white" }}>
        Adverb not found.
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Back to list */}
      <Link to="/adverbs" style={styles.back}>
        ← Back to Adverbs
      </Link>

      <div style={styles.card}>
        {/* Arabic + Audio */}
        <div style={{ textAlign: "center" }}>
          <div style={styles.arabic}>{adverb.arabic}</div>

          {/* AUDIO BUTTON (real audio file) */}
          <button
            onClick={() => {
              const audio = new Audio(`/audio/adverbs/${adverb.id}.mp3`);
              audio.play();
            }}
            style={styles.audioButton}
            title="Play pronunciation"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            🔊
          </button>
        </div>

        {/* Transliteration */}
        {adverb.transliteration && (
          <div style={styles.translit}>{adverb.transliteration}</div>
        )}

        {/* English */}
        <div style={styles.english}>{adverb.english}</div>

        {/* Category */}
        {adverb.category && (
          <div style={styles.categoryBadge}>{adverb.category}</div>
        )}

        {/* Example Section */}
        {(adverb.example_ar || adverb.example_en) && (
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Example</h3>

            {adverb.example_ar && (
              <div style={styles.exampleAr}>{adverb.example_ar}</div>
            )}

            {adverb.example_en && (
              <div style={styles.exampleEn}>{adverb.example_en}</div>
            )}

            {/* AUDIO FOR EXAMPLE SENTENCE */}
            <button
              onClick={() => {
                const audio = new Audio(`/audio/adverbs/examples/${adverb.id}.mp3`);
                audio.play();
              }}
              style={{
                marginTop: 10,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 26,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              🔊
            </button>
          </div>
        )}

        {/* Notes */}
        {adverb.notes && adverb.notes.trim() !== "" && (
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Notes</h3>
            <div style={styles.notes}>{adverb.notes}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// -----------------------------
// Styles
// -----------------------------
const styles = {
  page: {
    padding: "20px",
    background: "#07112B",
    minHeight: "100vh",
    color: "white",
  },

  /* ⭐ NAVBAR ⭐ */
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },

  navItem: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px 14px",
    borderRadius: "8px",
    background: "#0A1A3A",
    transition: "0.2s",
  },

  back: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },

  card: {
    background: "white",
    color: "#0A1A3A",
    padding: "30px",
    borderRadius: "16px",
    marginTop: "20px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    position: "relative",
  },

  arabic: {
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "center",
  },

  audioButton: {
    marginTop: "10px",
    background: "#1E3A8A",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    fontSize: "22px",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    transition: "0.2s",
  },

  translit: {
    textAlign: "center",
    opacity: 0.7,
    marginTop: "6px",
    fontSize: "18px",
  },

  english: {
    textAlign: "center",
    fontSize: "26px",
    marginTop: "10px",
    fontWeight: "500",
  },

  categoryBadge: {
    marginTop: "15px",
    padding: "6px 12px",
    borderRadius: "8px",
    background: "#0A1A3A",
    color: "white",
    fontSize: "14px",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "capitalize",
  },

  section: {
    marginTop: "30px",
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    fontWeight: "600",
  },

  exampleAr: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "6px",
  },

  exampleEn: {
    fontSize: "18px",
    opacity: 0.8,
  },

  notes: {
    fontSize: "18px",
    opacity: 0.9,
  },
};
