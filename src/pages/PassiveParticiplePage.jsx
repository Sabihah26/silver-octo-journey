// src/pages/PassivePresentPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import verbs from "../data/verbs";
import conjugate from "../utils/ConjugationEngine";

export default function PassivePresentPage() {
  const { id } = useParams();
  const verb = verbs.find((v) => v.id === id);

  if (!verb) {
    return <div style={styles.error}>Verb not found.</div>;
  }

  // Run unified engine
  const table = conjugate(verb.root, verb.form);
  const passivePresent = table.passivePresent;

  return (
    <div style={styles.container}>
      {/* Header */}
      <h1 style={styles.title}>{verb.arabic}</h1>
      <p style={styles.meaning}>{verb.meaning}</p>

      <h2 style={styles.sectionTitle}>Passive Present Tense</h2>

      {/* Passive Present Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Pronoun</th>
            <th style={styles.header}>Form</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(passivePresent).map((pronoun) => (
            <tr key={pronoun}>
              <td style={styles.label}>{pronoun}</td>
              <td style={styles.value}>{passivePresent[pronoun]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Navigation */}
      <div style={styles.navBox}>
        <Link to={`/verb/${verb.id}`} style={styles.navLink}>
          ← Back to Full Conjugation
        </Link>
      </div>
    </div>
  );
}

// ------------------------------------------------------
// Styles
// ------------------------------------------------------
const styles = {
  container: {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  meaning: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "26px",
    marginBottom: "15px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "25px",
  },
  header: {
    padding: "10px",
    background: "#eee",
    borderBottom: "2px solid #ccc",
    fontWeight: "bold",
    fontSize: "18px",
  },
  label: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    fontWeight: "bold",
    width: "30%",
  },
  value: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    fontSize: "20px",
  },
  navBox: {
    marginTop: "20px",
  },
  navLink: {
    fontSize: "18px",
    textDecoration: "none",
    color: "#0066cc",
  },
  error: {
    padding: "20px",
    textAlign: "center",
    fontSize: "20px",
  },
};
