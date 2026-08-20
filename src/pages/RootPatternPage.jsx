import React from "react";
import { useLocation, Link } from "react-router-dom";
import conjugate from "../utils/conjugate";

export default function RootPatternPage() {
  const { state } = useLocation();
  const { verb, root, form } = state || {};

  if (!verb || !root || !form) {
    return (
      <div style={{ padding: 20 }}>
        <h2>No verb data provided.</h2>
        <Link to="/">Back to Dictionary</Link>
      </div>
    );
  }

  // Run conjugation engine
  const result = conjugate(root, form);

  // Pattern may exist in different places depending on your engine
  const pattern =
    result?.tables?.pattern ||
    result?.rootPattern ||
    "Pattern not available";

  // Optional breakdown (if your engine supports it)
  const patternBreakdown = result?.tables?.patternBreakdown || null;

  return (
    <div style={{ padding: 20, fontSize: 22 }}>
      <h1 style={{ fontSize: 40 }}>{verb} — Root Pattern (الوزن)</h1>

      <p><strong>Root:</strong> {root}</p>
      <p><strong>Form:</strong> {form}</p>
      <p><strong>Weak Type:</strong> {result?.weakType || "None"}</p>

      <div style={{ marginTop: 30 }}>
        <h2 style={{ fontSize: 32 }}>Detected Pattern (الوزن)</h2>
        <p style={{ fontSize: 28, marginTop: 10 }}>
          <strong>{pattern}</strong>
        </p>
      </div>

      {patternBreakdown && (
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 32 }}>Pattern Breakdown</h2>

          <table style={{ width: "100%", marginTop: 15, fontSize: 22 }}>
            <tbody>
              {Object.entries(patternBreakdown).map(([key, value]) => (
                <tr key={key}>
                  <td style={{ padding: 8, fontWeight: "bold" }}>{key}</td>
                  <td style={{ padding: 8 }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ marginTop: 50 }}>
        <Link
          to="/verb-summary"
          state={{ verb, root, form }}
          style={{ color: "blue" }}
        >
          ← Back to Verb Summary
        </Link>
      </div>
    </div>
  );
}
