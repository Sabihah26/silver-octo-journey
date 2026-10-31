// src/pages/AboutPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        background: "#0A1A3A",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 900, width: "100%" }}>
        {/* HEADER */}
        <h1
          style={{
            textAlign: "center",
            fontSize: 48,
            marginBottom: 10,
            color: "#f59e0b",
          }}
        >
          About This Dictionary
        </h1>

        <p
          style={{
            textAlign: "center",
            opacity: 0.8,
            fontSize: 22,
            marginBottom: 40,
          }}
        >
          A modern Arabic dictionary built around roots, patterns, and clarity.
        </p>

        {/* MISSION */}
        <div style={sectionBox}>
          <h2 style={sectionTitle}>Our Mission</h2>
          <p style={sectionText}>
            This project was created to make Arabic easier to explore and
            understand — especially for learners who struggle with traditional
            dictionary formats. By organising words by root, pattern, and part
            of speech, this dictionary helps you see the deeper connections
            within the language.
          </p>
        </div>

        {/* FEATURES */}
        <div style={sectionBox}>
          <h2 style={sectionTitle}>Features</h2>
          <ul style={{ lineHeight: 1.9, fontSize: 20 }}>
            <li>✔ Root‑based search</li>
            <li>✔ Full verb conjugation tables</li>
            <li>✔ Nouns, adjectives, adverbs grouped clearly</li>
            <li>✔ Clean, modern interface</li>
            <li>✔ Fast search with “Did you mean” suggestions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div style={sectionBox}>
          <h2 style={sectionTitle}>Contact</h2>
          <p style={sectionText}>
            If you’d like to send feedback, report an issue, or suggest new
            features, feel free to reach out:
          </p>

          <p
            style={{
              marginTop: 15,
              fontSize: 26,
              fontWeight: 600,
              color: "#f59e0b",
            }}
          >
            aarabic.dictionary@gmail.com
          </p>

          <p style={{ opacity: 0.7, marginTop: 10 }}>
            (Use a dedicated project email instead of your personal one.)
          </p>
        </div>

        {/* CONTACT FORM */}
        <div style={sectionBox}>
          <h2 style={sectionTitle}>Send a Message</h2>

          {submitted ? (
            <p style={{ fontSize: 22, color: "#f59e0b" }}>
              Thank you! Your message has been submitted.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                style={{ ...inputStyle, height: 120 }}
                required
              />

              <button type="submit" style={buttonStyle}>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* FUTURE PLANS */}
        <div style={sectionBox}>
          <h2 style={sectionTitle}>Future Plans</h2>
          <p style={sectionText}>
            Upcoming improvements include expanded verb forms, audio
            pronunciation, example sentences.
          </p>
        </div>

        {/* FOOTER */}
        <p
          style={{
            textAlign: "center",
            opacity: 0.6,
            marginTop: 40,
            fontSize: 18,
          }}
        >
          © {new Date().getFullYear()} Arabic Root Dictionary — All rights
          reserved.
        </p>

        {/* BACK LINK */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
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

/* ⭐ STYLES */
const sectionBox = {
  background: "rgba(255,255,255,0.05)",
  padding: 25,
  borderRadius: 16,
  marginBottom: 30,
  transition: "0.3s",
};

const sectionTitle = {
  color: "#f59e0b",
  marginBottom: 10,
  fontSize: 28,
};

const sectionText = {
  lineHeight: 1.7,
  fontSize: 20,
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
  color: "#0A1A3A",
  padding: "12px 20px",
  borderRadius: 20,
  border: "none",
  fontWeight: 600,
  fontSize: 20,
  cursor: "pointer",
  marginTop: 10,
};
