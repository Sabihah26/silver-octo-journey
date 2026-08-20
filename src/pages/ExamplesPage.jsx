// src/pages/ExamplesPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ExamplesPage() {
  const examples = [
    {
      id: 1,
      arabic: "أَكَلَ الطِّفْلُ التُّفَّاحَةَ.",
      english: "The child ate the apple.",
      note: "Past tense verb with object.",
    },
    {
      id: 2,
      arabic: "يَذْهَبُ الرَّجُلُ إِلَى السُّوقِ.",
      english: "The man goes to the market.",
      note: "Present tense with prepositional phrase.",
    },
    {
      id: 3,
      arabic: "الطَّالِبَةُ مُجْتَهِدَةٌ جِدًّا.",
      english: "The female student is very hardworking.",
      note: "Nominal sentence with emphasis.",
    },
  ];

  return (
    <div style={pageContainer}>
      <h1 style={title}>Examples</h1>
      <p style={subtitle}>
        Study real Arabic sentences with translations and notes.
      </p>

      <div style={{ marginTop: 20 }}>
        {examples.map((ex) => (
          <div key={ex.id} style={card}>
            <div style={arabicText}>{ex.arabic}</div>
            <div style={englishText}>{ex.english}</div>
            <div style={noteText}>{ex.note}</div>
          </div>
        ))}
      </div>

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
  maxWidth: 700,
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

const card = {
  padding: 16,
  marginBottom: 12,
  borderRadius: 8,
  background: "#f9f9ff",
  border: "1px solid #ddd",
};

const arabicText = {
  fontSize: 24,
  direction: "rtl",
  textAlign: "right",
};

const englishText = {
  marginTop: 6,
  fontSize: 18,
};

const noteText = {
  marginTop: 4,
  fontSize: 14,
  opacity: 0.7,
};

const backLink = {
  fontSize: 18,
  textDecoration: "none",
  color: "#007bff",
};
