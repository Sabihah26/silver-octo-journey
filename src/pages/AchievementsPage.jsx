// src/pages/AchievementsPage.jsx
import React, { useEffect, useState } from "react";
import { ACHIEVEMENTS, getAchievements, checkAchievements } from "../utils/achievements";

export default function AchievementsPage() {
  const [unlocked, setUnlocked] = useState({});

  useEffect(() => {
    const updated = checkAchievements();
    setUnlocked(updated);
  }, []);

  return (
    <div style={pageStyle}>
      <h2 style={{ marginBottom: "20px" }}>Achievements</h2>

      <div style={grid}>
        {ACHIEVEMENTS.map((a) => {
          const isUnlocked = unlocked[a.id];

          return (
            <div
              key={a.id}
              style={{
                ...card,
                background: isUnlocked ? "#D4AF37" : "#EEE",
                color: isUnlocked ? "black" : "#777",
              }}
            >
              <div style={icon}>{a.icon}</div>
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
              {!isUnlocked && <p style={locked}>Locked</p>}
              {isUnlocked && <p style={unlockedStyle}>Unlocked</p>}
            </div>
          );
        })}
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

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  width: "90%",
  maxWidth: "900px",
};

const card = {
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

const icon = {
  fontSize: "40px",
  marginBottom: "10px",
};

const locked = {
  marginTop: "10px",
  fontWeight: "bold",
  opacity: 0.6,
};

const unlockedStyle = {
  marginTop: "10px",
  fontWeight: "bold",
};
