// src/components/PlayButton.jsx
import React from "react";
import { speakArabic } from "../utils/tts";

export default function PlayButton({ text }) {
  return (
    <button
      onClick={() => speakArabic(text)}
      style={{
        padding: "8px 12px",
        background: "#007bff",
        color: "white",
        border: "none",
        borderRadius: 6,
        cursor: "pointer"
      }}
    >
      🔊
    </button>
  );
}
