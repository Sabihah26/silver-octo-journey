// src/pages/GrammarPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function GrammarPage() {
  const topics = [
    {
      id: 1,
      title: "Verb Forms (الأوزان)",
      description:
        "Overview of Form I–X with patterns, meanings, and common usage.",
    },
    {
      id: 2,
      title: "Nominal Sentences (الجملة الاسمية)",
      description:
        "How to build sentences without verbs using مبتدأ and خبر.",
    },
    {
      id: 3,
      title: "Verbal Sentences (الجملة الفعلية)",
      description:
        "Word order, subject, object, and agreement in verbal sentences.",
    },
    {
      id: 4,
      title: "Definiteness (المعرفة والنكرة)",
      description:
        "Using ال, proper nouns, and context to mark definiteness.",
    },
  ];

  return (
    <div style={pageContainer}>
      <h1 style={title}>Grammar Lessons</h1>
      <p style={subtitle}>
        Learn the core structures of Arabic step by step.
      </p>

      <div style={{ marginTop: 20 }}>
        {topics.map((t) => (
          <div key={t.id} style={card}>
            <h2 style={topicTitle}>{t.title}</h2>
            <p style={topicDesc}>{t.description}</p>
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
  background: "#f8fffa",
  border: "1px solid #d6f5dd",
};

const topicTitle = {
  fontSize: 22,
  marginBottom: 6,
};

const topicDesc = {
  fontSize: 16,
  opacity: 0.85,
};

const backLink = {
  fontSize: 18,
  textDecoration: "none",
  color: "#007bff",
};
