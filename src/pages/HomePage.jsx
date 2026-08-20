// src/pages/HomePage.jsx
import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loadStudyProgress } from "../utils/studyStorage";
import logo from "../assets/logo.png";
import "./HomePage.css";
import verbs from "../data/verbs";
import nouns from "../data/nouns";
import adverbs from "../data/Adverbs";
import adjectives from "../data/adjectives";

export default function HomePage() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setShowSuggestions(false);
  }

  const [study, setStudy] = useState(null);

  const defaultStudyCard = {
    mode: "SRS",
    due: 0,
    lastReviewed: "—",
    link: "/study",
  };

  const studyCard = study || defaultStudyCard;

  // ⭐ ROOT SEARCH STATE
  const [rootLetters, setRootLetters] = useState(["", "", ""]);

  const vowelOptions = [
    "بَ","بِ","بُ","تَ","تِ","تُ","ثَ","ثِ","ثُ","جَ","جِ","جُ","حَ","حِ","حُ",
    "خَ","خِ","خُ","دَ","دِ","دُ","ذَ","ذِ","ذُ","رَ","رِ","رُ","زَ","زِ","زُ",
    "سَ","سِ","سُ","شَ","شِ","شُ","صَ","صِ","صُ","ضَ","ضِ","ضُ","طَ","طِ","طُ",
    "ظَ","ظِ","ظُ","عَ","عِ","عُ","غَ","غِ","غُ","فَ","فِ","فُ","قَ","قِ","قُ",
    "كَ","كِ","كُ","لَ","لِ","لُ","مَ","مِ","مُ","نَ","نِ","نُ","هَ","هِ","هُ",
    "وَ","وِ","وُ","يَ","يِ","يُ","أَ","إِ","أُ"
  ];

  function normalizeArabic(str) {
    return str.normalize("NFC").replace(/\u0640/g, "");
  }

  function handleRootSearch() {
    const rawRoot = rootLetters.join("");
    if (!rawRoot || rawRoot.length < 3) return;
    const normalizedRoot = normalizeArabic(rawRoot);
    navigate(`/search?root=${encodeURIComponent(normalizedRoot)}`);
  }

  const allWords = useMemo(() => [...verbs, ...nouns, ...adverbs, ...adjectives], []);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
   return allWords
  .filter((w) => {
    const arabic = typeof w.arabic === "string" ? w.arabic.toLowerCase() : "";
    const english = typeof w.english === "string" ? w.english.toLowerCase() : "";
    return arabic.startsWith(q) || english.startsWith(q);
  })
  .slice(0, 8);

  }, [query, allWords]);

  useEffect(() => {
    const data = loadStudyProgress();
    setStudy(data);
  }, []);

  return (
    <div style={{ paddingBottom: 60, background: "transparent" }}>

      {/* HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(135deg, #0b0f19, #111827)",
          color: "white",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr 220px",
            alignItems: "start",
            width: "100%",
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          {/* COLUMN 1 — LOGO */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={logo}
              alt="Arabic Dictionary Logo"
              style={{
                width: 180,
                height: "auto",
                marginTop: 10,
              }}
            />
          </div>

          {/* COLUMN 2 — MAIN CONTENT */}
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: 55,
                fontWeight: 800,
                margin: 0,
                lineHeight: 1.6,
                color: "white",
              }}
            >
              Master Arabic Vocabulary
            </h1>

            <p
              style={{
                fontSize: 18,
                opacity: 0.85,
                marginTop: 8,
                marginBottom: 18,
              }}
            >
              Explore verbs, nouns, grammar, examples, and personalised study tools...
            </p>

            {/* SEARCH BAR */}
            <form
              onSubmit={handleSearch}
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <input
                type="text"
                placeholder="Search for a word..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                style={{
                  width: "60%",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #ddd",
                  fontSize: 16,
                }}
              />

              <button
                type="submit"
                style={{
                  padding: "10px 36px",
                  borderRadius: 20,
                  border: "none",
                  background: "#f59e0b",
                  color: "#111827",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                Search
              </button>
            </form>

            {/* SEARCH SUGGESTIONS */}
            {showSuggestions && suggestions.length > 0 && (
              <div
                style={{
                  margin: "10px auto 0",
                  width: "60%",
                  background: "#1B2B55",
                  borderRadius: 10,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                  textAlign: "left",
                }}
              >
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const term = s.arabic || s.english || "";
                      setQuery(term);
                      navigate(`/search?q=${encodeURIComponent(term)}`);
                      setShowSuggestions(false);
                    }}
                    style={{
                      width: "100%",
                      padding: 10,
                      border: "none",
                      background: "transparent",
                      color: "white",
                      cursor: "pointer",
                      borderBottom:
                        i === suggestions.length - 1
                          ? "none"
                          : "1px solid #24335f",
                    }}
                  >
                    <div style={{ fontSize: 20 }}>{s.arabic}</div>
                    <div style={{ opacity: 0.7, fontSize: 14 }}>{s.english}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* COLUMN 3 — EMPTY */}
          <div></div>
        </div>
      </div>

    {/* ⭐ ROOT SEARCH SECTION ⭐ */}
<div style={{ textAlign: "center", marginTop: 30 }}>
  <h2 style={{ marginBottom: 10 }}>Search by Root Letters</h2>

  {/* ROOT LETTER DROPDOWNS + ADD BUTTON */}
  <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
    {rootLetters.map((letter, index) => (
      <div key={index}>
        <select
          value={letter}
          onChange={(e) => {
            const updated = [...rootLetters];
            updated[index] = e.target.value;
            setRootLetters(updated);
          }}
          style={{
            padding: "8px",
            borderRadius: 8,
            fontSize: 29,
          }}
        >
          <option value="">—</option>
          {vowelOptions.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    ))}

    {/* ⭐ ADD ANOTHER ROOT LETTER BUTTON ⭐ */}
    <button
      onClick={() => setRootLetters([...rootLetters, ""])}
      style={{
        padding: "8px 14px",
        borderRadius: 8,
        background: "#374151",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: 16,
        fontWeight: 600,
      }}
    >
      ➕ Add Root Letter
    </button>
  </div>

  <div style={{ marginTop: 15 }}>
    <button
      onClick={handleRootSearch}
      style={{
        background: "#f59e0b",
        color: "#111827",
        border: "none",
        padding: "10px 30px",
        borderRadius: 20,
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      Search Root
    </button>
  </div>
</div>

      {/* ⭐ DICTIONARY CARDS SECTION ⭐ */}
      <section style={{ maxWidth: 1400, margin: "30px auto", padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          {/* VERBS */}
          <Link
            to="/verbs"
            style={{
              background: "#ffffff",
              borderRadius: 22,
              padding: 40,
              width: 250,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              textAlign: "center",
              transform: "scale(0.90)",
            }}
          >
            <div
              style={{
                width: 70,
                height: 60,
                borderRadius: 20,
                background: "#111827",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                margin: "0 auto 20px",
                fontWeight: "bold",
              }}
            >
              📘
            </div>
            <h3 style={{ fontSize: 30, color: "#111827", marginBottom: 12 }}>
              Verbs
            </h3>
            <p style={{ color: "#6b7280", lineHeight: 1.7, fontSize: 18 }}>
              Full conjugations, weak forms, moods, and patterns.
            </p>
          </Link>

          {/* NOUNS */}
          <Link
            to="/nouns"
            style={{
              background: "#ffffff",
              borderRadius: 22,
              padding: 40,
              width: 250,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              textAlign: "center",
              transform: "scale(0.90)",
            }}
          >
            <div
              style={{
                width: 70,
                height: 60,
                borderRadius: 20,
                background: "#111827",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                margin: "0 auto 20px",
                fontWeight: "bold",
              }}
            >
              📗
            </div>
            <h3 style={{ fontSize: 30, color: "#111827", marginBottom: 12 }}>
              Nouns
            </h3>
            <p style={{ color: "#6b7280", lineHeight: 1.7, fontSize: 18 }}>
              Meanings, plurals, broken patterns, and examples.
            </p>
          </Link>

          {/* ADJECTIVES */}
          <Link
            to="/adjectives/categories"
            style={{
              background: "#ffffff",
              borderRadius: 22,
              padding: 40,
              width: 250,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              textAlign: "center",
              transform: "scale(0.90)",
            }}
          >
            <div
              style={{
                width: 70,
                height: 60,
                borderRadius: 20,
                background: "#111827",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                margin: "0 auto 20px",
                fontWeight: "bold",
              }}
            >
              🎨
            </div>
            <h3 style={{ fontSize: 30, color: "#111827", marginBottom: 12 }}>
              Adjectives
            </h3>
            <p style={{ color: "#6b7280", lineHeight: 1.7, fontSize: 18 }}>
              Categories, meanings, examples, and usage.
            </p>
          </Link>

          {/* ADVERBS */}
          <Link
            to="/adverbs"
            style={{
              background: "#ffffff",
              borderRadius: 22,
              padding: 40,
              width: 250,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              textAlign: "center",
              transform: "scale(0.90)",
            }}
          >
            <div
              style={{
                width: 70,
                height: 60,
                borderRadius: 20,
                background: "#111827",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                margin: "0 auto 20px",
                fontWeight: "bold",
              }}
            >
              📙
            </div>
            <h3 style={{ fontSize: 30, color: "#111827", marginBottom: 12 }}>
              Adverbs
            </h3>
            <p style={{ color: "#6b7280", lineHeight: 1.7, fontSize: 18 }}>
              Usage, examples, and contextual meanings.
            </p>
          </Link>
        </div>
      </section>

      {/* ⭐ LEARNING TOOLS ⭐ */}
      <section style={{ padding: "24px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: 32,
            marginBottom: 20,
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          Learning Tools
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            fontSize: 20,
          }}
        >
          <Link to="/recommended-study" className="tool-card">Recommended Study</Link>
          <Link to="/study" className="tool-card">Study (SRS)</Link>
          <Link to="/study-all" className="tool-card">Study All Verbs</Link>
          <Link to="/study/weak" className="tool-card">Weak Verbs Trainer (SRS)</Link>
          <Link to="/study/weak-quiz" className="tool-card">Verbs Quiz</Link>
          <Link to="/study-form" className="tool-card">Study by Form</Link>
          <Link to="/study/mastery" className="tool-card">Progress Dashboard</Link>
          <Link to="/word-of-the-day" className="tool-card">Word of the Day</Link>
          <Link to="/recent" className="tool-card">Recently Viewed</Link>
          <Link to="/favourites" className="tool-card">Favourites</Link>
          <Link to="/study/settings" className="tool-card">Study Settings</Link>
        </div>
      </section>

      {/* ⭐ PREMIUM ⭐ */}
      <section
        style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 80px" }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #111827, #1f2937)",
            borderRadius: 28,
            padding: "30px 20px",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <h2
            style={{
              fontSize: 36,
              marginBottom: 16,
              color: "#f59e0b",
            }}
          >
            Unlock Premium Features
          </h2>

          <p
            style={{
              color: "#d1d5db",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 700,
              margin: "0 auto 30px",
            }}
          >
            Access advanced study analytics, unlimited favourites, personalised
            quizzes, and exclusive grammar modules designed to accelerate your
            Arabic mastery.
          </p>

          <button
            style={{
              padding: "18px 34px",
              borderRadius: 14,
              border: "none",
              background: "#f59e0b",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            Upgrade Now
          </button>
        </div>
      </section>
    </div>
  );
}
