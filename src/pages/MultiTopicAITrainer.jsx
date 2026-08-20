// src/pages/MultiTopicAITrainer.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import nouns from "../data/nouns";

export default function MultiTopicAITrainer() {
  const location = useLocation();
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  // Extract topics from query string
  const query = new URLSearchParams(location.search);
  const topics = query.get("topics")?.split(",") || [];

  useEffect(() => {
    // Filter nouns by selected topics
    const filtered = nouns.filter((n) => topics.includes(n.topic));

    // Shuffle
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setIndex(0);
    setInput("");
    setFeedback("");
  }, [topics]);

  if (cards.length === 0) {
    return (
      <div style={pageStyle}>
        <h2>No nouns found for these topics.</h2>
      </div>
    );
  }

  const current = cards[index];

  const checkAnswer = () => {
    if (input.trim() === current.arabic.trim()) {
      setFeedback("correct");
      setTimeout(() => {
        if (index < cards.length - 1) {
          setIndex(index + 1);
        }
        setInput("");
        setFeedback("");
      }, 600);
    } else {
      setFeedback("wrong");
    }
  };

  const skip = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setInput("");
      setFeedback("");
    }
  };

  return (
    <div style={pageStyle}>
      <h2 style={{ marginBottom: "20px" }}>
        AI Trainer — {topics.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ")}
      </h2>

      {/* English prompt */}
      <div style={promptBox}>
        <h3 style={{ fontSize: "26px" }}>{current.english}</h3>
        <p style={{ fontSize: "18px", opacity: 0.7 }}>Type the Arabic</p>
      </div>

      {/* Input */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={inputBox}
        placeholder="Arabic answer..."
      />

      {/* Feedback */}
      {feedback === "correct" && (
        <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
          ✓ Correct!
        </p>
      )}
      {feedback === "wrong" && (
        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
          ✗ Try again
        </p>
      )}

      {/* Buttons */}
      <div style={buttonRow}>
        <button onClick={checkAnswer} style={mainButton}>
          Check
        </button>

        <button onClick={skip} style={skipButton}>
          Skip ▶
        </button>
      </div>

      {/* Progress */}
      <p style={{ marginTop: "20px", fontSize: "16px" }}>
        {index + 1} / {cards.length}
      </p>
    </div>
  );
}

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "40px",
};

const promptBox = {
  background: "white",
  padding: "20px 30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  textAlign: "center",
  marginBottom: "20px",
};

const inputBox = {
  width: "260px",
  padding: "12px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "2px solid #0A1A3A",
  outline: "none",
  textAlign: "center",
};

const buttonRow = {
  display: "flex",
  gap: "15px",
  marginTop: "20px",
};

const mainButton = {
  padding: "10px 20px",
  background: "#0A1A3A",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};

const skipButton = {
  padding: "10px 20px",
  background: "#888",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};
