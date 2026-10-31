// src/pages/VerbConjugationPage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import conjugate, { PERSONS_14 } from "../utils/conjugate";

export default function VerbConjugationPage() {
  const { id, tense } = useParams();

  const verb = verbs.find((v) => String(v.id) === String(id));
  if (!verb) return <div>Verb not found</div>;

  const c = conjugate(verb.root, verb.form);

  const TENSE_MAP = {
    past: "past",
    present: "present",
    passivePast: "passivePast",
    passivePresent: "passivePresent",
    jussive: "jussive",
    subjunctive: "subjunctive",
    negativePast: "negativePast",
    negativePresent: "negativePresent",
    future_sa: "future_sa",
    future_sawfa: "future_sawfa",
    imperative: "imperative",
  };

  const engineKey = TENSE_MAP[tense] || "past";
  const table14 = c.tables[engineKey];

  if (!table14) {
    return (
      <div style={{ padding: 20 }}>
        <h1 style={{ textAlign: "center" }}>{verb.past} — {tense}</h1>
        <p>Invalid tense for this verb.</p>
      </div>
    );
  }

  // ⭐ Build rows from PERSONS_14
  const rowsRaw = PERSONS_14
    .map((p) => {
      const form = table14[p.key];
      if (!form) return null;
      return { ...p, form };
    })
    .filter(Boolean);

  // ⭐ Remove true duplicates
  const rows = rowsRaw.filter(
    (row, index, self) =>
      index === self.findLastIndex((r) => r.key === row.key)
  );

  const speak = (text) => {
    if (!text) return;
    if ("speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ar-SA";
      window.speechSynthesis.speak(u);
    }
  };

  // ⭐ Extract bare verb
  const bare = verb.english.simple.replace(/^to\s+/, "").trim();

  // ⭐ FULL IRREGULAR VERB DICTIONARY
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

  // ⭐ Determine correct forms
  const past = irregular[bare]?.past || bare + "ed";
  const passive = irregular[bare]?.passive || past;
  const active = irregular[bare]?.active || bare + "ing";

  // ⭐ English pronouns
  const EN_PRONOUNS = {
    "3ms": "he",
    "3md": "they (m, dual)",
    "3mp": "they",
    "2ms": "you (m)",
    "2md": "you (dual, m)",
    "2mp": "you (pl, m)",

    "3fs": "she",
    "3fd": "they (f, dual)",
    "3fp": "they (f)",
    "2fs": "you (f)",
    "2fd": "you (dual, f)",
    "2fp": "you (pl, f)",

    "1s": "I",
    "1p": "we",
  };

  // ⭐ English tense engine (Option 1)
  const englishTense = {
    past: (p) => `${EN_PRONOUNS[p]} ${past}`,
    present: (p) =>
      `${EN_PRONOUNS[p]} ${
        EN_PRONOUNS[p] === "he" || EN_PRONOUNS[p] === "she"
          ? (bare === "do" ? "does" : bare + "s")
          : bare
      }`,
    jussive: (p) => `${EN_PRONOUNS[p]} may ${bare}`,
    subjunctive: (p) => `${EN_PRONOUNS[p]} should ${bare}`,
    negativePast: (p) => `${EN_PRONOUNS[p]} did not ${bare}`,
    negativePresent: (p) => `${EN_PRONOUNS[p]} does not ${bare}`,
    passivePast: (p) =>
      `${EN_PRONOUNS[p]} ${
        EN_PRONOUNS[p] === "I" || EN_PRONOUNS[p] === "he" || EN_PRONOUNS[p] === "she"
          ? "was"
          : "were"
      } ${passive}`,
    passivePresent: (p) =>
      `${EN_PRONOUNS[p]} ${
        EN_PRONOUNS[p] === "he" || EN_PRONOUNS[p] === "she"
          ? "is"
          : EN_PRONOUNS[p] === "I"
          ? "am"
          : "are"
      } ${passive}`,
    future_sa: (p) => `${EN_PRONOUNS[p]} will ${bare}`,
    future_sawfa: (p) => `${EN_PRONOUNS[p]} will ${bare}`,
    imperative: (p) => `${bare}!`,
    continuous: (p) =>
      `${EN_PRONOUNS[p]} ${
        EN_PRONOUNS[p] === "he" || EN_PRONOUNS[p] === "she"
          ? "is"
          : EN_PRONOUNS[p] === "I"
          ? "am"
          : "are"
      } ${active}`,
  };

  // ⭐ FIXED: imperative now works correctly
  const englishMeaningForPerson = (key) => {
    if (engineKey === "present") return englishTense.present(key);
    if (engineKey === "past") return englishTense.past(key);
    if (engineKey === "jussive") return englishTense.jussive(key);
    if (engineKey === "subjunctive") return englishTense.subjunctive(key);
    if (engineKey === "negativePast") return englishTense.negativePast(key);
    if (engineKey === "negativePresent") return englishTense.negativePresent(key);
    if (engineKey === "passivePast") return englishTense.passivePast(key);
    if (engineKey === "passivePresent") return englishTense.passivePresent(key);
    if (engineKey === "future_sa") return englishTense.future_sa(key);
    if (engineKey === "future_sawfa") return englishTense.future_sawfa(key);
    if (engineKey === "imperative") return englishTense.imperative(key);
    return englishTense.past(key);
  };

  // ⭐ Grouping
  const GROUPS = [
    ["3ms", "3md", "3mp", "2ms", "2md", "2mp"],
    ["3fs", "3fd", "3fp", "2fs", "2fd", "2fp"],
    ["1s", "1p"],
  ];

  // ⭐ Arabic pronouns
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

  const CARD_WIDTH = 240;

  return (
    <div style={{ padding: 20, direction: "rtl" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: 20,
          fontSize: 40,
          color: "white",
          background: "#0b0f19",
          padding: "10px 0",
          borderRadius: "10px",
        }}
      >
        {verb.past} — {tense}
      </h1>

      {/* TENSE BUTTONS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, auto)",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "25px",
          padding: "10px",
          direction: "ltr",
        }}
      >
        {[
          "past",
          "present",
          "passivePast",
          "passivePresent",
          "jussive",
          "subjunctive",
          "negativePast",
          "negativePresent",
          "future_sa",
          "future_sawfa",
          "imperative",
        ].map((t) => (
          <Link
            key={t}
            to={`/verb/${verb.id}/${t}`}
            style={{
              background: t === tense ? "#0b4acb" : "#1061e4",
              color: "white",
              padding: "10px 0px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "23px",
              fontWeight: 600,
              textAlign: "center",
              minWidth: "190px",
            }}
          >
            {t}
          </Link>
        ))}
      </div>

      {/* ⭐ 14-GRID */}
      {GROUPS.map((group, gi) => (
        <div
          key={gi}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: gi === 1 ? "30px" : "12px",
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
                  background: "white",
                  padding: "10px",
                  borderRadius: "14px",
                  textAlign: "center",
                  width: CARD_WIDTH,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                  direction: "rtl",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: 600,
                    marginBottom: "4px",
                    color: "#0A1A3A",
                  }}
                >
                  {AR_PRONOUNS[row.key]} —{" "}
                  <span style={{ fontSize: "35px" }}>{row.form}</span>
                </div>

                <div
                  style={{
                    fontSize: "20px",
                    marginBottom: "6px",
                    color: "#555",
                  }}
                >
                  {englishMeaningForPerson(row.key)}
                </div>

                <button
                  onClick={() => speak(row.form)}
                  style={{
                    marginTop: 4,
                    padding: "6px 14px",
                    borderRadius: "999px",
                    border: "none",
                    background: "#1061e4",
                    color: "white",
                    cursor: "pointer",
                    fontSize: 16,
                  }}
                >
                  ▶ Audio
                </button>
              </div>
            );
          })}
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Link
          to={`/verb/${verb.id}`}
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "20px",
          }}
        >
          ← Back to Verb Page
        </Link>
      </div>
    </div>
  );
}
