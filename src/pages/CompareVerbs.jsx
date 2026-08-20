// src/pages/CompareVerbs.jsx
import React, { useState } from "react";
import verbs from "../data/verbs";
import conjugate from "../../.vscode/_backup/ConjugationEngine";

export default function CompareVerbs() {
  const [verb1, setVerb1] = useState("");
  const [verb2, setVerb2] = useState("");

  const selected1 = verbs.find((v) => v.id === verb1);
  const selected2 = verbs.find((v) => v.id === verb2);

  const table1 = selected1 ? conjugate(selected1.root, selected1.form) : null;
  const table2 = selected2 ? conjugate(selected2.root, selected2.form) : null;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Compare Two Verbs</h1>

      {/* Verb Selectors */}
      <div style={styles.selectorRow}>
        <select
          value={verb1}
          onChange={(e) => setVerb1(e.target.value)}
          style={styles.select}
        >
          <option value="">Select first verb…</option>
          {verbs.map((v) => (
            <option key={v.id} value={v.id}>
              {v.arabic} — {v.meaning}
            </option>
          ))}
        </select>

        <select
          value={verb2}
          onChange={(e) => setVerb2(e.target.value)}
          style={styles.select}
        >
          <option value="">Select second verb…</option>
          {verbs.map((v) => (
            <option key={v.id} value={v.id}>
              {v.arabic} — {v.meaning}
            </option>
          ))}
        </select>
      </div>

      {/* Comparison Output */}
      {selected1 && selected2 && (
        <div style={styles.comparisonContainer}>
          <h2 style={styles.sectionTitle}>Basic Info</h2>
          {renderBasicInfo(selected1, selected2)}

          <h2 style={styles.sectionTitle}>Past Tense</h2>
          {renderComparisonTable(table1.past, table2.past)}

          <h2 style={styles.sectionTitle}>Present Tense</h2>
          {renderComparisonTable(table1.present, table2.present)}

          <h2 style={styles.sectionTitle}>Imperative</h2>
          {renderComparisonTable(table1.imperative, table2.imperative)}

          <h2 style={styles.sectionTitle}>Participles</h2>
          {renderParticiples(table1, table2)}

          <h2 style={styles.sectionTitle}>Masdar</h2>
          {renderMasdar(table1, table2)}
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------
// Render Helpers
// ------------------------------------------------------

function renderBasicInfo(v1, v2) {
  return (
    <table style={styles.table}>
      <tbody>
        <tr>
          <td style={styles.label}>Verb</td>
          <td style={styles.value}>{v1.arabic}</td>
          <td style={styles.value}>{v2.arabic}</td>
        </tr>
        <tr>
          <td style={styles.label}>Meaning</td>
          <td style={styles.value}>{v1.meaning}</td>
          <td style={styles.value}>{v2.meaning}</td>
        </tr>
        <tr>
          <td style={styles.label}>Root</td>
          <td style={styles.value}>{v1.root}</td>
          <td style={styles.value}>{v2.root}</td>
        </tr>
        <tr>
          <td style={styles.label}>Form</td>
          <td style={styles.value}>Form {v1.form}</td>
          <td style={styles.value}>Form {v2.form}</td>
        </tr>
      </tbody>
    </table>
  );
}

function renderComparisonTable(obj1, obj2) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.header}>Pronoun</th>
          <th style={styles.header}>Verb 1</th>
          <th style={styles.header}>Verb 2</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(obj1).map((pronoun) => (
          <tr key={pronoun}>
            <td style={styles.label}>{pronoun}</td>
            <td style={styles.value}>{obj1[pronoun]}</td>
            <td style={styles.value}>{obj2[pronoun]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function renderParticiples(t1, t2) {
  return (
    <table style={styles.table}>
      <tbody>
        <tr>
          <td style={styles.label}>Active Participle</td>
          <td style={styles.value}>{t1.activeParticiple}</td>
          <td style={styles.value}>{t2.activeParticiple}</td>
        </tr>
        <tr>
          <td style={styles.label}>Passive Participle</td>
          <td style={styles.value}>{t1.passiveParticiple}</td>
          <td style={styles.value}>{t2.passiveParticiple}</td>
        </tr>
      </tbody>
    </table>
  );
}

function renderMasdar(t1, t2) {
  return (
    <table style={styles.table}>
      <tbody>
        <tr>
          <td style={styles.label}>Masdar</td>
          <td style={styles.value}>{t1.masdar}</td>
          <td style={styles.value}>{t2.masdar}</td>
        </tr>
      </tbody>
    </table>
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
    fontSize: "32px",
    marginBottom: "20px",
    textAlign: "center",
  },
  selectorRow: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginBottom: "30px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    width: "45%",
  },
  comparisonContainer: {
    marginTop: "20px",
  },
  sectionTitle: {
    fontSize: "26px",
    marginTop: "25px",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  header: {
    padding: "10px",
    background: "#eee",
    fontWeight: "bold",
    borderBottom: "2px solid #ccc",
  },
  label: {
    padding: "10px",
    fontWeight: "bold",
    borderBottom: "1px solid #ccc",
    width: "25%",
  },
  value: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    fontSize: "20px",
  },
};
