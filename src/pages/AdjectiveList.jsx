import React from "react";
import { Link } from "react-router-dom";
import adjectives from "../data/adjectives";

export default function AdjectiveList() {
  return (
    <div style={{ padding: 0 }}>
      <h1 style={{ fontSize: 32, textAlign: "center", marginBottom: 20, color: "#e4e7ec" }}>
        Adjectives
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: 20,
          justifyContent: "center",
            padding: 20,
        }}
      >
        {adjectives.map((adj) => (
          <Link
            key={adj.id}
            to={`/adjectives/${adj.id}`}
            style={{
              background: "white",
              padding: 10,
              borderRadius: 12,
              textDecoration: "none",
              color: "#0A1A3A", // ⭐ DARK TEXT
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ fontSize: 40, textAlign: "center", marginBottom: 10, color: "#0A1A3A" }}>
              {adj.ar}
            </h2>
            <p style={{ fontSize: 25, textAlign: "center", color: "#334155" }}>{adj.en}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
