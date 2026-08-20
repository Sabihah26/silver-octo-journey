// src/pages/MultiTopicSelect.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nouns from "../data/nouns";

export default function MultiTopicSelect() {
  const navigate = useNavigate();

  // Extract unique topics from nouns.js
  const allTopics = [...new Set(nouns.map((n) => n.topic))];

  const [selected, setSelected] = useState([]);

  const toggleTopic = (topic) => {
    if (selected.includes(topic)) {
      setSelected(selected.filter((t) => t !== topic));
    } else {
      setSelected([...selected, topic]);
    }
  };

  const goTo = (mode) => {
    if (selected.length === 0) return;
    navigate(`/multi/${mode}?topics=${selected.join(",")}`);
  };

  return (
    <div style={pageStyle}>
      <h2>Select Multiple Topics</h2>

      <div style={topicList}>
        {allTopics.map((topic) => (
          <label key={topic} style={topicItem}>
            <input
              type="checkbox"
              checked={selected.includes(topic)}
              onChange={() => toggleTopic(topic)}
              style={{ marginRight: "10px" }}
            />
            {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </label>
        ))}
      </div>

      <div style={buttonRow}>
        <button
          style={mainButton}
          disabled={selected.length === 0}
          onClick={() => goTo("study")}
        >
          Study
        </button>

        <button
          style={mainButton}
          disabled={selected.length === 0}
          onClick={() => goTo("flashcards")}
        >
          Flashcards
        </button>

        <button
          style={mainButton}
          disabled={selected.length === 0}
          onClick={() => goTo("trainer")}
        >
          AI Trainer
        </button>
      </div>
    </div>
  );
}

const pageStyle = {
  paddingTop: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const topicList = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const topicItem = {
  fontSize: "20px",
  cursor: "pointer",
};

const buttonRow = {
  marginTop: "30px",
  display: "flex",
  gap: "15px",
};

const mainButton = {
  padding: "12px 20px",
  background: "#0A1A3A",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};
