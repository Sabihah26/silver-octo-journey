// src/pages/SuperStudyMode.jsx
import { checkAchievements } from "../utils/achievements";
import React, { useState, useEffect } from "react";
import nouns from "../data/nouns";
import { Link } from "react-router-dom";
import {
  updateNounSRS,
  getNounSRS,
} from "../utils/srsNouns";

export default function SuperStudyMode() {
  const [mode, setMode] = useState("study"); // study | flashcards | trainer | quiz
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);


// Extract all topics from nouns
const allTopics = [...new Set(nouns.flatMap((n) => n.topics || []))];

// Load cards when topics or mode change
useEffect(() => {
  const filtered = nouns.filter(
    (n) => n.topics && n.topics.some((t) => selectedTopics.includes(t))
  );

  const shuffled = [...filtered].sort(() => Math.random() - 0.5);

  setCards(shuffled);
  setIndex(0);
  setFlipped(false);
  setInput("");
  setFeedback("");
  setFinished(false);
  setScore(0);
}, [selectedTopics, mode]);


  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const current = cards[index];

  const nextCard = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
      setInput("");
      setFeedback("");
    } else {
      setFinished(true);
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFlipped(false);
      setInput("");
      setFeedback("");
    }
  };

  // -----------------------------
  // AI TRAINER — SRS integrated
  // -----------------------------
  const checkAnswer = () => {
    const correct = input.trim() === current.arabic.trim();

    // SRS update
    updateNounSRS(current.id, correct, correct ? "good" : "again");

    if (correct) {
      setFeedback("correct");
      setTimeout(() => {
        nextCard();
      }, 600);
    } else {
      setFeedback("wrong");
    }
  };

  // -----------------------------
  // QUIZ — SRS integrated
  // -----------------------------
  const handleOptionClick = (opt) => {
    const correct = opt === current.arabic;

    updateNounSRS(current.id, correct, correct ? "good" : "again");

    if (correct) {
      setScore((s) => s + 1);
    }

    nextCard();
  };

  // Quiz options helper
  const getOptions = (correct) => {
    const wrong = cards
      .map((c) => c.arabic)
      .filter((a) => a !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    return [...wrong, correct].sort(() => Math.random() - 0.5);
  };

  return (
    <div style={pageStyle}>
      <h2 style={{ marginBottom: "20px" }}>Super Study Mode</h2>

      {/* Topic selection */}
      <div style={topicBox}>
        {allTopics.map((topic) => (
          <label key={topic} style={topicItem}>
            <input
              type="checkbox"
              checked={selectedTopics.includes(topic)}
              onChange={() => toggleTopic(topic)}
              style={{ marginRight: "10px" }}
            />
            {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </label>
        ))}
      </div>

      {/* Mode buttons */}
      <div style={modeRow}>
        <button style={modeButton} onClick={() => setMode("study")}>
          Study
        </button>
        <button style={modeButton} onClick={() => setMode("flashcards")}>
          Flashcards
        </button>
        <button style={modeButton} onClick={() => setMode("trainer")}>
          AI Trainer
        </button>
        <button style={modeButton} onClick={() => setMode("quiz")}>
          Quiz
        </button>
      </div>

      {/* SRS Buttons */}
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button
          style={srsButton}
          onClick={() => {
            if (!current) return;
            updateNounSRS(current.id, true, "good");
            alert("Added to SRS!");
          }}
        >
          Add to SRS
        </button>

        <Link to="/srs-review" style={srsButton}>
          Review SRS
        </Link>
      </div>

      {/* No topics selected */}
      {selectedTopics.length === 0 && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Select topics to begin.
        </p>
      )}

      {/* No nouns */}
      {selectedTopics.length > 0 && cards.length === 0 && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          No nouns found for these topics.
        </p>
      )}

      {/* STUDY MODE */}
      {mode === "study" && current && (
        <div style={listContainer}>
          {cards.map((item, idx) => (
            <div key={idx} style={nounRow}>
              <span style={englishWord}>{item.english}</span>
              <span style={arabicWord}>{item.arabic}</span>
            </div>
          ))}
        </div>
      )}

      {/* FLASHCARDS */}
      {mode === "flashcards" && current && (
        <>
          <div
            style={{
              ...cardContainer,
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
            onClick={() => setFlipped(!flipped)}
          >
            <div style={{ ...cardFace, backfaceVisibility: "hidden" }}>
              <h3 style={{ fontSize: "28px" }}>{current.english}</h3>
              <p style={{ fontSize: "20px", marginTop: "10px" }}>
                Click to reveal Arabic
              </p>
            </div>

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
        </>
      )}

      {/* AI TRAINER */}
      {mode === "trainer" && current && (
        <>
          <div style={promptBox}>
            <h3 style={{ fontSize: "26px" }}>{current.english}</h3>
            <p style={{ fontSize: "18px", opacity: 0.7 }}>Type the Arabic</p>
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={inputBox}
            placeholder="Arabic answer..."
          />

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

          <div style={buttonRow}>
            <button onClick={checkAnswer} style={mainButton}>
              Check
            </button>
            <button onClick={nextCard} style={skipButton}>
              Skip ▶
            </button>
          </div>

          <p style={{ marginTop: "20px", fontSize: "16px" }}>
            {index + 1} / {cards.length}
          </p>
        </>
      )}

      {/* QUIZ MODE */}
      {mode === "quiz" && current && (
        <>
          <div style={promptBox}>
            <h3 style={{ fontSize: "26px" }}>{current.english}</h3>
            <p style={{ fontSize: "18px", opacity: 0.7 }}>
              Choose the correct Arabic
            </p>
          </div>

          <div style={quizOptions}>
            {getOptions(current.arabic).map((opt, idx) => (
              <button
                key={idx}
                style={quizButton}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          <p style={{ marginTop: "20px", fontSize: "16px" }}>
            {index + 1} / {cards.length}
          </p>

          <p style={{ marginTop: "8px", fontSize: "16px" }}>
            Score: {score}
          </p>
        </>
      )}
    </div>
  );
}

/* Styles */
const pageStyle = {
  paddingTop: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const topicBox = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "20px",
};

const topicItem = {
  fontSize: "18px",
};

const modeRow = {
  display: "flex",
  gap: "10px",
  marginBottom: "25px",
};

const modeButton = {
  padding: "10px 18px",
  background: "#0A1A3A",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

const srsButton = {
  padding: "10px 18px",
  background: "#D4AF37",
  color: "black",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  textDecoration: "none",
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
};

const skipButton = {
  padding: "10px 20px",
  background: "#888",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

const quizOptions = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const quizButton = {
  padding: "12px 20px",
  background: "#0A1A3A",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
};
