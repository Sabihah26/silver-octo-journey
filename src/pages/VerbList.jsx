// src/pages/VerbList.jsx
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import verbs from "../data/verbs";

// ⭐ WEAK VERB HELPERS ⭐
const WEAK_LETTERS = ["و", "ي", "ا"];

function detectWeakType(root) {
  if (!root) return null;

  let letters = Array.isArray(root)
    ? root
    : typeof root === "string"
    ? root.replace(/\s+/g, "").split("")
    : null;

  if (!letters || letters.length !== 3) return null;

  if (WEAK_LETTERS.includes(letters[0])) return "fa";
  if (WEAK_LETTERS.includes(letters[1])) return "ain";
  if (WEAK_LETTERS.includes(letters[2])) return "lam";

  return null;
}

function getWeakColor(type) {
  if (type === "fa") return "#ef4444";
  if (type === "ain") return "#f59e0b";
  if (type === "lam") return "#3b82f6";
  return "#6b7280";
}

function getWeakLabel(type) {
  if (type === "fa") return "Fa";
  if (type === "ain") return "Ain";
  if (type === "lam") return "Lam";
  return null;
}

export default function VerbList() {
  const [query, setQuery] = useState("");

  // ⭐ NEW — read category from URL
  const { category } = useParams();

  // ⭐ NEW — category filtering logic
  const categoryFiltered = category
    ? verbs.filter((v) => v.category === category)
    : verbs;

  // ⭐ EXISTING — search filter (applied after category filter)
  const filtered = categoryFiltered.filter((v) => {
    const q = query.toLowerCase();

    return (
      (v.arabic?.past && v.arabic.past.toLowerCase().includes(q)) ||
      (v.english?.simple && v.english.simple.toLowerCase().includes(q)) ||
      (v.english?.detailed && v.english.detailed.toLowerCase().includes(q)) ||
      (v.transliteration?.past && v.transliteration.past.toLowerCase().includes(q)) ||
      (v.root && v.root.toLowerCase().includes(q)) ||
      (v.form && v.form.toLowerCase().includes(q))
    );
  });

  return (
    <div style={styles.page}>
      {/* ⭐ NEW — dynamic title */}
      <h1 style={styles.title}>
        {category ? `Verbs · ${category}` : "Verbs"}
      </h1>

      {/* ⭐ NEW — back buttons */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {category && (
          <Link
            to="/verbs/categories"
            style={{
              color: "white",
              textDecoration: "underline",
              fontSize: "16px",
              marginRight: "20px",
            }}
          >
            ← Back to Verb Categories
          </Link>
        )}

        <Link
          to="/verbs"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          ← Back to All Verbs
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search verbs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.search}
      />

      <div style={{ marginBottom: "25px", textAlign: "center" }}>
        <Link
          to="/forms"
          style={{
            display: "inline-block",
            background: "#0A1A3A",
            color: "white",
            padding: "12px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "0.2s",
          }}
        >
          📙 Browse Verbs by Form (I–X)
        </Link>
      </div>

      <div style={styles.grid}>
        {filtered.map((v) => {
          const weakType = detectWeakType(v.root);
          const weakLabel = getWeakLabel(weakType);
          const weakColor = getWeakColor(weakType);

          return (
            <Link key={v.id} to={`/verb/${v.id}`} style={styles.card}>
              
              {/* ID */}
              <div style={styles.id}>{v.id}</div>

              {/* 1️⃣ Arabic verb */}
              <div style={styles.arabic}>{v.arabic?.past}</div>

              {/* 2️⃣ English meaning */}
              <div style={styles.english}>
                {v.english?.simple || v.english?.detailed || ""}
              </div>

              {/* 3️⃣ Root */}
              <div style={{ fontSize: "28px", fontWeight: "700", marginBottom: "8px" }}>
                {v.root}
              </div>

              {/* 4️⃣ Form */}
              <div style={{ fontSize: "18px", marginBottom: "6px" }}>
                <strong>Form:</strong> {v.form}
              </div>

              {/* 5️⃣ Translit */}
              <div style={{ fontSize: "18px", marginBottom: "6px" }}>
                <strong>Translit:</strong> {v.transliteration?.past}
              </div>

              {/* Weak verb badge */}
              {weakLabel && (
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 16,
                    fontWeight: 700,
                    color: weakColor,
                  }}
                >
                  Weak Verb · {weakLabel}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    background: "#07112B",
    minHeight: "100vh",
    color: "white",
  },
  title: {
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "600",
  },
  search: {
    width: "100%",
    maxWidth: "500px",
    padding: "12px 16px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    margin: "0 auto 20px auto",
    display: "block",
    outline: "none",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    justifyContent: "center",
    maxWidth: "1800px",
    margin: "0 auto",
    gap: "54px",
  },
  card: {
    background: "white",
    color: "#0A1A3A",
    padding: "14px",
    borderRadius: "14px",
    width: "260px",
    textAlign: "center",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    minHeight: "260px",
  },
  id: {
    fontSize: "16px",
    opacity: 0.7,
    marginBottom: "6px",
  },
  arabic: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  english: {
    fontSize: "20px",
    opacity: 0.9,
    marginBottom: "10px",
  },
};
