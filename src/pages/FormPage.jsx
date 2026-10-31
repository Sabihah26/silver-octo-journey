// src/pages/FormPage.jsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import { matchesTopic } from "../utils/verbCatalog";

// Convert 1–10 → I–X
const romanMap = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
};

// ⭐ Your standard topic list
const STANDARD_TOPICS = [
  "Daily Life",
  "Travel",
  "Food",
  "School",
  "Work",
  "Nature",
  "Emotions",
];

export default function FormPage() {
  const { formNumber } = useParams();

  const formLabel = `Form ${romanMap[Number(formNumber)]}`;

  const [selectedTopic, setSelectedTopic] = useState("all");
  const [weakFilter, setWeakFilter] = useState("all");
  const [search, setSearch] = useState("");

  // ⭐ Filter verbs by form
  const formVerbs = useMemo(
    () => verbs.filter((v) => v.form === formLabel),
    [formLabel]
  );

  // ⭐ Weak verb filtering
  const weakFilteredVerbs = useMemo(() => {
    if (weakFilter === "all") return formVerbs;
    return formVerbs.filter((v) => v.weakType === weakFilter);
  }, [formVerbs, weakFilter]);

  // ⭐ Topic filtering
  const topicFilteredVerbs = useMemo(() => {
    if (selectedTopic === "all") return weakFilteredVerbs;
    return weakFilteredVerbs.filter((verb) =>
      matchesTopic(verb, selectedTopic)
    );
  }, [weakFilteredVerbs, selectedTopic]);

  // ⭐ Search filtering
  const visibleVerbs = useMemo(() => {
    const q = search.toLowerCase();
    return topicFilteredVerbs.filter((v) => {
      const eng = v.english?.simple?.toLowerCase() || "";
      const ar = (v.arabic?.simple || v.arabic?.past || "").toLowerCase();
      return eng.includes(q) || ar.includes(q);
    });
  }, [topicFilteredVerbs, search]);

  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      
      {/* Back to Forms I–X */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link
          to="/forms"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "21px",
          }}
        >
          ← Back to Forms I–X
        </Link>
      </div>

      <h1 style={{ textAlign: "center", marginBottom: 20 }}>{formLabel}</h1>

      {/* ⭐ NEW — Form Navigation Grid (I–X) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "12px",
          maxWidth: "600px",
          margin: "0 auto 30px auto",
        }}
      >
        {[1,2,3,4,5,6,7,8,9,10].map((num) => (
          <Link
            key={num}
            to={`/forms/${num}`}
            style={{
              background: "#0A1A3A",
              color: "white",
              padding: "12px 0",
              borderRadius: "10px",
              textDecoration: "none",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            Form {romanMap[num]}
          </Link>
        ))}
      </div>

      {/* ⭐ Difficulty Buttons (larger + in a row) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "14px",
          maxWidth: "600px",
          margin: "0 auto 30px auto",
        }}
      >
        <Link to={`/forms/${formNumber}/easy`} style={difficultyButton}>
          🌱 Easy Verbs
        </Link>

        <Link to={`/forms/${formNumber}/medium`} style={difficultyButton}>
          ⚖️ Medium Verbs
        </Link>

        <Link to={`/forms/${formNumber}/hard`} style={difficultyButton}>
          🔥 Hard Verbs
        </Link>
      </div>

      {/* ⭐ Search Bar */}
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <input
          type="text"
          placeholder="Search verbs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "10px 14px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
          }}
        />
      </div>

      {/* ⭐ Weak Verb Filter */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "10px",
          maxWidth: "600px",
          margin: "0 auto 30px auto",
        }}
      >
        {[
          { key: "all", label: "All Verbs" },
          { key: "fa", label: "Fa‑Weak" },
          { key: "ain", label: "Ain‑Weak" },
          { key: "lam", label: "Lam‑Weak" },
        ].map((w) => (
          <button
            key={w.key}
            onClick={() => setWeakFilter(w.key)}
            style={{
              border: "1px solid #4b5563",
              borderRadius: "8px",
              padding: "6px 10px",
              fontSize: "14px",
              background: weakFilter === w.key ? "#0A1A3A" : "white",
              color: weakFilter === w.key ? "white" : "#0A1A3A",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {w.label}
          </button>
        ))}
      </div>

      {/* ⭐ Topic Filter */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "10px",
          maxWidth: "700px",
          margin: "0 auto 30px auto",
        }}
      >
        {["all", ...STANDARD_TOPICS].map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            style={{
              border: "1px solid #4b5563",
              borderRadius: "8px",
              padding: "6px 10px",
              fontSize: "14px",
              background: selectedTopic === topic ? "#0A1A3A" : "white",
              color: selectedTopic === topic ? "white" : "#0A1A3A",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {topic === "all" ? "All Topics" : topic}
          </button>
        ))}
      </div>

      {/* ⭐ Verb list */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "14px",
        }}
      >
        {visibleVerbs.length === 0 ? (
          <div style={{ textAlign: "center", color: "#d1d5db" }}>
            No verbs found for this selection.
          </div>
        ) : (
          visibleVerbs.map((verb) => (
            <Link
              key={verb.id}
              to={`/verb/${verb.id}`}
      style={{
  background: "white",
  border: "1px solid #d1d5db",
  borderRadius: "10px",
  padding: "14px",
  color: "black",
  textDecoration: "none",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  textAlign: "center",

  /* ⭐ NEW — uniform box sizing */
  height: "110px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}}

            >
              <div
                style={{
                  fontSize: "35px",
                  fontWeight: 700,
                  marginBottom: "3px",
                  lineHeight: "1.2",
                }}
              >
                {verb.arabic?.simple || verb.arabic?.past}
              </div>

              <div style={{ fontSize: "16px", fontWeight: 600 }}>
                {verb.english?.simple}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

const difficultyButton = {
  background: "#0A1A3A",
  color: "white",
  padding: "14px 16px",
  borderRadius: "10px",
  textDecoration: "none",
  textAlign: "center",
  fontSize: "17px",
  fontWeight: 600,
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};
