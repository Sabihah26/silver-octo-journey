// src/pages/VerbQuiz.jsx
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { buildVerbQuiz } from "../utils/quizEngine";
import conjugate from "../utils/conjugate";
import verbs from "../data/verbs";

import {
  getNextRecommendedVerb,
  getItemSRS,
  updateSRS,
} from "../utils/srsEngine";

// ⭐ Normalize Arabic for correct comparison
function normalizeArabic(str) {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u064B-\u065F]/g, "")
    .replace(/ـ/g, "")
    .trim();
}

// ⭐ Remove duplicate Arabic options
function uniqueArabicOptions(options) {
  const seen = new Set();
  return options.filter((opt) => {
    const norm = normalizeArabic(opt);
    if (seen.has(norm)) return false;
    seen.add(norm);
    return true;
  });
}

export default function VerbQuiz() {
  const location = useLocation();

  const [verb, setVerb] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const [mode, setMode] = useState("past");

  function determineMode(srsRecord) {
    if (location.state?.mode) return location.state.mode;

    const xp = srsRecord?.xp || 0;
    const streak = srsRecord?.streak || 0;

    if (xp < 20) return "present";
    if (streak < 3) return "past";

    if (xp < 80) {
      return Math.random() < 0.5 ? "past" : "present";
    }

    const modes = ["past", "present", "passivePast", "passivePresent", "imperative"];
    return modes[Math.floor(Math.random() * modes.length)];
  }

  useEffect(() => {
    const nextVerb = getNextRecommendedVerb();
    if (!nextVerb) return;

    setVerb(nextVerb);

    const srsRecord = getItemSRS(nextVerb.id);
    const chosenMode = determineMode(srsRecord);
    setMode(chosenMode);

    let qs = buildVerbQuiz({
      verb: nextVerb,
      root: nextVerb.root,
      form: nextVerb.form,
      mode: chosenMode,
    });

    qs = qs.map((q) => ({
      ...q,
      options: uniqueArabicOptions(q.options),
    }));

    if (nextVerb.weakType) {
      qs.push({
        id: `${nextVerb.id}-weakType`,
        verb: nextVerb,
        questionLang: "en",
        pronounAr: null,
        pronounEn: null,
        correctAnswer: nextVerb.weakType,
        options: uniqueArabicOptions(shuffleWeak(nextVerb.weakType)),
        mode: "weakType",
      });
    }

    setQuestions(qs);
  }, []);

  function shuffleWeak(correct) {
    const all = ["hollow", "defective", "assimilated", "doubled", "hamzated"];
    const filtered = all.filter((t) => t !== correct);
    const distractors = filtered.sort(() => Math.random() - 0.5).slice(0, 3);
    return [correct, ...distractors].sort(() => Math.random() - 0.5);
  }

  if (!verb || questions.length === 0) {
    return <div style={{ padding: 20 }}>Loading quiz…</div>;
  }

  const q = questions[currentIndex];

  const arabicMain =
    verb.arabic?.simple ||
    verb.arabic?.past ||
    verb.past ||
    verb.arabic ||
    "";

  const englishMain =
    verb.english?.simple ||
    verb.english?.detailed ||
    verb.english ||
    "";

  function handleSelect(option) {
    setSelected(option);

    const isCorrect =
      normalizeArabic(option) === normalizeArabic(q.correctAnswer);

    setFeedback(isCorrect ? "correct" : "wrong");

    try {
      updateSRS(verb.id, isCorrect, isCorrect ? "good" : "again");
    } catch (e) {
      console.log("SRS update error:", e);
    }

    setTimeout(() => {
      setSelected(null);
      setFeedback(null);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setFeedback("finished");
      }
    }, 900);
  }

  if (feedback === "finished") {
    return (
      <div style={styles.finished}>
        <h2>🎉 Quiz complete!</h2>
        <p>You’ve completed all questions for this verb.</p>
        <Link to="/study/mastery" style={styles.backLink}>
          Back to Mastery Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* ⭐ TITLE */}
        <h1 style={styles.quizTitle}>Verb Quiz</h1>

        {/* ⭐ BIG ARABIC */}
        <h1 style={styles.arabic}>{arabicMain}</h1>

        <h2 style={styles.english}>{englishMain}</h2>

        {/* ⭐ META FIX — visible, bold, dark blue */}
        <p style={styles.meta}>
          <span style={styles.root}>{verb.root}</span> • Form: {verb.form} • Mode: {mode}
        </p>

        {/* ⭐ ALWAYS ENGLISH QUESTION */}
        <h3
          style={{
            ...styles.question,
            fontSize: 24,
          }}
        >
          Conjugate for "{q.pronounEn}"
        </h3>

        <div style={styles.options}>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(opt)}
              style={{
                ...styles.option,
                ...(selected === opt
                  ? feedback === "correct"
                    ? styles.correct
                    : styles.wrong
                  : {}),
              }}
              onMouseDown={(e) => (e.target.style.transform = "scale(0.92)")}
              onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow = "0 0 12px rgba(0, 120, 255, 0.6)")
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow = "none")
              }
            >
              {opt}
            </button>
          ))}
        </div>

        {feedback && feedback !== "finished" && (
          <p
            style={{
              textAlign: "center",
              fontSize: 20,
              marginTop: 10,
              color: feedback === "correct" ? "#4caf50" : "#f44336",
            }}
          >
            {feedback === "correct" ? "✔ Correct!" : "✖ Try again"}
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: 480,
    background: "#fff",
    padding: 12,
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  quizTitle: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 6,
    fontWeight: 700,
    color: "#0A1A3A",
  },

  arabic: {
    fontSize: 90,
    textAlign: "center",
    color: "#0a3384",
    marginTop: -4,
    marginBottom: 0,
  },

  english: {
    fontSize: 22,
    color: "#062970",
    textAlign: "center",
    marginBottom: 6,
  },

  // ⭐ META FIX
  meta: {
    textAlign: "center",
    color: "#0A1A3A",
    marginBottom: 10,
    fontWeight: 600,
    fontSize: 20,
  },

  // ⭐ ROOT LETTERS 35px + bold
  root: {
    fontSize: 35,
    fontWeight: 700,
    color: "#db10db",
  },

  question: {
    textAlign: "center",
    color: "#1259e7",
    marginBottom: 10,
    lineHeight: "1.3",
  },

  options: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  option: {
    padding: "12px 16px",
    fontSize: 28,
    borderRadius: 10,
    border: "2px solid #bcdcff",
    background: "#e8f3ff",
    cursor: "pointer",
    textAlign: "center",
    transition: "0.15s",
  },

  correct: {
    background: "#c8f7c5",
    borderColor: "#4caf50",
  },

  wrong: {
    background: "#f7c5c5",
    borderColor: "#f44336",
  },

  finished: {
    padding: 40,
    textAlign: "center",
  },

  backLink: {
    marginTop: 20,
    display: "inline-block",
    textDecoration: "none",
    color: "#007bff",
  },
};
