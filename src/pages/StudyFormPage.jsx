// src/pages/StudyFormPage.jsx
import React, { useState, useMemo } from "react";
import verbs from "../data/verbs";
import { Link, useNavigate } from "react-router-dom"; // ⭐ ADDED

import {
  loadStudyProgress,
  saveStudyProgress,
  markStudyReviewed,
} from "../utils/studyStorage";

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function StudyFormPage() {
  const navigate = useNavigate(); // ⭐ ADDED

  const [selectedForm, setSelectedForm] = useState(null);
  const [openExample, setOpenExample] = useState(null);
  const [highlightVerbId, setHighlightVerbId] = useState(null);

  const [quizActive, setQuizActive] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const forms = [
    "Form I","Form II","Form III","Form IV","Form V",
    "Form VI","Form VII","Form VIII","Form IX","Form X",
  ];

  const formColors = {
    "Form I": "#4A90E2",
    "Form II": "#50C878",
    "Form III": "#F5A623",
    "Form IV": "#D0021B",
    "Form V": "#7B61FF",
    "Form VI": "#FF6F61",
    "Form VII": "#009688",
    "Form VIII": "#C2185B",
    "Form IX": "#795548",
    "Form X": "#2E7D32",
  };

  const filteredVerbs = useMemo(() => {
    if (!selectedForm) return [];
    return verbs.filter((v) => v.form === selectedForm);
  }, [selectedForm]);

  const studiedCount = filteredVerbs.filter((v) => v.studied).length;
  const totalCount = filteredVerbs.length;
  const progress = totalCount ? Math.round((studiedCount / totalCount) * 100) : 0;

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: 16,
    marginTop: 20,
  };

  const formButtonStyle = (form) => ({
    padding: "18px 10px",
    background: "white",
    borderRadius: 12,
    border: `2px solid ${formColors[form]}`,
    fontSize: 18,
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "center",
    transition: "0.25s",
    color: formColors[form],
  });

  const cardStyle = (verb) => ({
    width: "100%",
    maxWidth: 600,
    padding: 20,
    margin: "0 auto 14px auto",
    background: "white",
    borderRadius: 12,
    border:
      highlightVerbId === verb.id
        ? `2px solid ${formColors[selectedForm]}`
        : "1px solid #ddd",
    boxShadow:
      highlightVerbId === verb.id
        ? "0 0 10px rgba(0,0,0,0.15)"
        : "0 2px 6px rgba(0,0,0,0.05)",
    transition: "0.25s",
  });

  // ⭐ KEEPING — NOT REMOVED
  const handleStudyNow = (verb) => {
    markStudyReviewed();
    alert(`Studied: ${verb.arabic} — progress saved!`);
  };

  const startQuiz = () => {
    if (filteredVerbs.length < 3) return;
    const shuffled = shuffleArray(filteredVerbs);
    const questionsCount = Math.min(5, shuffled.length);
    const questions = [];

    for (let i = 0; i < questionsCount; i++) {
      const correctVerb = shuffled[i];
      const others = shuffleArray(
        filteredVerbs.filter((v) => v.id !== correctVerb.id)
      ).slice(0, 3);
      const options = shuffleArray([correctVerb, ...others]).map((v) => ({
        id: v.id,
        english: v.english,
      }));
      questions.push({ verb: correctVerb, options });
    }

    setQuizQuestions(questions);
    setQuizIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
    setQuizActive(true);
  };

  const handleAnswer = (optionId) => {
    const current = quizQuestions[quizIndex];
    if (!current) return;

    if (optionId === current.verb.id) {
      setQuizScore((s) => s + 1);
    }

    if (quizIndex + 1 >= quizQuestions.length) {
      setQuizFinished(true);
    } else {
      setQuizIndex((i) => i + 1);
    }
  };

  const resetQuiz = () => {
    setQuizActive(false);
    setQuizQuestions([]);
    setQuizIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const jumpToRandomVerb = () => {
    if (!filteredVerbs.length) return;
    const randomVerb =
      filteredVerbs[Math.floor(Math.random() * filteredVerbs.length)];
    setHighlightVerbId(randomVerb.id);
    const el = document.getElementById(`verb-card-${randomVerb.id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setHighlightVerbId(null), 1500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #111827, #1f2937)",
        padding: 20,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 900, width: "100%", margin: "0 auto" }}> {/* ⭐ CENTERED */}
        <h1 style={{ textAlign: "center", marginBottom: 10 }}>
          Study by Verb Form
        </h1>

        {!selectedForm && (
          <>
            <p style={{ textAlign: "center", fontSize: 18 }}>
              Choose a form to begin studying
            </p>

            <div style={gridStyle}>
              {forms.map((form) => (
                <div
                  key={form}
                  style={formButtonStyle(form)}
                  onClick={() => {
                    setSelectedForm(form);
                    setOpenExample(null);
                    resetQuiz();
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {form}
                </div>
              ))}
            </div>
          </>
        )}

        {selectedForm && (
          <>
            <button
              onClick={() => {
                setSelectedForm(null);
                setOpenExample(null);
                resetQuiz();
              }}
              style={{
                marginBottom: 20,
                padding: "10px 16px",
                fontSize: 16,
                borderRadius: 8,
                border: "1px solid #ccc",
                cursor: "pointer",
                background: "#f5f5f5",
              }}
            >
              ← Back to Forms
            </button>

            <h2 style={{ marginBottom: 10 }}>{selectedForm} Verbs</h2>

            <div
              style={{
                height: 12,
                background: "#eee",
                borderRadius: 8,
                marginBottom: 10,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: formColors[selectedForm],
                  transition: "0.4s",
                }}
              />
            </div>

            <p style={{ marginBottom: 16, fontSize: 16 }}>
              {studiedCount} / {totalCount} studied ({progress}%)
            </p>

            <div style={{ marginBottom: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                onClick={jumpToRandomVerb}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  background: "#fafafa",
                  cursor: "pointer",
                  fontSize: 15,
                }}
              >
                📝 Start mini quiz
              </button>

              {quizActive && (
                <button
                  onClick={resetQuiz}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    border: "1px solid #ccc",
                    background: "#fff",
                    cursor: "pointer",
                    fontSize: 15,
                  }}
                >
                  ✖ End quiz
                </button>
              )}
            </div>

            {quizActive && quizQuestions.length > 0 && (
              <div
                style={{
                  marginBottom: 24,
                  padding: 16,
                  borderRadius: 12,
                  border: `1px solid ${formColors[selectedForm]}`,
                  background: "#f9fbff",
                }}
              >
                {!quizFinished ? (
                  <>
                    <div style={{ marginBottom: 8, fontSize: 15 }}>
                      Question {quizIndex + 1} of {quizQuestions.length}
                    </div>
                    <div
                      style={{
                        fontSize: 26,
                        fontWeight: 700,
                        marginBottom: 12,
                        direction: "rtl",
                        textAlign: "right",
                      }}
                    >
                      {quizQuestions[quizIndex].verb.arabic}
                    </div>
                    <div style={{ marginBottom: 10, fontSize: 15 }}>
                      Choose the correct English meaning:
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {quizQuestions[quizIndex].options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleAnswer(opt.id)}
                          style={{
                            textAlign: "left",
                            padding: "8px 12px",
                            borderRadius: 8,
                            border: "1px solid #ccc",
                            background: "white",
                            cursor: "pointer",
                            fontSize: 15,
                          }}
                        >
                          {opt.english}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: 18, marginBottom: 8 }}>
                      Quiz finished!
                    </div>
                    <div style={{ fontSize: 16, marginBottom: 12 }}>
                      Score: {quizScore} / {quizQuestions.length}
                    </div>
                    <button
                      onClick={startQuiz}
                      style={{
                        padding: "8px 14px",
                        borderRadius: 8,
                        border: "none",
                        background: formColors[selectedForm],
                        color: "white",
                        cursor: "pointer",
                        fontSize: 15,
                        marginRight: 8,
                      }}
                    >
                      🔁 Restart quiz
                    </button>
                    <button
                      onClick={resetQuiz}
                      style={{
                        padding: "8px 14px",
                        borderRadius: 8,
                        border: "1px solid #ccc",
                        background: "#fff",
                        cursor: "pointer",
                        fontSize: 15,
                      }}
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            )}

            {filteredVerbs.length === 0 && <p>No verbs found for this form.</p>}

            {filteredVerbs.map((verb, index) => (
              <div
                key={index}
                id={`verb-card-${verb.id}`}
                style={cardStyle(verb)}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to={`/verb/${verb.id}`}
                    style={{ textDecoration: "none", color: "#000", flex: 1 }}
                  >
                    <div>
                      <div style={{ fontSize: 28, fontWeight: 700 }}>
                        {verb.arabic}
                      </div>
                      <div style={{ fontSize: 18, opacity: 0.7 }}>
                        {verb.english?.simple || verb.english?.detailed || ""}
                      </div>
                    </div>
                  </Link>

                  {/* Audio */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const audio = new Audio(`/audio/verbs/${verb.id}.mp3`);
                      audio.play();
                    }}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 26,
                      padding: 6,
                      transition: "0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    🔊
                  </button>

                  {/* ⭐ STUDY NOW — UPDATED */}
                  <button
                    onClick={() =>
                      navigate(`/flashcards?form=${selectedForm}&start=${verb.id}`)
                    }
                    style={{
                      padding: "8px 12px",
                      borderRadius: 8,
                      background: formColors[selectedForm],
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 14,
                      marginLeft: 10,
                    }}
                  >
                    Study Now
                  </button>
                </div>

                {/* Example */}
                {verb.example_ar && (
                  <div style={{ marginTop: 14 }}>
                    <button
                      onClick={() =>
                        setOpenExample(openExample === index ? null : index)
                      }
                      style={{
                        background: "#f0f0f0",
                        border: "1px solid #ccc",
                        padding: "6px 12px",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontSize: 14,
                      }}
                    >
                      {openExample === index ? "Hide example" : "Show example"}
                    </button>

                    {openExample === index && (
                      <div
                        style={{
                          marginTop: 12,
                          padding: 12,
                          background: "#fafafa",
                          borderRadius: 8,
                          border: "1px solid #eee",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 22,
                            fontWeight: 600,
                            marginBottom: 6,
                            direction: "rtl",
                            textAlign: "right",
                          }}
                        >
                          {verb.example_ar}
                        </div>

                        <div style={{ fontSize: 16, opacity: 0.8 }}>
                          {verb.example_en}
                        </div>

                        <button
                          onClick={() => {
                            const audio = new Audio(
                              `/audio/examples/${verb.id}.mp3`
                            );
                            audio.play();
                          }}
                          style={{
                            marginTop: 10,
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            fontSize: 22,
                          }}
                        >
                          🔊
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
