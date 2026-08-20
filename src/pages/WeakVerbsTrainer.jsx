// src/pages/WeakVerbTrainer.jsx
import React, { useState, useEffect } from "react";
import verbs from "../data/verbs";
import detectWeak from "../utils/detectWeak";
import { Link } from "react-router-dom";

export default function WeakVerbTrainer() {
  const [current, setCurrent] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);

  // ⭐ ADDED "sound"
  const weakTypes = {
    sound: "Sound (صحيح)",
    hollow: "Hollow (أجوف)",
    defective: "Defective (ناقص)",
    assimilated: "Assimilated (مثال)",
    doubled: "Doubled (مضعّف)",
    hamzated: "Hamzated (مهموز)",
  };

  function loadVerb() {
    // include sound verbs too
    const weakVerbs = verbs.filter((v) => detectWeak(v.root) !== null);
    const random = weakVerbs[Math.floor(Math.random() * weakVerbs.length)];

    setCurrent({
      ...random,
      weakType: detectWeak(random.root),
    });

    setAnswer("");
    setFeedback(null);
  }

  useEffect(() => {
    loadVerb();
  }, []);

  function checkAnswer() {
    if (!current) return;

    if (answer === current.weakType) {
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
  }

  return (
    <div
      style={{
        background: "#0A1A3A",
        minHeight: "100vh",
        padding: 20,
        color: "white",
      }}
    >
      {/* ⭐ UPDATED TITLE */}
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Weak Verbs Quiz
      </h1>

      {!current ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            background: "#FFFFFF",
            padding: 30,
            borderRadius: 20,
            maxWidth: 500,
            margin: "0 auto",
            textAlign: "center",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            color: "#0A1A3A",
          }}
        >
          {/* BADGE */}
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 999,
              background: "#E5E7EB",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              marginBottom: 12,
            }}
          >
            WEAK VERB
          </div>

          {/* MAIN ARABIC VERB */}
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: "#111827",
              marginBottom: 6,
            }}
          >
            {current.past || current.arabic}
          </div>

          {/* ENGLISH MEANING — ⭐ FIXED */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 10,
            }}
          >
            {current.english?.simple ||
              current.english?.detailed ||
              current.english ||
              ""}
          </div>

          {/* ROOT + FORM */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#1F2937",
              marginTop: 10,
            }}
          >
            Root: {current.root.split("").join(" - ")}
          </div>

          <div
            style={{
              fontSize: 16,
              color: "#6B7280",
              marginTop: 4,
            }}
          >
            Form {current.form}
          </div>

          {/* QUESTION */}
          <h3
            style={{
              marginTop: 25,
              fontSize: 20,
              color: "#0A1A3A",
              fontWeight: 700,
            }}
          >
            What type of weak verb is this?
          </h3>

          {/* SELECT */}
          <select
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{
              padding: 12,
              borderRadius: 10,
              marginTop: 10,
              width: "100%",
              fontSize: 16,
              border: "1px solid #D1D5DB",
            }}
          >
            <option value="">Select type…</option>

            {/* ⭐ NOW INCLUDES SOUND */}
            {Object.keys(weakTypes).map((t) => (
              <option key={t} value={t}>
                {weakTypes[t]}
              </option>
            ))}
          </select>

          {/* CHECK BUTTON */}
          <button
            onClick={checkAnswer}
            style={{
              marginTop: 20,
              padding: "12px 16px",
              background: "#10B981",
              border: "none",
              borderRadius: 10,
              color: "white",
              fontSize: 18,
              cursor: "pointer",
              width: "100%",
              fontWeight: 700,
            }}
          >
            Check
          </button>

          {/* FEEDBACK */}
          {feedback === "correct" && (
            <div style={{ marginTop: 20, color: "#059669", fontSize: 20 }}>
              ✔ Correct!
            </div>
          )}

          {feedback === "wrong" && (
            <div style={{ marginTop: 20, color: "#DC2626", fontSize: 20 }}>
              ✘ Incorrect — Correct answer:{" "}
              <strong>
                {weakTypes[current.weakType] || current.weakType}
              </strong>
            </div>
          )}

          {/* NEXT BUTTON */}
          {(feedback === "correct" || feedback === "wrong") && (
            <button
              onClick={loadVerb}
              style={{
                marginTop: 20,
                padding: "12px 16px",
                background: "#3B82F6",
                border: "none",
                borderRadius: 10,
                color: "white",
                fontSize: 18,
                cursor: "pointer",
                width: "100%",
                fontWeight: 700,
              }}
            >
              Next Verb →
            </button>
          )}
        </div>
      )}

      <Link
        to="/"
        style={{
          display: "block",
          marginTop: 30,
          textAlign: "center",
          color: "#9BB8FF",
          textDecoration: "underline",
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
