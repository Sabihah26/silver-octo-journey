// src/pages/AdjectivePage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import adjectives from "../data/adjectives";

export default function AdjectivePage() {
  const { id } = useParams();
  const adjective = adjectives.find((a) => String(a.id) === String(id));

  // Speech synthesis function
  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ar-SA";
    speechSynthesis.speak(utter);
  };

  if (!adjective) {
    return (
      <div style={{ padding: 20, color: "white" }}>
        Adjective not found.
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Back to list */}
      <Link to="/adjectives" style={styles.back}>
        ← Back to Adjectives
      </Link>

      <div style={styles.card}>
        {/* Arabic + Audio */}
        <div style={{ textAlign: "center" }}>
          <div style={styles.arabic}>{adjective.ar}</div>

          {/* SPEECH SYNTHESIS BUTTON */}
          <button
            onClick={() => speak(adjective.ar)}
            style={styles.audioButton}
            title="Play pronunciation"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            🔊
          </button>
        </div>

        {/* Transliteration */}
        {adjective.tr && (
          <div style={styles.translit}>{adjective.tr}</div>
        )}

        {/* English */}
        <div style={styles.english}>{adjective.en}</div>

        {/* Category */}
        {adjective.category && (
          <div style={styles.categoryBadge}>{adjective.category}</div>
        )}

        {/* Example Section */}
        {(adjective.example_ar || adjective.example_en) && (
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Example</h3>

            {adjective.example_ar && (
              <div style={styles.exampleAr}>{adjective.example_ar}</div>
            )}

            {adjective.example_en && (
              <div style={styles.exampleEn}>{adjective.example_en}</div>
            )}

            {/* SPEECH SYNTHESIS FOR EXAMPLE */}
            <button
              onClick={() => speak(adjective.example_ar)}
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
        {adjective.notes && adjective.notes.trim() !== "" && (
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Notes</h3>
            <div style={styles.notes}>{adjective.notes}</div>
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

  back: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },

  card: {
    background: "white",
    color: "#051e4f",
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
    background: "#051e4f",
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
