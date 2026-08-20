// src/pages/WordOfTheDayPage.jsx
import React from "react";
import { Link } from "react-router-dom";

import { loadWordOfTheDay } from "../utils/wordOfTheDay";
import { colorizeArabic } from "../engine/vowelColorizer";
import { transliterate } from "../engine/transliterate";

export default function WordOfTheDayPage() {
  const word = loadWordOfTheDay();

  console.log("WORD OF THE DAY:", word); // ⭐ DEBUG

  return (
    <div style={wrap}>

      {/* ⭐ Back link with hover colour */}
      <Link
        to="/"
        style={{ ...back }}
        onMouseEnter={(e) => (e.target.style.color = "#d4af37")}   // gold on hover
        onMouseLeave={(e) => (e.target.style.color = back.color)} // return to original
      >
        ← Back
      </Link>

      <h1>Word of the Day</h1>

      <div style={card}>
        {/* Arabic */}
        <div
          style={arabic}
          dangerouslySetInnerHTML={{ __html: colorizeArabic(word.arabic) }}
        />

        {/* Transliteration */}
        <div style={translit}>{transliterate(word.arabic)}</div>

        {/* English meaning */}
        <div style={meaning}>{word.english}</div>

        <Link to={`/verb/${word.id}`} style={btn}>
          View Full Entry
        </Link>
      </div>
    </div>
  );
}

const wrap = { padding: 20, maxWidth: 600, margin: "0 auto", textAlign: "center" };

const back = {
  display: "inline-block",
  marginBottom: 20,
  textDecoration: "none",
   fontSize: 25,
  color: "#b2d5f9", // ⭐ original colour (blue)
};

const card = {
  padding: 30,
  borderRadius: 12,
  background: "#fff",
  border: "1px solid #ddd",
  textAlign: "center",
};

const arabic = {
  fontSize: 42,
  direction: "rtl",
  marginBottom: 10,
  color: "#d02b2b",
};

const translit = { fontSize: 18, color: "#666", marginBottom: 20 };

const meaning = { fontSize: 22, marginBottom: 20 };

const btn = {
  padding: "10px 20px",
  background: "#007bff",
  color: "#fff",
  borderRadius: 8,
  textDecoration: "none",
  fontSize: 18,
};
