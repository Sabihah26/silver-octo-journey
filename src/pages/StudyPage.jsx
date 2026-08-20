// src/pages/StudyPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import verbs from "../data/verbs";
import {
  initSession,
  gradeCard,
  getItemSRS,
  updateSRS,
  getNextRecommendedVerb,
} from "../utils/srsEngine";

export default function StudyPage() {
  const [session, setSession] = useState({ queue: [], current: null });
  const [record, setRecord] = useState(null);
  const [recommended, setRecommended] = useState(null);

  const [animateCard, setAnimateCard] = useState(false);
  const [animateXP, setAnimateXP] = useState(false);
  const [animateStreak, setAnimateStreak] = useState(false);

  useEffect(() => {
    const initial = initSession(verbs);
    setSession(initial);

    if (initial.current) {
      const rec = getItemSRS(initial.current.id);
      setRecord(rec);
    }

    const next = getNextRecommendedVerb();
    setRecommended(next);

    setTimeout(() => setAnimateCard(true), 50);
  }, []);

  function handleRate(rating) {
    if (!session.current) return;

    const verb = session.current;
    const isCorrect = rating === "good" || rating === "easy";

    const prevXP = record?.xp || 0;
    const prevStreak = record?.streak || 0;

    const updated = updateSRS(verb.id, isCorrect, rating);
    setRecord(updated);

    if (updated.xp > prevXP) {
      setAnimateXP(true);
      setTimeout(() => setAnimateXP(false), 600);
    }

    if (updated.streak > prevStreak) {
      setAnimateStreak(true);
      setTimeout(() => setAnimateStreak(false), 600);
    }

    setAnimateCard(false);
    setTimeout(() => {
      const nextState = gradeCard(session, rating);
      setSession(nextState);

      if (nextState.current) {
        const nextRec = getItemSRS(nextState.current.id);
        setRecord(nextRec);
      } else {
        setRecord(null);
      }

      const next = getNextRecommendedVerb();
      setRecommended(next);

      setAnimateCard(true);
    }, 250);
  }

  if (!session.current) {
    return (
      <div style={styles.finished}>
        <h2>🎉 Session complete!</h2>
        <p>You’ve gone through all verbs in this session.</p>
        <Link to="/mastery" style={styles.backLink}>
          Back to Mastery Dashboard
        </Link>
      </div>
    );
  }

  const verb = session.current;
  const srs = record || getItemSRS(verb.id);

  // ⭐ NEW — SAFE ACCESSORS
  const arabicMain = verb.past || verb.arabic || "";
  const englishMain =
    verb.english?.simple ||
    verb.english?.detailed ||
    verb.english ||
    "";

  const translit = verb.transliteration || "";
  const root = verb.root || "";
  const form = verb.form || "";

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Study Session</h1>

      {/* CARD */}
      <div
        style={{
          ...styles.card,
          opacity: animateCard ? 1 : 0,
          transform: animateCard ? "translateY(0px)" : "translateY(20px)",
          transition: "all 0.35s ease",
        }}
      >
        <h2 style={styles.arabic}>{arabicMain}</h2>

        <p style={styles.english}>{englishMain}</p>

        <p style={styles.meta}>
          Root: {root} • {form}
        </p>

        {translit && (
          <p style={{ fontSize: 18, color: "#555", marginTop: 6 }}>
            {translit}
          </p>
        )}
      </div>

      {/* SRS PANEL */}
      <div style={styles.srsPanel}>
        <p style={styles.srsLine}>
          <strong>Score:</strong> {srs.score}
        </p>

        <p
          style={{
            ...styles.srsLine,
            ...(animateXP ? styles.xpPop : {}),
          }}
        >
          <strong>XP:</strong> {srs.xp}
        </p>

        <p
          style={{
            ...styles.srsLine,
            ...(animateStreak ? styles.streakPulse : {}),
          }}
        >
          <strong>Streak:</strong> {srs.streak} day(s)
        </p>

        <p style={styles.srsLine}>
          <strong>Interval:</strong> {srs.interval} day(s)
        </p>

        <p style={styles.srsLine}>
          <strong>Next review:</strong>{" "}
          {new Date(srs.nextReview).toLocaleDateString()}
        </p>
      </div>

      {/* RECOMMENDED VERB */}
      {recommended && (
        <div style={styles.recommendBox}>
          <h3 style={styles.recommendTitle}>Next Recommended Verb</h3>

          <p style={styles.recommendArabic}>
            {recommended.past || recommended.arabic}
          </p>

          <p style={styles.recommendEnglish}>
            {recommended.english?.simple ||
              recommended.english?.detailed ||
              ""}
          </p>
        </div>
      )}

      {/* BUTTONS */}
      <div style={styles.buttons}>
        {["again", "hard", "good", "easy"].map((rating) => (
          <button
            key={rating}
            onClick={() => handleRate(rating)}
            style={{
              ...styles.buttonBase,
              ...styles[rating],
              transition: "transform 0.1s",
            }}
            onMouseDown={(e) => (e.target.style.transform = "scale(0.92)")}
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          >
            {rating.toUpperCase()}
          </button>
        ))}
      </div>

      {/* NAV */}
      <div style={styles.nav}>
        <Link to="/" style={styles.link}>
          ← Back to Home
        </Link>
        <Link to="/mastery" style={styles.link}>
          View Progress →
        </Link>
      </div>
    </div>
  );
}

