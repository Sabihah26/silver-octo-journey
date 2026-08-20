// src/components/SaveWordButton.jsx
import React from "react";
import { useSavedWords } from "../context/SavedWordsContext";

export default function SaveWordButton({ word }) {
  const { isSaved, toggleSave } = useSavedWords();
  const saved = isSaved(word.id, word.type);

  return (
    <button
      type="button"
      className={saved ? "btn-secondary" : "btn-primary"}
      onClick={() => toggleSave(word)}
    >
      {saved ? "Saved ★" : "Save ☆"}
    </button>
  );
}
