// src/components/WeakVerbBadge.jsx
import React from "react";

export default function WeakVerbBadge({ type }) {
  if (!type || type === "sound") return null;

  const colors = {
    assimilated: "#007bff",
    hollow: "#ff9800",
    defective: "#d9534f",
    doubled: "#6f42c1",
  };

  const labels = {
    assimilated: "Assimilated Verb (المِثَال)",
    hollow: "Hollow Verb (الأجوف)",
    defective: "Defective Verb (الناقص)",
    doubled: "Doubled Verb (المضعّف)",
  };

  return (
    <div
      style={{
        marginTop: 12,
        padding: "8px 12px",
        borderRadius: 8,
        background: colors[type] + "22",
        border: `1px solid ${colors[type]}`,
        color: colors[type],
        fontSize: 16,
        fontWeight: "bold",
        display: "inline-block",
      }}
    >
      {labels[type]}
    </div>
  );
}
