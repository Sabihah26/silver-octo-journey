// src/pages/PresentMoodsPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import verbs from "../data/verbs";
import conjugate from "../utils/conjugationEngine";
import pronounLabels from "../utils/pronounLabels";

import ConjugationCard from "../components/ConjugationCard";
import TopNav from "../components/TopNav";

export default function PresentMoodsPage() {
  const { id } = useParams();
  const verb = verbs.find((v) => v.id === id);

  if (!verb) {
    return <div style={styles.error}>Verb not found.</div>;
  }

  const table = conjugate(verb.root, verb.form);

  const indicative = table.presentIndicative;
  const subjunctive = table.presentSubjunctive;
  const jussive = table.presentJussive;

  return (
    <div style={styles.container}>
      <TopNav />

      <h1 style={styles.title}>{verb.arabic}</h1>
      <p style={styles.meaning}>{verb.meaning}</p>

      {/* INDICATIVE */}
      <h2 style={styles.sectionTitle}>Present Indicative (المضارع المرفوع)</h2>
      {renderMoodCards(indicative)}

      {/* SUBJUNCTIVE */}
      <h2 style={styles.sectionTitle}>Present Subjunctive (المضارع المنصوب)</h2>
      {renderMoodCards(subjunctive)}

      {/* JUSSIVE */}
      <h2 style={styles.sectionTitle}>Present Jussive (المضارع المجزوم)</h2>
      {renderMoodCards(jussive)}

      <div style={styles.navBox}>
        <Link to={`/verb/${verb.id}`} style={styles.navLink}>
          ← Back to Full Conjugation
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------
   NEW CARD RENDERER — replaces the old table completely
------------------------------------------------------ */
function renderMoodCards(moodTable) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        justifyItems: "center",
        marginTop: "20px",
      }}
    >
      {Object.keys(moodTable).map((pronoun) => (
        <ConjugationCard
          key={pronoun}
          arabic={moodTable[pronoun]}
          transliteration={""}
          pronoun={`${pronoun} — ${pronounLabels[pronoun]}`}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------
   Styles
------------------------------------------------------ */
const styles = {
  container: {
    padding: 20,
    maxWidth: 1100,
    margin: "0 auto",
    background: "#0A1A3A",
    minHeight: "100vh",
    color: "white",
  },
  title: { fontSize: 40, marginBottom: 10, textAlign: "center" },
  meaning: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  sectionTitle: { fontSize: 28, marginBottom: 15, marginTop: 35 },
  navBox: { marginTop: 30, textAlign: "center" },
  navLink: { fontSize: 20, textDecoration: "none", color: "#f59e0b" },
  error: { padding: 20, textAlign: "center", fontSize: 20 },
};
