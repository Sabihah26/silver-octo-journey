// src/context/PremiumProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const PremiumContext = createContext();

const STRIPE_CHECKOUT_URL = "https://checkout.stripe.com/pay/YOUR_STRIPE_LINK_HERE";

