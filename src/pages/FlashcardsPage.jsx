// src/pages/FlashcardsPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import verbs from "../data/verbs";
import nouns from "../data/nouns";
import adverbs from "../data/Adverbs";

export default function FlashcardsPage() {
  // ⭐ URL PARAMS
  const params = new URLSearchParams(window.location.search);
  const formFilter = params.get("form");   // e.g. "Form I"
  const startId = params.get("start");     // e.g. "3"

  // ⭐ TOGGLE
  const [showRelated, setShowRelated] = useState(false);

  // ⭐ BUILD VERB CARDS
  let verbCards = verbs.map((v) => ({
    type: "verb",
    id: v.id,
    form: v.form,
    arabic: v.arabic,
    english: v.english,
  }));

  // ⭐ STRICT FILTERING WHEN FORM IS PASSED
  if (formFilter) {
    verbCards = verbCards.filter((c) => c.form === formFilter);
  }

  // ⭐ RELATED VOCABULARY (ONLY WHEN TOGGLE IS ON)
  let relatedCards = [];

  if (showRelated && formFilter) {
    relatedCards = [
      ...nouns.map((n) => ({
        type: "noun",
        arabic: n.arabic,
        english: n.english,
      })),
      ...adverbs.map((a) => ({
        type: "adverb",
        arabic: a.arabic,
        english: a.english,
      })),
    ];
  }

  // ⭐ FINAL ORDER: VERBS FIRST → THEN NOUNS → THEN ADVERBS
  const allCards = [...verbCards, ...relatedCards];

  // ⭐ START INDEX
  let initialIndex = 0;

  if (startId) {
    const foundIndex = allCards.findIndex((c) => c.id === Number(startId));
    if (foundIndex !== -1) {
      initialIndex = foundIndex;
    }
  }

  const [index, setIndex] = useState(initialIndex);
  const [showEnglish, setShowEnglish] = useState(false);

  const current = allCards[index] || null;

  const nextCard = () => {
    setShowEnglish(false);
    setIndex((prev) => (prev + 1) % allCards.length);
  };

  if (!current) {
    return (
      <div style={pageContainer}>
        <h1 style={title}>Flashcards</h1>
        <p>No cards available.</p>
        <Link to="/" style={backLink}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={pageContainer}>
      <h1 style={title}>Flashcards</h1>

      {/* ⭐ TOGGLE BUTTON */}
      {formFilter && (
        <button
          onClick={() => setShowRelated((s) => !s)}
          style={{
            marginTop: 10,
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid #ccc",
            background: showRelated ? "#007bff" : "#f5f5f5",
            color: showRelated ? "white" : "black",
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          {showRelated ? "Hide related vocabulary" : "Show related vocabulary"}
        </button>
      )}

      <p style={subtitle}>Tap to reveal the meaning.</p>

      <div style={card} onClick={() => setShowEnglish((s) => !s)}>
        <div style={tag}>{current.type.toUpperCase()}</div>
        <div style={arabicText}>{current.arabic}</div>
        {showEnglish && <div style={englishText}>{current.english}</div>}
        {!showEnglish && (
          <div style={hint}>Tap to show translation</div>
        )}
      </div>

      <button style={primaryBtn} onClick={nextCard}>
        Next Card
      </button>

      <div style={{ marginTop: 30 }}>
        <Link to="/" style={backLink}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

const pageContainer = {
  padding: 20,
  maxWidth: 500,
  margin: "0 auto",
  textAlign: "center",
};

const title = {
  fontSize: 32,
   color: "white",
  marginBottom: 10,
};

const subtitle = {
  fontSize: 18,
   color: "white",
  opacity: 0.8,
};

const card = {
  marginTop: 20,
  padding: 24,
   color: "black",
  borderRadius: 12,
  background: "white",
  border: "1px solid #ddd",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  cursor: "pointer",
};

const tag = {
  fontSize: 12,
  padding: "4px 8px",
  borderRadius: 999,
  background: "#eef",
  display: "inline-block",
  marginBottom: 10,
};

const arabicText = {
  fontSize: 32,
  direction: "rtl",
  textAlign: "center",
};

const englishText = {
  marginTop: 10,
  fontSize: 20,
};

const hint = {
  marginTop: 10,
  fontSize: 14,
  opacity: 0.6,
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
