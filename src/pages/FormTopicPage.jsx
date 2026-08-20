// src/pages/FormTopicPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import { normalizeTopicKey } from "../utils/verbCatalog";

export default function FormTopicPage() {
  const { formNumber, difficulty, topic } = useParams();
  const formLabel = `Form ${formNumber}`;

  const normalizedTopic = normalizeTopicKey(topic);

  const filtered = verbs.filter((v) => {
    if (v.form !== formLabel) return false;

    const topicValues = Array.isArray(v.topics)
      ? v.topics
      : v.topic
        ? [v.topic]
        : [];

    return topicValues.some((entry) => normalizeTopicKey(entry) === normalizedTopic);
  });

  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        {formLabel} — {difficulty} — {topic}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {filtered.length === 0 ? (
          <p style={{ color: "#9ca3af" }}>No verbs yet.</p>
        ) : (
          filtered.map((verb) => (
            <Link
              key={verb.id}
              to={`/verb/${verb.id}`}
              style={{
                background: "white",
                color: "#0A1A3A",
                padding: "16px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  textAlign: "right",
                }}
              >
                {verb.arabic}
              </div>
              <div style={{ fontSize: 16 }}>{verb.english}</div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
