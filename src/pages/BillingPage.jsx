// src/pages/BillingPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { usePremium } from "../context/PremiumContext";

export default function BillingPage() {
  const { isPremium, isAdmin, isComplimentary, hasFullAccess, user, loading, hasStripeCustomer, startCheckout, openCustomerPortal, refreshPremium } = usePremium();
  // Admin/complimentary access is granted in Supabase, not paid for.
  const grantedAccess = !isPremium && !hasStripeCustomer && (isAdmin || isComplimentary);
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("status") === "success") {
      setMessage("Payment received. Confirming your premium access...");
      let attempts = 0;
      const poll = window.setInterval(async () => {
        attempts += 1;
        const premium = await refreshPremium();
        if (premium) {
          setMessage("Your Premium subscription is active.");
          window.clearInterval(poll);
        } else if (attempts >= 10) {
          setMessage("Payment was received. Premium access may take a minute to update; refresh this page shortly.");
          window.clearInterval(poll);
        }
      }, 2000);
      return () => window.clearInterval(poll);
    } else if (searchParams.get("status") === "cancelled") {
      setMessage("Checkout was cancelled. You have not been charged.");
    }
  }, [searchParams, refreshPremium]);

  const runAction = async (action) => {
    setActionLoading(true);
    setMessage("");
    try {
      await action();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div style={pageContainer}>
      <h1 style={title}>{hasFullAccess ? "Premium Active" : "Go Premium"}</h1>
      <p style={subtitle}>
        Unlock all verbs, nouns, adverbs, examples, grammar lessons, quizzes,
        flashcards, and saved words.
      </p>

      {message && <p style={statusMessage}>{message}</p>}

      <div style={card}>
        <h2 style={planTitle}>Yearly Subscription</h2>
        <p style={price}>£75 / year</p>

        <ul style={featureList}>
          <li>All verb, noun, and adverb entries</li>
          <li>Full examples and grammar lessons</li>
          <li>Unlimited flashcards and quizzes</li>
          <li>Saved words synced on this device</li>
          <li>Premium-only study modes</li>
        </ul>

        {grantedAccess ? (
          <p style={statusMessage}>
            Your account has full access ({isAdmin ? "admin" : "complimentary"}). No payment needed.
          </p>
        ) : isPremium || hasStripeCustomer ? (
          <button
            style={primaryBtn}
            disabled={loading || actionLoading}
            onClick={() => runAction(openCustomerPortal)}
          >
            Manage Subscription
          </button>
        ) : (
          <button
            style={primaryBtn}
            disabled={loading || actionLoading}
            onClick={() => runAction(startCheckout)}
          >
            {user ? "Upgrade Now" : "Sign in to Upgrade"}
          </button>
        )}

        <p style={smallNote}>
          Secure payment via Stripe. Auto-renews yearly.
        </p>
      </div>

      <div style={{ marginTop: 30 }}>
        <Link to="/" style={backLink}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

const pageContainer = {
  padding: 20,
  maxWidth: 600,
  margin: "0 auto",
  color: "white",
};

const title = {
  fontSize: 32,
  marginBottom: 10,
  color: "white",
};

const subtitle = {
  fontSize: 18,
  opacity: 0.9,
  color: "white",
};

const card = {
  marginTop: 20,
  padding: 20,
  borderRadius: 12,
  background: "white",
  color: "#222",
  border: "1px solid #ddd",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

const planTitle = {
  fontSize: 24,
  marginBottom: 6,
};

const price = {
  fontSize: 22,
  color: "#28a745",
  marginBottom: 10,
};

const featureList = {
  fontSize: 16,
  paddingLeft: 20,
  lineHeight: 1.6,
};

const primaryBtn = {
  marginTop: 10,
  padding: "12px 20px",
  fontSize: 18,
  borderRadius: 8,
  border: "none",
  background: "#28a745",
  color: "white",
  cursor: "pointer",
  width: "100%",
};

const smallNote = {
  marginTop: 10,
  fontSize: 13,
  opacity: 0.7,
};

const statusMessage = {
  marginTop: 16,
  padding: "10px 12px",
  borderRadius: 8,
  background: "rgba(255,255,255,0.12)",
  color: "white",
};

const backLink = {
  fontSize: 18,
  textDecoration: "none",
  color: "#4da3ff",
};
