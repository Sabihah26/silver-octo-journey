import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "size", label: "Size", emoji: "🔵" },
  { id: "colour", label: "Colour", emoji: "🎨" },
  { id: "shape-texture", label: "Shape & Texture", emoji: "🟪" },
  { id: "age-condition", label: "Age & Condition", emoji: "🕰️" },
  { id: "quality", label: "Quality", emoji: "⭐" },
  { id: "taste-flavor", label: "Taste & Flavor", emoji: "🍋" },
  { id: "temperature-weather", label: "Temperature & Weather", emoji: "❄️" },
  { id: "emotion", label: "Emotion", emoji: "❤️" },
  { id: "personality", label: "Personality", emoji: "🙂" },
  { id: "operation-power", label: "Operation & Power", emoji: "⚙️" },
  { id: "state-status", label: "State & Status", emoji: "🔒" },
  { id: "speed-time", label: "Speed & Time", emoji: "🏃‍♂️" },
];

export default function AdjectiveCategoryPage() {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1 style={{ fontSize: 37, marginBottom: 20, color: "#e7ebf3" }}>
        Adjective Categories
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 20,
          maxWidth: 1000,
          margin: "0 auto",
          justifyItems: "center",
        }}
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/adjectives/category/${category.id}/list`}
            style={{
              background: "white",
              padding: 20,
              width: "100%",
              maxWidth: 220,
              boxSizing: "border-box",
              borderRadius: 16,
              textDecoration: "none",
              color: "#0A1A3A",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>{category.emoji}</div>
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
