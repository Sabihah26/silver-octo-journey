// src/pages/SRSQueue.jsx
import { checkAchievements } from "../utils/achievements";
import React, { useState, useEffect } from "react";
import nouns from "../data/nouns";
import {
  getDueNouns,
  updateNounSRS,
  getNextRecommendedNoun,
} from "../utils/srsNouns";

export default function SRSQueue() {
  const [dueToday, setDueToday] = useState([]);
  const [overdue, setOverdue] = useState([]);
  const [queue, setQueue] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const due = getDueNouns();

    const now = Date.now();
    const overdueList = due.filter((item) => item.nextReview < now - 86400000);
    const todayList = due.filter((item) => item.nextReview >= now - 86400000);

    setDueToday(todayList);
    setOverdue(overdueList);

    const fullQueue = [...overdueList, ...todayList];
    setQueue(fullQueue);
    setIndex(0);
    setFlipped(false);
  }, []);

  if (queue.length === 0) {
    const next = getNextRecommendedNoun();
    return (
      <div style={pageStyle}>
        <h2>No SRS reviews due</h2>
        <p style={{ marginTop: "10px" }}>
          Next recommended noun:{" "}
          <strong>{next.english}</strong> — {next.arabic}
        </p>
      </div>
    );
  }

  const currentDue = queue[index];
  const noun = nouns.find((n) => n.id === currentDue.nounId);

  const rate = (rating) => {
    updateNounSRS(noun.id, rating !== "again", rating);
    checkAchievements();   // ⭐ CORRECTLY ADDED HERE

    if (index < queue.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
    } else {
      setQueue([]);
    }
  };

  return (
    <div style={pageStyle}>
      <h2>SRS Review Queue</h2>

      {/* Queue Summary */}
      <div style={summaryRow}>
        <div style={summaryCard}>
          <h3 style={summaryNumber}>{overdue.length}</h3>
          <p>Overdue</p>
        </div>

        <div style={summaryCard}>
          <h3 style={summaryNumber}>{dueToday.length}</h3>
          <p>Due Today</p>
        </div>

        <div style={summaryCard}>
          <h3 style={summaryNumber}>{queue.length}</h3>
          <p>Total Queue</p>
        </div>
      </div>

      {/* Flashcard */}
      <div
        style={{
          ...cardContainer,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => setFlipped(!flipped)}
      >
        <div style={{ ...cardFace, backfaceVisibility: "hidden" }}>
          <h3 style={{ fontSize: "28px" }}>{noun.english}</h3>
          <p style={{ fontSize: "20px", marginTop: "10px" }}>
            Click to reveal Arabic
          </p>
        </div>

        <div
          style={{
            ...cardFace,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            background: "#0A1A3A",
            color: "white",
          }}
        >
          <h3 style={{ fontSize: "32px" }}>{noun.arabic}</h3>
        </div>
      </div>

      {/* Rating Buttons */}
      <div style={buttonRow}>
        <button style={againBtn} onClick={() => rate("again")}>
          Again
        </button>
        <button style={hardBtn} onClick={() => rate("hard")}>
          Hard
        </button>
        <button style={goodBtn} onClick={() => rate("good")}>
          Good
        </button>
        <button style={easyBtn} onClick={() => rate("easy")}>
          Easy
        </button>
      </div>

      {/* Progress */}
      <p style={{ marginTop: "20px", fontSize: "16px" }}>
        {index + 1} / {queue.length} reviews
      </p>
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
  marginBottom: "25px",
};

const summaryCard = {
  background: "white",
  padding: "20px 30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  textAlign: "center",
  width: "140px",
};

const summaryNumber = {
  fontSize: "26px",
  fontWeight: "bold",
  color: "#0A1A3A",
};

const cardContainer = {
  width: "320px",
  height: "220px",
  borderRadius: "12px",
  background: "white",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  cursor: "pointer",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  position: "relative",
};

const cardFace = {
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
};

const buttonRow = {
  marginTop: "25px",
  display: "flex",
  gap: "10px",
};

const againBtn = {
  padding: "10px 14px",
  background: "#B00020",
  color: "white",
  borderRadius: "8px",
  border: "none",
};

const hardBtn = {
  padding: "10px 14px",
  background: "#E67E22",
  color: "white",
  borderRadius: "8px",
  border: "none",
};

const goodBtn = {
  padding: "10px 14px",
  background: "#2980B9",
  color: "white",
  borderRadius: "8px",
  border: "none",
};

const easyBtn = {
  padding: "10px 14px",
  background: "#27AE60",
  color: "white",
  borderRadius: "8px",
  border: "none",
};
