// src/pages/RecentlyViewedPage.jsx
import React from "react";
import { Link } from "react-router-dom";

import verbs from "../data/verbs";
import { loadRecentlyViewed, clearRecentlyViewed } from "../utils/recentlyViewed";
import { colorizeArabic } from "../engine/vowelColorizer";
import { transliterate } from "../engine/transliterate";

export default function RecentlyViewedPage() {
  const ids = loadRecentlyViewed();
  const items = ids
    .map((id) => verbs.find((v) => v.id === id))
    .filter(Boolean);

  return (
    <div style={wrap}>
      {/* ⭐ Back link with bigger font + light blue */}
      <Link to="/" style={back}>← Back</Link>

      <h1>Recently Viewed</h1>

      {items.length === 0 && <p>No recently viewed verbs yet.</p>}

      {items.map((v) => (
        <Link to={`/verb/${v.id}`} key={v.id} style={item}>
          <div
            style={arabic}
            dangerouslySetInnerHTML={{ __html: colorizeArabic(v.past) }}
          />
          <div style={translit}>{transliterate(v.past)}</div>
          <div style={meaning}>{v.meaning}</div>
        </Link>
      ))}

      {items.length > 0 && (
        <button
          style={clearBtn}
          onClick={() => {
            clearRecentlyViewed();
            window.location.reload();
          }}
        >
          Clear History
        </button>
      )}
    </div>
  );
}

const wrap = { padding: 20, maxWidth: 700, margin: "0 auto" };

const back = {
  display: "inline-block",
  marginBottom: 20,
  textDecoration: "none",
  color: "#7ec8ff",   // ⭐ light blue
  fontSize: 25,       // ⭐ bigger arrow + text
  fontWeight: "600"   // ⭐ optional: makes it clearer
};

const item = {
  display: "block",
  padding: 15,
  borderBottom: "1px solid #ddd",
  textDecoration: "none",
  color: "inherit"
};

const arabic = { fontSize: 32, direction: "rtl" };
const translit = { fontSize: 16, color: "#666" };
const meaning = { fontSize: 18, marginTop: 4 };

const clearBtn = {
  marginTop: 20,
  padding: "10px 20px",
  background: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer"
};
