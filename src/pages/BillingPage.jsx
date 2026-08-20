// src/pages/BillingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { usePremium } from "../context/PremiumContext";

export default function BillingPage() {
  const { startCheckout } = usePremium();

  return (
    <div style={pageContainer}>
      <h1 style={title}>Go Premium</h1>
      <p style={subtitle}>
        Unlock all verbs, nouns, adverbs, examples, grammar lessons, quizzes,
        flashcards, and saved words.
      </p>

      <div style={card}>
        <h2 style={planTitle}>Lifetime Access</h2>
        <p style={price}>£29.99 one‑time</p>

        <ul style={featureList}>
          <li>All verb, noun, and adverb entries</li>
          <li>Full examples and grammar lessons</li>
          <li>Unlimited flashcards and quizzes</li>
          <li>Saved words synced on this device</li>
        </ul>

        <button style={primaryBtn} onClick={startCheckout}>
          Upgrade Now
        </button>

        <p style={smallNote}>
          Secure payment via Stripe. One‑time purchase.
        </p>
      </div>

      <div style={{ marginTop: 30 }}>
        <Link to="/" style={backLink}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

const pageContainer = {
  padding: 20,
  maxWidth: 600,
  margin: "0 auto",
  color: "white",              // ⭐ FIX: Text matches dark theme
};

const title = {
  fontSize: 32,
  marginBottom: 10,
  color: "white",              // ⭐ FIX
};

const subtitle = {
  fontSize: 18,
  opacity: 0.9,
  color: "white",              // ⭐ FIX
};

const card = {
  marginTop: 20,
  padding: 20,
  borderRadius: 12,
  background: "white",         // ⭐ FIX: White card stays white
  color: "#222",               // ⭐ FIX: Dark text inside card
  border: "1px solid #ddd",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

const planTitle = {
  fontSize: 24,
  marginBottom: 6,
};

const price = {
  fontSize: 22,
  color: "#28a745",
  marginBottom: 10,
};

const featureList = {
  fontSize: 16,
  paddingLeft: 20,
  lineHeight: 1.6,
};

const primaryBtn = {
  marginTop: 10,
  padding: "12px 20px",
  fontSize: 18,
  borderRadius: 8,
  border: "none",
  background: "#28a745",
  color: "white",
  cursor: "pointer",
  width: "100%",
};

const smallNote = {
  marginTop: 10,
  fontSize: 13,
  opacity: 0.7,
};

const backLink = {
  fontSize: 18,
  textDecoration: "none",
  color: "#4da3ff",            // ⭐ FIX: Matches your app’s link colour
};
