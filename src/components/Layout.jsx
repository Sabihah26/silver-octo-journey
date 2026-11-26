// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import BackToTop from "./BackToTop";
import { Outlet } from "react-router-dom";
import { isSupabaseConfigured } from "../supabase";

export default function Layout() {
  return (
    <>
      <Navbar />

      {!isSupabaseConfigured && (
        <div
          role="alert"
          style={{
            padding: "10px 16px",
            background: "#fff3cd",
            color: "#664d03",
            textAlign: "center",
          }}
        >
          Sign-in and premium features are unavailable: configure{" "}
          <code>REACT_APP_SUPABASE_ANON_KEY</code> in the hosting environment.
        </div>
      )}

      <main style={{ margin: 0, padding: 0 }}>
        <Outlet />
      </main>

      <BackToTop />
    </>
  );
}
