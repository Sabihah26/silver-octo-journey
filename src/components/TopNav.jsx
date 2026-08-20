// src/components/TopNav.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function TopNav() {
  const navItem = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px 14px",
    borderRadius: "8px",
    background: "#0A1A3A",
    transition: "0.2s",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "25px",
        flexWrap: "wrap",
      }}
    >
      <Link to="/" style={navItem}>🏠 Home</Link>
      <Link to="/verbs" style={{ ...navItem, fontWeight: "bold" }}>📘 Verbs</Link>
      <Link to="/nouns" style={navItem}>📗 Nouns</Link>
      <Link to="/adverbs" style={navItem}>📙 Adverbs</Link>
    </div>
  );
}
