// src/utils/achievements.js
import { getNounSRSStats } from "./srsNouns";

function load() {
  const raw = localStorage.getItem("achievements");
  return raw ? JSON.parse(raw) : {};
}

function save(data) {
  localStorage.setItem("achievements", JSON.stringify(data));
}

export const ACHIEVEMENTS = [
  {
    id: "first_srs",
    name: "First Step",
    desc: "Add your first noun to SRS",
    icon: "🥇",
  },
  {
    id: "ten_srs",
    name: "Growing Collection",
    desc: "Add 10 nouns to SRS",
    icon: "📚",
  },
  {
    id: "fifty_srs",
    name: "Serious Learner",
    desc: "Add 50 nouns to SRS",
    icon: "🔥",
  },
  {
    id: "hundred_srs",
    name: "Master Collector",
    desc: "Add 100 nouns to SRS",
    icon: "🏆",
  },
  {
    id: "streak_3",
    name: "3‑Day Streak",
    desc: "Study for 3 days in a row",
    icon: "✨",
  },
  {
    id: "streak_7",
    name: "7‑Day Streak",
    desc: "Study for 7 days in a row",
    icon: "💫",
  },
  {
    id: "xp_500",
    name: "XP Novice",
    desc: "Earn 500 XP",
    icon: "⚡",
  },
  {
    id: "xp_2000",
    name: "XP Warrior",
    desc: "Earn 2000 XP",
    icon: "⚔️",
  },
  {
    id: "xp_5000",
    name: "XP Champion",
    desc: "Earn 5000 XP",
    icon: "👑",
  },
];

export function getAchievements() {
  return load();
}

export function unlockAchievement(id) {
  const data = load();
  data[id] = true;
  save(data);
}

export function checkAchievements() {
  const stats = getNounSRSStats();
  const unlocked = load();

  // SRS count achievements
  if (stats.total >= 1) unlockAchievement("first_srs");
  if (stats.total >= 10) unlockAchievement("ten_srs");
  if (stats.total >= 50) unlockAchievement("fifty_srs");
  if (stats.total >= 100) unlockAchievement("hundred_srs");

  // XP achievements
  if (stats.totalXP >= 500) unlockAchievement("xp_500");
  if (stats.totalXP >= 2000) unlockAchievement("xp_2000");
  if (stats.totalXP >= 5000) unlockAchievement("xp_5000");

  // Streak achievements
  if (stats.avgScore >= 3) unlockAchievement("streak_3");
  if (stats.avgScore >= 7) unlockAchievement("streak_7");

  return load();
}
