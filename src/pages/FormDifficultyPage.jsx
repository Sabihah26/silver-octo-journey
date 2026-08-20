// src/pages/FormDifficultyPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";

export default function FormDifficultyPage() {
  const { formNumber, difficulty } = useParams();
  const formLabel = `Form ${formNumber}`;

  // ⭐ FIX: Verbs do NOT have difficulty levels
  // So we filter ONLY by form, not difficulty
  const filtered = verbs.filter(
    (v) => v.form === formLabel
  );

  // Extract real topics
  const realTopics = Array.from(
    new Set(
      filtered.flatMap((v) =>
        Array.isArray(v.topics) ? v.topics : []
      )
    )
  ).sort();

  // Fallback topics
  const fallbackTopics = [
    "Daily Life",
    "Travel",
    "Food",
    "Emotions",
    "School",
    "Work",
    "Nature",
  ];

  const topicsToShow = realTopics.length > 0 ? realTopics : fallbackTopics;

  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      
      {/* Back buttons */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link
          to="/forms"
          style={{ color: "white", textDecoration: "underline", marginRight: 20 }}
        >
          ← Back to Forms I–X
        </Link>

        <Link
          to={`/forms/${formNumber}`}
          style={{ color: "white", textDecoration: "underline" }}
        >
          ← Back to Difficulty
        </Link>
      </div>

      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        {formLabel} — {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </h1>

      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Choose a topic
      </h2>

      {/* Topic Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {topicsToShow.map((topic) => (
          <Link
            key={topic}
            to={`/forms/${formNumber}/${difficulty}/${topic}`}
            style={{
              background: "#0A1A3A",
              color: "white",
              padding: "10px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            📘 {topic}
          </Link>
        ))}
      </div>
    </div>
  );
}
