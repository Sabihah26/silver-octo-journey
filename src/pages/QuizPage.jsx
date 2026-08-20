// src/pages/QuizPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import verbs from "../data/verbs";

export default function QuizPage() {
  // Build 5 questions from real verbs
  const questions = verbs.slice(0, 5).map((v) => ({
    id: v.id,
    arabic: v.arabic,
    correct: v.english,
    options: shuffle([
      v.english,
      "house",
      "book",
      "to write",
      "to drink",
    ]).slice(0, 4),
  }));

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  const playQuestionAudio = () => {
    const audio = new Audio(`/audio/verbs/${current.id}.mp3`);
    audio.play();
  };

  const handleAnswer = (opt) => {
    if (selected) return;
    setSelected(opt);
    if (opt === current.correct) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (index + 1 >= questions.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  if (!current) {
    return (
      <div style={pageContainer}>
        <h1 style={title}>Quiz</h1>
        <p>No questions available.</p>
        <Link to="/" style={backLink}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={pageContainer}>
      <h1 style={title}>Quiz</h1>
      <p style={subtitle}>
        Question {index + 1} of {questions.length}
      </p>

      <div style={questionCard}>
        {/* Arabic Question */}
        <div style={arabicText}>{current.arabic}</div>

        {/* AUDIO BUTTON */}
        <button
          onClick={playQuestionAudio}
          style={audioBtn}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🔊
        </button>

        {/* Options */}
        <div style={{ marginTop: 16 }}>
          {current.options.map((opt) => {
            const isCorrect = opt === current.correct;
            const isSelected = opt === selected;

            let bg = "white";
            if (selected) {
              if (isSelected && isCorrect) bg = "#d4edda";
              else if (isSelected && !isCorrect) bg = "#f8d7da";
              else if (isCorrect) bg = "#d4edda";
            }

            return (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                style={{
                  ...optionBtn,
                  background: bg,
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Score / Next */}
      {finished ? (
        <div style={{ marginTop: 20, fontSize: 20 }}>
          Quiz finished! Score: {score} / {questions.length}
        </div>
      ) : (
        <button
          style={primaryBtn}
          onClick={nextQuestion}
          disabled={!selected}
        >
          {index + 1 === questions.length ? "Finish" : "Next"}
        </button>
      )}

      <div style={{ marginTop: 30 }}>
        <Link to="/" style={backLink}>← Back to Home</Link>
      </div>
    </div>
  );
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ------------------
// Styles
// ------------------
const pageContainer = {
  padding: 20,
  maxWidth: 600,
  margin: "0 auto",
};

const title = {
  fontSize: 32,
  marginBottom: 10,
};

const subtitle = {
  fontSize: 18,
  opacity: 0.8,
};

const questionCard = {
  marginTop: 20,
  padding: 20,
  borderRadius: 10,
  background: "white",
  border: "1px solid #ddd",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};

const arabicText = {
  fontSize: 30,
  direction: "rtl",
  textAlign: "right",
};

const audioBtn = {
  marginTop: 10,
  background: "#1E3A8A",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  fontSize: "20px",
  cursor: "pointer",
  transition: "0.2s",
};

const optionBtn = {
  display: "block",
  width: "100%",
  textAlign: "left",
  padding: 10,
  marginTop: 8,
  borderRadius: 6,
  border: "1px solid #ccc",
  background: "white",
  cursor: "pointer",
};

const primaryBtn = {
  marginTop: 20,
  padding: "10px 20px",
  fontSize: 18,
  borderRadius: 8,
  border: "none",
  background: "#007bff",
  color: "white",
  cursor: "pointer",
};

const backLink = {
  fontSize: 18,
  textDecoration: "none",
  color: "#007bff",
};
