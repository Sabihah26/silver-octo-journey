// src/pages/NounList.jsx
import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import nouns from "../data/nouns";

export default function NounList() {
  const [query, setQuery] = useState("");

  const { category, topic } = useParams();

  const filteredByCategoryTopic = useMemo(() => {
    return nouns.filter((n) => {
      const matchCategory = category ? n.category === category : true;
      const matchTopic = topic ? n.topics?.includes(topic) : true;
      return matchCategory && matchTopic;
    });
  }, [category, topic]);

  const filtered = filteredByCategoryTopic.filter((n) => {
    const q = query.toLowerCase();
    return (
      n.arabic.toLowerCase().includes(q) ||
      n.english.toLowerCase().includes(q) ||
      (n.transliteration && n.transliteration.toLowerCase().includes(q))
    );
  });

  return (
    <div style={styles.page}>

      {/* ⭐ GLOBAL NAVBAR WILL NOW APPEAR ABOVE THIS PAGE */}

      <h1 style={styles.title}>
        {topic
          ? `${category} → ${topic}`
          : category
          ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
          : "Nouns"}
      </h1>

      <input
        type="text"
        placeholder="Search nouns..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.search}
      />

      <div style={styles.grid}>
        {filtered.map((n) => (
          <Link key={n.id} to={`/noun/${n.id}`} style={styles.card}>
            <div style={styles.arabic}>{n.arabic}</div>
            <div style={styles.english}>{n.english}</div>
          </Link>
        ))}
      </div>
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
    outline: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
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
    opacity: 0.8,
  },
};
