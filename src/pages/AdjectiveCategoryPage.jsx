import React from "react";
import { Link } from "react-router-dom";

// ⭐ Your original categories are kept exactly as they are.
// ⭐ We are NOT deleting anything — only adding grouped sections below.

const categories = [
  { id: "size", label: "Size", emoji: "🔵" },
  { id: "emotion", label: "Emotion", emoji: "❤️" },
  { id: "colour", label: "Colour", emoji: "🎨" },
  { id: "quality", label: "Quality", emoji: "⭐" },
  { id: "personality", label: "Personality", emoji: "🙂" },
];

// ⭐ NEW — Grouped 12-category system (added without deleting your original array)
const groupedSections = [
  {
    title: "Descriptive Categories",
    color: "#3B82F6", // blue
    items: [
      { id: "size", label: "Size", emoji: "🔵" },
      { id: "colour", label: "Colour", emoji: "🎨" },
      { id: "shape-texture", label: "Shape & Texture", emoji: "🟪" },
      { id: "age-condition", label: "Age & Condition", emoji: "🕰️" },
      { id: "quality", label: "Quality", emoji: "⭐" },
    ],
  },
  {
    title: "Sensory Categories",
    color: "#10B981", // green
    items: [
      { id: "taste-flavor", label: "Taste & Flavor", emoji: "🍋" },
      { id: "temperature-weather", label: "Temperature & Weather", emoji: "❄️" },
    ],
  },
  {
    title: "Emotional & Personal",
    color: "#EC4899", // pink
    items: [
      { id: "emotion", label: "Emotion", emoji: "❤️" },
      { id: "personality", label: "Personality", emoji: "🙂" },
    ],
  },
  {
    title: "Functional Categories",
    color: "#8B5CF6", // purple
    items: [
      { id: "operation-power", label: "Operation & Power", emoji: "⚙️" },
      { id: "state-status", label: "State & Status", emoji: "🔒" },
      { id: "speed-time", label: "Speed & Time", emoji: "🏃‍♂️" },
    ],
  },
];

export default function AdjectiveCategoryPage() {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1 style={{ fontSize: 37, marginBottom: 20, color: "#e7ebf3" }}>
        Adjectives
      </h1>

      {/* ⭐ NEW — Grouped sections (added without deleting your original grid) */}
      {groupedSections.map((section) => (
        <div key={section.title} style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 26,
              marginBottom: 20,
              color: section.color,
              fontWeight: 700,
            }}
          >
            {section.title}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, auto)",
              gap: 20,
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            {section.items.map((cat) => (
              <Link
                key={cat.id}
                to={`/adjectives/category/${cat.id}/list`}
                style={{
                  background: "white",
                  padding: 20,
                  width: 180,
                  borderRadius: 16,
                  textDecoration: "none",
                  color: "#0A1A3A",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: 600,
                  border: `3px solid ${section.color}`,
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{cat.emoji}</div>
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* ⭐ Your original 5-category grid is kept exactly as-is */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
          gap: 20,
          justifyContent: "center",
          justifyItems: "center",
          marginTop: 40,
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/adjectives/category/${cat.id}`}
            style={{
              background: "white",
              padding: 20,
              width: 180,
              borderRadius: 16,
              textDecoration: "none",
              color: "#0A1A3A",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>{cat.emoji}</div>
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
