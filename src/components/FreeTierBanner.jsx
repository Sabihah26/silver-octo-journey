// src/components/FreeTierBanner.jsx
// "25 of 135 verbs are free" strip for list pages. Renders nothing with full
// access, or when every word of the type is already free.
import React from "react";
import { Link } from "react-router-dom";
import useWordAccess from "../hooks/useWordAccess";
import { freeCount, totalCount } from "../data/access";

const PLURAL = { verb: "verbs", noun: "nouns", adjective: "adjectives", adverb: "adverbs" };

export default function FreeTierBanner({ type }) {
  const { hasFullAccess } = useWordAccess();
  if (hasFullAccess) return null;

  const free = freeCount(type);
  const total = totalCount(type);
  if (free >= total) return null;

  return (
    <div style={styles.banner}>
      <span>
        🔒 {free} of {total} {PLURAL[type]} are free. Locked words need Premium.
      </span>
      <Link to="/billing" style={styles.link}>Unlock all {total}</Link>
    </div>
  );
}

const styles = {
  banner: {
    display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", justifyContent: "center",
    maxWidth: 720, margin: "0 auto 20px", padding: "10px 16px", borderRadius: 12,
    background: "rgba(76,175,80,0.15)", border: "1px solid rgba(76,175,80,0.5)",
    color: "white", fontSize: 15, textAlign: "center",
  },
  link: {
    padding: "6px 14px", borderRadius: 8, background: "#4CAF50", color: "white",
    textDecoration: "none", fontWeight: 600,
  },
};
