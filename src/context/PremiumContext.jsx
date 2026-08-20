// src/context/PremiumContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const PremiumContext = createContext();

const STRIPE_CHECKOUT_URL = "https://checkout.stripe.com/pay/YOUR_STRIPE_LINK_HERE";

export function PremiumProvider({ children }) {
  const [isPremium, setIsPremium] = useState(false);

  // Load premium state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("isPremium");
    if (saved === "true") {
      setIsPremium(true);
    }
  }, []);

  // Save premium state
  const unlockPremium = () => {
    localStorage.setItem("isPremium", "true");
    setIsPremium(true);
  };

  // Open Stripe Checkout in a new tab
  const startCheckout = () => {
    window.open(STRIPE_CHECKOUT_URL, "_blank");
  };

  return (
    <PremiumContext.Provider
      value={{
        isPremium,
        unlockPremium,
        startCheckout,
      }}
    >
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  return useContext(PremiumContext);
}
