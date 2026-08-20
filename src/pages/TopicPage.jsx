// src/pages/TopicPage.jsx
import React from "react";
import { Link } from "react-router-dom";

/* Dark Blue Folder Icon */
const BlueFolderIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="#0A1A3A"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "8px", verticalAlign: "middle" }}
  >
    <path d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" />
  </svg>
);

/* ⭐ Updated topics with emojis */
const topics = [
  { key: "kitchen", label: "Kitchen", emoji: "🍽️" },
  { key: "furniture", label: "Furniture", emoji: "🪑" },
  { key: "rooms", label: "Rooms", emoji: "🚪" },
  { key: "appliances", label: "Appliances", emoji: "🔌" },
  { key: "cleaning", label: "Cleaning", emoji: "🧹" },
  { key: "animals", label: "Animals", emoji: "🐾" },
  { key: "plants", label: "Plants", emoji: "🌿" },
  { key: "landscapes", label: "Landscapes", emoji: "🏞️" },
  { key: "weather", label: "Weather", emoji: "🌦️" },
  { key: "geography", label: "Geography", emoji: "🌍" },
  { key: "public-places", label: "Public Places", emoji: "🏙️" },
  { key: "buildings", label: "Buildings", emoji: "🏢" },
  { key: "family", label: "Family", emoji: "👨‍👩‍👧" },
  { key: "school", label: "School", emoji: "🏫" },
  { key: "stationery", label: "Stationery", emoji: "✏️" },
  { key: "roles", label: "Roles", emoji: "🧑‍🏭" },
  { key: "work", label: "Work", emoji: "💼" },
  { key: "office", label: "Office", emoji: "📎" },
  { key: "tools", label: "Tools", emoji: "🛠️" },
  { key: "hand-tools", label: "Hand Tools", emoji: "🔧" },
  { key: "repair-tools", label: "Repair Tools", emoji: "🔩" },
  { key: "outdoor-tools", label: "Outdoor Tools", emoji: "🪓" },
  { key: "accessories", label: "Accessories", emoji: "🎒" },
  { key: "time", label: "Time", emoji: "⏰" },
  { key: "numbers", label: "Numbers", emoji: "🔢" },
  { key: "ideas", label: "Ideas", emoji: "💡" },
  { key: "qualities", label: "Qualities", emoji: "⭐" },
  { key: "emotions", label: "Emotions", emoji: "❤️" }
];

export default function TopicPage() {
  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      
      {/* Back to Noun Categories */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link
          to="/nouns"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          ← Back to Noun Categories
        </Link>
      </div>

      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Learning Topics</h1>

      {/* Responsive grid */}
      <div style={gridContainer}>
        {topics.map((topic) => (
          <Link
            key={topic.key}
            to={`/topics/${topic.key}/study`}
            style={topicTile}
          >
            <span style={{ fontSize: "24px", marginRight: "8px" }}>
              {topic.emoji}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {topic.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ⭐ 7-column responsive grid */
const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(120px, 1fr))",
  gap: "16px",
  maxWidth: "1200px",
  margin: "0 auto",
};

/* ⭐ Grey tile instead of gold */
const topicTile = {
  background: "#D1D5DB", // light grey
  color: "#1A1A1A",
  padding: "16px 20px",
  borderRadius: "10px",
  textDecoration: "none",
  textAlign: "center",
  minHeight: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  transition: "0.2s",
};
