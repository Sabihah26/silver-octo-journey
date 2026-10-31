// src/pages/WeakVerbsPage.jsx

import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import data from "../data/index.js";
import { verbTopics } from "../data/verbTopics";

const verbs = data.verbs || [];

const WEAK_LETTERS = ["و", "ي", "ا"];

function normalizeRoot(root) {
  if (!root) return [];
  return Array.isArray(root) ? root : root.split("-");
}

function isFaWeak(root) {
  return root && WEAK_LETTERS.includes(root[0]);
}
function isAinWeak(root) {
  return root && WEAK_LETTERS.includes(root[1]);
}
function isLamWeak(root) {
  return root && WEAK_LETTERS.includes(root[2]);
}

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

export default function WeakVerbsPage() {
  // ⭐ Weak type memory
  const [weakType, setWeakType] = useState(
    localStorage.getItem("weakType") || "fa"
  );
  const [formNumber, setFormNumber] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const weakVerbs = useMemo(() => {
    return verbs.filter((verb) => {
      const rootArray = normalizeRoot(verb.root);

      if (weakType === "fa") return isFaWeak(rootArray);
      if (weakType === "ain") return isAinWeak(rootArray);
      if (weakType === "lam") return isLamWeak(rootArray);
      if (weakType === "hamza") return verb.root.includes("ء");
      if (weakType === "double") return rootArray[1] === rootArray[2];

      return false;
    });
  }, [weakType]);

  const formFiltered = useMemo(() => {
    if (formNumber === "all") return weakVerbs;
    const formLabel = `Form ${romanMap[Number(formNumber)]}`;
    return weakVerbs.filter((verb) => verb.form === formLabel);
  }, [weakVerbs, formNumber]);

  const allTopics = useMemo(() => {
    return ["all", ...Object.keys(verbTopics)];
  }, []);

  const topicFiltered = useMemo(() => {
    if (selectedTopic === "all") return formFiltered;
    const allowedIds = verbTopics[selectedTopic] || [];
    return formFiltered.filter((verb) =>
      allowedIds.includes(Number(verb.id))
    );
  }, [formFiltered, selectedTopic]);

  const finalVerbs = useMemo(() => {
    if (difficulty === "all") return topicFiltered;
    return topicFiltered.filter((verb) => verb.difficulty === difficulty);
  }, [topicFiltered, difficulty]);

  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
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

      <h1 style={{ textAlign: "center", marginBottom: 30 }}>Weak Verbs</h1>

      {/* FILTER BAR */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {/* Weak Type */}
        <Dropdown
          label="🧬 Weak Type"
          isOpen={openDropdown === "weakType"}
          onToggle={() => toggleDropdown("weakType")}
        >
          <DropdownItem
            onClick={() => {
              setWeakType("fa");
              localStorage.setItem("weakType", "fa");
              setOpenDropdown(null);
            }}
          >
            Fa‑weak
          </DropdownItem>

          <DropdownItem
            onClick={() => {
              setWeakType("ain");
              localStorage.setItem("weakType", "ain");
              setOpenDropdown(null);
            }}
          >
            Ain‑weak
          </DropdownItem>

          <DropdownItem
            onClick={() => {
              setWeakType("lam");
              localStorage.setItem("weakType", "lam");
              setOpenDropdown(null);
            }}
          >
            Lam‑weak
          </DropdownItem>

          <DropdownItem
            onClick={() => {
              setWeakType("hamza");
              localStorage.setItem("weakType", "hamza");
              setOpenDropdown(null);
            }}
          >
            Hamza‑weak
          </DropdownItem>

          <DropdownItem
            onClick={() => {
              setWeakType("double");
              localStorage.setItem("weakType", "double");
              setOpenDropdown(null);
            }}
          >
            Double‑weak
          </DropdownItem>
        </Dropdown>

        {/* Form */}
        <Dropdown
          label="🔤 Form"
          isOpen={openDropdown === "form"}
          onToggle={() => toggleDropdown("form")}
        >
          <DropdownItem
            onClick={() => {
              setFormNumber("all");
              setOpenDropdown(null);
            }}
          >
            All Forms
          </DropdownItem>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <DropdownItem
              key={num}
              onClick={() => {
                setFormNumber(String(num));
                setOpenDropdown(null);
              }}
            >
              {romanMap[num]}
            </DropdownItem>
          ))}
        </Dropdown>

        {/* Topic */}
        <Dropdown
          label="🗂️ Topic"
          isOpen={openDropdown === "topic"}
          onToggle={() => toggleDropdown("topic")}
        >
          {allTopics.map((topic) => (
            <DropdownItem
              key={topic}
              onClick={() => {
                setSelectedTopic(topic);
                setOpenDropdown(null);
              }}
            >
              {topic}
            </DropdownItem>
          ))}
        </Dropdown>

        {/* Difficulty */}
        <Dropdown
          label="🎚️ Difficulty"
          isOpen={openDropdown === "difficulty"}
          onToggle={() => toggleDropdown("difficulty")}
        >
          <DropdownItem
            onClick={() => {
              setDifficulty("all");
              setOpenDropdown(null);
            }}
          >
            All
          </DropdownItem>

          <DropdownItem
            onClick={() => {
              setDifficulty("easy");
              setOpenDropdown(null);
            }}
          >
            Easy
          </DropdownItem>

          <DropdownItem
            onClick={() => {
              setDifficulty("medium");
              setOpenDropdown(null);
            }}
          >
            Medium
          </DropdownItem>

          <DropdownItem
            onClick={() => {
              setDifficulty("hard");
              setOpenDropdown(null);
            }}
          >
            Hard
          </DropdownItem>
        </Dropdown>
      </div>

      {/* VERB GRID */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "40px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "24px",
          justifyItems: "center",
        }}
      >
        {finalVerbs.length === 0 ? (
          <div style={{ textAlign: "center", color: "#d1d5db" }}>
            No weak verbs found.
          </div>
        ) : (
          finalVerbs.map((verb) => (
            <Link
              key={verb.id}
              to={`/verb/${verb.id}`}
              style={{
                background: "white",
                border: "1px solid #d1d5db",
                borderRadius: "12px",
                padding: "16px 12px",
                color: "black",
                textDecoration: "none",
                width: "180px",
                textAlign: "center",
                boxShadow: "0 3px 10px rgba(0,0,0,0.10)",
              }}
            >
              <div style={{ marginTop: 4, fontSize: 40, fontWeight: 700 }}>
                {verb.arabic?.simple ?? verb.arabic}
              </div>

              <div style={{ marginTop: 8, fontSize: 22, fontWeight: 600 }}>
                {typeof verb.english === "object"
                  ? verb.english.simple
                  : verb.english}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

/* ⭐ Custom Dropdown Components */

function Dropdown({ label, isOpen, onToggle, children }) {
  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={onToggle}
        style={{
          background: "#ffffff",
          color: "#1061e4",
          borderRadius: "10px",
          padding: "12px 18px",
          fontSize: "18px",
          fontWeight: 700,
          border: "2px solid #1061e4",
          cursor: "pointer",
          minWidth: "160px",
        }}
      >
        {label} ▼
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: 0,
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "10px 0",
            zIndex: 10,
            minWidth: "160px",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownItem({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px 16px",
        cursor: "pointer",
        fontSize: "16px",
        color: "black",
      }}
      onMouseEnter={(e) => (e.target.style.background = "#f3f4f6")}
      onMouseLeave={(e) => (e.target.style.background = "white")}
    >
      {children}
    </div>
  );
}
