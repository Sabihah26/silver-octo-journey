// src/context/SavedWordsContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const SavedWordsContext = createContext();

const STORAGE_KEY = "arabic_saved_words_v1";

export function SavedWordsProvider({ children }) {
  const [saved, setSaved] = useState([]);

  // Load saved words from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setSaved(JSON.parse(raw));
      }
    } catch (err) {
      console.error("Error loading saved words:", err);
    }
  }, []);

  // Save to localStorage whenever list changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch (err) {
      console.error("Error saving words:", err);
    }
  }, [saved]);

  function isSaved(id, type) {
    return saved.some((w) => w.id === id && w.type === type);
  }

  function toggleSave(word) {
    setSaved((prev) => {
      const exists = prev.some(
        (w) => w.id === word.id && w.type === word.type
      );

      if (exists) {
        return prev.filter(
          (w) => !(w.id === word.id && w.type === word.type)
        );
      }

      return [...prev, word];
    });
  }

  return (
    <SavedWordsContext.Provider
      value={{
        saved,
        isSaved,
        toggleSave,
      }}
    >
      {children}
    </SavedWordsContext.Provider>
  );
}

export function useSavedWords() {
  return useContext(SavedWordsContext);
}
