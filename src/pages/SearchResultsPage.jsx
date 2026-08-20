// src/pages/SearchResultsPage.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

import verbs from "../data/verbs";
import nouns from "../data/nouns";
import adverbs from "../data/Adverbs";

import conjugate from "../utils/conjugate";

// Remove tashkeel
const strip = (w) => w.replace(/[ًٌٍَُِّْ]/g, "");

// Build unified dictionary with type labels
const dictionary = [
  ...verbs.map((v) => ({ ...v, type: "verb" })),
  ...nouns.map((n) => ({ ...n, type: "noun" })),
  ...adverbs.map((a) => ({ ...a, type: "adverb" })),
];

// Simple fuzzy matcher for “Did you mean”
function fuzzyMatch(query, list) {
  const q = strip(query);
  return list
    .filter((item) => strip(item.arabic).startsWith(q.slice(0, 2)))
    .slice(0, 5)
    .map((i) => i.arabic);
}

export default function SearchResultsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const query = params.get("q")?.trim() || "";
  const strippedQuery = strip(query);

  // MAIN SEARCH
  const results = dictionary.filter((item) => {
    const arabic = strip(item.arabic);
    return (
      arabic.includes(strippedQuery) ||
      item.english?.toLowerCase().includes(query.toLowerCase())
    );
  });

  // DID YOU MEAN
  const suggestions =
    results.length === 0 && query ? fuzzyMatch(query, dictionary) : [];

  // AUTO ROOT + WEAK TYPE (verbs only)
  let autoRoot = null;
  let autoWeak = null;

  if (results.length > 0 && results[0].type === "verb") {
    const verb = results[0];
    const formKey = verb.form.replace("Form", "").trim();
    const c = conjugate(verb.root, formKey);

    autoRoot = c.root.join("-");
    autoWeak = c.weakType;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Search Results</h1>

      {query && (
        <p style={styles.subtitle}>
          Showing results for: <strong>{query}</strong>
        </p>
      )}

      {/* INVALID WORD WARNING */}
      {query && results.length === 0 && (
        <div style={styles.warningBox}>
          <p style={styles.warningText}>
            No dictionary entries match this word.
          </p>
          <p style={styles.warningText}>
            Check your spelling or try a simpler form.
          </p>
        </div>
      )}

      {/* DID YOU MEAN */}
      {suggestions.length > 0 && (
        <div style={styles.infoBox}>
          <p style={{ marginBottom: 8 }}>Did you mean:</p>
          {suggestions.map((s) => (
            <div key={s} style={styles.suggestion}>
              {s}
            </div>
          ))}
        </div>
      )}

      {/* AUTO ROOT + WEAK TYPE */}
      {autoRoot && (
        <div style={styles.infoBox}>
          <p>
            <strong>Detected Root:</strong> {autoRoot}
          </p>
          <p>
            <strong>Weak Type:</strong> {autoWeak}
          </p>
        </div>
      )}

      {/* RESULTS */}
      {results.map((item) => {
        let weakBadge = null;

        if (item.type === "verb") {
          const formKey = item.form.replace("Form", "").trim();
          const c = conjugate(item.root, formKey);
          weakBadge = c.weakType !== "sound" ? c.weakType : null;
        }

        const link =
          item.type === "verb"
            ? `/verb/${item.id}`
            : item.type === "noun"
            ? `/noun/${item.id}`
            : `/adverb/${item.id}`;

        return (
          <Link key={item.id} to={link} style={styles.item}>
            <div style={styles.arabic}>{item.arabic}</div>
            <div style={styles.english}>{item.english}</div>

            {weakBadge && (
              <div style={styles.badge}>{weakBadge}</div>
            )}
          </Link>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    maxWidth: 900,
    margin: "0 auto",
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  warningBox: {
    background: "#ffe4e6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  warningText: {
    color: "#b91c1c",
    fontSize: 16,
    marginBottom: 6,
  },
  infoBox: {
    background: "#eef2ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  suggestion: {
    padding: "6px 0",
    fontSize: 18,
  },
  item: {
    padding: "12px 16px",
    border: "1px solid #ddd",
    borderRadius: 6,
    textDecoration: "none",
    background: "#fafafa",
    color: "#222",
    marginBottom: 12,
    position: "relative",
  },
  arabic: {
    fontSize: 26,
    fontWeight: "bold",
  },
  english: {
    opacity: 0.7,
    fontSize: 18,
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    background: "#111827",
    color: "white",
    padding: "4px 10px",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
};
