// src/pages/TopicFlashcardsPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import nouns from "../data/nouns";

export default function TopicFlashcardsPage() {
  const { category, topic } = useParams();   // ⭐ READ BOTH
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // ⭐ Load nouns for this category + topic
  useEffect(() => {
    const topicCards = nouns.filter(
      (n) =>
        n.category === category &&
        n.topics &&
        n.topics.includes(topic)
    );

    // Shuffle
    const shuffled = [...topicCards].sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setIndex(0);
    setFlipped(false);
  }, [category, topic]);

  if (cards.length === 0) {
    return (
      <div style={pageStyle}>
        <h2>No nouns found for this topic.</h2>
      </div>
    );
  }

  const current = cards[index];

  const nextCard = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFlipped(false);
    }
  };

  return (
    <div style={pageStyle}>
      
      {/* Back to Category Topics */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link
          to={`/nouns/category/${category}`}
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          ← Back to {formatCategoryName(category)}
        </Link>
      </div>

      <h2 style={{ marginBottom: "20px" }}>
        Topic: {formatTopicName(topic)}
      </h2>

      {/* Flashcard */}
      <div
        style={{
          ...cardContainer,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front */}
        <div style={{ ...cardFace, backfaceVisibility: "hidden" }}>
          <h3 style={{ fontSize: "28px" }}>{current.english}</h3>
          <p style={{ fontSize: "20px", marginTop: "10px" }}>
            Click to reveal Arabic
          </p>
        </div>

        {/* Back */}
        <div
          style={{
            ...cardFace,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            background: "#0A1A3A",
            color: "white",
          }}
        >
          <h3 style={{ fontSize: "32px" }}>{current.arabic}</h3>
        </div>
      </div>

      {/* Navigation */}
      <div style={navRow}>
        <button onClick={prevCard} disabled={index === 0} style={navButton}>
          ◀ Prev
        </button>

        <span style={{ fontSize: "18px" }}>
          {index + 1} / {cards.length}
        </span>

        <button
          onClick={nextCard}
          disabled={index === cards.length - 1}
          style={navButton}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}

function formatTopicName(key) {
  return key
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatCategoryName(key) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "40px",
};

const cardContainer = {
  width: "320px",
  height: "220px",
  borderRadius: "12px",
  background: "white",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  cursor: "pointer",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  position: "relative",
};

const cardFace = {
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "21px",
  background: "white",
};

const navRow = {
  marginTop: "25px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const navButton = {
  padding: "10px 18px",
  background: "#0A1A3A",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "21px",
};
