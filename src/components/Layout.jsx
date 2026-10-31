// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import { useLocation, Outlet } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  // ⭐ Pages that should be FULL WIDTH
  const fullWidthPages = [
    "/verb-detail",
    "/verb",
    "/study",
    "/",
    "/dev/inspector",
    "/dev/tests"
  ];

  const isFullWidth = fullWidthPages.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {/* ⭐ Navbar ALWAYS visible now */}
      <Navbar />

      {isFullWidth ? (
        // ⭐ FULL WIDTH MODE — NO PADDING, NO MAX WIDTH
        <main style={{ padding: 0, margin: 0 }}>
          <Outlet />
        </main>
      ) : (
        // ⭐ NORMAL MODE — CENTERED LAYOUT
        <main style={{ padding: "1.2rem", maxWidth: "900px", margin: "0 auto" }}>
          <Outlet />
        </main>
      )}
    </>
  );
}
