import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { usePremium } from "../context/PremiumContext";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, loading } = usePremium();
  // "update" = user arrived from a password-reset email and must choose a new password
  const [mode, setMode] = useState(searchParams.get("mode") === "update" ? "update" : "password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const requestedRedirect = searchParams.get("redirect") || "/";
  let redirect = "/";
  try {
    const redirectUrl = new URL(requestedRedirect, window.location.origin);
    if (redirectUrl.origin === window.location.origin) {
      redirect = `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`;
    }
  } catch {
    redirect = "/";
  }

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      if (mode === "reset") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/auth?mode=update&redirect=${encodeURIComponent(redirect)}`,
        });
        if (error) throw error;
        setMessage("If an account exists for that email, a password reset link is on its way.");
      } else if (mode === "update") {
        const { error } = await supabase.auth.updateUser({ password });
        if (error) throw error;
        setPassword("");
        setMode("password");
        setMessage("Your password has been updated.");
        navigate(redirect);
      } else if (mode === "magic") {
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: `${window.location.origin}${redirect}`,
          },
        });
        if (error) throw error;
        setMessage("Check your email for the sign-in link.");
      } else {
        const { data, error } = mode === "signup"
          ? await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/auth?redirect=${encodeURIComponent(redirect)}`,
            },
          })
          : await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (mode === "signup") {
          // Supabase returns a user with no identities when the email is already registered.
          if (data?.user && data.user.identities?.length === 0) {
            setMessage("An account with this email already exists. Sign in or reset your password instead.");
          } else if (data?.session) {
            navigate(redirect);
          } else {
            setMessage("Check your email to confirm your account.");
          }
        } else {
          navigate(redirect);
        }
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setMessage(error.message);
      return;
    }
    setMessage("Signed out.");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h1 style={title}>
          {mode === "update" ? "Set a new password" : user ? "Account" : mode === "reset" ? "Reset password" : "Sign in"}
        </h1>

        {mode === "update" ? (
          user ? (
            <form onSubmit={submit}>
              <label style={label}>New password</label>
              <input style={input} type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={6} required autoComplete="new-password" />
              <button style={primary} type="submit" disabled={submitting}>Update password</button>
            </form>
          ) : (
            <p>{loading ? "Checking your reset link..." : "This reset link is invalid or has expired. Request a new one."}</p>
          )
        ) : mode === "reset" && !user ? (
          <form onSubmit={submit}>
            <label style={label}>Email</label>
            <input style={input} type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" />
            <button style={primary} type="submit" disabled={submitting}>Send reset link</button>
            <button type="button" style={secondary} onClick={() => setMode("password")}>Back to sign in</button>
          </form>
        ) : user ? (
          <>
            <p>{user.email}</p>
            <button style={primary} onClick={signOut}>Sign out</button>
            <button style={secondary} onClick={() => navigate(redirect)}>Continue</button>
          </>
        ) : (
          <form onSubmit={submit}>
            <div style={tabs}>
              <button type="button" style={tab(mode === "password")} onClick={() => setMode("password")}>Sign in</button>
              <button type="button" style={tab(mode === "signup")} onClick={() => setMode("signup")}>Sign up</button>
              <button type="button" style={tab(mode === "magic")} onClick={() => setMode("magic")}>Email link</button>
            </div>

            <label style={label}>Email</label>
            <input style={input} type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

            {mode !== "magic" && (
              <>
                <label style={label}>Password</label>
                <input style={input} type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={6} required />
              </>
            )}

            <button style={primary} type="submit" disabled={submitting || loading}>
              {mode === "magic" ? "Send sign-in link" : mode === "signup" ? "Create account" : "Sign in"}
            </button>

            {mode === "password" && (
              <button type="button" style={linkBtn} onClick={() => { setMode("reset"); setMessage(""); }}>
                Forgot your password?
              </button>
            )}
          </form>
        )}

        {message && <p style={messageStyle}>{message}</p>}
      </div>
    </div>
  );
}

const page = { minHeight: "70vh", display: "grid", placeItems: "center", padding: 20 };
const card = { width: "100%", maxWidth: 420, background: "white", color: "#222", borderRadius: 12, padding: 24, boxShadow: "0 4px 16px rgba(0,0,0,.2)" };
const title = { marginTop: 0 };
const tabs = { display: "flex", gap: 6, marginBottom: 16 };
const tab = (active) => ({ flex: 1, padding: 8, border: "none", borderRadius: 6, cursor: "pointer", background: active ? "#28a745" : "#eee", color: active ? "white" : "#333" });
const label = { display: "block", marginTop: 12, marginBottom: 6, fontWeight: 600 };
const input = { width: "100%", boxSizing: "border-box", padding: 10, borderRadius: 6, border: "1px solid #bbb", fontSize: 16 };
const primary = { width: "100%", marginTop: 16, padding: 12, border: "none", borderRadius: 8, background: "#28a745", color: "white", fontSize: 16, cursor: "pointer" };
const secondary = { width: "100%", marginTop: 8, padding: 12, border: "1px solid #bbb", borderRadius: 8, background: "white", color: "#333", fontSize: 16, cursor: "pointer" };
const linkBtn = { display: "block", margin: "12px auto 0", background: "none", border: "none", color: "#1a6fd1", cursor: "pointer", fontSize: 14, textDecoration: "underline" };
const messageStyle ={ marginTop: 14, color: "#205c30" };
