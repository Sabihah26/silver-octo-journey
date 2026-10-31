// src/pages/AdverbList.jsx
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import adverbs from "../data/Adverbs";

export default function AdverbList() {
  const { category: urlCategory } = useParams();

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const activeCategory = urlCategory || filter;

  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ar-SA";
    speechSynthesis.speak(utter);
  };

  const filtered = adverbs.filter((a) => {
    const q = query.toLowerCase();
    const matchesSearch =
      a.arabic.toLowerCase().includes(q) ||
      (a.transliteration && a.transliteration.toLowerCase().includes(q)) ||
      a.english.toLowerCase().includes(q);

    const matchesFilter =
      activeCategory === "all" ? true : a.category === activeCategory;

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Adverbs</h1>

      {/* ⭐ Search */}
      <input
        type="text"
        placeholder="Search adverbs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.search}
      />

      {/* ⭐ NEW CATEGORY BUTTONS WITH ICONS */}
      <div style={styles.categoryRow}>
        {[
          { id: "time", label: "Time", icon: "⏰" },
          { id: "place", label: "Place", icon: "📍" },
          { id: "manner", label: "Manner", icon: "⚡" },
          { id: "frequency", label: "Frequency", icon: "🔁" },
          { id: "degree", label: "Degree", icon: "✨" },
        ].map((cat) => (
          <Link
            key={cat.id}
            to={`/adverbs/category/${cat.id}`}
            style={{
              ...styles.categoryButton,
              background:
                activeCategory === cat.id ? "#1E3A8A" : "white",
              color:
                activeCategory === cat.id ? "white" : "#0A1A3A",
            }}
          >
            <span style={{ fontSize: 24 }}>{cat.icon}</span>
            <span style={{ marginLeft: 8 }}>
              {cat.label}
            </span>
          </Link>
        ))}
      </div>

      {/* ⭐ OLD FILTER BUTTONS HIDDEN (no deletion) */}
      <div style={{ display: "none" }}>
        {["all", "time", "place", "manner", "frequency"].map((cat) => (
          <button key={cat} style={styles.filterButton}>
            {cat}
          </button>
        ))}
      </div>

      {/* ⭐ OLD “Browse by Category” link hidden */}
      <div style={{ display: "none" }}></div>

      {/* ⭐ Grid */}
      <div style={styles.grid}>
        {filtered.map((a) => {
          const isLocked = a.premium === true;

          return (
            <div key={a.id} style={styles.card}>
              <button
                onClick={() => speak(a.arabic)}
                style={styles.audioButton}
              >
                🔊
              </button>

              {isLocked && (
                <div style={styles.lockOverlay}>🔒 Premium</div>
              )}

              <Link
                to={isLocked ? "#" : `/adverbs/${a.id}`}
                style={{
                  ...styles.cardLink,
                  pointerEvents: isLocked ? "none" : "auto",
                  filter: isLocked ? "blur(2px)" : "none",
                  opacity: isLocked ? 0.6 : 1,
                }}
              >
                <div style={styles.arabic}>{a.arabic}</div>
                <div style={styles.english}>{a.english}</div>
                <div style={styles.categoryBadge}>
                  {a.category}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {urlCategory && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Link
            to="/adverbs"
            style={{ fontSize: 20, color: "#8cb9e5" }}
          >
            ← Back to All Adverbs
          </Link>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    background: "#07112B",
    minHeight: "100vh",
    color: "white",
  },
  title: {
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "600",
  },
  search: {
    width: "100%",
    maxWidth: "500px",
    padding: "12px 16px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    margin: "0 auto 20px auto",
    display: "block",
  },

  /* ⭐ NEW CATEGORY BUTTONS */
  categoryRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "25px",
  },
  categoryButton: {
    padding: "10px 16px",
    borderRadius: "10px",
    border: "2px solid #1E3A8A",
    fontSize: "18px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    transition: "0.2s",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
  },
  card: {
    position: "relative",
    background: "white",
    color: "#0A1A3A",
    padding: "20px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  cardLink: {
    textDecoration: "none",
    color: "#0A1A3A",
  },
  audioButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
  },
  lockOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0,0,0,0.55)",
    color: "white",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "14px",
    zIndex: "10",
    fontWeight: "bold",
  },
  arabic: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  english: {
    fontSize: "20px",
    opacity: 0.8,
    marginBottom: "10px",
  },
  categoryBadge: {
    marginTop: "10px",
    padding: "4px 8px",
    borderRadius: "8px",
    background: "#0A1A3A",
    color: "white",
    fontSize: "14px",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "capitalize",
  },
};
