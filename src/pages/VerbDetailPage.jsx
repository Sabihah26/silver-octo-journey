// src/pages/VerbDetailPage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import conjugate, { expandTo14 } from "../utils/conjugate";

// ⭐ PAGE BACKGROUND NOW NAVY BLUE
const pageStyle = {
  padding: "20px",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
  background: "transparent",
  minHeight: "100vh",
  color: "inherit",
};

// Arabic labels for each type
const arabicTypeLabels = {
  past: "الماضي",
  present: "المضارع",
  imperative: "الأمر",
  "passive-past": "الماضي المبني للمجهول",
  "passive-present": "المضارع المبني للمجهول",
  jussive: "المجزوم",
  subjunctive: "المنصوب",
  "negative-past": "النفي (ماضي)",
  "negative-present": "النفي (مضارع)",
  "future-sa": "سـ",
  "future-sawfa": "سوف",
  "active-participle": "اسم الفاعل",
  "passive-participle": "اسم المفعول",
  masdar: "المصدر",
};

// Helper to get title + table
function getTitleAndTable(c, type) {
  switch (type) {
    case "past": return { title: "Past Tense — Full Conjugation", table: c.tables?.past };
    case "present": return { title: "Present Tense — Full Conjugation", table: c.tables?.present };
    case "imperative": return { title: "Imperative — Conjugation", table: c.tables?.imperative };
    case "passive-past": return { title: "Passive Past — Full Conjugation", table: c.tables?.passivePast };
    case "passive-present": return { title: "Passive Present — Full Conjugation", table: c.tables?.passivePresent };
    case "jussive": return { title: "Jussive — Full Conjugation", table: c.tables?.jussive };
    case "subjunctive": return { title: "Subjunctive — Full Conjugation", table: c.tables?.subjunctive };
    case "negative-past": return { title: "Negative Past — Full Conjugation", table: c.tables?.negativePast };
    case "negative-present": return { title: "Negative Present — Full Conjugation", table: c.tables?.negativePresent };
    case "future-sa": return { title: "Future (sa) — Full Conjugation", table: c.tables?.future_sa };
    case "future-sawfa": return { title: "Future (sawfa) — Full Conjugation", table: c.tables?.future_sawfa };
    case "active-participle": return { title: "Active Participle", table: null };
    case "passive-participle": return { title: "Passive Participle", table: null };
    case "masdar": return { title: "Masdar", table: null };
    default: return { title: "Verb Form", table: null };
  }
}

// ⭐ GROUPED 5‑ROW LAYOUT
function renderRows(rows) {
  if (!rows || rows.length === 0) {
    return <p style={{ marginTop: "30px" }}>No data available.</p>;
  }

  const groups = [
    ["3ms", "3md", "3mp"], // Row 1 — 3rd person masculine
    ["3fs", "3fd", "3fp"], // Row 2 — 3rd person feminine
    ["2ms", "2md", "2mp"], // Row 3 — 2nd person masculine
    ["2fs", "2fd", "2fp"], // Row 4 — 2nd person feminine
    ["1s", "1p"],          // Row 5 — 1st person
  ];

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "30px 20px",
        borderRadius: "16px",
        background: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        color: "#0A1A3A",
        maxWidth: "1000px",
        margin: "30px auto",
      }}
    >
      {groups.map((group, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          {group.map((key) => {
            const row = rows.find((r) => r.key === key);
            if (!row) return null;

            return (
              <div
                key={row.key}
                style={{
                  border: "1px solid #14326f",
                  borderRadius: "10px",
                  padding: "1px",
                  background: "white",
                  minWidth: "180px",
                  textAlign: "center",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  color: "#0A1A3A",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{ fontSize: "20px", color: "#6b7280", marginBottom: "6px" }}>
                  {row.labelAr} — {row.labelEn}
                </div>
                <div style={{ fontSize: "36px", direction: "rtl" }}>
                  {row.form}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function VerbDetailPage() {
  const { id, type } = useParams();
  const verb = verbs.find((v) => v.id === Number(id));

  if (!verb) {
    return (
      <div style={pageStyle}>
        <h1>Verb not found</h1>
        <Link to="/verbs">Back to Verb List</Link>
      </div>
    );
  }

  const formKey = verb.form.replace("Form", "").trim();
  const c = conjugate(verb.root, formKey);
  const { title, table } = getTitleAndTable(c, type);
  const rows = table ? expandTo14(table) : [];

  return (
    <div style={pageStyle}>

      {/* ⭐ TOP BANNER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        {/* Left: Verb + English */}
        <div
          style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            color: "#0A1A3A",
          }}
        >
          <h1 style={{ fontSize: "48px", marginBottom: "5px" }}>{verb.arabic}</h1>
          <p style={{ fontSize: "24px" }}>{verb.english}</p>
          <p style={{ fontSize: "26px", marginTop: "10px" }}>
            {arabicTypeLabels[type] || ""}
          </p>
        </div>

        {/* Right: Info Box */}
        <div
          style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            fontSize: "20px",
            color: "#0A1A3A",
          }}
        >
          <p><strong>Transliteration:</strong> {verb.transliteration}</p>
          <p><strong>Root:</strong> {verb.root}</p>
          <p><strong>Form:</strong> {verb.form}</p>
          <p><strong>Weak Type:</strong> {c.weakType}</p>
        </div>
      </div>

      {/* Title */}
      <h2 style={{ fontSize: "28px", marginTop: "10px", color: "white" }}>{title}</h2>

      {/* Conjugation */}
      {rows.length > 0 ? (
        renderRows(rows)
      ) : (
        <div style={{ marginTop: "48px", color: "white" }}>
          <p style={{ fontSize: "28px", marginBottom: "18px" }}>
            No 14-person conjugation available for {arabicTypeLabels[type] || type}.
          </p>

          {/* still show single-value info (if any) to be helpful */}
          <div style={{ fontSize: "20px", opacity: 0.95 }}>
            {type === "active-participle" && <p><strong>Active Participle:</strong> {c.activeParticiple || "—"}</p>}
            {type === "passive-participle" && <p><strong>Passive Participle:</strong> {c.passiveParticiple || "—"}</p>}
            {type === "masdar" && (
              <>
                <p><strong>Masdar (pattern):</strong> {c.masdar || "—"}</p>
                {verb.masdar && <p><strong>Masdar (lexical):</strong> {verb.masdar}</p>}
              </>
            )}
          </div>
        </div>
      )}

      <hr style={{ margin: "32px 0", borderColor: "rgba(255,255,255,0.3)" }} />

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link to={`/verb/${verb.id}`} style={{ color: "white" }}>← Back to Verb Summary</Link>
        <Link to="/verbs" style={{ color: "white" }}>Back to Verb List</Link>
      </div>
    </div>
  );
}
