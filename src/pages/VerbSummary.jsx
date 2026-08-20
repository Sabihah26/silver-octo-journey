// src/pages/VerbSummary.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import verbs from "../data/verbs";
import conjugate from "../utils/conjugate";
import ExampleSentenceBox from "../components/ExampleSentenceBox";

export default function VerbSummary() {
  const { id } = useParams();
  const verb = verbs.find((v) => v.id === Number(id));

  if (!verb) {
    return <div style={styles.error}>Verb not found.</div>;
  }

  // Convert "Form I" → "I"
  const formKey = verb.form.replace("Form", "").trim();

  // Run unified engine
  const table = conjugate(verb.root, formKey);

  // Map engine → human label
  const weakTypeMap = {
    hollow: "Hollow",
    defective: "Defective",
    assimilated: "Assimilated",
    doubled: "Doubled",
    hamzated: "Hamzated",
    sound: "Regular",
  };

  const weakType = weakTypeMap[table.weakType] || "Regular";

  // Audio helper
  const play = (path) => {
    const audio = new Audio(path);
    audio.play();
  };

  // 🔹 FIX: verb.english is an object (simple/detailed), not a string
  const englishSimple = verb.english?.simple || "";
  const englishDetailed = verb.english?.detailed || "";

  // 🔹 FIX: verb.examples is an object (simple/natural/rich), not an array
  // We flatten it into a single array for ExampleSentenceBox
  let flatExamples = [];
  if (verb.examples && typeof verb.examples === "object") {
    const groups = Object.values(verb.examples); // [ {ar,en,tr}, {…}, … ] or arrays
    flatExamples = groups.flatMap((group) =>
      Array.isArray(group) ? group : [group]
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h1 style={styles.title} className="word-verb">
          {verb.arabic}
        </h1>

        {/* AUDIO BUTTON FOR MAIN VERB */}
        <button
          onClick={() => play(`/audio/verbs/${verb.id}.mp3`)}
          style={styles.audioButton}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🔊
        </button>
      </div>

      {/* Meaning line – uses english.simple + english.detailed */}
      <p style={styles.meaning}>
        {englishSimple}
        {englishDetailed && (
          <span style={styles.meaningDetailed}> — {englishDetailed}</span>
        )}
      </p>

      {/* Root + Form */}
      <div style={styles.infoBox}>
        <p>
          <strong>Root:</strong> {verb.root}
        </p>
        <p>
          <strong>Form:</strong> {verb.form}
        </p>
        <p>
          <strong>Weak Type:</strong> {weakType}
        </p>
      </div>

      {/* Navigation to conjugation pages */}
      <h2 style={styles.sectionTitle}>Conjugations</h2>

      <div style={styles.navGrid}>
        <Link to={`/verb/${verb.id}`} style={styles.navItem}>
          Full Conjugation Table
        </Link>

        <Link to="/flashcards/present" style={styles.navItem}>
          Present Flashcards
        </Link>

        <Link to="/flashcards/passive-past" style={styles.navItem}>
          Passive Past Flashcards
        </Link>

        <Link to="/flashcards/passive-present" style={styles.navItem}>
          Passive Present Flashcards
        </Link>

        <Link to="/flashcards/imperative" style={styles.navItem}>
          Imperative Flashcards
        </Link>

        <Link to="/flashcards/moods" style={styles.navItem}>
          Present Moods
        </Link>
      </div>

      {/* Quick Summary */}
      <h2 style={styles.sectionTitle}>Quick Summary</h2>

      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.label}>Past (هو)</td>
            <td style={styles.value}>
              {table.past["هو"]}

              <button
                onClick={() =>
                  play(`/audio/verbs/forms/${verb.id}-past.mp3`)
                }
                style={styles.smallAudio}
              >
                🔊
              </button>
            </td>
          </tr>

          <tr>
            <td style={styles.label}>Present (هو)</td>
            <td style={styles.value}>
              {table.present["هو"]}

              <button
                onClick={() =>
                  play(`/audio/verbs/forms/${verb.id}-present.mp3`)
                }
                style={styles.smallAudio}
              >
                🔊
              </button>
            </td>
          </tr>

          <tr>
            <td style={styles.label}>Imperative (أنتَ)</td>
            <td style={styles.value}>
              {table.imperative["أنتَ"]}

              <button
                onClick={() =>
                  play(`/audio/verbs/forms/${verb.id}-imperative.mp3`)
                }
                style={styles.smallAudio}
              >
                🔊
              </button>
            </td>
          </tr>

          <tr>
            <td style={styles.label}>Active Participle</td>
            <td style={styles.value}>
              {table.activeParticiple}

              <button
                onClick={() =>
                  play(
                    `/audio/verbs/forms/${verb.id}-active-participle.mp3`
                  )
                }
                style={styles.smallAudio}
              >
                🔊
              </button>
            </td>
          </tr>

          <tr>
            <td style={styles.label}>Passive Participle</td>
            <td style={styles.value}>
              {table.passiveParticiple}

              <button
                onClick={() =>
                  play(
                    `/audio/verbs/forms/${verb.id}-passive-participle.mp3`
                  )
                }
                style={styles.smallAudio}
              >
                🔊
              </button>
            </td>
          </tr>

          <tr>
            <td style={styles.label}>Masdar</td>
            <td style={styles.value}>
              {Array.isArray(table.masdar)
                ? table.masdar.join("، ")
                : table.masdar}

              <button
                onClick={() =>
                  play(`/audio/verbs/forms/${verb.id}-masdar.mp3`)
                }
                style={styles.smallAudio}
              >
                🔊
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Example Sentences – uses flattened array */}
      {flatExamples.length > 0 && (
        <ExampleSentenceBox examples={flatExamples} verbId={verb.id} />
      )}
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
  meaningDetailed: {
    fontSize: "18px",
    opacity: 0.85,
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
  navGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
    marginBottom: "25px",
  },
  navItem: {
    padding: "12px",
    background: "#eee",
    borderRadius: "6px",
    textAlign: "center",
    textDecoration: "none",
    color: "#222",
    fontSize: "18px",
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
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  smallAudio: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "20px",
    transition: "0.2s",
  },
  audioButton: {
    border: "none",
    background: "#1E3A8A",
    color: "white",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "22px",
    transition: "0.2s",
  },
  error: {
    padding: "20px",
    textAlign: "center",
    fontSize: "20px",
  },
};
