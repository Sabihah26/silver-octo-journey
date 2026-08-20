// src/pages/MultiTopicQuiz.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import nouns from "../data/nouns";

export default function MultiTopicQuiz() {
  const location = useLocation();
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Extract topics from query string
  const query = new URLSearchParams(location.search);
  const topics = query.get("topics")?.split(",") || [];

  useEffect(() => {
    const filtered = nouns.filter((n) => topics.includes(n.topic));
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setIndex(0);
    setScore(0);
    setFinished(false);
  }, [topics]);

  if (cards.length === 0) {
    return (
      <div style={pageStyle}>
        <h2>No nouns found for these topics.</h2>
      </div>
    );
  }

  const current = cards[index];

  const handleOptionClick = (opt) => {
    if (finished) return;

    if (opt === current.arabic) {
      setScore((s) => s + 1);
    }

    if (index === cards.length - 1) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
    }
  };

  const restartQuiz = () => {
    const filtered = nouns.filter((n) => topics.includes(n.topic));
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setIndex(0);
    setScore(0);
    setFinished(false);
  };

  return (
    <div style={pageStyle}>
      <h2 style={{ marginBottom: "20px" }}>
        Quiz — {topics.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ")}
      </h2>

      {!finished && current && (
        <>
          <div style={promptBox}>
            <h3 style={{ fontSize: "26px" }}>{current.english}</h3>
            <p style={{ fontSize: "18px", opacity: 0.7 }}>
              Choose the correct Arabic
            </p>
          </div>

          <div style={optionsBox}>
            {getOptions(current.arabic, cards).map((opt, idx) => (
              <button
                key={idx}
                style={optionButton}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          <p style={{ marginTop: "20px", fontSize: "16px" }}>
            Question {index + 1} / {cards.length}
          </p>

          <p style={{ marginTop: "8px", fontSize: "16px" }}>
            Score: {score}
          </p>
        </>
      )}

      {finished && (
        <div style={resultBox}>
          <h3 style={{ marginBottom: "10px" }}>Quiz Finished</h3>
          <p style={{ fontSize: "18px" }}>
            You scored {score} out of {cards.length}
          </p>
          <button style={restartButton} onClick={restartQuiz}>
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}

// Helper: build options (1 correct + 3 random wrong)
function getOptions(correct, cards) {
  const wrong = cards
    .map((c) => c.arabic)
    .filter((a) => a !== correct)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return [...wrong, correct].sort(() => Math.random() - 0.5);
}

/* Styles */
const pageStyle = {
  paddingTop: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const promptBox = {
  background: "white",
  padding: "20px 30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  textAlign: "center",
  marginBottom: "20px",
};

const optionsBox = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "90%",
  maxWidth: "400px",
};

const optionButton = {
  padding: "12px 20px",
  background: "#0A1A3A",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
};

const resultBox = {
  marginTop: "20px",
  background: "white",
  padding: "20px 30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  textAlign: "center",
};

const restartButton = {
  marginTop: "15px",
  padding: "10px 18px",
  background: "#0A1A3A",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};
