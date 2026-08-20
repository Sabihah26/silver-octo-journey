import React from "react";
import { useParams, Link } from "react-router-dom";
import adjectives from "../data/adjectives";

export default function AdjectiveCategoryList() {
  const { category } = useParams();

  const filtered = adjectives.filter((a) => a.category === category);

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      
      <h1 style={{ fontSize: 27, marginBottom: 20, color: "#e7ebf3" }}>
        {category.charAt(0).toUpperCase() + category.slice(1)} Adjectives
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, auto)",
          gap: 20,
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        {filtered.map((adj) => (
          <Link
            key={adj.id}
            to={`/adjectives/${adj.id}`}
            style={{
              background: "white",
              padding: 8,            // ⭐ smaller padding
              width: 140,
              borderRadius: 12,
              textDecoration: "none",
              color: "#0A1A3A",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: 35, marginBottom: 2 }}>   {/* ⭐ smaller gap */}
              {adj.ar}
            </h2>

            <p style={{ fontSize: 18, color: "#334155", marginTop: 0 }}> {/* ⭐ tighter */}
              {adj.en}
            </p>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <Link
          to="/adjectives/categories"
          style={{ fontSize: 20, color: "#8cb9e5", textDecoration: "none" }}
        >
          ← Back to Categories
        </Link>
      </div>
    </div>
  );
}
