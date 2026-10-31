// src/pages/ContactPage.jsx
import React, { useState } from "react";

export default function ContactPage() {
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
      <div style={{ maxWidth: 700, width: "100%" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: 48,
            marginBottom: 10,
            color: "#f59e0b",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            textAlign: "center",
            opacity: 0.8,
            fontSize: 22,
            marginBottom: 40,
          }}
        >
          We'd love to hear from you.
        </p>

        {submitted ? (
          <p style={{ fontSize: 22, color: "#f59e0b", textAlign: "center" }}>
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

      </div>
    </div>
  );
}

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
