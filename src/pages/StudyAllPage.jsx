// src/pages/StudyAllVerbsPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import verbs from "../data/verbs"; // your full verb list

export default function StudyAllVerbsPage() {
  const [search, setSearch] = useState("");
  const [formFilter, setFormFilter] = useState("all");
  const [sortBy, setSortBy] = useState("arabic");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formColors = {
    I: "#3B82F6",
    II: "#10B981",
    III: "#8B5CF6",
    IV: "#EF4444",
    V: "#14B8A6",
    VI: "#F97316",
    VII: "#6366F1",
    VIII: "#EC4899",
    IX: "#FACC15",
    X: "#92400E",
  };

  // FILTER + SEARCH
  const filtered = verbs
    .filter((v) => {
      if (formFilter !== "all" && v.form !== formFilter) return false;

      const s = search.toLowerCase();
      return (
        v.arabic.includes(s) ||
        v.english.toLowerCase().includes(s) ||
        v.root.toLowerCase().includes(s)
      );
    })
    .sort((a, b) => {
      if (sortBy === "arabic") return a.arabic.localeCompare(b.arabic);
      if (sortBy === "english") return a.english.localeCompare(b.english);
      if (sortBy === "form") return a.form.localeCompare(b.form);
      return 0;
    });

  return (
    <div
      style={{
        background: "#0A1A3A",
        minHeight: "100vh",
        padding: 20,
        color: "white",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Study All Verbs
      </h1>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search Arabic, English, or root..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          borderRadius: 10,
          border: "none",
          marginBottom: 15,
          fontSize: 16,
        }}
      />

      {/* FILTERS */}
      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 15,
          flexWrap: "wrap",
        }}
      >
        <select
          value={formFilter}
          onChange={(e) => setFormFilter(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 10,
            border: "none",
            fontSize: 16,
          }}
        >
          <option value="all">All Forms</option>
          <option value="I">Form I</option>
          <option value="II">Form II</option>
          <option value="III">Form III</option>
          <option value="IV">Form IV</option>
          <option value="V">Form V</option>
          <option value="VI">Form VI</option>
          <option value="VII">Form VII</option>
          <option value="VIII">Form VIII</option>
          <option value="IX">Form IX</option>
          <option value="X">Form X</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 10,
            border: "none",
            fontSize: 16,
          }}
        >
          <option value="arabic">Sort: Arabic</option>
          <option value="english">Sort: English</option>
          <option value="form">Sort: Form</option>
        </select>
      </div>

      {/* VERB LIST */}
      <div
        style={{
          display: isMobile ? "block" : "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 15,
        }}
      >
        {filtered.map((v) =>
          isMobile ? (
            // 📱 MOBILE LIST VIEW
            <Link
              key={v.id}
              to={`/verb/${v.id}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 14px",
                background: "#11224D",
                borderRadius: 12,
                marginBottom: 10,
                textDecoration: "none",
                color: "white",
                border: `2px solid ${formColors[v.form]}`,
              }}
            >
              <div>
                <div style={{ fontSize: 32 }}>{v.arabic}</div>
                <div style={{ fontSize: 16, opacity: 0.8 }}>{v.english}</div>
              </div>

              <div
                style={{
                  padding: "4px 10px",
                  background: formColors[v.form],
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {v.form}
              </div>
            </Link>
          ) : (
            // 💻 DESKTOP GRID VIEW
            <Link
              key={v.id}
              to={`/verb/${v.id}`}
              style={{
                background: "#11224D",
                padding: 16,
                borderRadius: 14,
                textAlign: "center",
                textDecoration: "none",
                color: "white",
                border: `2px solid ${formColors[v.form]}`,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = `0 0 14px ${formColors[v.form]}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 46, marginBottom: 6 }}>{v.arabic}</div>
              <div style={{ fontSize: 16, opacity: 0.85 }}>{v.english}</div>

              <div
                style={{
                  marginTop: 8,
                  padding: "4px 10px",
                  background: formColors[v.form],
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                {v.form}
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
