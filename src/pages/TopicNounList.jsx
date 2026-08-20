// src/pages/TopicNounList.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import nouns from "../data/nouns";

export default function TopicNounList() {
  const { category, topic } = useParams();   // ⭐ READ BOTH

  const [search, setSearch] = React.useState("");

  // ⭐ Filter nouns by BOTH category + topic
  const filteredNouns = nouns.filter(
    (noun) =>
      noun.category === category &&
      noun.topics &&
      noun.topics.includes(topic)
  );

  // ⭐ Apply search filter
  const displayedNouns = filteredNouns.filter((noun) =>
    noun.english.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      
      {/* Back to Category Topics */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link
          to={`/nouns/category/${category}`}
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "16px",
          }}
        >
          ← Back to {formatCategoryName(category)}
        </Link>
      </div>

      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        {formatTopicName(topic)} Nouns
      </h1>

      {/* Search Bar */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search nouns..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchBox}
        />
      </div>

      {/* Noun Grid */}
      <div style={gridContainer}>
        {displayedNouns.map((noun) => (
          <Link
            key={noun.id}
            to={`/noun/${noun.id}`}
            style={nounCard}
          >
            <div style={{ fontSize: "22px", marginBottom: "6px" }}>
              {noun.icon}
            </div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              {noun.english}
            </div>
            <div style={{ fontSize: "18px", opacity: 0.8 }}>
              {noun.arabic}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* Format topic name */
function formatTopicName(key) {
  return key
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/* Format category name */
function formatCategoryName(key) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

/* Search box style */
const searchBox = {
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1px solid #4b5563",
  width: "80%",
  maxWidth: "300px",
  fontSize: "16px",
};

/* Responsive grid */
const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "16px",
  maxWidth: "600px",
  margin: "0 auto",
};

/* Noun card style */
const nounCard = {
  background: "#0A1A3A",
  color: "white",
  padding: "16px 20px",
  borderRadius: "10px",
  textDecoration: "none",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  transition: "0.2s",
};
