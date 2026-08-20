// src/pages/RootPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function RootPage() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Dictionary</h1>

      <div style={styles.grid}>
        <Link to="/verbs" style={{ ...styles.card, ...styles.verbs }}>
          <h2 style={styles.cardTitle}>Verbs</h2>
          <p style={styles.cardText}>All forms, weak types, and conjugations</p>
        </Link>

        <Link to="/nouns" style={{ ...styles.card, ...styles.nouns }}>
          <h2 style={styles.cardTitle}>Nouns</h2>
          <p style={styles.cardText}>Singular, dual, plurals, patterns</p>
        </Link>

        <Link to="/adverbs" style={{ ...styles.card, ...styles.adverbs }}>
          <h2 style={styles.cardTitle}>Adverbs</h2>
          <p style={styles.cardText}>Usage, meaning, and grammar notes</p>
        </Link>

        <Link to="/examples" style={styles.card}>
          <h2 style={styles.cardTitle}>Examples</h2>
          <p style={styles.cardText}>Sentence examples for all words</p>
        </Link>

        <Link to="/grammar" style={styles.card}>
          <h2 style={styles.cardTitle}>Grammar</h2>
          <p style={styles.cardText}>Lessons, rules, and explanations</p>
        </Link>

        <Link to="/search" style={styles.card}>
          <h2 style={styles.cardTitle}>Search</h2>
          <p style={styles.cardText}>Find any word instantly</p>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "30px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    textDecoration: "none",
    color: "#111",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },
  verbs: {
    borderLeft: "6px solid #2563eb",
  },
  nouns: {
    borderLeft: "6px solid #059669",
  },
  adverbs: {
    borderLeft: "6px solid #d97706",
  },
  cardTitle: {
    fontSize: "22px",
    marginBottom: "6px",
  },
  cardText: {
    fontSize: "15px",
    opacity: 0.75,
  },
};
