import React from "react";

function AudioButton({ audio }) {
  const playAudio = () => {
    if (!audio) return;
    const sound = new Audio(audio);
    sound.play();
  };

  return (
    <button onClick={playAudio} className="audio-button">
      🔊
    </button>
  );
}

export default AudioButton;

