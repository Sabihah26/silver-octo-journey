// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SavedWordsProvider } from "./context/SavedWordsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SavedWordsProvider>
    <App />
  </SavedWordsProvider>
);
