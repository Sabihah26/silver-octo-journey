// src/pages/PresentPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import verbs from "../data/verbs";
import conjugate from "../../.vscode/_backup/ConjugationEngine";
import pronounLabels from "../utils/pronounLabels";

export default function PresentPage() {
  const { id } = useParams();
  const verb = verbs.find((v) => v.id === id);

  if (!verb) {
    return <div style={styles.error}>Verb not found.</div>;
  }

  const table = conjugate(verb.root, verb.form);
  const present = table.present;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{verb.arabic}</h1>
      <p style={styles.meaning}>{verb.meaning}</p>

      <h2 style={styles.sectionTitle}>Present Tense Conjugation</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Pronoun</th>
            <th style={styles.header}>Form</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(present).map((pronoun) => (
            <tr key={pronoun}>
              <td style={styles.label}>
                <span style={styles.pronounArabic}>{pronoun}</span>
                <span style={styles.pronounEnglish}> — {pronounLabels[pronoun]}</span>
              </td>

              <td style={styles.value}>{present[pronoun]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.navBox}>
        <Link to={`/verb/${verb.id}`} style={styles.navLink}>
          ← Back to Full Conjugation
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: 20, maxWidth: 900, margin: "0 auto" },
  title: { fontSize: 36, marginBottom: 10 },
  meaning: { fontSize: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 26, marginBottom: 15 },

  table: { width: "100%", borderCollapse: "collapse", marginBottom: 25 },

  header: {
    padding: 10,
    background: "#eee",
    borderBottom: "2px solid #ccc",
    fontWeight: "bold",
    fontSize: 18,
  },

  label: {
    padding: 10,
    borderBottom: "1px solid #ccc",
    fontWeight: "bold",
    width: "40%",
  },

  // ⭐ Arabic pronoun — 30px
  pronounArabic: {
    fontSize: "30px",
    fontWeight: 700,
    marginRight: 6,
  },

  // ⭐ English pronoun — 20px
  pronounEnglish: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#555",
  },

  // Verb form (unchanged)
  value: {
    padding: 10,
    borderBottom: "1px solid #ccc",
    fontSize: 20,
  },

  navBox: { marginTop: 20 },
  navLink: { fontSize: 18, textDecoration: "none", color: "#0066cc" },
  error: { padding: 20, textAlign: "center", fontSize: 20 },
};
