import React from "react";

export default function NounFormsTable({ forms }) {
  if (!forms) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <h2 style={{ fontSize: 28 }}>Noun Forms</h2>
      <table style={{ width: "100%", marginTop: 10, fontSize: 22 }}>
        <tbody>
          <tr>
            <td style={{ padding: 8, fontWeight: "bold" }}>Singular</td>
            <td style={{ padding: 8 }}>{forms.singular || "—"}</td>
          </tr>
          <tr>
            <td style={{ padding: 8, fontWeight: "bold" }}>Dual</td>
            <td style={{ padding: 8 }}>{forms.dual || "—"}</td>
          </tr>
          <tr>
            <td style={{ padding: 8, fontWeight: "bold" }}>Plural</td>
            <td style={{ padding: 8 }}>{forms.plural || "—"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
