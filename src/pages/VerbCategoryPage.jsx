// src/pages/VerbCategoryPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import FreeTierBanner from "../components/FreeTierBanner";

const categories = [
  { key: "action", label: "Action Verbs", icon: "⚡" },
  { key: "motion", label: "Motion Verbs", icon: "🏃" },

  { key: "social", label: "Social Verbs", icon: "🤝" },
  { key: "thinking", label: "Thinking Verbs", icon: "🧠" },
  { key: "education", label: "Education Verbs", icon: "📚" },
  { key: "food", label: "Food Verbs", icon: "🍽️" },
  { key: "daily", label: "Daily Verbs", icon: "🗓️" },
  { key: "weak", label: "Weak Verbs", icon: "🌙" },
  { key: "state", label: "State Verbs", icon: "🏛️" },
  { key: "perception", label: "Perception Verbs", icon: "👁️" },
  { key: "worktools", label: "Work & Tools Verbs", icon: "🛠️" },
    { key: "communication", label: "Communication Verbs", icon: "💬" },
];

export default function VerbCategoryPage() {
  return (
    <div
      style={{
        background: "#12306B",
        minHeight: "100vh",
        paddingTop: "20px",
      }}
    >
      <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>

        {/* Back to all verbs */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <Link
            to="/verbs"
            style={{
              color: "white",
              textDecoration: "underline",
              fontSize: "18px",
            }}
          >
            ← Back to All Verbs
          </Link>
        </div>

        <h1 style={{ textAlign: "center", marginBottom: 30, fontSize: "42px" }}>
          Verb Categories
        </h1>

        <FreeTierBanner type="verb" />

        <div style={gridContainer}>
          {categories.map((cat) => (
            <Link
              key={cat.key}
              to={`/verbs/category/${cat.key}`}
              style={categoryButton}
              className="category-hover"
            >
              <span style={{ fontSize: "26px" }}>{cat.icon}</span>
              <span style={{ fontSize: "22px", marginLeft: "10px" }}>
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Bigger grid boxes */
const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "20px",
  maxWidth: "700px",
  margin: "0 auto",
};

/* Bigger category buttons — NO outline */
const categoryButton = {
  background: "#0A1A3A",
  color: "white",
  padding: "18px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  textAlign: "center",
  boxShadow: "0 5px 14px rgba(0,0,0,0.2)",
  transition: "0.2s",
};
