import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  // ⭐ Pages that should be FULL WIDTH
  const fullWidthPages = [
    "/verb-detail",
    "/verb",
    "/study",
    "/",
    "/dev/inspector",   // ⭐ FIX: allow Inspector to render normally
    "/dev/tests"        // ⭐ FIX: allow DevTestPage to render normally
  ];

  const isFullWidth = fullWidthPages.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {/* ⭐ Navbar hidden ONLY on homepage */}
      {location.pathname !== "/" && <Navbar />}

      {isFullWidth ? (
        // ⭐ FULL WIDTH MODE — NO PADDING, NO MAX WIDTH
        <main style={{ padding: 0, margin: 0 }}>
          {children}
        </main>
      ) : (
        // ⭐ NORMAL MODE — CENTERED LAYOUT
        <main style={{ padding: "1.2rem", maxWidth: "900px", margin: "0 auto" }}>
          {children}
        </main>
      )}
    </>
  );
}
