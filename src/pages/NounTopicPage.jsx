// src/pages/NounTopicPage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";

/* ⭐ CATEGORY‑SPECIFIC TOPICS */
const topicsByCategory = {
  food: [
    "vegetables",
    "fruits",
    "drinks",
    "ingredients",
    "meals",
    "kitchen-items",
  ],

  nature: [
    "animals",
    "plants",
    "flowers",
    "weather",
    "landscapes",
  ],

  household: [
    "furniture",
    "objects",
    "appliances",
    "rooms",
    "cleaning",
    "kitchen",
  ],

  places: [
    "transport",
    "buildings",
    "public-places",
    "travel",
    "geography",
  ],

  tools: [
    "hand-tools",
    "outdoor-tools",
    "repair-tools",
    "accessories",
  ],

  school: [
    "stationery",
    "furniture",
    "subjects",
    "people",
    "places",
  ],

  work: [
    "office",
    "technology",
    "tasks",
    "tools",
  ],

  people: [
    "roles",
    "family",
    "school",
    "work",
  ],

  abstract: [
    "time",
    "numbers",
    "qualities",
    "emotions",
    "ideas",
  ],
};

export default function NounTopicPage() {
  const { category } = useParams();

  const topics = topicsByCategory[category] || [];

  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      
      {/* Back to category list */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link
          to="/nouns"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          ← Back to Categories
        </Link>
      </div>

      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        {category.charAt(0).toUpperCase() + category.slice(1)} Topics
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {topics.map((topic) => (
          <Link
            key={topic}
            to={`/nouns/category/${category}/topic/${topic}`}
            style={topicButton}
          >
            {topic}
          </Link>
        ))}
      </div>
    </div>
  );
}

const topicButton = {
  border: "1px solid #4b5563",
  borderRadius: "999px",
  padding: "10px 18px",
  background: "transparent",
  color: "#e5e7eb",
  textDecoration: "none",
  fontSize: "16px",
};
