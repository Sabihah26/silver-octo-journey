import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { supabase } from "../supabase";

const PremiumContext = createContext();

// supabase-js v2 hides the function's JSON body behind a generic
// "non-2xx status code" error; pull out the real { error } message.
async function functionErrorMessage(error, fallback) {
  try {
    const body = await error?.context?.json?.();
    if (body?.error) return body.error;
  } catch {
    // body was not JSON
  }
  return error?.message || fallback;
}

async function invokeBillingFunction(name, fallback) {
  const { data: { session } } = await supabase.auth.getSession();
  const { data, error } = await supabase.functions.invoke(name, {
    headers: session?.access_token
      ? { Authorization: `Bearer ${session.access_token}` }
      : {},
    body: {},
  });

  if (error) {
    const message = await functionErrorMessage(error, fallback);
    console.error(`${name} failed:`, message);
    throw new Error(message);
  }
  if (!data?.url) throw new Error(fallback);
  return data.url;
}

export function PremiumProvider({ children }) {
  const [isPremium, setIsPremium] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasStripeCustomer, setHasStripeCustomer] = useState(false);
  // Granted by hand in Supabase (profiles.is_admin / is_complimentary);
  // Stripe never changes these.
  const [isAdmin, setIsAdmin] = useState(false);
  const [isComplimentary, setIsComplimentary] = useState(false);
  const userRef = useRef(null);
  userRef.current = user;

  const refreshPremium = useCallback(async (sessionUser = userRef.current) => {
    const reset = () => {
      setIsPremium(false);
      setHasStripeCustomer(false);
      setIsAdmin(false);
      setIsComplimentary(false);
    };

    if (!sessionUser) {
      reset();
      return false;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("is_premium, is_admin, is_complimentary, stripe_customer_id")
      .eq("id", sessionUser.id)
      .maybeSingle();

    if (error) {
      console.error("Could not load premium status:", error);
      reset();
      return false;
    }

    const premium = data?.is_premium === true;
    setIsPremium(premium);
    setHasStripeCustomer(Boolean(data?.stripe_customer_id));
    setIsAdmin(data?.is_admin === true);
    setIsComplimentary(data?.is_complimentary === true);
    return premium;
  }, []);

  useEffect(() => {
    let active = true;
    let refreshTimer;
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const sessionUser = session?.user || null;
      setUser(sessionUser);
      setIsPremium(false);
      setHasStripeCustomer(false);
      setIsAdmin(false);
      setIsComplimentary(false);
      setLoading(Boolean(sessionUser));

      window.clearTimeout(refreshTimer);
      if (sessionUser) {
        refreshTimer = window.setTimeout(() => {
          refreshPremium(sessionUser).finally(() => {
            if (active) setLoading(false);
          });
        }, 0);
      } else {
        setLoading(false);
      }
    });

    return () => {
      active = false;
      window.clearTimeout(refreshTimer);
      subscription.unsubscribe();
    };
  }, [refreshPremium]);

  const startCheckout = async () => {
    if (!userRef.current) {
      window.location.assign("/auth?redirect=/billing");
      return;
    }

    setLoading(true);
    try {
      const url = await invokeBillingFunction(
        "create-checkout-session",
        "Could not start Stripe checkout."
      );
      window.location.assign(url);
    } finally {
      setLoading(false);
    }
  };

  const openCustomerPortal = async () => {
    if (!userRef.current) {
      window.location.assign("/auth?redirect=/billing");
      return;
    }

    setLoading(true);
    try {
      const url = await invokeBillingFunction(
        "create-customer-portal",
        "Could not open the Stripe customer portal."
      );
      window.location.assign(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PremiumContext.Provider
      value={{
        isPremium,
        isAdmin,
        isComplimentary,
        // Paying, admin or complimentary: unlocks every word.
        hasFullAccess: isPremium || isAdmin || isComplimentary,
        user,
        loading,
        hasStripeCustomer,
        startCheckout,
        openCustomerPortal,
        refreshPremium,
      }}
    >
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  return useContext(PremiumContext);
}
