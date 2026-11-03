// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main style={{ margin: 0, padding: 0 }}>
        <Outlet />
      </main>
    </>
  );
}
