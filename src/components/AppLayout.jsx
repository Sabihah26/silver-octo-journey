// src/components/AppLayout.jsx
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AppLayout() {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  // Detect system dark mode on first load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
  }, []);

  // Apply theme to <body>
  useEffect(() => {
    document.body.style.background = dark ? "#0d0d0d" : "#f5f5f5";
    document.body.style.color = dark ? "#eee" : "#222";
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.transition = "background 0.3s, color 0.3s";
  }, [dark]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        background: dark ? "#0d0d0d" : "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ⭐ CENTRED NAVBAR ⭐ */}
      <nav style={styles.nav(dark)}>
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={styles.brand(dark)}>ArabicMaster</span>

          <div style={styles.navLinks}>
            {navItem("/", "Home", location, dark)}
            {navItem("/verbs", "Verbs", location, dark)}
            {navItem("/nouns", "Nouns", location, dark)}
            {navItem("/adverbs", "Adverbs", location, dark)}
            {navItem("/study", "Study", location, dark)}
            {navItem("/flashcards", "Flashcards", location, dark)}
          </div>

          <button
            onClick={() => setDark(!dark)}
            style={styles.themeButton(dark)}
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* ⭐ CENTRED PAGE CONTENT ⭐ */}
      <main
        style={{
          width: "100%",
          maxWidth: "100%",
          margin: 0,
          padding: 0,
          flexGrow: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

/* NAV ITEM HELPER */
function navItem(path, label, location, dark) {
  const active = location.pathname === path;

  return (
    <Link
      to={path}
      onMouseEnter={(e) => {
        const line = e.currentTarget.querySelector(".underline");
        if (line) line.style.width = "100%";
      }}
      onMouseLeave={(e) => {
        const line = e.currentTarget.querySelector(".underline");
        if (line && !active) line.style.width = "0%";
      }}
      style={{
        ...styles.navItem(dark),
        ...(active ? styles.activeNavItem(dark) : {}),
      }}
    >
      {label}

      <span
        className="underline"
        style={{
          position: "absolute",
          left: 0,
          bottom: -6,
          height: 3,
          width: active ? "100%" : "0%",
          background: dark ? "#f59e0b" : "#111827",
          borderRadius: 2,
          transition: "width 0.35s ease",
        }}
      />
    </Link>
  );
}

/* NAV + LAYOUT STYLES */
const styles = {
  nav: (dark) => ({
    padding: "16px 0",
    background: dark
      ? "rgba(20,20,20,0.85)"
      : "rgba(255,255,255,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: dark ? "1px solid #333" : "1px solid #ddd",
    position: "sticky",
    top: 0,
    zIndex: 20,
  }),

  brand: (dark) => ({
    fontSize: 24,
    fontWeight: 800,
    letterSpacing: "0.5px",
    color: dark ? "#fff" : "#111",
  }),

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 22,
  },

  navItem: (dark) => ({
    position: "relative",
    textDecoration: "none",
    fontSize: 17,
    fontWeight: 500,
    padding: "6px 4px",
    color: dark ? "#ddd" : "#333",
    transition: "color 0.25s ease",
  }),

  activeNavItem: (dark) => ({
    color: dark ? "#fff" : "#111",
    fontWeight: 600,
  }),

  themeButton: (dark) => ({
    padding: "8px 14px",
    fontSize: 16,
    cursor: "pointer",
    background: dark ? "#333" : "#ddd",
    color: dark ? "#eee" : "#222",
    border: "none",
    borderRadius: 8,
    transition: "0.25s ease",
  }),
};
