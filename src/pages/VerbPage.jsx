// src/pages/VerbPage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import conjugate from "../utils/conjugate";

// Global font sizes (easy to change)
const FONT_SIZES = {
  arabicForm: 40,     // main Arabic verb form
  arabicPronoun: 30,  // Arabic pronoun
  englishPronoun: 20, // English pronoun label
};

export default function VerbPage() {
  const { id } = useParams();
  const verb = verbs.find((v) => v.id === Number(id));

  if (!verb) {
    return (
      <div style={{ width: "100%", padding: 20 }}>
        <h1>Verb not found</h1>
        <Link to="/verbs">Back to Verb List</Link>
      </div>
    );
  }

  const formKey = verb.form;
  const c = conjugate(verb.root, formKey);

  // ⭐ Masdar handling
  const masdarSource = verb.masdar || c.masdar;
  let masdarList = [];

  if (Array.isArray(masdarSource)) {
    masdarList = masdarSource
      .map((item) => {
        if (typeof item === "string") return { ar: item.trim() };
        return item;
      })
      .filter(Boolean);
  } else if (typeof masdarSource === "string") {
    const parts = masdarSource
      .split(/،|,|，/)
      .map((s) => s.trim())
      .filter(Boolean);

    masdarList =
      parts.length > 1
        ? parts.map((p) => ({ ar: p }))
        : [{ ar: masdarSource.trim() }];
  }

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
          {/* COLUMN 1 */}
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
              onClick={() => (window.location.href = `/verb/${verb.id}`)}
            >
              {verb.past}
            </button>

            <h2
              style={{
                fontSize: 45,
                marginBottom: "0.5rem",
                color: "#444",
              }}
            >
              {verb.present}
            </h2>

            <p style={{ fontSize: 30, color: "#555" }}>
              {verb.transliteration}
            </p>
          </div>

          {/* COLUMN 2 — Grammar */}
          <div style={{ textAlign: "left", fontSize: 23 }}>
            <p style={{ fontSize: 28, fontWeight: 600 }}>
              {verb.english?.simple || verb.english?.detailed || ""}
            </p>

            <div
              style={{
                height: "0px",
                margin: "10px 0 10px 0",
                borderBottom: "2px solid #0000",
                width: "85%",
              }}
            />

            <div
              style={{
                background: "white",
                padding: "0px",
                borderRadius: "2px",
                lineHeight: 1.1,
              }}
            >
              <p style={{ color: "#070709", marginBottom: 8 }}>
                <strong>Root:</strong>{" "}
                <span
                  style={{
                    fontSize: 40,
                    marginLeft: 8,
                    color: "#141f9c",
                    fontWeight: "700",
                  }}
                >
                  {verb.root}
                </span>
              </p>

              <p style={{ color: "#09090b", marginBottom: 8 }}>
                <strong>Form:</strong>{" "}
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    marginLeft: 8,
                    color: "#141f9c",
                  }}
                >
                  {verb.form}
                </span>
              </p>

              <p style={{ color: "#000000", marginBottom: 8, fontSize: 22 }}>
                <strong>Weak type:</strong>{" "}
                <span style={{ marginLeft: 8 }}>{verb.weakType || "—"}</span>
              </p>

              <p style={{ color: "#555", marginBottom: 8 }}>
                <strong>Wazan:</strong>{" "}
                <span
                  style={{
                    fontWeight: "700",
                    marginLeft: 8,
                    fontSize: 42,
                    color: "#141f9c",
                  }}
                >
                  {verb.wazan || "—"}
                </span>
              </p>

              <p style={{ color: "#555", marginBottom: 8 }}>
                <strong>Form Family:</strong>{" "}
                <span
                  style={{
                    marginLeft: 8,
                    color: "#141f9c",
                    fontWeight: 600,
                  }}
                >
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
                    marginBottom: 4,
                  }}
                >
                  {verb.examples.simple.ar}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    color: "#555",
                    marginBottom: 12,
                  }}
                >
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
                    marginBottom: 4,
                  }}
                >
                  {verb.examples.natural.ar}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    color: "#555",
                    marginBottom: 12,
                  }}
                >
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
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {verb.examples.rich.ar}
                </p>
                <p style={{ fontSize: 20, color: "#555" }}>
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
            gap: ".50px",
          }}
        >
          {/* Difficulty */}
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 10, color: "#1061e4" }}>
              Difficulty
            </h3>
            <p style={{ fontSize: 22, lineHeight: 1.8, color: "#000000" }}>
              <strong>CEFR:</strong>{" "}
              <span style={{ marginLeft: 8 }}>
                {verb.difficulty?.cefr || "—"}
              </span>
              <br />
              <strong>Arabic:</strong>{" "}
              <span style={{ marginLeft: 8,fontSize: 35 }}>
                {verb.difficulty?.arabic || "—"}
              </span>
              <br />
              <strong>Frequency:</strong>{" "}
              <span style={{ marginLeft: 8 }}>
                {verb.difficulty?.frequency || "—"}
              </span>
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 10, color: "#1061e4" }}>
              Topics
            </h3>
            <ul style={{ fontSize: 21, lineHeight: 1.6, color: "#000000" }}>
              {verb.topics?.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          {/* Related Verbs */}
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 10, color: "#1061e4" }}>
              Related Verbs
            </h3>

            <p style={{ fontSize: 20, fontWeight: 600, color: "#1061e4" }}>
              Root Family
            </p>
            <ul style={{ fontSize: 21, lineHeight: 1.6, color: "#000000" }}>
              {verb.relatedVerbs?.root?.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>

            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                marginTop: 10,
                color: "#1061e4",
              }}
            >
              Semantic Family
            </p>
            <ul style={{ fontSize: 18, lineHeight: 1.6, color: "#000000" }}>
              {verb.relatedVerbs?.semantic?.map((v, i) => (
                <li key={i}>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </li>
              ))}
            </ul>

            <p
              style={{
                fontSize: 23,
                fontWeight: 600,
                marginTop: 10,
                color: "#1061e4",
              }}
            >
              Form Family
            </p>
            <ul style={{ fontSize: 18, lineHeight: 1.6, color: "#000000" }}>
              {verb.relatedVerbs?.formFamily?.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* MASTER GRID — 5 COLUMNS, RTL */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 220px)",
          gap: "18px",
          direction: "rtl",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        {/* COLUMN 1 — Past */}
        <GridCard
          to={`/verb/${verb.id}/past`}
          arabic="الماضي"
          english="Past"
          value={c.past["هو"]}
          larger
        />

        {/* COLUMN 2 — Present */}
        <GridCard
          to={`/verb/${verb.id}/present`}
          arabic="المضارع"
          english="Present"
          value={c.present["هو"]}
          larger
        />

        {/* COLUMN 3 — Active Participle */}
        <GridCard
          to={`/verb/${verb.id}/activeParticiple`}
          arabic="اسم الفاعل"
          english="Active Participle"
          value={c.activeParticiple}
          larger
        />

        {/* COLUMN 4 — Masdar 1 */}
        {masdarList[0] && (
          <GridCard
            to={`/verb/${verb.id}/masdar-1`}
            arabic="المصدر ١"
            english={masdarList[0].en}
            value={masdarList[0]}
            larger
          />
        )}

        {/* COLUMN 5 — Masdar 2 */}
        {masdarList.length > 1 && (
          <GridCard
            to={`/verb/${verb.id}/masdar-2`}
            arabic="المصدر ٢"
            english={masdarList[1].en}
            value={masdarList[1]}
            larger
          />
        )}

        {/* ROW 2 — Passive */}
        <GridCard
          to={`/verb/${verb.id}/passivePast`}
          arabic="الماضي المبني للمجهول"
          english="Passive Past"
          value={c.passivePast["هو"]}
          larger
        />

        <GridCard
          to={`/verb/${verb.id}/passivePresent`}
          arabic="المضارع المبني للمجهول"
          english="Passive Present"
          value={c.passivePresent["هو"]}
          larger
        />

        <GridCard
          to={`/verb/${verb.id}/passiveParticiple`}
          arabic="اسم المفعول"
          english="Passive Participle"
          value={c.passiveParticiple}
          larger
        />

        {/* ROW 3 — Moods */}
        <GridCard
          to={`/verb/${verb.id}/jussive`}
          arabic="المجزوم"
          english="Jussive"
          value={c.jussive["هو"]}
          larger
        />

        <GridCard
          to={`/verb/${verb.id}/subjunctive`}
          arabic="المنصوب"
          english="Subjunctive"
          value={c.subjunctive["هو"]}
          larger
        />

        <GridCard
          to={`/verb/${verb.id}/negativePast`}
          arabic="نفي الماضي"
          english="Negative Past"
          value={c.negativePast["هو"]}
          larger
        />

        <GridCard
          to={`/verb/${verb.id}/negativePresent`}
          arabic="نفي المضارع"
          english="Negative Present"
          value={c.negativePresent["هو"]}
          larger
        />

        {/* ROW 4 — Futures */}
        <GridCard
          to={`/verb/${verb.id}/future_sa`}
          arabic="س"
          english="Future (sa)"
          value={c.future_sa["هو"]}
          larger
        />

        <GridCard
          to={`/verb/${verb.id}/future_sawfa`}
          arabic="سوف"
          english="Future (sawfa)"
          value={c.future_sawfa["هو"]}
          larger
        />
      </div>

      {/* Navigation */}
      <hr
        style={{
          margin: "32px 0",
          borderColor: "rgba(255,255,255,0.3)",
        }}
      />
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
        <Link
          to={`/weak-verb-summary/${verb.id}`}
          style={{ color: "white" }}
        >
          Weak Verb View
        </Link>
      </div>
    </div>
  );
}

