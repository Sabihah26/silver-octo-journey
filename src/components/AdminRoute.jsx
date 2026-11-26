// src/components/AdminRoute.jsx
// Route wrapper: only admins (profiles.is_admin, set by hand in Supabase)
// can open admin and dev pages; everyone else is sent home. This hides the
// pages in the app. Any data they read still needs its own RLS policies.
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { usePremium } from "../context/PremiumContext";

export default function AdminRoute() {
  const { isAdmin, loading } = usePremium();

  if (loading) return <p style={{ textAlign: "center", marginTop: 60, color: "#9ca3af" }}>Checking your access…</p>;
  if (!isAdmin) return <Navigate to="/" replace />;
  return <Outlet />;
}
