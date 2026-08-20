// src/pages/FavouritesPage.jsx
import React from "react";
import { Link } from "react-router-dom";

import verbs from "../data/verbs";
import { loadFavourites, saveFavourites } from "../utils/favourites";
import { colorizeArabic } from "../engine/vowelColorizer";
import { transliterate } from "../engine/transliterate";

export default function FavouritesPage() {
  const favIds = loadFavourites();
  const items = favIds
    .map((id) => verbs.find((v) => v.id === id))
    .filter(Boolean);

  function clearAll() {
    saveFavourites([]);
    window.location.reload();
  }

  return (
    <div style={wrap}>
      {/* ⭐ Back link with bigger font + light blue */}
      <Link to="/" style={back}>← Back</Link>

      <h1>Favourites</h1>

      {items.length === 0 && <p>No favourites yet.</p>}

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
        <button style={clearBtn} onClick={clearAll}>
          Clear Favourites
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
  fontWeight: "600"   // ⭐ clearer
};

const item = {
  display: "block",
  padding: 15,
  borderBottom: "1px solid #ddd",
  textDecoration: "none",
  color: "inherit"
};

const arabic = { fontSize: 45, direction: "rtl" };
const translit = { fontSize: 25, color: "#666" };
const meaning = { fontSize: 25, marginTop: 4 };

const clearBtn = {
  marginTop: 20,
  padding: "10px 20px",
  background: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer"
};
