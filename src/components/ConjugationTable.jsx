// src/components/ConjugationTable.jsx
import React from "react";

export default function ConjugationTable({ title, data }) {
  if (!data) return null;

  // Arabic pronouns list
  const arabicPronouns = [
    "هو",
    "هما",
    "هم",
    "هي",
    "هن",
    "أنتَ",
    "أنتِ",
    "أنتما",
    "أنتم",
    "أنتن",
    "أنا",
    "نحن"
  ];

  return (
    <div style={{ marginBottom: 30 }}>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#0f172a",
          color: "white",
          borderRadius: 8,
          overflow: "hidden"
        }}
      >
        <tbody>
          {Object.entries(data).map(([label, value]) => {
            const isArabicPronoun = arabicPronouns.includes(label.trim());

            return (
              <tr key={label}>
                {/* LABEL (Arabic pronoun or English label) */}
                <td
                  style={{
                    padding: "18px 10px",
                    borderBottom: "1px solid #334155",
                    width: "40%",
                    color: "#94a3b8",
                    fontSize: isArabicPronoun ? "32px" : "20px",
                    fontWeight: isArabicPronoun ? "700" : "400",
                    textAlign: isArabicPronoun ? "center" : "left",
                    lineHeight: isArabicPronoun ? "1.4" : "1.2"
                  }}
                >
                  {label}
                </td>

                {/* VALUE (Arabic verb form) */}
                <td
                  style={{
                    padding: "18px 10px",
                    borderBottom: "1px solid #334155",
                    fontSize: "36px",
                    fontWeight: 700,
                    textAlign: "center",
                    lineHeight: "1.4"
                  }}
                >
                  {value || "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
