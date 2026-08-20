// src/pages/ProgressDashboard.jsx
import React, { useEffect, useState } from 'react';

function loadStudyData() {
  try {
    const data = localStorage.getItem('studyData');
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function ProgressDashboard() {
  const [stats, setStats] = useState({ total: 0, due: 0 });

  useEffect(() => {
    const data = loadStudyData();
    const entries = Object.values(data);

    const total = entries.length;
    const now = Date.now();
    const due = entries.filter((e) => e.nextReview <= now).length;

    setStats({ total, due });
  }, []);

  return (
    <div className="p-4" style={{ color: "white" }}>
      <h2 className="text-xl font-bold mb-4">Progress Dashboard</h2>

      <p>Total studied words: <strong>{stats.total}</strong></p>
      <p>Words due for review: <strong>{stats.due}</strong></p>
    </div>
  );
}

export default ProgressDashboard;
