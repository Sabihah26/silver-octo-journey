import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "size", label: "Size", emoji: "🔵" },
  { id: "emotion", label: "Emotion", emoji: "❤️" },
  { id: "colour", label: "Colour", emoji: "🎨" },
  { id: "quality", label: "Quality", emoji: "⭐" },
  { id: "personality", label: "Personality", emoji: "🙂" },
];

export default function AdjectiveCategoryPage() {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1 style={{ fontSize: 32, marginBottom: 20, color: "#0A1A3A" }}>
        Adjectives
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
          gap: 20,
          justifyContent: "center",
          justifyItems: "center",
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