/* GRID CARD */
function GridCard({
  to,
  arabic,
  english,
  value,
  align = "center",
  larger = false,
}) {
  const width = "220px";
  const minHeight = larger ? "200px" : "150px";
  const padding = larger ? "18px 20px" : "14px 16px";

  const isObj = value && typeof value === "object";
  const displayArabic = isObj ? value.ar || "" : value;
  const displayTranslit = isObj ? value.tr || null : null;
  const displayEnglish = isObj ? value.en || english : english;

  const mainFont = larger ? 40 : 30;
  const labelFont = 35 * 0.75;

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding,
          width,
          minHeight,
          boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
          border: "1px solid #e5e7eb",
          textAlign: align,
          color: "#0A1A3A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: align === "center" ? "center" : "flex-start",
          transition: "transform 0.2s ease, boxShadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 6px 16px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 4px 12px rgba(0,0,0,0.08)";
        }}
      >
        {/* Big Arabic */}
        <div
          style={{
            fontSize: mainFont,
            fontWeight: 700,
            marginBottom: 6,
            lineHeight: 1.2,
          }}
        >
          {displayArabic}
        </div>

        {/* Transliteration */}
        {displayTranslit && (
          <div
            style={{
              fontSize: 14,
              color: "#646e83",
              marginBottom: 4,
            }}
          >
            {displayTranslit}
          </div>
        )}

        {/* English */}
        {displayEnglish && (
          <div
            style={{
              fontSize: 18,
              color: "#646e83",
              marginBottom: 4,
            }}
          >
            {displayEnglish}
          </div>
        )}

        {/* Smaller Arabic label (الماضي / المضارع / المصدر ١ / المصدر ٢) */}
        {arabic && (
          <div
            style={{
              fontSize: labelFont,
              fontWeight: 600,
              marginTop: 4,
              color: "#0A1A3A",
            }}
          >
            {arabic}
          </div>
        )}
      </div>
    </Link>
  );
}
