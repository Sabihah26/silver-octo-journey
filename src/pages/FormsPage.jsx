// src/pages/FormsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { getVerbFormEntries } from "../utils/verbCatalog";

export default function FormsPage() {
  const forms = getVerbFormEntries();

  return (
    <div style={{ padding: "40px 20px", color: "white", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Verb Forms I–X</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {forms.map((f) => (
          <Link
            key={f.number ?? f.label}
            to={`/forms/${f.number ?? f.label}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "white",
                color: "#0A1A3A",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <h2 style={{ marginBottom: 10 }}>{f.label}</h2>
              <p style={{ color: "#4b5563" }}>Click to explore this form</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
