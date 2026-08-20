// src/components/ConjugationCard.jsx
import React from "react";

export default function ConjugationCard({ arabic, transliteration, pronoun, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "white",
        color: "#0A1A3A",
        padding: "22px",
        borderRadius: "14px",
        width: "180px",
        minHeight: "140px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "0.25s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
      }}
    >
      <div style={{ fontSize: "32px", fontWeight: "700", marginBottom: "6px" }}>
        {arabic}
      </div>

      <div style={{ fontSize: "16px", opacity: 0.8, marginBottom: "6px" }}>
        {transliteration}
      </div>

      <div style={{ fontSize: "16px", opacity: 0.7 }}>
        {pronoun}
      </div>
    </div>
  );
}
