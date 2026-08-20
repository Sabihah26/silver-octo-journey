// src/pages/StudySettingsPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  loadSettings,
  setDailyGoal,
  toggleDarkMode,
  setDefaultStudyMode,
} from "../utils/studySettings";

export default function StudySettingsPage() {
  const initial = loadSettings();

  const [goal, setGoalState] = useState(initial.dailyGoal);
  const [dark, setDark] = useState(initial.darkMode);
  const [mode, setMode] = useState(initial.defaultStudyMode);

  function saveGoal() {
    setDailyGoal(Number(goal));
  }

  function toggleDark() {
    toggleDarkMode();
    setDark(!dark);
  }

  function saveMode(m) {
    setDefaultStudyMode(m);
    setMode(m);
  }

  return (
    <div style={wrap}>
      <Link to="/" style={back}>← Back</Link>

      <h1>Study Settings</h1>

      {/* Daily Goal */}
      <div style={box}>
        <h3>Daily Goal</h3>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoalState(e.target.value)}
          style={input}
        />
        <button style={btn} onClick={saveGoal}>Save</button>
      </div>

      {/* Dark Mode */}
      <div style={box}>
        <h3>Dark Mode</h3>
        <button style={btn} onClick={toggleDark}>
          {dark ? "Disable Dark Mode" : "Enable Dark Mode"}
        </button>
      </div>

      {/* Default Study Mode */}
      <div style={box}>
        <h3>Default Study Mode</h3>

        <select
          value={mode}
          onChange={(e) => saveMode(e.target.value)}
          style={input}
        >
          <option value="srs">SRS (Due Verbs)</option>
          <option value="all">Study All Verbs</option>
          <option value="weak">Study Weak Verbs</option>
          <option value="form">Study by Form</option>
        </select>
      </div>
    </div>
  );
}

const wrap = { padding: 20, maxWidth: 600, margin: "0 auto" };
const back = { display: "inline-block", marginBottom: 20, textDecoration: "none", color: "#007bff" };
const box = { padding: 20, border: "1px solid #ddd", borderRadius: 10, marginBottom: 20 };
const input = { padding: 10, fontSize: 18, width: "100%", marginBottom: 10 };
const btn = { padding: "10px 20px", fontSize: 16, borderRadius: 8, border: "none", background: "#007bff", color: "#fff", cursor: "pointer" };