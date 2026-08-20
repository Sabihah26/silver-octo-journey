// src/pages/MasteryDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import verbs from "../data/verbs";
import {
  getSRSStats,
  getItemSRS,
  getDueItems,
  getNextRecommendedVerb,
} from "../utils/srsEngine";

export default function MasteryDashboard() {
  const stats = getSRSStats();
  const dueItems = getDueItems();
  const nextVerb = getNextRecommendedVerb();

  // Build mastery distribution
  const distribution = {
    "0–1": 0,
    "2–3": 0,
    "4–5": 0,
    "6–7": 0,
    "8+": 0,
  };

  verbs.forEach((v) => {
    const rec = getItemSRS(v.id);
    const s = rec.score || 0;

    if (s <= 1) distribution["0–1"]++;
    else if (s <= 3) distribution["2–3"]++;
    else if (s <= 5) distribution["4–5"]++;
    else if (s <= 7) distribution["6–7"]++;
    else distribution["8+"]++;
  });

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Progress & Mastery Dashboard</h1>

      {/* SUMMARY CARDS */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.cardNumber}>{stats.total}</h2>
          <p style={styles.cardLabel}>Total Verbs Tracked</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardNumber}>{stats.due}</h2>
          <p style={styles.cardLabel}>Due for Review</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardNumber}>{stats.avgScore}</h2>
          <p style={styles.cardLabel}>Average Mastery Score</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardNumber}>{stats.totalXP}</h2>
          <p style={styles.cardLabel}>Total XP Earned</p>
        </div>
      </div>

      {/* NEXT RECOMMENDED VERB */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Next Recommended Verb</h2>

        <div style={styles.recommendCard}>
          <p style={styles.recommendArabic}>{nextVerb.arabic}</p>
          <p style={styles.recommendEnglish}>{nextVerb.english}</p>
          <p style={styles.recommendMeta}>
            Root: {nextVerb.root} • {nextVerb.form}
          </p>

          <Link to="/study" style={styles.primaryButton}>
            Study This Verb →
          </Link>
        </div>
      </div>

      {/* MASTERY DISTRIBUTION */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Mastery Distribution</h2>

        <div style={styles.distGrid}>
          {Object.entries(distribution).map(([label, count]) => {
            const pct = Math.round((count / verbs.length) * 100);
            return (
              <div key={label} style={styles.distItem}>
                <p style={styles.distLabel}>{label}</p>
                <div style={styles.distBarOuter}>
                  <div
                    style={{
                      ...styles.distBarInner,
                      width: `${pct}%`,
                    }}
                  />
                </div>
                <p style={styles.distCount}>
                  {count} verbs ({pct}%)
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* DUE VERBS */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Verbs Due Today</h2>

        {dueItems.length === 0 ? (
          <p style={styles.noData}>🎉 No verbs due today — you're all caught up.</p>
        ) : (
          <>
            <ul style={styles.dueList}>
              {dueItems.slice(0, 10).map((item) => {
                const verb = verbs.find((v) => v.id === Number(item.verbKey));
                return (
                  <li key={item.verbKey} style={styles.dueItem}>
                    <span style={styles.verbKey}>{verb?.arabic}</span>
                    <span style={styles.score}>Score: {item.score}</span>
                  </li>
                );
              })}
            </ul>

            {dueItems.length > 10 && (
              <p style={styles.moreText}>
                + {dueItems.length - 10} more due…
              </p>
            )}

            <Link to="/study-due" style={styles.primaryButton}>
              Study Due Verbs →
            </Link>
          </>
        )}
      </div>

      {/* QUICK ACTIONS */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>

        <div style={styles.actionsGrid}>
          <Link to="/study" style={styles.actionCard}>
            <h3 style={styles.actionTitle}>Regular SRS Session</h3>
            <p style={styles.actionText}>
              Review a smart mix of verbs based on your mastery.
            </p>
          </Link>

          <Link to="/study-all" style={styles.actionCard}>
            <h3 style={styles.actionTitle}>Study All Verbs</h3>
            <p style={styles.actionText}>
              Cycle through every tracked verb for broad exposure.
            </p>
          </Link>

          <Link to="/study-weak" style={styles.actionCard}>
            <h3 style={styles.actionTitle}>Weak Verbs Trainer</h3>
            <p style={styles.actionText}>
              Focus on hollow and defective verbs that need extra attention.
            </p>
          </Link>
        </div>
      </div>

      {/* NAV */}
      <div style={styles.nav}>
        <Link to="/" style={styles.link}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

/* -----------------------------
   STYLES
----------------------------- */
const styles = {
  page: {
    padding: 30,
    maxWidth: 1000,
    margin: "0 auto",
  },
  title: {
    fontSize: 40,
    fontWeight: 800,
    marginBottom: 30,
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    marginBottom: 40,
  },
  card: {
    background: "#ffffff",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  cardNumber: {
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 16,
    color: "#555",
  },

  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 26,
    marginBottom: 14,
  },

  recommendCard: {
    background: "#ffffff",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  recommendArabic: {
    fontSize: 40,
    fontWeight: 700,
  },
  recommendEnglish: {
    fontSize: 20,
    color: "#555",
  },
  recommendMeta: {
    marginTop: 6,
    fontSize: 14,
    color: "#666",
  },

  primaryButton: {
    display: "inline-block",
    marginTop: 16,
    padding: "10px 20px",
    background: "#111827",
    color: "#ffffff",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
  },

  distGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 16,
  },
  distItem: {
    background: "#ffffff",
    padding: 14,
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  distLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  distBarOuter: {
    width: "100%",
    height: 10,
    background: "#e5e7eb",
    borderRadius: 999,
    overflow: "hidden",
    marginBottom: 4,
  },
  distBarInner: {
    height: "100%",
    background: "#3b82f6",
    transition: "width 0.3s ease",
  },
  distCount: {
    fontSize: 13,
    color: "#555",
  },

  dueList: {
    listStyle: "none",
    padding: 0,
    marginTop: 8,
  },
  dueItem: {
    padding: "8px 12px",
    background: "#f9fafb",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    marginBottom: 6,
    display: "flex",
    justifyContent: "space-between",
  },
  verbKey: {
    fontWeight: 600,
  },
  score: {
    color: "#555",
  },
  moreText: {
    marginTop: 6,
    fontSize: 14,
    color: "#666",
  },

  actionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  actionCard: {
    background: "#ffffff",
    padding: 18,
    borderRadius: 14,
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    textDecoration: "none",
    color: "#111827",
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 6,
  },
  actionText: {
    fontSize: 14,
    color: "#555",
  },

  nav: {
    marginTop: 30,
    textAlign: "center",
  },
  link: {
    fontSize: 18,
    textDecoration: "none",
    color: "#2563eb",
  },
};
