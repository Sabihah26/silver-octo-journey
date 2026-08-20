// src/pages/VerbList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import verbs from "../data/verbs";

export default function VerbList() {
  const [query, setQuery] = useState("");

  const filtered = verbs.filter((v) => {
    const q = query.toLowerCase();

    return (
      (v.arabic && v.arabic.toLowerCase().includes(q)) ||

      // FIXED: english is an object, so search inside simple/detailed
      (v.english?.simple &&
        v.english.simple.toLowerCase().includes(q)) ||
      (v.english?.detailed &&
        v.english.detailed.toLowerCase().includes(q)) ||

      (v.transliteration && v.transliteration.toLowerCase().includes(q)) ||
      (v.root && v.root.toLowerCase().includes(q)) ||
      (v.form && v.form.toLowerCase().includes(q))
    );
  });

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Verbs</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search verbs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.search}
      />

      {/* Browse by Form */}
      <div style={{ marginBottom: "25px", textAlign: "center" }}>
        <Link
          to="/forms"
          style={{
            display: "inline-block",
            background: "#0A1A3A",
            color: "white",
            padding: "12px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "0.2s",
          }}
        >
          📙 Browse Verbs by Form (I–X)
        </Link>
      </div>

      {/* Verb Grid */}
      <div style={styles.grid}>
        {filtered.map((v) => (
          <Link key={v.id} to={`/verb/${v.id}`} style={styles.card}>
            <div style={styles.arabic}>{v.arabic}</div>

            {/* FIXED: english is an object */}
            <div style={styles.english}>
              {v.english?.simple || v.english?.detailed || ""}
            </div>

            <div style={styles.meta}>
              <div><strong>Root:</strong> {v.root}</div>
              <div><strong>Form:</strong> {v.form}</div>
              <div><strong>Translit:</strong> {v.transliteration}</div>
            </div>
          </Link>
        ))}
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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    maxWidth: "900px",
    margin: "0 auto",
    gap: "20px",
  },

  card: {
    background: "white",
    color: "#0A1A3A",
    padding: "20px",
    borderRadius: "14px",
    textAlign: "center",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },

  arabic: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "6px",
  },

  english: {
    fontSize: "20px",
    opacity: 0.9,
    marginBottom: "10px",
  },

  meta: {
    fontSize: "15px",
    opacity: 0.8,
    marginTop: "10px",
    lineHeight: "1.4",
  },
};
