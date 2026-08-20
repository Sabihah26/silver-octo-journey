import React from "react";

export default function DailyRewardChest({ claimable, onOpen }) {
  return (
    <div
      onClick={claimable ? onOpen : null}
      style={{
        width: 80,
        height: 80,
        margin: "0 auto",
        cursor: claimable ? "pointer" : "default",
        opacity: claimable ? 1 : 0.4,
        transition: "transform 0.3s ease, opacity 0.3s ease",
        animation: claimable ? "chestGlow 1.6s infinite ease-in-out" : "none",
      }}
    >
      {/* Magical Blue Chest */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(145deg, #1E3A8A, #3B82F6)",
          borderRadius: 12,
          border: "3px solid #60A5FA",
          boxShadow: claimable
            ? "0 0 20px #60A5FA"
            : "0 0 6px rgba(255,255,255,0.2)",
          position: "relative",
        }}
      >
        {/* Chest Lid */}
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "40%",
            background: "linear-gradient(145deg, #3B82F6, #1E40AF)",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            borderBottom: "3px solid #60A5FA",
          }}
        ></div>

        {/* Chest Lock */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 20,
            height: 26,
            background: "#FACC15",
            borderRadius: 4,
            border: "2px solid #EAB308",
          }}
        ></div>
      </div>

      <style>
        {`
          @keyframes chestGlow {
            0% { transform: scale(1); box-shadow: 0 0 12px #60A5FA; }
            50% { transform: scale(1.08); box-shadow: 0 0 28px #60A5FA; }
            100% { transform: scale(1); box-shadow: 0 0 12px #60A5FA; }
          }
        `}
      </style>
    </div>
  );
}
