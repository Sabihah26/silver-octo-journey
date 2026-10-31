// src/pages/VerbPage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";

import conjugate from "../utils/conjugate";

export default function VerbPage() {
  const { id } = useParams();

  const verb = verbs.find((v) => String(v.id) === String(id));

  if (!verb) {
    return (
      <div style={{ width: "100%", padding: 20 }}>
        <h1>Verb not found</h1>
        <Link to="/verbs">Back to Verb List</Link>
      </div>
    );
  }

  // Normalize form key
  const formKey =
    typeof verb.form === "string"
      ? verb.form.replace("Form", "").trim()
      : verb.form;

  conjugate(verb.root, formKey);

  // ⭐ SAFE ARABIC EXTRACTION
  const rawArabicPast =
    verb.past ||
    verb.arabic?.past ||
    verb.arabic?.simple ||
    verb.arabic?.default ||
    verb.arabic ||
    "";

  const arabicPast =
    typeof rawArabicPast === "string"
      ? rawArabicPast
      : rawArabicPast?.past ||
        rawArabicPast?.simple ||
        rawArabicPast?.default ||
        "";

  // SAFE PRESENT
  const rawArabicPresent =
    verb.present ||
    verb.arabic?.present ||
    verb.presentForm ||
    "";

  const arabicPresent =
    typeof rawArabicPresent === "string"
      ? rawArabicPresent
      : rawArabicPresent?.present ||
        rawArabicPresent?.simple ||
        "";

  // SAFE TRANSLIT
  const translitMain =
    verb.transliteration?.past ||
    (typeof verb.transliteration === "string"
      ? verb.transliteration
      : verb.transliteration?.simple) ||
    "";

  // Difficulty EN fallback
  const difficultyEn =
    verb.difficulty?.english ||
    verb.difficulty?.en ||
    "—";

  // Semantic family fallback
  const semanticFamily =
    verb.semanticFamily ||
    verb.relatedVerbs?.semantic?.join(", ") ||
    "—";

  return (
    <div style={{ paddingBottom: 60, background: "transparent" }}>
      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(135deg, #0b0f19, #111827)",
          color: "white",
          padding: "10px 0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "white",
            color: "#1061e4",
            padding: "20px",
            borderRadius: "14px",
            marginBottom: "10px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
            width: "100%",
            maxWidth: "1500px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {/* COLUMN 1 — Blue Button */}
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                background: "#1061e4",
                color: "white",
                border: "none",
                padding: "10px 60px",
                borderRadius: "18px",
                fontSize: "52px",
                cursor: "pointer",
                marginBottom: "10px",
              }}
              onClick={() => (window.location.href = `/verb/${verb.id}/grid`)}
            >
              {arabicPast}
            </button>

            <h2 style={{ fontSize: 45, marginBottom: "0.5rem", color: "#444" }}>
              {arabicPresent}
            </h2>

            <p style={{ fontSize: 30, color: "#555" }}>
              {translitMain}
            </p>
          </div>

          {/* COLUMN 2 — Grammar */}
          <div style={{ textAlign: "left", fontSize: 23 }}>
            <p style={{ fontSize: 28, fontWeight: 600, color: "#1061e4" }}>
              {verb.english?.simple || verb.english?.detailed || ""}
            </p>

            <div style={{ height: "0px", margin: "10px 0", width: "85%" }} />

            <div style={{ background: "white", lineHeight: 1.1 }}>
              <p style={{ marginBottom: 8 }}>
                <strong style={{ color: "#1061e4" }}>Root:</strong>{" "}
                <span style={{ fontSize: 40, marginLeft: 8, color: "black" }}>
                  {verb.root}
                </span>
              </p>

              <p style={{ marginBottom: 8 }}>
                <strong style={{ color: "#1061e4" }}>Form:</strong>{" "}
                <span style={{ fontSize: 20, marginLeft: 8, color: "black" }}>
                  {verb.form}
                </span>
              </p>

              <p style={{ marginBottom: 8, fontSize: 22 }}>
                <strong style={{ color: "#1061e4" }}>Weak type:</strong>{" "}
                <span style={{ marginLeft: 8, color: "black" }}>
                  {verb.verbType || verb.weakType || "—"}
                </span>
              </p>

              <p style={{ marginBottom: 8 }}>
                <strong style={{ color: "#1061e4" }}>Wazan:</strong>{" "}
                <span style={{ fontSize: 42, marginLeft: 8, color: "black" }}>
                  {verb.wazan || "—"}
                </span>
              </p>

              <p style={{ marginBottom: 8 }}>
                <strong style={{ color: "#1061e4" }}>Form Family:</strong>{" "}
                <span style={{ marginLeft: 8, color: "black" }}>
                  {verb.formFamily?.name || "—"}
                </span>
              </p>
            </div>
          </div>

          {/* COLUMN 3 — Examples */}
          <div>
            {verb.examples?.simple && (
              <>
                <p
                  style={{
                    fontSize: 35,
                    fontWeight: 600,
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  {verb.examples.simple.ar}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {verb.examples.simple.en}
                </p>
              </>
            )}

            {verb.examples?.natural && (
              <>
                <p
                  style={{
                    fontSize: 35,
                    fontWeight: 600,
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  {verb.examples.natural.ar}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {verb.examples.natural.en}
                </p>
              </>
            )}

            {verb.examples?.rich && (
              <>
                <p
                  style={{
                    fontSize: 35,
                    fontWeight: 600,
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  {verb.examples.rich.ar}
                </p>
                <p style={{ fontSize: 20, color: "black" }}>
                  {verb.examples.rich.en}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* GOLD LINE */}
      <div
        style={{
          width: "180px",
          height: "4px",
          background: "#FFD700",
          margin: "0 auto 30px auto",
          borderRadius: "2px",
        }}
      />

      {/* EXTRA DETAILS */}
      <div
        style={{
          width: "100%",
          maxWidth: "1500px",
          margin: "0 auto 40px auto",
          background: "white",
          padding: "25px",
          borderRadius: "14px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          color: "#1061e4",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {/* Difficulty */}
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 10, color: "#1061e4" }}>
              Difficulty
            </h3>
            <p style={{ fontSize: 22, lineHeight: 1.8 }}>
              <strong style={{ color: "#1061e4" }}>CEFR:</strong>{" "}
              <span style={{ color: "black" }}>
                {verb.difficulty?.cefr || "—"}
              </span>
              <br />

              <strong style={{ color: "#1061e4" }}>Difficulty (EN):</strong>{" "}
              <span style={{ color: "black" }}>
                {difficultyEn}
              </span>
              <br />

              <strong style={{ color: "#1061e4" }}>Frequency:</strong>{" "}
              <span style={{ color: "black" }}>
                {verb.frequency || "—"}
              </span>
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 10, color: "#1061e4" }}>
              Topics
            </h3>
            <ul style={{ fontSize: 21, lineHeight: 1.6 }}>
              {verb.topics?.map((t, i) => (
                <li key={i} style={{ color: "black" }}>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Related Verbs */}
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 10, color: "#1061e4" }}>
              Related Verbs
            </h3>

            <div style={{ marginBottom: "20px" }}>
              <strong style={{ fontSize: 20, color: "#1061e4" }}>
                Root Family:
              </strong>
              <span
                style={{
                  fontSize: 35,
                  marginLeft: "12px",
                  color: "black",
                }}
              >
                {verb.rootFamily ||
                  verb.relatedVerbs?.root?.join("، ") ||
                  "—"}
              </span>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <strong style={{ fontSize: 20, color: "#1061e4" }}>
                Semantic Family:
              </strong>
              <span
                style={{
                  fontSize: 20,
                  marginLeft: "12px",
                  color: "black",
                  fontWeight: 700,
                }}
              >
                {semanticFamily}
              </span>
            </div>

            <div>
              <strong style={{ fontSize: 20, color: "#1061e4" }}>
                Form Family:
              </strong>
              <span
                style={{
                  fontSize: 20,
                  marginLeft: "12px",
                  color: "black",
                }}
              >
                {verb.formFamily?.name ||
                  verb.relatedVerbs?.formFamily?.join(", ") ||
                  "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <hr style={{ margin: "32px 0", borderColor: "rgba(255,255,255,0.3)" }} />

      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link to="/verbs" style={{ color: "white" }}>
          ← Back to Verb List
        </Link>

        <Link to={`/verb-summary/${verb.id}`} style={{ color: "white" }}>
          Verb Summary
        </Link>

        <Link to={`/weak-verb-summary/${verb.id}`} style={{ color: "white" }}>
          Weak Verb View
        </Link>
      </div>
    </div>
  );
}
