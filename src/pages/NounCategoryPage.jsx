// src/pages/NounCategoryPage.jsx
import React from "react";
import { Link } from "react-router-dom";

/* White Folder SVG Icon */
const WhiteFolderIcon = () => (
  <svg
    width="28"   // bigger icon
    height="28"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "8px", verticalAlign: "middle" }}
  >
    <path d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" />
  </svg>
);

const categories = [
  { key: "food", label: "Food", icon: "🍽️" },
  { key: "animals", label: "Animals", icon: "🐾" },
  { key: "household", label: "Household", icon: "🏠" },
  { key: "places", label: "Places", icon: "🌍" },
  { key: "nature", label: "Nature", icon: "🌿" },
  { key: "people", label: "People", icon: "👥" },
  { key: "work", label: "Work", icon: "💼" },
  { key: "school", label: "School", icon: "📚" },
  { key: "abstract", label: "Abstract", icon: "🧠" },
  { key: "tools", label: "Tools", icon: "🛠" },
];

export default function NounCategoryPage() {
  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      
      {/* Back to main nouns */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link
          to="/nouns"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          ← Back to All Nouns
        </Link>
      </div>

      {/* Category Section */}
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Noun Categories</h1>

      <div style={gridContainer}>
        {categories.map((cat) => (
          <Link
            key={cat.key}
            to={`/nouns/category/${cat.key}`}
            style={categoryButton}
          >
            <span style={{ fontSize: "22px" }}>{cat.icon}</span> {/* bigger icon */}
            <span style={{ fontSize: "20px", marginLeft: "6px" }}>{cat.label}</span> {/* bigger text */}
          </Link>
        ))}
      </div>

      {/* Learning Topics Section */}
      <h2 style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px" }}>
        Learning Topics
      </h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/topics" style={topicsButton}>
          <WhiteFolderIcon />
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>Topics</span>
        </Link>
      </div>
    </div>
  );
}

/* Responsive grid: 3 columns → 2 columns → 1 column */
const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "16px",
  maxWidth: "500px",
  margin: "0 auto",
};

/* Category button style */
const categoryButton = {
  background: "#0A1A3A",
  color: "white",
  padding: "14px 20px",
  borderRadius: "10px",
  textDecoration: "none",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  transition: "0.2s",
};

/* Gold Gradient Topics Button */
const topicsButton = {
  background: "linear-gradient(135deg, #F2C94C 0%, #F7D97A 100%)",
  color: "#1A1A1A",
  padding: "14px 20px",
  borderRadius: "10px",
  textDecoration: "none",
  textAlign: "center",
  minWidth: "180px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  transition: "0.2s",
};
