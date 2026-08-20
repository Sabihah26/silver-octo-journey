// src/pages/FormCharts.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function FormCharts() {
  const forms = [
    { form: "Form I", pattern: "فَعَلَ / فَعِلَ / فَعُلَ", meaning: "Basic meaning" },
    { form: "Form II", pattern: "فَعَّلَ", meaning: "Causative / Intensive" },
    { form: "Form III", pattern: "فَاعَلَ", meaning: "Reciprocal / Associative" },
    { form: "Form IV", pattern: "أَفْعَلَ", meaning: "Causative / Declarative" },
    { form: "Form V", pattern: "تَفَعَّلَ", meaning: "Reflexive of Form II" },
    { form: "Form VI", pattern: "تَفَاعَلَ", meaning: "Reflexive of Form III" },
    { form: "Form VII", pattern: "اِنْفَعَلَ", meaning: "Passive / Reflexive" },
    { form: "Form VIII", pattern: "اِفْتَعَلَ", meaning: "Reflexive / Internal" },
    { form: "Form IX", pattern: "اِفْعَلَّ", meaning: "Colors / Defects" },
    { form: "Form X", pattern: "اِسْتَفْعَلَ", meaning: "Seeking / Considering" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 32 }}>Arabic Verb Forms (I–X)</h1>
      <p style={{ opacity: 0.7 }}>
        Patterns, meanings, and structure of the ten major verb forms.
      </p>

      <div style={{ marginTop: 20 }}>
        {forms.map((f) => (
          <div
            key={f.form}
            style={{
              padding: 16,
              marginBottom: 12,
              borderRadius: 8,
              background: "#f9f9ff",
              border: "1px solid #ddd",
            }}
          >
            <h2 style={{ fontSize: 26 }}>{f.form}</h2>
            <p style={{ fontSize: 22, direction: "rtl", textAlign: "right" }}>
              {f.pattern}
            </p>
            <p style={{ fontSize: 18, opacity: 0.8 }}>{f.meaning}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 30 }}>
        <Link to="/" style={{ fontSize: 20 }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
