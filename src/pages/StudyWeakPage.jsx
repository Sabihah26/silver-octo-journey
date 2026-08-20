// src/pages/StudyWeakPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import verbs from "../data/verbs";
import conjugate from "../utils/conjugate";

import { colorizeArabic } from "../engine/vowelColorizer";
import { transliterate } from "../engine/transliterate";

export default function StudyWeakPage() {
  // Filter weak verbs using your conjugation engine
  const weakVerbs = verbs.filter((v) => {
    const formKey = v.form.replace("Form", "").trim();
    const c = conjugate(v.root, formKey);
    return c.weakType !== "sound";
  });

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = weakVerbs[index];

  // Generate conjugation for this verb
  const formKey = current.form.replace("Form", "").trim();
  const c = conjugate(current.root, formKey);

  function nextCard() {
    setShowAnswer(false);
    setIndex((i) => (i + 1) % weakVerbs.length);
  }

  return (
    <div style={wrap}>
      <Link to="/" style={back}>← Back</Link>

      <h2>Weak Verbs Only</h2>

      <div style={card}>
        {/* Arabic past form */}
        <div
          style={arabic}
          dangerouslySetInnerHTML={{
            __html: colorizeArabic(c.past["هو"]),
          }}
        />

        {/* Transliteration */}
        <div style={translit}>{transliterate(c.past["هو"])}</div>

        {/* Meaning */}
        {showAnswer && <div style={meaning}>{current.english}</div>}

        {!showAnswer ? (
          <button style={btnShow} onClick={() => setShowAnswer(true)}>
            Show Meaning
          </button>
        ) : (
          <button style={btnNext} onClick={nextCard}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

const wrap = { padding: 20, maxWidth: 600, margin: "0 auto" };
const back = {
  display: "inline-block",
  marginBottom: 20,
  color: "#007bff",
  textDecoration: "none",
};
const card = {
  padding: 30,
  borderRadius: 12,
  background: "#fff",
  border: "1px solid #ddd",
  textAlign: "center",
};
const arabic = { fontSize: 42, direction: "rtl", marginBottom: 10 };
const translit = { fontSize: 18, color: "#666", marginBottom: 20 };
const meaning = { fontSize: 22, marginBottom: 20 };
const btnShow = {
  padding: "10px 20px",
  fontSize: 18,
  borderRadius: 8,
  background: "#007bff",
  color: "#fff",
  border: "none",
};
const btnNext = {
  padding: "10px 20px",
  fontSize: 18,
  borderRadius: 8,
  background: "#28a745",
  color: "#fff",
  border: "none",
};
