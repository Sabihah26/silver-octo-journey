// src/pages/ReportErrorPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ReportErrorPage() {
  const [form, setForm] = useState({
    itemType: "",
    itemNumber: "",
    errorLocation: "",
    description: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Later you can send this to Supabase or email
    console.log("Error report submitted:", form);
  };

  return (
    <div
      style={{
        background: "#07112B",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 800, width: "100%" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: 42,
            marginBottom: 10,
            color: "#f59e0b",
          }}
        >
          Report an Error
        </h1>

        <p
          style={{
            textAlign: "center",
            opacity: 0.8,
            fontSize: 20,
            marginBottom: 30,
          }}
        >
          Help us improve the dictionary by reporting mistakes or missing
          information.
        </p>

        {submitted ? (
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: 25,
              borderRadius: 16,
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#10b981" }}>Thank you!</h2>
            <p style={{ opacity: 0.8 }}>
              Your report has been submitted. We’ll review it soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: 25,
              borderRadius: 16,
            }}
          >
            {/* ITEM TYPE */}
            <label style={labelStyle}>Where is the error?</label>
            <select
              name="itemType"
              value={form.itemType}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">Select type</option>
              <option value="verb">Verb</option>
              <option value="noun">Noun</option>
              <option value="adjective">Adjective</option>
              <option value="adverb">Adverb</option>
              <option value="other">Other</option>
            </select>

            {/* ITEM NUMBER */}
            <label style={labelStyle}>
              What is the number of the item? (e.g., Verb #124)
            </label>
            <input
              name="itemNumber"
              placeholder="Enter item number"
              value={form.itemNumber}
              onChange={handleChange}
              style={inputStyle}
              required
            />

            {/* ERROR LOCATION */}
            <label style={labelStyle}>Where exactly is the error?</label>
            <select
              name="errorLocation"
              value={form.errorLocation}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">Select location</option>
              <option value="meaning">Meaning</option>
              <option value="conjugation">Conjugation</option>
              <option value="root">Root</option>
              <option value="pattern">Pattern</option>
              <option value="transliteration">Transliteration</option>
              <option value="example">Example sentence</option>
              <option value="ui">UI display</option>
              <option value="other">Other</option>
            </select>

            {/* DESCRIPTION */}
            <label style={labelStyle}>Describe the problem</label>
            <textarea
              name="description"
              placeholder="Explain what is wrong"
              value={form.description}
              onChange={handleChange}
              style={{ ...inputStyle, height: 120 }}
              required
            />

            {/* EMAIL */}
            <label style={labelStyle}>
              Your email (optional, for follow‑up)
            </label>
            <input
              name="email"
              placeholder="your email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>
              Submit Report
            </button>
          </form>
        )}

        {/* DIRECT EMAIL */}
        <p
          style={{
            textAlign: "center",
            opacity: 0.6,
            marginTop: 40,
            fontSize: 18,
          }}
        >
          Or email us directly at:
        </p>

        <p
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: 600,
            color: "#f59e0b",
          }}
        >
          aarabic.dictionary@gmail.com
        </p>

        {/* BACK LINK */}
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Link
            to="/"
            style={{
              color: "#f59e0b",
              fontSize: 22,
              textDecoration: "underline",
              textUnderlineOffset: 6,
            }}
          >
            ← Back to Dictionary
          </Link>
        </div>
      </div>
    </div>
  );
}

/* STYLES */
const labelStyle = {
  display: "block",
  marginTop: 15,
  marginBottom: 5,
  fontSize: 18,
  opacity: 0.9,
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: 15,
  borderRadius: 10,
  border: "none",
  fontSize: 18,
};

const buttonStyle = {
  background: "#f59e0b",
  color: "#07112B",
  padding: "12px 20px",
  borderRadius: 20,
  border: "none",
  fontWeight: 600,
  fontSize: 20,
  cursor: "pointer",
  marginTop: 10,
};
