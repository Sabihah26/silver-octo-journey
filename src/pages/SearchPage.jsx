// src/pages/SearchPage.jsx
import React, { useState, useMemo, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import verbs from "../data/verbs";
import nouns from "../data/nouns";
import adverbs from "../data/Adverbs";
import adjectives from "../data/adjectives";

import SearchCard from "../components/SearchCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

/* ⭐ SAFE NORMALIZATION */
function normalizeArabic(str) {
  if (typeof str !== "string") return "";
  try {
    return str
      .replace(/[\u064B-\u0652]/g, "")
      .replace(/[أإآ]/g, "ا")
      .trim();
  } catch {
    return "";
  }
}

function normalizeRoot(str) {
  return normalizeArabic(str).replace(/[\s-]/g, "");
}

/* ⭐ Levenshtein distance */
function distance(a, b) {
  a = String(a).toLowerCase();
  b = String(b).toLowerCase();

  const dp = Array(a.length + 1)
    .fill(null)
    .map(() => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[a.length][b.length];
}

export default function SearchPage() {
  const query = useQuery();
  const rootQuery = query.get("root") || "";
  const q = query.get("q") || rootQuery;
  const isRootSearch = Boolean(rootQuery.trim());

  const [tab, setTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(20);
  const [didYouMean, setDidYouMean] = useState(null);
  const [history, setHistory] = useState([]);

  const searchTerm = q.trim().toLowerCase();
  const normalizedSearch = normalizeArabic(searchTerm);

  /* ⭐ Search history */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    setHistory(stored);

    if (searchTerm) {
      const updated = [
        searchTerm,
        ...stored.filter((h) => h !== searchTerm),
      ].slice(0, 10);

      setHistory(updated);
      localStorage.setItem("searchHistory", JSON.stringify(updated));
    }
  }, [searchTerm]);

  const allWords = useMemo(
    () => [...verbs, ...nouns, ...adverbs, ...adjectives],
    []
  );

  /* ⭐ Did you mean */
  useEffect(() => {
    if (!searchTerm) {
      setDidYouMean(null);
      return;
    }

    let best = null;
    let bestScore = Infinity;

    allWords.forEach((w) => {
      const arabicCandidate =
        w.arabic?.simple ||
        w.arabic?.past ||
        w.past ||
        (typeof w.arabic === "string" ? w.arabic : "") ||
        "";

      const normalized = normalizeArabic(arabicCandidate);
      const d = distance(normalizedSearch, normalized);

      if (d < bestScore) {
        bestScore = d;
        best = arabicCandidate;
      }
    });

    if (best && bestScore > 0 && bestScore <= 2) {
      setDidYouMean(best);
    } else {
      setDidYouMean(null);
    }
  }, [normalizedSearch, allWords]);

  /* ⭐ SAFE FILTER FUNCTION */
  const filterList = (list) => {
    return list.filter((item) => {
      if (!searchTerm) return false;

      /* ⭐ Root search (verbs only) */
      if (isRootSearch && list === verbs) {
        const itemRoot = normalizeRoot(item.root || "");
        const queryRoot = normalizeRoot(rootQuery);
        return itemRoot === queryRoot;
      }

      /* ⭐ SAFE Arabic extraction (AMENDED FOR ADVERBS) */
      const arabicText =
        item.arabic?.simple ||
        item.arabic?.past ||
        item.past ||
        item.arabic || // ⭐ NEW — supports adverbs
        "";

      /* ⭐ SAFE English extraction (AMENDED FOR ADVERBS) */
      const englishText =
        item.english?.simple ||
        item.english?.detailed ||
        item.english || // ⭐ NEW — supports adverbs
        "";

      /* ⭐ SAFE transliteration extraction */
      const translitText =
        item.transliteration?.past ||
        item.transliteration?.present ||
        item.transliteration?.masdar1 ||
        (typeof item.transliteration === "string"
          ? item.transliteration
          : "") ||
        "";

      const arabic = normalizeArabic(arabicText);
      const english = String(englishText).toLowerCase();
      const transliteration = String(translitText).toLowerCase();

      return (
        arabic.includes(normalizedSearch) ||
        english.includes(searchTerm) ||
        transliteration.includes(searchTerm)
      );
    });
  };

  /* ⭐ Memoized results */
  const verbResults = useMemo(
    () => filterList(verbs),
    [normalizedSearch, searchTerm, isRootSearch, rootQuery]
  );
  const nounResults = useMemo(
    () => filterList(nouns),
    [normalizedSearch, searchTerm]
  );
  const adverbResults = useMemo(
    () => filterList(adverbs),
    [normalizedSearch, searchTerm]
  );
  const adjectiveResults = useMemo(
    () => filterList(adjectives),
    [normalizedSearch, searchTerm]
  );

  const nothingFound =
    verbResults.length === 0 &&
    nounResults.length === 0 &&
    adverbResults.length === 0 &&
    adjectiveResults.length === 0;

  const loadMore = () => setVisibleCount((c) => c + 20);

  /* ⭐ UI */
  return (
    <div
      style={{
        padding: 20,
        color: "white",
        background: "#0A1A3A",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 1200, width: "100%" }}>
        <h1 style={{ textAlign: "center", marginBottom: 10 }}>
          Search Results
        </h1>

        <p style={{ opacity: 0.7, textAlign: "center", fontSize: 20 }}>
          Showing results for:{" "}
          <strong style={{ fontSize: 35 }}>{q}</strong>
        </p>

        {didYouMean && (
          <p style={{ textAlign: "center", marginTop: 8, fontSize: 20 }}>
            Did you mean:{" "}
            <Link
              to={`/search?q=${encodeURIComponent(didYouMean)}`}
              style={{ color: "#f59e0b", fontWeight: 600, fontSize: 35 }}
            >
              {didYouMean}
            </Link>
          </p>
        )}

        {history.length > 0 && (
          <div
            style={{
              marginTop: 20,
              textAlign: "center",
              fontSize: 20,
              opacity: 0.8,
              lineHeight: "2.2",
            }}
          >
            Recent searches:
            <div
              style={{
                marginTop: 10,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "14px",
              }}
            >
              {history.map((h, i) => (
                <Link
                  key={`history-${i}`}
                  to={`/search?q=${encodeURIComponent(h)}`}
                  style={{
                    color: "#f59e0b",
                    fontSize: 35,
                    textDecoration: "underline",
                    textUnderlineOffset: "6px",
                  }}
                >
                  {h}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ⭐ TABS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 20,
          }}
        >
          {["all", "verbs", "nouns", "adverbs", "adjectives"].map((t) => (
            <button
              key={`tab-${t}`}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#f59e0b" : "#1B2B55",
                color: "white",
                fontWeight: 600,
                transition: "0.2s",
              }}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {nothingFound && (
          <p style={{ marginTop: 20, textAlign: "center", fontSize: 20 }}>
            No results found.
          </p>
        )}

        {/* ⭐ 4‑COLUMN RESULTS GRID */}
        <div style={styles.grid}>
          {/* VERBS COLUMN */}
          {(tab === "all" || tab === "verbs") && (
            <div style={styles.column}>
              <h2 style={{ marginTop: 10, marginBottom: 10 }}>Verbs</h2>
              {verbResults.length === 0 && (
                <p style={{ opacity: 0.6, fontSize: 20 }}>No verbs found.</p>
              )}
              {verbResults.slice(0, visibleCount).map((v, i) => (
                <Link
                  key={`verb-${v.id}-${i}`}
                  to={`/verb/${v.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <SearchCard
                    item={v}
                    type="verb"
                    searchTerm={searchTerm}
                    index={i}
                  />
                </Link>
              ))}
            </div>
          )}

          {/* NOUNS COLUMN */}
          {(tab === "all" || tab === "nouns") && (
            <div style={styles.column}>
              <h2 style={{ marginTop: 10, marginBottom: 10 }}>Nouns</h2>
              {nounResults.length === 0 && (
                <p style={{ opacity: 0.6, fontSize: 20 }}>No nouns found.</p>
              )}
              {nounResults.slice(0, visibleCount).map((n, i) => (
                <div key={`noun-${n.id}-${i}`}>
                  <SearchCard
                    item={n}
                    type="noun"
                    searchTerm={searchTerm}
                    index={i}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ADVERBS COLUMN */}
          {(tab === "all" || tab === "adverbs") && (
            <div style={styles.column}>
              <h2 style={{ marginTop: 10, marginBottom: 10 }}>Adverbs</h2>
              {adverbResults.length === 0 && (
                <p style={{ opacity: 0.6, fontSize: 20 }}>No adverbs found.</p>
              )}
              {adverbResults.slice(0, visibleCount).map((a, i) => (
                <Link
                  key={`adv-${a.id}-${i}`}
                  to={`/adverbs/${a.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <SearchCard
                    item={a}
                    type="adverb"
                    searchTerm={searchTerm}
                    index={i}
                  />
                </Link>
              ))}
            </div>
          )}

          {/* ADJECTIVES COLUMN */}
          {(tab === "all" || tab === "adjectives") && (
            <div style={styles.column}>
              <h2 style={{ marginTop: 10, marginBottom: 10 }}>Adjectives</h2>
              {adjectiveResults.length === 0 && (
                <p style={{ opacity: 0.6, fontSize: 20 }}>
                  No adjectives found.
                </p>
              )}
              {adjectiveResults.slice(0, visibleCount).map((adj, i) => (
                <Link
                  key={`adj-${adj.id}-${i}`}
                  to={`/adjectives/${adj.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <SearchCard
                    item={adj}
                    type="adjective"
                    searchTerm={searchTerm}
                    index={i}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>

        {(verbResults.length +
          nounResults.length +
          adverbResults.length +
          adjectiveResults.length) >
          visibleCount && (
          <button
            onClick={loadMore}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              borderRadius: 20,
              border: "none",
              background: "#f59e0b",
              color: "#0A1A3A",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}

/* ⭐ GRID STYLES */
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 20,
    marginTop: 30,
  },
  column: {
    background: "rgba(255,255,255,0.05)",
    padding: 10,
    borderRadius: 12,
    textAlign: "center",
  },
};
