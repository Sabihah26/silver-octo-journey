import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import conjugate from "../utils/conjugate";
import AudioPlayer from "../components/AudioPlayer";

export default function FlashcardsPassivePastPage() {
  const { state } = useLocation();
  const { verb, root, form } = state || {};

  const [showAnswer, setShowAnswer] = useState(false);
  const [index, setIndex] = useState(0);

  if (!verb || !root || !form) {
    return (
      <div style={{ padding: 20 }}>
        <h2>No verb selected for flashcards.</h2>
        <Link to="/">Back to Dictionary</Link>
      </div>
    );
  }

  const result = conjugate(root, form);
  const passivePast = result?.tables?.passivePast || {};
  const entries = Object.entries(passivePast);

  if (entries.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h2>No passive past forms available for flashcards.</h2>
        <Link to="/verb-summary" state={{ verb, root, form }}>
          Back to Summary
        </Link>
      </div>
    );
  }

  const [pronoun, formValue] = entries[index];

  const nextCard = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % entries.length);
  };

  return (
    <div style={{ padding: 20, fontSize: 22 }}>
      <h1 style={{ fontSize: 36 }}>Flashcards — Passive Past</h1>
      <p><strong>Verb:</strong> {verb}</p>

      <div
        style={{
          marginTop: 30,
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

        <button
          onClick={nextCard}
          style={{
            marginTop: 10,
            marginLeft: 10,
            padding: "8px 16px",
            fontSize: 20,
          }}
        >
          Next
        </button>
      </div>

      <div style={{ marginTop: 30 }}>
        <Link to="/verb-summary" state={{ verb, root, form }}>
          ← Back to Summary
        </Link>
      </div>
    </div>
  );
}
