// src/pages/RecommendedStudyPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getNextRecommendedVerb,
  getItemSRS,
  updateSRS,
} from "../utils/srsEngine";

import DailyRewardChest from "../components/DailyRewardChest";
import RewardChestModal from "../components/RewardChestModal";

// Confetti component
function Confetti({ trigger }) {
  if (!trigger) return null;

  const pieces = Array.from({ length: 40 });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.5;
        const size = 6 + Math.random() * 6;
        const colors = ["#60A5FA", "#F472B6", "#FACC15", "#4ADE80"];
        const color = colors[i % colors.length];

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "-10px",
              left: `${left}vw`,
              width: size,
              height: size,
              backgroundColor: color,
              opacity: 0.9,
              borderRadius: 2,
              animation: `fallConfetti 1.8s linear ${delay}s forwards`,
            }}
          />
        );
      })}

      <style>
        {`
          @keyframes fallConfetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}

// Sounds
const successSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3"
);
const levelUpSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3"
);

export default function RecommendedStudyPage() {
  const [topVerb, setTopVerb] = useState(null);
  const [nextFive, setNextFive] = useState([]);

  // XP + Level + Streak
  const [xp, setXP] = useState(() => Number(localStorage.getItem("xp") || 0));
  const [level, setLevel] = useState(() =>
    Number(localStorage.getItem("level") || 1)
  );
  const [dailyXP, setDailyXP] = useState(() => {
    const saved = localStorage.getItem("dailyXP");
    return saved ? Number(saved) : 0;
  });

  const DAILY_GOAL = 30;

  const [streak, setStreak] = useState(() =>
    Number(localStorage.getItem("streak") || 0)
  );
  const [bestStreak, setBestStreak] = useState(() =>
    Number(localStorage.getItem("bestStreak") || 0)
  );
  const [lastStudyDate, setLastStudyDate] = useState(() =>
    localStorage.getItem("lastStudyDate") || ""
  );

  // Reward chest
  const [showChestModal, setShowChestModal] = useState(false);
  const [rewardType, setRewardType] = useState(null);
  const [chestClaimedToday, setChestClaimedToday] = useState(() => {
    const today = new Date().toDateString();
    return localStorage.getItem("lastChestClaimDate") === today;
  });

  // Level-up modal
  const [showModal, setShowModal] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(false);

  const [mute, setMute] = useState(() => localStorage.getItem("mute") === "true");

  const [animateCard, setAnimateCard] = useState(false);

  // Badges
  const [badges, setBadges] = useState(() => {
    const saved = localStorage.getItem("badges");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    loadRecommendations();
  }, []);

  function loadRecommendations() {
    const first = getNextRecommendedVerb();
    setTopVerb(first);

    const list = [];
    let used = new Set();
    if (first) used.add(first.id);

    for (let i = 0; i < 5; i++) {
      const next = getNextRecommendedVerb(used);
      if (!next) break;
      list.push(next);
      used.add(next.id);
    }

    setNextFive(list);
  }

  // Random reward
  function generateRandomReward() {
    const rewards = ["xp", "streak", "badge"];
    return rewards[Math.floor(Math.random() * rewards.length)];
  }

  function applyReward() {
    if (rewardType === "xp") {
      const newXP = xp + 10;
      setXP(newXP);
      localStorage.setItem("xp", newXP);
    }

    if (rewardType === "streak") {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("streak", newStreak);
    }

    if (rewardType === "badge") {
      const newBadge = "Daily Medal";
      if (!badges.includes(newBadge)) {
        const updated = [...badges, newBadge];
        setBadges(updated);
        localStorage.setItem("badges", JSON.stringify(updated));
      }
    }

    const today = new Date().toDateString();
    localStorage.setItem("lastChestClaimDate", today);
    setChestClaimedToday(true);
  }

  function openChest() {
    if (chestClaimedToday) return;
    const reward = generateRandomReward();
    setRewardType(reward);
    setShowChestModal(true);
  }

  // Study Now
  function handleStudyNow() {
    if (!topVerb) return;

    setAnimateCard(true);
    setTimeout(() => setAnimateCard(false), 500);

    updateSRS(topVerb.id, "good");

    const gainedXP = 10;
    let newXP = xp + gainedXP;
    let newDailyXP = dailyXP + gainedXP;

    let didLevelUp = false;

    if (newXP >= 100) {
      newXP -= 100;
      didLevelUp = true;
      setLevel((prev) => prev + 1);
      localStorage.setItem("level", level + 1);
    }

    setXP(newXP);
    setDailyXP(newDailyXP);

    localStorage.setItem("xp", newXP);
    localStorage.setItem("dailyXP", newDailyXP);

    const today = new Date().toDateString();
    let newStreak = streak;

    if (lastStudyDate !== today) {
      if (dailyXP >= DAILY_GOAL) newStreak += 1;
      else newStreak = 0;
    }

    setStreak(newStreak);
    localStorage.setItem("streak", newStreak);

    if (newStreak > bestStreak) {
      setBestStreak(newStreak);
      localStorage.setItem("bestStreak", newStreak);
    }

    setLastStudyDate(today);
    localStorage.setItem("lastStudyDate", today);

    // ⭐ ONLY show modal on level-up
    if (didLevelUp) {
      setConfettiTrigger(true);
      setTimeout(() => setConfettiTrigger(false), 2000);
      if (!mute) levelUpSound.play();
      setShowModal(true);
    } else {
      if (!mute) successSound.play();
    }

    setTimeout(() => loadRecommendations(), 300);
  }

  if (!topVerb) {
    return (
      <div
        style={{
          background: "#0A1A3A",
          minHeight: "100vh",
          padding: 20,
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: 40 }}>
          Loading recommended study…
        </h2>
      </div>
    );
  }

  const srs = getItemSRS(topVerb.id);

  const formColors = {
    I: "#3B82F6",
    II: "#10B981",
    III: "#8B5CF6",
    IV: "#EF4444",
    V: "#14B8A6",
    VI: "#F97316",
    VII: "#6366F1",
    VIII: "#EC4899",
    IX: "#FACC15",
    X: "#92400E",
  };
  return (
    <div
      style={{
        background: "#0A1A3A",
        minHeight: "100vh",
        padding: 20,
        color: "white",
        position: "relative",
      }}
    >
      <Confetti trigger={confettiTrigger} />

      {/* HEADER */}
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Recommended Study
      </h1>

      {/* MUTE TOGGLE */}
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <button
          onClick={() => {
            const newMute = !mute;
            setMute(newMute);
            localStorage.setItem("mute", newMute);
          }}
          style={{
            background: mute ? "#1E3A8A" : "#4CAF50",
            border: "none",
            padding: "6px 14px",
            borderRadius: 8,
            color: "white",
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          {mute ? "🔇 Sound Off" : "🔊 Sound On"}
        </button>
      </div>

      {/* XP BAR */}
      <div
        style={{
          width: "100%",
          background: "#1A2E5A",
          height: 14,
          borderRadius: 10,
          overflow: "hidden",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: `${(xp / 100) * 100}%`,
            height: "100%",
            background: "#4CAF50",
            transition: "width 0.4s ease",
          }}
        ></div>
      </div>

      {/* DAILY GOAL BAR */}
      <div
        style={{
          width: "100%",
          background: "#1A2E5A",
          height: 10,
          borderRadius: 10,
          overflow: "hidden",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: `${(dailyXP / DAILY_GOAL) * 100}%`,
            height: "100%",
            background: "#60A5FA",
            transition: "width 0.4s ease",
          }}
        ></div>
      </div>

      {/* LEVEL + STREAK */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 20,
          opacity: 0.9,
          fontSize: 16,
        }}
      >
        <div>Level: {level}</div>
        <div>Streak: 🔥 {streak} days</div>
        <div>Best Streak: {bestStreak}</div>
      </div>

      {/* MAIN HERO CARD */}
      <div
        style={{
          background: "#11224D",
          borderRadius: 16,
          padding: 14,
          marginBottom: 22,
          textAlign: "center",
          transform: animateCard ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.3s ease",
          border: `3px solid ${formColors[topVerb.form]}`,
        }}
      >
        <div style={{ fontSize: 45, marginBottom: 6 }}>
          {topVerb.arabic}
        </div>

        <div style={{ fontSize: 15, opacity: 0.9 }}>
          {topVerb.english}
        </div>

        <div style={{ marginTop: 12, opacity: 0.8, fontSize: 45 }}>
          {topVerb.root}
        </div>

        <div
          style={{
            marginTop: 14,
            background: "#1A2E5A",
            padding: 10,
            borderRadius: 10,
            fontSize: 19,
            opacity: 0.9,
          }}
        >
          <div>Interval: {srs.interval} days</div>
          <div>Repetitions: {srs.repetitions}</div>
          <div>Ease: {srs.ease.toFixed(2)}</div>
        </div>

        <button
          onClick={handleStudyNow}
          style={{
            marginTop: 18,
            padding: "10px 16px",
            background: "#4CAF50",
            border: "none",
            borderRadius: 10,
            color: "white",
            fontSize: 19,
            cursor: "pointer",
            width: "100%",
          }}
        >
          Study Now
        </button>

        <Link
          to={`/verb/${topVerb.id}`}
          style={{
            display: "block",
            marginTop: 10,
            color: "#9BB8FF",
            textDecoration: "underline",
            fontSize: 24,
          }}
        >
          View full verb details →
        </Link>
      </div>

      {/* NEXT 5 RECOMMENDED VERBS */}
      <h2 style={{ marginBottom: 10, textAlign: "center" }}>
        Next Recommended Verbs
      </h2>

      {nextFive.length === 0 && (
        <div style={{ opacity: 0.7, textAlign: "center" }}>
          No more recommendations right now.
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 20,
          flexWrap: "wrap",
        }}
      >
        {nextFive.map((v) => (
          <Link
            key={v.id}
            to={`/verb/${v.id}`}
            style={{
              background: "#1E3A8A",
              padding: "12px 16px",
              borderRadius: 12,
              color: "white",
              textDecoration: "none",
              textAlign: "center",
              minWidth: 110,
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              border: `2px solid ${formColors[v.form]}`,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow = `0 0 14px ${formColors[v.form]}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.25)";
            }}
          >
            <div style={{ fontSize: 46, fontWeight: 600 }}>
              {v.arabic}
            </div>

            <div style={{ opacity: 0.85, fontSize: 25 }}>
              {v.english}
            </div>

            <div
              style={{
                marginTop: 6,
                fontSize: 52,
                opacity: 0.8,
                color: formColors[v.form],
              }}
            >
              {getReason(v)}
            </div>
          </Link>
        ))}
      </div>

      {/* LEVEL-UP MODAL */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
            zIndex: 9998,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeInGlow 0.6s ease forwards",
          }}
        >
          <div
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
            <h2 style={{ marginBottom: 10, fontSize: 25 }}>
              🎉 Level Up!
            </h2>

            <div style={{ fontSize: 25, marginBottom: 10 }}>
              You reached Level {level}!
            </div>

            <div style={{ marginBottom: 10, fontSize: 16 }}>
              Keep going — you're improving every day.
            </div>

            <button
              onClick={() => setShowModal(false)}
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
              Continue
            </button>
          </div>

          <style>
            {`
              @keyframes fadeInGlow {
                0% { opacity: 0; box-shadow: 0 0 0px #60A5FA; }
                100% { opacity: 1; box-shadow: 0 0 40px #60A5FA; }
              }

              @keyframes modalPop {
                0% { transform: scale(0.7); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
              }
            `}
          </style>
        </div>
      )}

      {/* DAILY REWARD CHEST */}
      {!chestClaimedToday && dailyXP >= DAILY_GOAL && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 9999,
          }}
        >
          <DailyRewardChest claimable={true} onOpen={openChest} />
        </div>
      )}

      {/* CHEST MODAL */}
      {showChestModal && (
        <RewardChestModal
          onClose={() => setShowChestModal(false)}
          onReward={applyReward}
          mute={mute}
          rewardType={rewardType}
        />
      )}


      
    </div>
  );
}
