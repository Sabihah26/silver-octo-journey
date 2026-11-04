// src/pages/AdverbPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import adverbs from "../data/Adverbs";

export default function AdverbPage() {
  const { id } = useParams();
  const adverb = adverbs.find((a) => String(a.id) === String(id));

  // Speech synthesis function
  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ar-SA";
    speechSynthesis.speak(utter);
  };

  if (!adverb) {
    return (
      <div style={{ padding: 20, color: "white" }}>
        Adverb not found.
      </div>
    );
  }

  const isLocked = adverb.premium === true; // ⭐ NEW

  return (
    <div style={styles.page}>
      {/* Back to list */}
      <Link to="/adverbs" style={styles.back}>
        ← Back to Adverbs
      </Link>

      <div style={styles.card}>
        {/* ⭐ PREMIUM LOCK OVERLAY */}
        {isLocked && (
          <div style={styles.lockOverlay}>
            🔒 Premium
          </div>
        )}

        {/* Arabic + Audio */}
        <div style={{ textAlign: "center", direction: "rtl" }}>
          <div style={styles.arabic}>{adverb.arabic}</div>

          {/* SPEECH SYNTHESIS BUTTON */}
          <button
            onClick={() => speak(adverb.arabic)}
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

        {/* ⭐ CATEGORY — NOW CLICKABLE */}
        {adverb.category && (
          <Link
            to={`/adverbs/category/${adverb.category}`}
            style={{ textDecoration: "none" }}
          >
            <div style={styles.categoryBadge}>
              {adverb.category.charAt(0).toUpperCase() + adverb.category.slice(1)}
            </div>
          </Link>
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

            {/* SPEECH SYNTHESIS FOR EXAMPLE */}
            {adverb.example_ar && (
              <button
                onClick={() => speak(adverb.example_ar)}
                style={styles.exampleAudioButton}
                title="Play example"
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                🔊
              </button>
            )}
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
    background: "#12306B",
    minHeight: "100vh",
    color: "white",
  },

  back: {
    color: "white",
    textDecoration: "none",
    fontSize: "28px",
  },

  card: {
    background: "white",
    color: "#0A2A5A",
    padding: "30px",
    borderRadius: "16px",
    marginTop: "20px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    position: "relative",
  },

  // ⭐ PREMIUM LOCK OVERLAY
  lockOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(4, 14, 76, 0.55)",
    color: "white",
    fontSize: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    zIndex: 10,
    fontWeight: "bold",
  },

  arabic: {
    fontSize: "60px",
    fontWeight: "bold",
    textAlign: "center",
    direction: "rtl",
  },

  audioButton: {
    marginTop: "10px",
    background: "#1E3A8A",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    fontSize: "25px",
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
    fontSize: "27px",
  },

  english: {
    textAlign: "center",
    fontSize: "26px",
    marginTop: "10px",
    fontWeight: "500",
  },

  categoryBadge: {
    marginTop: "15px",
    padding: "4px 8px",
    borderRadius: "8px",
    background: "#0F2A5A",
    color: "white",
    fontSize: "22px",
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
    fontSize: "41px",
    fontWeight: "bold",
    marginBottom: "6px",
    direction: "rtl",
  },

  exampleEn: {
    fontSize: "27px",
    opacity: 0.8,
  },

  exampleAudioButton: {
    marginTop: "10px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "30px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    transition: "0.2s",
  },

  notes: {
    fontSize: "28px",
    opacity: 0.9,
  },
};
