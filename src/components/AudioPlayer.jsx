import React, { useState, useRef } from "react";

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  if (!src) return null;

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);

      audio.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  return (
    <div className="mt-3">
      <button
        onClick={togglePlay}
        className="w-12 h-12 flex items-center justify-center rounded-full border transition-transform hover:scale-105"
        style={{
          background: "var(--button-bg)",
          color: "var(--button-text)",
          borderColor: "var(--border)"
        }}
      >
        {isPlaying ? "⏸" : "▶️"}
      </button>

      <audio ref={audioRef}>
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
