// src/pages/SearchResultsList.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResultsList() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Search</h1>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a verb, noun, or adverb…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    maxWidth: 800,
    margin: "0 auto",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  searchContainer: {
    display: "flex",
    gap: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
  },
  button: {
    padding: "10px 20px",
    fontSize: 18,
    cursor: "pointer",
  },
};
