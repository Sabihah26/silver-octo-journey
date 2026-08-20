// src/pages/StudyDuePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getDueItems, getItemSRS, updateSRS } from "../utils/srsEngine";
import verbs from "../data/verbs";
import AudioPlayer from "../components/AudioPlayer";

export default function StudyDuePage() {
  const due = getDueItems(); // [{ verbKey, score, nextReview }]
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  if (due.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h1 style={{ fontSize: 36 }}>Study Due Verbs</h1>
        <p>No verbs are due today. 🎉</p>
        <Link to="/mastery">Back to Mastery Dashboard</Link>
      </div>
    );
  }

  const current = due[index];
  const verbKey = current.verbKey;

  // SRS key is the verb id; convert to number to match verbs.js
  const verbData =
    verbs.find((v) => v.id === Number(verbKey)) || verbs[0];

  const record = getItemSRS(verbKey);

  const pronoun = "هُوَ";
  const formValue = verbData.past;

  const nextVerb = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % due.length);
  };

  const handleCorrect = () => {
    updateSRS(verbKey, true);
    nextVerb();
  };

  const handleWrong = () => {
    updateSRS(verbKey, false);
    nextVerb();
  };

  return (
    <div style={{ padding: 20, fontSize: 22 }}>
      <h1 style={{ fontSize: 36 }}>Study Due Verbs</h1>

      <p>
        <strong>Verb:</strong> {verbData.arabic} — {verbData.english}
      </p>
      <p>
        <strong>Mastery score:</strong> {record.score}
      </p>
      <p>
        <strong>Next review:</strong>{" "}
        {new Date(record.nextReview).toLocaleDateString()}
      </p>

      <div
        style={{
          marginTop: 20,
          padding: 20,
          border: "1px solid #ccc",
          borderRadius: 8,
          maxWidth: 420,
        }}
      >
        <p style={{ fontSize: 26 }}>
          <strong>Pronoun:</strong> {pronoun}
        </p>

        <AudioPlayer label="Speak pronoun" text={pronoun} />

        {showAnswer ? (
          <p style={{ fontSize: 30, marginTop: 10 }}>{formValue}</p>
        ) : (
          <p style={{ marginTop: 10, color: "#777" }}>Tap to reveal answer</p>
        )}

        {showAnswer && (
          <>
            <AudioPlayer label="Speak answer" text={formValue} />
            <AudioPlayer
              label="Speak both"
              text={`${pronoun} ${formValue}`}
            />
          </>
        )}

        <button
          onClick={() => setShowAnswer((v) => !v)}
          style={{ marginTop: 15, padding: "8px 16px", fontSize: 20 }}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        {showAnswer && (
          <div style={{ marginTop: 15 }}>
            <button
              onClick={handleCorrect}
              style={{
                padding: "8px 16px",
                fontSize: 20,
                marginRight: 10,
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              I knew it ✅
            </button>

            <button
              onClick={handleWrong}
              style={{
                padding: "8px 16px",
                fontSize: 20,
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              I didn’t know ❌
            </button>
          </div>
        )}

        {!showAnswer && (
          <button
            onClick={nextVerb}
            style={{
              marginTop: 15,
              padding: "8px 16px",
              fontSize: 20,
            }}
          >
            Skip / Next
          </button>
        )}
      </div>

      <div style={{ marginTop: 30 }}>
        <Link to="/mastery">← Back to Mastery Dashboard</Link>
      </div>
    </div>
  );
}
