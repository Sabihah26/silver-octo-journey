import React, { useEffect, useState } from "react";

export default function RewardChestModal({
  onClose,
  onReward,
  mute,
  rewardType,
}) {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 600);
  }, []);

  const rewardSound = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3"
  );

  useEffect(() => {
    if (reveal && !mute) rewardSound.play();
  }, [reveal, mute]);

  const rewardLabels = {
    xp: "+10 XP Bonus",
    streak: "+1 Streak Boost",
    badge: "New Badge Unlocked!",
  };

  const rewardColors = {
    xp: "#4CAF50",
    streak: "#FACC15",
    badge: "#60A5FA",
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "fadeInGlow 0.6s ease forwards",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#11224D",
          padding: 30,
          borderRadius: 20,
          width: "85%",
          maxWidth: 420,
          textAlign: "center",
          boxShadow: "0 0 25px #60A5FA",
          border: "2px solid #60A5FA",
          animation: "modalPop 0.6s ease forwards",
        }}
      >
        <h2 style={{ marginBottom: 10, fontSize: 26 }}>
          🎁 Daily Reward Chest
        </h2>

        {!reveal && (
          <div style={{ fontSize: 20, opacity: 0.8 }}>Opening...</div>
        )}

        {reveal && (
          <div
            style={{
              marginTop: 20,
              padding: 20,
              borderRadius: 14,
              background: rewardColors[rewardType],
              color: "black",
              fontSize: 22,
              fontWeight: 700,
              boxShadow: "0 0 20px rgba(255,255,255,0.4)",
              animation: "rewardPop 0.6s ease forwards",
            }}
          >
            {rewardLabels[rewardType]}
          </div>
        )}

        {reveal && (
          <button
            onClick={() => {
              onReward();
              onClose();
            }}
            style={{
              marginTop: 20,
              padding: "10px 16px",
              background: "#4CAF50",
              border: "none",
              borderRadius: 10,
              color: "white",
              fontSize: 16,
              cursor: "pointer",
              width: "100%",
            }}
          >
            Claim Reward
          </button>
        )}
      </div>

      <style>
        {`
          @keyframes fadeInGlow {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes modalPop {
            0% { transform: scale(0.7); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes rewardPop {
            0% { transform: scale(0.7); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