/* STYLES — unchanged except where needed */
const styles = {
  page: {
    maxWidth: 700,
    margin: "0 auto",
    padding: 24,
    background: "#07112B",
    minHeight: "100vh",
    color: "white",
  },
  title: {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    background: "#ffffff",
    padding: 32,
    borderRadius: 20,
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    marginBottom: 24,
    textAlign: "center",
    color: "#111827",
  },
  arabic: {
    fontSize: 48,
    marginBottom: 10,
    color: "#111827",
  },
  english: {
    fontSize: 22,
    marginBottom: 10,
    color: "#111827",
  },
  meta: {
    fontSize: 20,
    color: "#4b5563",
  },
  srsPanel: {
    background: "#f9fafb",
    padding: 20,
    borderRadius: 14,
    marginBottom: 24,
    color: "#111827",
  },
  srsLine: {
    fontSize: 18,
    margin: "6px 0",
  },
  xpPop: {
    animation: "xpPopAnim 0.6s ease",
  },
  streakPulse: {
    animation: "streakPulseAnim 0.6s ease",
  },
  recommendBox: {
    marginTop: 10,
    marginBottom: 24,
    padding: 18,
    background: "#f3f4f6",
    borderRadius: 14,
    textAlign: "center",
    color: "#111827",
  },
  recommendTitle: {
    fontSize: 22,
    marginBottom: 8,
  },
  recommendArabic: {
    fontSize: 36,
    fontWeight: 700,
  },
  recommendEnglish: {
    fontSize: 18,
    color: "#555",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 24,
  },
  buttonBase: {
    padding: "12px 18px",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 16,
  },
  again: { background: "#ef4444" },
  hard: { background: "#f97316" },
  good: { background: "#10b981" },
  easy: { background: "#3b82f6" },
  finished: {
    textAlign: "center",
    padding: 40,
    background: "#112865",
    minHeight: "100vh",
    color: "white",
  },
  backLink: {
    fontSize: 18,
    textDecoration: "none",
    color: "#3b82f6",
  },
  nav: {
    marginTop: 24,
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    fontSize: 18,
    textDecoration: "none",
    color: "#3b82f6",
  },
};

/* Animations */
(function injectKeyframes() {
  try {
    const css = `
@keyframes xpPopAnim {
  0% { transform: scale(1); color: #000; }
  30% { transform: scale(1.3); color: #10b981; }
  100% { transform: scale(1); color: #000; }
}

@keyframes streakPulseAnim {
  0% { transform: scale(1); color: #000; }
  30% { transform: scale(1.3); color: #f59e0b; }
  100% { transform: scale(1); color: #000; }
}
`;

    const styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);
  } catch (err) {
    console.warn("Could not inject keyframes:", err);
  }
})();
