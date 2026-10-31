// src/pages/FormsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { getVerbFormEntries } from "../utils/verbCatalog";

export default function FormsPage() {
  const forms = getVerbFormEntries();

  return (
    <div
      style={{
        padding: "40px 20px",
        background: "#0A1A3A",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 30,
          fontSize: "34px",
          fontWeight: 700,
        }}
      >
        Verb Forms I–X
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                padding: "24px",
                borderRadius: "14px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(0,0,0,0.20)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.15)";
              }}
            >
              <h2
                style={{
                  marginBottom: 10,
                  fontSize: "26px",
                  fontWeight: 700,
                }}
              >
                {f.label}
              </h2>

              <p style={{ color: "#4b5563", fontSize: "16px" }}>
                Click to explore this form
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
