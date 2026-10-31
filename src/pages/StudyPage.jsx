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

  const translit =
    verb.transliteration?.past ||
    verb.transliteration?.present ||
    verb.transliteration?.masdar1 ||
    (typeof verb.transliteration === "string" ? verb.transliteration : "") ||
    "";

  const root = verb.root || "";
  const form = verb.form || "";

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Study Session</h1>

      {/* CARD 1 — Verb Info */}
      <div style={styles.tableCard}>
        <div style={styles.row}>
          <div style={styles.leftCell}>{translit}</div>
          <div style={styles.rightArabic}>{arabicMain}</div>
        </div>

        <div style={styles.row}>
          <div style={styles.leftCell}>{englishMain}</div>
          <div style={styles.rightCell}>{form}</div>
        </div>

        {/* ⭐ FIXED — Root now uses rootArabic */}
        <div style={styles.row}>
          <div style={styles.leftCell}>Root</div>
          <div style={styles.rootArabic}>{root}</div>
        </div>
      </div>

      {/* CARD 2 — SRS Stats */}
      <div style={styles.tableCard}>
        <div style={styles.row}>
          <div style={styles.leftCell}>Score: {srs.score}</div>
          <div style={styles.rightCell}>Interval: {srs.interval} day(s)</div>
        </div>

        <div style={styles.row}>
          <div
            style={{
              ...styles.leftCell,
              ...(animateXP ? styles.xpPop : {}),
            }}
          >
            XP: {srs.xp}
          </div>
          <div style={styles.rightCell}>
            Next review: {new Date(srs.nextReview).toLocaleDateString()}
          </div>
        </div>

        <div style={styles.row}>
          <div
            style={{
              ...styles.leftCell,
              ...(animateStreak ? styles.streakPulse : {}),
            }}
          >
            Streak: {srs.streak} day(s)
          </div>
          <div style={styles.rightCell}></div>
        </div>
      </div>

      {/* CARD 3 — Next Recommended Verb */}
      {recommended && (
        <div style={styles.tableCard}>
          <div style={styles.titleRow}>Next Recommended Verb</div>

          <div style={styles.row}>
            <div style={styles.leftGreen}>
              {recommended.english?.simple ||
                recommended.english?.detailed ||
                recommended.english ||
                ""}
            </div>

            <div style={styles.rightArabic}>
              {recommended.arabic?.simple ||
                recommended.arabic?.past ||
                recommended.past ||
                recommended.arabic ||
                ""}
            </div>
          </div>
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

/* NEW STYLES */
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

  tableCard: {
    background: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },

  leftCell: {
    fontSize: 20,
    color: "#333",
  },

  rightCell: {
    fontSize: 20,
    color: "#111",
    textAlign: "right",
  },

  rightArabic: {
    fontSize: 45,
    color: "#1061e4",
    textAlign: "right",
    direction: "rtl",
  },

  /* ⭐ NEW — ONLY ROOT LETTERS (35px) */
  rootArabic: {
    fontSize: 35,
    fontWeight: 700,
    color: "#1061e4",
    direction: "rtl",
  },

  leftGreen: {
    fontSize: 22,
    color: "green",
  },

  titleRow: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
    color: "#333",
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

  xpPop: {
    animation: "xpPopAnim 0.6s ease",
  },

  streakPulse: {
    animation: "streakPulseAnim 0.6s ease",
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
