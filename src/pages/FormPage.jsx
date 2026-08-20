// src/pages/FormPage.jsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import { getTopicsForForm, matchesTopic } from "../utils/verbCatalog";

export default function FormPage() {
  const { formNumber } = useParams();
  const formLabel = `Form ${formNumber}`;
  const [selectedTopic, setSelectedTopic] = useState("all");

  const formVerbs = useMemo(
    () => verbs.filter((v) => v.form === formLabel),
    [formLabel]
  );

  const allTopics = useMemo(() => getTopicsForForm(formLabel, verbs), [formLabel]);

  const visibleVerbs = useMemo(
    () => formVerbs.filter((verb) => matchesTopic(verb, selectedTopic)),
    [formVerbs, selectedTopic]
  );

  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      
      {/* ⭐ Back to Forms I–X */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link
          to="/forms"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          ← Back to Forms I–X
        </Link>
      </div>

      <h1 style={{ textAlign: "center", marginBottom: 20 }}>{formLabel}</h1>

      {/* ⭐ Centered Difficulty Buttons with Icons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "300px",
          margin: "0 auto 40px auto",
        }}
      >
        <Link to={`/forms/${formNumber}/easy`} style={difficultyButton}>
          🌱 Easy Verbs
        </Link>

        <Link to={`/forms/${formNumber}/medium`} style={difficultyButton}>
          ⚖️ Medium Verbs
        </Link>

        <Link to={`/forms/${formNumber}/hard`} style={difficultyButton}>
          🔥 Hard Verbs
        </Link>
      </div>

      {/* ⭐ Topic filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: 24,
        }}
      >
        <button
          onClick={() => setSelectedTopic("all")}
          style={{
            border: "1px solid #4b5563",
            borderRadius: "999px",
            padding: "6px 14px",
            background: selectedTopic === "all" ? "#0A1A3A" : "transparent",
            color: selectedTopic === "all" ? "white" : "#e5e7eb",
          }}
        >
          All topics
        </button>

        {allTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            style={{
              border: "1px solid #4b5563",
              borderRadius: "999px",
              padding: "6px 14px",
              background: selectedTopic === topic ? "#0A1A3A" : "transparent",
              color: selectedTopic === topic ? "white" : "#e5e7eb",
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "12px" }}>
        {visibleVerbs.length === 0 ? (
          <div style={{ textAlign: "center", color: "#d1d5db" }}>
            No verbs found for this selection.
          </div>
        ) : (
          visibleVerbs.map((verb) => (
            <Link
              key={verb.id}
              to={`/verb/${verb.id}`}
              style={{
                background: "#0A1A3A",
                border: "1px solid #1f2937",
                borderRadius: "10px",
                padding: "14px 16px",
                color: "white",
                textDecoration: "none",
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 600 }}>{verb.english}</div>
              <div style={{ marginTop: 4, fontSize: 18 }}>{verb.arabic}</div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

const difficultyButton = {
  background: "#0A1A3A",
  color: "white",
  padding: "14px 20px",
  borderRadius: "10px",
  textDecoration: "none",
  textAlign: "center",
  fontSize: "18px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  transition: "0.2s",
};
