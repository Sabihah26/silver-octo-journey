// src/components/FloatingReportButton.jsx
import React, { useState } from "react";
import ReportIssue from "./ReportIssue";

export default function FloatingReportButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#DC2626",
          color: "white",
          padding: "12px 16px",
          borderRadius: "50px",
          fontWeight: "700",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          zIndex: 9999,
        }}
      >
        Report Issue
      </button>

      {open && <ReportIssue onClose={() => setOpen(false)} />}
    </>
  );
}
