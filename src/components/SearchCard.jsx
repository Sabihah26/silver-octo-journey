// src/components/SearchCard.jsx
import React from "react";

const typeIcon = {
  verb: "📘",
  noun: "📗",
  adverb: "📙",
  adjective: "🎨",
};

export default function SearchCard({ item, type, searchTerm, index }) {
  const icon = typeIcon[type] || "📘";

  // ⭐ SAFE highlight function
  const highlight = (text, query) => {
    const safeText = typeof text === "string" ? text : String(text || "");

    if (!query) return safeText;

    try {
      const regex = new RegExp(`(${query})`, "gi");
      return safeText.replace(
        regex,
        `<span style="
          background:#f59e0b;
          color:#0A1A3A;
          padding:2px 4px;
          border-radius:4px;
          font-size:inherit;
          font-weight:inherit;
        ">$1</span>`
      );
    } catch {
      return safeText;
    }
  };

  const style = {
    width: "100%",
    maxWidth: 600,
    padding: 25,
    marginBottom: 25,
    background: "#FFFFFF",
    color: "#0A1A3A",
    borderRadius: 16,
    textAlign: "center",
    textDecoration: "none",
    transition: "0.35s",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  };

  return (
    <div
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
      }}
    >
      <div style={{ fontSize: 16, marginBottom: 10, opacity: 0.7 }}>
        {icon} {type.toUpperCase()}
      </div>

      {/* ⭐ Arabic */}
      <div
        style={{
          fontSize: 35,
          marginBottom: 12,
          fontWeight: 700,
          color: "#0A1A3A",
          lineHeight: "1.3",
        }}
        dangerouslySetInnerHTML={{
          __html: highlight(item.arabic || "", searchTerm),
        }}
      />

      {/* ⭐ English */}
      <div
        style={{ opacity: 0.75, fontSize: 20 }}
        dangerouslySetInnerHTML={{
          __html: highlight(item.english || "", searchTerm),
        }}
      />
    </div>
  );
}
