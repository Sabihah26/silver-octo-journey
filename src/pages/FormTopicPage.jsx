// src/pages/FormTopicPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import { normalizeTopicKey } from "../utils/verbCatalog";

// Convert 1–10 → I–X
const romanMap = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
};

export default function FormTopicPage() {
  const { formNumber, difficulty, topic } = useParams();

  // ⭐ FIX: Correct form label
  const formLabel = `Form ${romanMap[Number(formNumber)]}`;

  const normalizedTopic = normalizeTopicKey(topic);

  // ⭐ FIX: Correct filtering
  const filtered = verbs.filter((v) => {
    if (v.form !== formLabel) return false;

    const topicValues = Array.isArray(v.topics)
      ? v.topics
      : v.topic
      ? [v.topic]
      : [];

    return topicValues.some(
      (entry) => normalizeTopicKey(entry) === normalizedTopic
    );
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
              {/* ⭐ FIX: Arabic must use .simple or .past */}
              <div
                style={{
                  fontSize: 42,
                  fontWeight: 700,
                  textAlign: "right",
                }}
              >
                {verb.arabic?.simple || verb.arabic?.past}
              </div>

              {/* ⭐ FIX: English must use .simple */}
              <div style={{ fontSize: 20, marginTop: 6 }}>
                {verb.english?.simple}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
