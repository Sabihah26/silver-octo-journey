// src/pages/TopicStudyPage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import nouns from "../data/nouns";

export default function TopicStudyPage() {
  const { category, topic } = useParams();

  if (!topic) {
    return (
      <div style={{ padding: "40px", color: "white" }}>
        <h2>Topic not found</h2>
        <Link to="/topics" style={{ color: "white", textDecoration: "underline" }}>
          ← Back to Topics
        </Link>
      </div>
    );
  }

  const topicNouns = nouns.filter(
    (noun) => noun.topics && noun.topics.includes(topic)
  );

  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link
          to="/topics"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          ← Back to Topics
        </Link>
      </div>

      <h1 style={{ textAlign: "center", marginBottom: 10 }}>
        Study: {formatTopicName(topic)}
      </h1>

      <p style={{ textAlign: "center", marginBottom: 30, opacity: 0.9 }}>
        Learn all nouns related to this topic.
      </p>

      <div style={studyList}>
        {topicNouns.map((noun) => (
          <div key={noun.id} style={studyCard}>
            
            {noun.icon && (
              <div style={{ fontSize: "30px", marginBottom: "10px" }}>
                {noun.icon}
              </div>
            )}

            <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "6px" }}>
              {noun.english}
            </div>

            <div style={{ fontSize: "40px", opacity: 0.9 }}>
              {noun.arabic}
            </div>

            <Link
              to={`/noun/${noun.id}`}
              style={{
                marginTop: "12px",
                color: "#1E3A8A",
                textDecoration: "underline",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatTopicName(key) {
  if (!key || typeof key !== "string") return "";
  return key.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatCategoryName(key) {
  if (!key || typeof key !== "string") return "";
  return key.charAt(0).toUpperCase() + key.slice(1);
}

/* ⭐ EXACTLY 4 CARDS PER ROW + adjustable width */
const studyList = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(260px, 1fr))",  // ⭐ Change 260px to adjust width
  gap: "20px",
  maxWidth: "1400px",
  margin: "0 auto",
};

/* ⭐ Clean card */
const studyCard = {
  minHeight: "200px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#222222",
};
