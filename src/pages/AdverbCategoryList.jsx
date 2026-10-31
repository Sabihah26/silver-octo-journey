// src/pages/AdverbCategoryList.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AdverbCategoryList() {
  const categories = [
    { id: "time", name: "Time" },
    { id: "place", name: "Place" },
    { id: "manner", name: "Manner" },
    { id: "frequency", name: "Frequency" },
    { id: "degree", name: "Degree" },
  ];

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1 style={{ fontSize: 27, marginBottom: 20, color: "#e7ebf3" }}>
        Adverb Categories
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, auto)",
          gap: 20,
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/adverbs/category/${cat.id}`}
            style={{
              background: "white",
              padding: 12,
              width: 160,
              borderRadius: 12,
              textDecoration: "none",
              color: "#0A1A3A",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <Link
          to="/"
          style={{ fontSize: 20, color: "#8cb9e5", textDecoration: "none" }}
        >
          ← Back Home
        </Link>
      </div>
    </div>
  );
}
