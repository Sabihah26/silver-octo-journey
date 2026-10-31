// src/pages/AdverbList.jsx
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";   // ⭐ ADDED useParams
import adverbs from "../data/Adverbs";

export default function AdverbList() {
  const { category: urlCategory } = useParams();   // ⭐ READ category from URL

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // If URL has a category, override the filter
  const activeCategory = urlCategory || filter;    // ⭐ NEW

  // Audio function
  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ar-SA";
    speechSynthesis.speak(utter);
  };

  // Search + filter
  const filtered = adverbs.filter((a) => {
    const q = query.toLowerCase();
    const matchesSearch =
      a.arabic.toLowerCase().includes(q) ||
      (a.transliteration && a.transliteration.toLowerCase().includes(q)) ||
      a.english.toLowerCase().includes(q) ||
      (a.category && a.category.toLowerCase().includes(q));

    const matchesFilter =
      activeCategory === "all" ? true : a.category === activeCategory;   // ⭐ UPDATED

    return matchesSearch && matchesFilter;
  });

  // ⭐ COLOR THEMES
  const categoryColors = {
    all: "#9CA3AF",        // grey
    time: "#3B82F6",       // blue
    place: "#10B981",      // green
    manner: "#F59E0B",     // orange
    frequency: "#8B5CF6",  // purple
    degree: "#EC4899",     // pink
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        {urlCategory
          ? `${urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1)} Adverbs`
          : "Adverbs"}
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search adverbs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.search}
      />

      {/* ⭐ Gemini-style category buttons with color themes */}
      <div style={styles.filterRow}>
        {[
          { id: "all", label: "All", icon: "✨" },
          { id: "time", label: "Time", icon: "🕒" },
          { id: "place", label: "Place", icon: "🗺️" },
          { id: "manner", label: "Manner", icon: "⚡" },
          { id: "frequency", label: "Frequency", icon: "🔄" },
          { id: "degree", label: "Degree", icon: "✨" },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            disabled={!!urlCategory}
            style={{
              ...styles.filterButton,
              borderColor: categoryColors[cat.id],
              background:
                activeCategory === cat.id ? categoryColors[cat.id] : "white",
              color:
                activeCategory === cat.id ? "white" : categoryColors[cat.id],
              opacity: urlCategory ? 0.5 : 1,
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ fontSize: "20px" }}>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {filtered.map((a) => {
          const isLocked = a.premium === true;

          return (
            <div key={a.id} style={styles.card}>
              {/* Audio */}
              <button
                onClick={() => speak(a.arabic)}
                style={styles.audioButton}
                title="Play pronunciation"
              >
                🔊
              </button>

              {/* Lock overlay */}
              {isLocked && (
                <div style={styles.lockOverlay}>
                  🔒 Premium
                </div>
              )}

              {/* Card content */}
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

                {a.category && (
                  <div
                    style={{
                      ...styles.categoryBadge,
                      background: categoryColors[a.category],
                    }}
                  >
                    {a.category}
                  </div>
                )}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Back to categories when inside URL category */}
      {urlCategory && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Link
            to="/adverbs/categories"
            style={{ fontSize: 20, color: "#8cb9e5", textDecoration: "none" }}
          >
            ← Back to Categories
          </Link>
        </div>
      )}
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
    outline: "none",
  },

  filterRow: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

  filterButton: {
    padding: "10px 16px",
    borderRadius: "10px",
    border: "2px solid #1E3A8A",
    fontSize: "16px",
    cursor: "pointer",
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
    color: "white",
    fontSize: "14px",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "capitalize",
  },
};
