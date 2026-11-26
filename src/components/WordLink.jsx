// src/components/WordLink.jsx
// Drop-in for a word card's <Link>: locked words are dimmed and get a
// padlock. They still link to the detail route, where PremiumGate shows the
// upgrade card.
import React from "react";
import { Link } from "react-router-dom";
import useWordAccess from "../hooks/useWordAccess";

export default function WordLink({ type, id, style, children, ...rest }) {
  const { isLocked } = useWordAccess();
  const locked = isLocked(type, id);

  return (
    <Link
      {...rest}
      style={locked ? { ...style, position: "relative", opacity: 0.55 } : style}
      aria-label={locked ? "Premium word (locked)" : rest["aria-label"]}
    >
      {locked && (
        <span style={badge} aria-hidden="true">
          🔒
        </span>
      )}
      {children}
    </Link>
  );
}

const badge = {
  position: "absolute",
  top: 6,
  right: 8,
  fontSize: 14,
  lineHeight: 1,
  pointerEvents: "none",
};
