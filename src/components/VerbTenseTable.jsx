import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function VerbTenseTable({ title, rows }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 28, marginBottom: 10 }}>{title}</h2>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 22,
            textAlign: "right",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                الضمير
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Pronoun
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                الصيغة
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Audio
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {row.personAr}
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {row.personEn || ""}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {row.form}
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  {row.form && (
                    <AudioPlayer label="Play" text={row.form} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
