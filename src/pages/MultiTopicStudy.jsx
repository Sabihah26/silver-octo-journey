// src/pages/MultiTopicStudy.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import nouns from "../data/nouns";

export default function MultiTopicStudy() {
  const location = useLocation();
  const [cards, setCards] = useState([]);
  const [shuffle, setShuffle] = useState(false);

  // Extract topics from query string
  const query = new URLSearchParams(location.search);
  const topics = query.get("topics")?.split(",") || [];

  useEffect(() => {
    // Filter nouns by selected topics
    const filtered = nouns.filter((n) => topics.includes(n.topic));

    // Shuffle if enabled
    const finalList = shuffle
      ? [...filtered].sort(() => Math.random() - 0.5)
      : filtered;

    setCards(finalList);
  }, [topics, shuffle]);

  return (
    <div style={pageStyle}>
      <h2 style={{ marginBottom: "20px" }}>
        Study Mode — {topics.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ")}
      </h2>

      {/* Shuffle toggle */}
      <label style={shuffleRow}>
        <input
          type="checkbox"
          checked={shuffle}
          onChange={() => setShuffle(!shuffle)}
          style={{ marginRight: "10px" }}
        />
        Shuffle nouns
      </label>

      {/* Noun list */}
      <div style={listContainer}>
        {cards.map((item, idx) => (
          <div key={idx} style={nounRow}>
            <span style={englishWord}>{item.english}</span>
            <span style={arabicWord}>{item.arabic}</span>
          </div>
        ))}
      </div>

      {cards.length === 0 && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          No nouns found for these topics.
        </p>
      )}
    </div>
  );
}

const pageStyle = {
  paddingTop: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const shuffleRow = {
  marginBottom: "20px",
  fontSize: "18px",
};

const listContainer = {
  width: "90%",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const nounRow = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 16px",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
};

const englishWord = {
  fontSize: "20px",
  fontWeight: "bold",
};

const arabicWord = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#0A1A3A",
};
