// src/pages/WeakVerbSummaryPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import verbs from "../data/verbs";
import conjugate from "../utils/conjugate";
import ExampleSentenceBox from "../components/ExampleSentenceBox";

export default function WeakVerbSummaryPage() {
  const { id } = useParams();
  const verb = verbs.find((v) => v.id === id);


  if (!verb) {
    return <div style={styles.error}>Verb not found.</div>;
  }

  // Run your unified engine
  const table = conjugate(verb.root, verb.form.replace("Form", "").trim());

  // Map engine output → human label
  const weakTypeMap = {
    hollow: "Hollow",
    defective: "Defective",
    assimilated: "Assimilated",
    doubled: "Doubled",
    hamzated: "Hamzated",
    sound: "Regular",
  };

  const weakType = weakTypeMap[table.weakType] || "Regular";

  return (
    <div style={styles.container}>
      {/* Header */}
      <h1 style={styles.title}>{verb.arabic}</h1>
      <p style={styles.meaning}>{verb.english}</p>

      {/* Weak Verb Classification */}
      <div style={styles.infoBox}>
        <p><strong>Root:</strong> {verb.root}</p>
        <p><strong>Form:</strong> {verb.form}</p>
        <p><strong>Weak Type:</strong> {weakType}</p>
      </div>

      {/* Explanation Box */}
      <h2 style={styles.sectionTitle}>Weak Verb Type Explanation</h2>
      <div style={styles.explanationBox}>
        {renderWeakExplanation(weakType)}
      </div>

      {/* Key Forms */}
      <h2 style={styles.sectionTitle}>Key Forms</h2>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.label}>Past (هو)</td>
            <td style={styles.value}>{table.past["هو"]}</td>
          </tr>
          <tr>
            <td style={styles.label}>Present (هو)</td>
            <td style={styles.value}>{table.present["هو"]}</td>
          </tr>
          <tr>
            <td style={styles.label}>Imperative (أنتَ)</td>
            <td style={styles.value}>{table.imperative["أنتَ"]}</td>
          </tr>
          <tr>
            <td style={styles.label}>Masdar</td>
            <td style={styles.value}>{table.masdar}</td>
          </tr>
        </tbody>
      </table>

      {/* Example Sentences */}
      {verb.examples && verb.examples.length > 0 && (
        <ExampleSentenceBox examples={verb.examples} />
      )}

      {/* Link to full conjugation */}
      <div style={{ marginTop: 30 }}>
        <Link to={`/verb/${verb.id}`} style={styles.fullLink}>
          View Full Conjugation →
        </Link>
      </div>
    </div>
  );
}

// ------------------------------------------------------
// Weak Verb Explanation Renderer
// ------------------------------------------------------
function renderWeakExplanation(type) {
  const explanations = {
    Hollow:
      "A hollow verb has a weak middle root letter (و or ي). Examples: قال، باع.",
    Defective:
      "A defective verb ends with a weak letter (و or ي). Examples: دعا، رمى.",
    Assimilated:
      "An assimilated verb begins with a weak letter (و or ي). Examples: وصل، يسر.",
    Doubled:
      "A doubled verb has the last two root letters identical. Examples: مدّ، ردّ.",
    Hamzated:
      "A hamzated verb contains a hamza in one of its root positions. Examples: سأل، قرأ.",
    Regular:
      "This verb is not weak — all root letters are strong.",
  };

  return (
    <p style={styles.explanationText}>
      {explanations[type] || explanations["Regular"]}
    </p>
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
  infoBox: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fafafa",
    marginBottom: "25px",
    fontSize: "18px",
  },
  sectionTitle: {
    fontSize: "26px",
    marginTop: "25px",
    marginBottom: "10px",
  },
  explanationBox: {
    padding: "15px",
    background: "#eef7ff",
    borderRadius: "8px",
    border: "1px solid #cce4ff",
    marginBottom: "25px",
  },
  explanationText: {
    fontSize: "18px",
    lineHeight: 1.6,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "25px",
  },
  label: {
    width: "40%",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    fontWeight: "bold",
  },
  value: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    fontSize: "20px",
  },
  fullLink: {
    fontSize: "20px",
    textDecoration: "none",
    color: "#0066cc",
  },
  error: {
    padding: "20px",
    textAlign: "center",
    fontSize: "20px",
  },
};
