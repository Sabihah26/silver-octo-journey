// src/components/PremiumModal.jsx
import React from "react";
import { usePremium } from "../context/PremiumContext";

export default function PremiumModal({ isOpen, onClose }) {
  const { startCheckout, unlockPremium } = usePremium();

  if (!isOpen) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <div style={lockIcon}>🔒</div>

        <h2 style={title}>Unlock Premium</h2>

        <p style={subtitle}>
          Get full access to all verbs, nouns, adverbs, grammar lessons,
          examples, quizzes, flashcards, and saved words.
        </p>

        <ul style={benefits}>
          <li>✔ 20 free verbs included</li>
          <li>✔ Unlock all remaining verbs</li>
          <li>✔ Unlock all nouns & adverbs</li>
          <li>✔ Unlock all grammar & examples</li>
          <li>✔ Unlimited quizzes & flashcards</li>
        </ul>

        <button style={upgradeBtn} onClick={startCheckout}>
          Upgrade Now
        </button>

        <button style={alreadyPaidBtn} onClick={unlockPremium}>
          Already paid? Unlock manually
        </button>

        <button style={closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

// -----------------------------
// Styles (Glassmorphism)
// -----------------------------
const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.55)",
  backdropFilter: "blur(6px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modal = {
  width: "90%",
  maxWidth: "420px",
  padding: "30px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.3)",
  color: "white",
  textAlign: "center",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
};

const lockIcon = {
  fontSize: "60px",
  marginBottom: "10px",
};

const title = {
  fontSize: "28px",
  marginBottom: "10px",
  fontWeight: "600",
};

const subtitle = {
  fontSize: "16px",
  opacity: 0.9,
  marginBottom: "20px",
};

const benefits = {
  textAlign: "left",
  margin: "0 auto 20px auto",
  paddingLeft: "20px",
  fontSize: "16px",
  lineHeight: "1.6",
};

const upgradeBtn = {
  width: "100%",
  padding: "12px",
  fontSize: "18px",
  borderRadius: "10px",
  border: "none",
  background: "#4CAF50",
  color: "white",
  cursor: "pointer",
  marginBottom: "10px",
};

const alreadyPaidBtn = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "10px",
  border: "1px solid white",
  background: "transparent",
  color: "white",
  cursor: "pointer",
  marginBottom: "10px",
};

const closeBtn = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "10px",
  border: "none",
  background: "rgba(255,255,255,0.2)",
  color: "white",
  cursor: "pointer",
};
