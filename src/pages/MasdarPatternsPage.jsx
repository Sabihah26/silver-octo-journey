import React from "react";

const PATTERNS = [
  { pattern: "فَعْل", example: "كتب → كَتْب", note: "General verbal noun" },
  { pattern: "فِعَالَة", example: "كتب → كِتَابَة", note: "Act of doing" },
  { pattern: "فُعُول", example: "دخل → دُخُول", note: "Entry, process" },
  { pattern: "فَعَال", example: "قال → قَوَال", note: "Intensive/iterative" },
];

export default function MasdarPatternsPage() {
  return (
    <div style={{ padding: 20, fontSize: 22 }}>
      <h1 style={{ fontSize: 36 }}>Masdar Patterns (أوزان المصدر)</h1>

      <table style={{ width: "100%", marginTop: 20, fontSize: 22 }}>
        <thead>
          <tr>
            <th style={{ padding: 8, textAlign: "left" }}>Pattern</th>
            <th style={{ padding: 8, textAlign: "left" }}>Example</th>
            <th style={{ padding: 8, textAlign: "left" }}>Note</th>
          </tr>
        </thead>
        <tbody>
          {PATTERNS.map((row, i) => (
            <tr key={i}>
              <td style={{ padding: 8 }}>{row.pattern}</td>
              <td style={{ padding: 8 }}>{row.example}</td>
              <td style={{ padding: 8 }}>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
