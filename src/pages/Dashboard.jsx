// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import nouns from "../data/nouns";
import { getNounSRSStats } from "../utils/srsNouns";

/* White Folder SVG Icon */
const WhiteFolderIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" />
  </svg>
);

export default function Dashboard() {
  const allTopics = [...new Set(nouns.map((n) => n.topic))];

  const topicCounts = allTopics.map((topic) => ({
    topic,
    count: nouns.filter((n) => n.topic === topic).length,
  }));

  const srs = getNounSRSStats();

  return (
    <div style={pageStyle}>
      <h2 style={{ marginBottom: "20px" }}>Learning Dashboard</h2>

      {/* Summary Cards */}
      <div style={summaryRow}>
        <div style={summaryCard}>
          <h3 style={summaryNumber}>{nouns.length}</h3>
          <p>Total Nouns</p>
        </div>

        <div style={summaryCard}>
          <h3 style={summaryNumber}>{allTopics.length}</h3>
          <p>Total Topics</p>
        </div>
      </div>

      {/* SRS Stats */}
      <h3 style={{ marginTop: "40px" }}>Spaced Repetition (SRS)</h3>
      <div style={summaryRow}>
        <div style={summaryCard}>
          <h3 style={summaryNumber}>{srs.total}</h3>
          <p>SRS Tracked</p>
        </div>

        <div style={summaryCard}>
          <h3 style={summaryNumber}>{srs.due}</h3>
          <p>Due Today</p>
        </div>

        <div style={summaryCard}>
          <h3 style={summaryNumber}>{srs.avgScore}</h3>
          <p>Avg Mastery</p>
        </div>

        <div style={summaryCard}>
          <h3 style={summaryNumber}>{srs.totalXP}</h3>
          <p>Total XP</p>
        </div>
      </div>

      <Link to="/srs-review" style={srsButton}>
        Review SRS Now
      </Link>

      {/* Topic List */}
      <h3 style={{ marginTop: "40px" }}>Topics</h3>
      <div style={topicGrid}>
        {topicCounts.map((t) => (
          <Link
            key={t.topic}
            to={`/nouns/topics/${t.topic}`}
            style={topicTile}
          >
            <WhiteFolderIcon />
            <span style={topicName}>
              {t.topic.charAt(0).toUpperCase() + t.topic.slice(1)}
            </span>
            <span style={topicCount}>{t.count} words</span>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <h3 style={{ marginTop: "40px" }}>Quick Actions</h3>
      <div style={actionGrid}>
        <Link to="/super-study" style={actionButton}>
          Super Study Mode
        </Link>

        <Link to="/multi/select" style={actionButton}>
          Multi‑Topic Mode
        </Link>

        <Link to="/topics" style={actionButton}>
          Topic List
        </Link>

        <Link to="/flashcards" style={actionButton}>
          Flashcards
        </Link>

        <Link to="/trainer" style={actionButton}>
          AI Trainer
        </Link>

        <Link to="/quiz" style={actionButton}>
          Quiz Mode
        </Link>
      </div>
    </div>
  );
}

/* Styles */
const pageStyle = {
  paddingTop: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const summaryRow = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const summaryCard = {
  background: "white",
  padding: "20px 30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  textAlign: "center",
  width: "150px",
};

const summaryNumber = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#0A1A3A",
};

const srsButton = {
  marginTop: "20px",
  padding: "12px 20px",
  background: "#D4AF37",
  color: "black",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const topicGrid = {
  marginTop: "15px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: "20px",
  width: "90%",
  maxWidth: "800px",
};

const topicTile = {
  background: "linear-gradient(135deg, #D4AF37, #F7E27A)",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  textDecoration: "none",
  color: "black",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const topicName = {
  display: "block",
  marginTop: "10px",
  fontSize: "18px",
  fontWeight: "bold",
};

const topicCount = {
  display: "block",
  marginTop: "6px",
  fontSize: "14px",
  opacity: 0.8,
};

const actionGrid = {
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "15px",
  width: "90%",
  maxWidth: "800px",
};

const actionButton = {
  background: "#0A1A3A",
  color: "white",
  padding: "14px",
  borderRadius: "10px",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};
