// src/pages/VerbDetailPage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import conjugate, { expandTo14 } from "../utils/conjugate";

const pageStyle = {
  padding: "20px",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
  background: "transparent",
  minHeight: "100vh",
  color: "inherit",
};

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

// ⭐ Grouping
const GROUPS = [
  ["3ms", "3md", "3mp", "2ms", "2md", "2mp"],
  ["3fs", "3fd", "3fp", "2fs", "2fd", "2fp"],
  ["1s", "1p"],
];

// ⭐ Arabic pronouns with tashkeel
const AR_PRONOUNS = {
  "3ms": "هُوَ",
  "3md": "هُمَا (م)",
  "3mp": "هُمْ",
  "2ms": "أَنْتَ",
  "2md": "أَنْتُمَا (م)",
  "2mp": "أَنْتُمْ",

  "3fs": "هِيَ",
  "3fd": "هُمَا (ف)",
  "3fp": "هُنَّ",
  "2fs": "أَنْتِ",
  "2fd": "أَنْتُمَا (ف)",
  "2fp": "أَنْتُنَّ",

  "1s": "أَنَا",
  "1p": "نَحْنُ",
};

function renderRows(rows, englishMeaningForPerson) {
  if (!rows || rows.length === 0) {
    return <p style={{ marginTop: "30px" }}>No data available.</p>;
  }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px 15px",
        borderRadius: "16px",
        background: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        color: "#0A1A3A",
        maxWidth: "1000px",
        margin: "20px auto",
      }}
    >
      {GROUPS.map((group, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: i === 1 ? "30px" : "12px",
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
                  padding: "8px",
                  background: "white",
                  minWidth: "180px",
                  textAlign: "center",
                  color: "#0A1A3A",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: 600,
                    marginBottom: "4px",
                    direction: "rtl",
                  }}
                >
                  {AR_PRONOUNS[row.key]} — {row.form}
                </div>

                <div
                  style={{
                    fontSize: "20px",
                    marginBottom: "6px",
                    color: "#6b7280",
                  }}
                >
                  {row.labelEn} — {englishMeaningForPerson(row.key)}
                </div>

                <button
                  onClick={() => {
                    const audio = new Audio(`/audio/verbs/forms/${row.key}.mp3`);
                    audio.play();
                  }}
                  style={{
                    marginTop: "6px",
                    background: "#1061e4",
                    color: "white",
                    border: "none",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  ▶ Audio
                </button>
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

  const verb = verbs.find((v) => String(v.id) === String(id));

  if (!verb) {
    return (
      <div style={pageStyle}>
        <h1>Verb not found</h1>
        <Link to="/verbs">Back to Verb List</Link>
      </div>
    );
  }

  const formKey = verb.form;
  const c = conjugate(verb.root, formKey, verb.overrides || {});
  const { title, table } = getTitleAndTable(c, type);

  const rows = table ? expandTo14(table) : [];
  console.log("ROWS:", rows);

  // ⭐ Remove true duplicates: keep only LAST occurrence of each key
  const uniqueRows = rows.filter(
    (row, index, self) =>
      index === self.findLastIndex((r) => r.key === row.key)
  );

  // ⭐ Override English pronoun labels
  const pronounLabels = {
    "3ms": "he",
    "3md": "they two (m)",
    "3mp": "they (m, pl)",
    "2ms": "you (m)",
    "2md": "you two (m)",
    "2mp": "you (m, pl)",

    "3fs": "she",
    "3fd": "they two (f)",
    "3fp": "they (f, pl)",
    "2fs": "you (f)",
    "2fd": "you two (f)",
    "2fp": "you (f, pl)",

    "1s": "I",
    "1p": "we",
  };

  const fixedRows = uniqueRows.map((r) => ({
    ...r,
    labelEn: pronounLabels[r.key],
  }));

  // ⭐ Extract bare verb (remove "to ")
  const bare = verb.english.simple.replace(/^to\s+/, "").trim();

  // ⭐ Irregular verb support (same style as other pages)
  const irregular = {
    do: { past: "did", passive: "done", active: "doing" },
    go: { past: "went", passive: "gone", active: "going" },
    eat: { past: "ate", passive: "eaten", active: "eating" },
    write: { past: "wrote", passive: "written", active: "writing" },
    see: { past: "saw", passive: "seen", active: "seeing" },
    take: { past: "took", passive: "taken", active: "taking" },
    give: { past: "gave", passive: "given", active: "giving" },
    make: { past: "made", passive: "made", active: "making" },
    come: { past: "came", passive: "come", active: "coming" },
    become: { past: "became", passive: "become", active: "becoming" },
    understand: { past: "understood", passive: "understood", active: "understanding" },
    open: { past: "opened", passive: "opened", active: "opening" },
    run: { past: "ran", passive: "run", active: "running" },
    speak: { past: "spoke", passive: "spoken", active: "speaking" },
    break: { past: "broke", passive: "broken", active: "breaking" },
    choose: { past: "chose", passive: "chosen", active: "choosing" },
    drive: { past: "drove", passive: "driven", active: "driving" },
    fall: { past: "fell", passive: "fallen", active: "falling" },
    fly: { past: "flew", passive: "flown", active: "flying" },
    grow: { past: "grew", passive: "grown", active: "growing" },
    know: { past: "knew", passive: "known", active: "knowing" },
    read: { past: "read", passive: "read", active: "reading" },
    say: { past: "said", passive: "said", active: "saying" },
    sell: { past: "sold", passive: "sold", active: "selling" },
    send: { past: "sent", passive: "sent", active: "sending" },
    sleep: { past: "slept", passive: "slept", active: "sleeping" },
    swim: { past: "swam", passive: "swum", active: "swimming" },
    think: { past: "thought", passive: "thought", active: "thinking" },
  };

  const past = irregular[bare]?.past || bare + "ed";
  const passive = irregular[bare]?.passive || past;
  const active = irregular[bare]?.active || bare + "ing";

  // ⭐ English meaning per type (no pronoun here; pronoun is labelEn)
  const englishByType = {
    past: past,
    present: bare === "do" ? "does" : bare,
    imperative: `${bare}!`,
    "passive-past": `was ${passive}`,
    "passive-present": `is ${passive}`,
    jussive: `may ${bare}`,
    subjunctive: `should ${bare}`,
    "negative-past": `did not ${bare}`,
    "negative-present": `does not ${bare}`,
    "future-sa": `will ${bare}`,
    "future-sawfa": `will ${bare}`,
    "active-participle": `the one who ${bare}s`,
    "passive-participle": `the one who is ${passive}`,
    masdar: `the act of ${bare}ing`,
  };

  const englishMeaningForPerson = () => {
    return englishByType[type] || past;
  };

  return (
    <div style={pageStyle}>
      {/* TOP BANNER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
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
          <h1 style={{ fontSize: "35px", marginBottom: "5px" }}>
            {verb.arabic?.past}
          </h1>

          <p style={{ fontSize: "21px" }}>
            {verb.english?.simple || verb.english?.detailed}
          </p>

          <p style={{ fontSize: "21px", marginTop: "10px" }}>
            {arabicTypeLabels[type] || ""}
          </p>
        </div>

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
          <p>
            <strong>Transliteration:</strong>{" "}
            {verb.transliteration?.past}
          </p>

          <p><strong>Root:</strong> {verb.root}</p>
          <p><strong>Form:</strong> {verb.form}</p>
          <p><strong>Weak Type:</strong> {c.weakType}</p>
        </div>
      </div>

      <h2 style={{ fontSize: "28px", marginTop: "10px", color: "white" }}>{title}</h2>

      {fixedRows.length > 0 ? (
        renderRows(fixedRows, () => englishMeaningForPerson())
      ) : (
        <div style={{ marginTop: "48px", color: "white" }}>
          <p style={{ fontSize: "28px", marginBottom: "18px" }}>
            No 14-person conjugation available.
          </p>
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
        <Link to={`/verb/${verb.id}`} style={{ color: "white" }}>
          ← Back to Verb Summary
        </Link>
        <Link to="/verbs" style={{ color: "white" }}>
          Back to Verb List
        </Link>
      </div>
    </div>
  );
}
