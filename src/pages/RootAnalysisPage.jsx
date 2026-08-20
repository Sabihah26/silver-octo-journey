// src/pages/RootAnalysisPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import verbs from "../data/verbs";
import conjugate from "../utils/conjugationEngine";
import ExampleSentenceBox from "../components/ExampleSentenceBox";

export default function RootAnalysisPage() {
  const { id } = useParams();
  const verb = verbs.find((v) => v.id === id);

  if (!verb) {
    return <div style={styles.error}>Verb not found.</div>;
  }

  // Run unified engine
  const table = conjugate(verb.root, verb.form);

  const root = verb.root;
  const pattern = detectPattern(root);
  const weakType = table.weakType || "Regular";

  return (
    <div style={styles.container}>
      {/* Header */}
      <h1 style={styles.title}>{verb.arabic}</h1>
      <p style={styles.meaning}>{verb.meaning}</p>

      {/* Root + Pattern */}
      <div style={styles.infoBox}>
        <p><strong>Root:</strong> {root}</p>
        <p><strong>Form:</strong> Form {verb.form}</p>
        <p><strong>Pattern:</strong> {pattern}</p>
        <p><strong>Weak Type:</strong> {weakType}</p>
      </div>

      {/* Pattern Explanation */}
      <h2 style={styles.sectionTitle}>Root Pattern Explanation</h2>
      <div style={styles.explanationBox}>
        {renderPatternExplanation(pattern)}
      </div>

      {/* Weak Verb Explanation */}
      <h2 style={styles.sectionTitle}>Weak Verb Classification</h2>
      <div style={styles.explanationBox}>
        {renderWeakExplanation(weakType)}
      </div>

      {/* Sample Conjugations */}
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
// Pattern Detection Logic
// ------------------------------------------------------
function detectPattern(root) {
  if (!root || root.length !== 3) return "Unknown";

  const [r1, r2, r3] = root;

  if (r1 === "و" || r1 === "ي") return "Assimilated (مثال)";
  if (r2 === "و" || r2 === "ي") return "Hollow (أجوف)";
  if (r3 === "و" || r3 === "ي") return "Defective (ناقص)";
  if (r2 === r3) return "Doubled (مضعّف)";
  if (r1 === "ء" || r2 === "ء" || r3 === "ء") return "Hamzated (مهموز)";

  return "Strong (صحيح)";
}

// ------------------------------------------------------
// Explanation Renderers
// ------------------------------------------------------
function renderPatternExplanation(pattern) {
  const explanations = {
    "Assimilated (مثال)": "The first root letter is weak (و or ي). Example: وصل، يسر.",
    "Hollow (أجوف)": "The middle root letter is weak (و or ي). Example: قال، باع.",
    "Defective (ناقص)": "The last root letter is weak (و or ي). Example: دعا، رمى.",
    "Doubled (مضعّف)": "The last two root letters are identical. Example: مدّ، ردّ.",
    "Hamzated (مهموز)": "One of the root letters is a hamza. Example: سأل، قرأ.",
    "Strong (صحيح)": "All three root letters are strong.",
    "Unknown": "Pattern could not be determined.",
  };

  return <p style={styles.explanationText}>{explanations[pattern] || explanations["Unknown"]}</p>;
}

function renderWeakExplanation(type) {
  const explanations = {
    "Hollow": "A hollow verb has a weak middle root letter (و or ي).",
    "Defective": "A defective verb ends with a weak letter (و or ي).",
    "Assimilated": "An assimilated verb begins with a weak letter (و or ي).",
    "Doubled": "A doubled verb has the last two root letters identical.",
    "Hamzated": "A hamzated verb contains a hamza in one of its root positions.",
    "Regular": "This verb is not weak — all root letters are strong.",
  };

  return <p style={styles.explanationText}>{explanations[type] || explanations["Regular"]}</p>;
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
