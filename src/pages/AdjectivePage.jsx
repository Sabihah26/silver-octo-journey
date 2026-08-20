import React from "react";
import { useParams, Link } from "react-router-dom";
import adjectives from "../data/adjectives";

export default function AdjectivePage() {
  const { id } = useParams();
  const adj = adjectives.find((a) => a.id === id);

  if (!adj) {
    return <div style={{ padding: 20, color: "#0A1A3A" }}>Adjective not found.</div>;
  }

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "0 auto" }}>
      <h1 style={{ fontSize: 48, textAlign: "center", marginBottom: 10, color: "#e7ebf3" }}>
        {adj.ar}
      </h1>

      <p style={{ fontSize: 26, textAlign: "center", marginBottom: 20, color: "#e9edf3" }}>
        {adj.en}
      </p>

      <div
        style={{
          background: "white",
          padding: 20,
          textAlign: "center",

          
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          color: "#0A1A3A", // ⭐ DARK TEXT
        }}
      >
        <p style={{ fontSize: 22 }}>
          <strong>Transliteration:</strong> {adj.tr}
        </p>

        <p style={{ fontSize: 22 }}>
          <strong>Category:</strong> {adj.category}
        </p>

        <p style={{ fontSize: 22, marginTop: 10 }}>
          <strong>Example:</strong>
        </p>

        <p style={{ fontSize: 45, marginTop: 4, color: "#0A1A3A" }}>
          {adj.example_ar}
        </p>

        <p style={{ fontSize: 20, color: "#555" }}>
          {adj.example_en}
        </p>

        {adj.notes && (
          <p style={{ fontSize: 20, marginTop: 10 }}>
            <strong>Notes:</strong> {adj.notes}
          </p>
        )}
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/adjectives" style={{ fontSize: 20, color: "#8cb9e5" }}>
          ← Back to Adjectives
        </Link>
      </div>
    </div>
  );
}
