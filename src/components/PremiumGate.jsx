// src/components/PremiumGate.jsx
// Route wrapper for word detail pages: free words render as usual, locked
// words show an upgrade card instead.
import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import useWordAccess from "../hooks/useWordAccess";
import { FREE_LIMIT } from "../data/access";

const LABELS = {
  verb: { plural: "verbs", list: "/verbs" },
  noun: { plural: "nouns", list: "/nouns/categories" },
  adjective: { plural: "adjectives", list: "/adjectives/category" },
  adverb: { plural: "adverbs", list: "/adverbs" },
};

export default function PremiumGate({ type }) {
  const { id } = useParams();
  const { isLocked, loading } = useWordAccess();

  if (!isLocked(type, id)) return <Outlet />;
  if (loading) return <p style={styles.checking}>Checking your access…</p>;

  const label = LABELS[type];
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>🔒</div>
        <h1 style={styles.title}>This word is part of Premium</h1>
        <p style={styles.text}>
          The free tier includes {FREE_LIMIT} {label.plural}. Upgrade to unlock
          every {type}, with all conjugations, flashcards and quizzes.
        </p>
        <Link to="/billing" style={styles.primary}>Unlock everything</Link>
        <Link to={label.list} style={styles.secondary}>Back to free {label.plural}</Link>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" },
  checking: { textAlign: "center", marginTop: 60, color: "#9ca3af" },
  card: {
    maxWidth: 440, width: "100%", textAlign: "center", padding: "32px 24px",
    borderRadius: 20, background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.2)", color: "white",
  },
  icon: { fontSize: 52, marginBottom: 8 },
  title: { fontSize: 24, margin: "0 0 10px" },
  text: { fontSize: 16, opacity: 0.85, lineHeight: 1.5, margin: "0 0 22px" },
  primary: {
    display: "block", padding: 12, borderRadius: 10, background: "#4CAF50",
    color: "white", textDecoration: "none", fontWeight: 600, marginBottom: 10,
  },
  secondary: {
    display: "block", padding: 10, borderRadius: 10, background: "rgba(255,255,255,0.15)",
    color: "white", textDecoration: "none",
  },
};
