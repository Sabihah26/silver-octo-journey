// src/components/BackToTop.jsx
// Floating "back to top" button. It appears once the page has been scrolled
// down a fair way (long card lists), so short pages never show it.
import React, { useEffect, useState } from "react";

const SHOW_AFTER = 600; // px scrolled before the button appears

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const scrollUp = () => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button type="button" onClick={scrollUp} style={button} aria-label="Back to top" title="Back to top">
      ↑
    </button>
  );
}

const button = {
  position: "fixed",
  right: 20,
  bottom: 24,
  zIndex: 1000,
  width: 48,
  height: 48,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.35)",
  background: "#007bff",
  color: "white",
  fontSize: 24,
  lineHeight: 1,
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
};
