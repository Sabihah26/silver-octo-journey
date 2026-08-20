// src/utils/srsEngine.js

/*  
   ADVANCED SRS ENGINE
   --------------------
   Features:
   - SM‑2 spaced repetition intervals
   - Ease factor
   - XP system
   - Daily streaks
   - Due items
   - Study session queue
   - Next recommended verb
*/

import verbs from "../data/verbs";

// ---------------------------
// Helpers
// ---------------------------
function load() {
  const raw = localStorage.getItem("srsData");
  return raw ? JSON.parse(raw) : {};
}

function save(data) {
  localStorage.setItem("srsData", JSON.stringify(data));
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

// ---------------------------
// Get SRS record for a verb
// ---------------------------
export function getItemSRS(verbKey) {
  const data = load();
  return (
    data[verbKey] || {
      score: 0,
      interval: 1,
      nextReview: Date.now(),
      ease: 2.5,
      streak: 0,
      xp: 0,
      lastStudyDay: null,
    }
  );
}

// ---------------------------
// Update SRS after rating
// ---------------------------
export function updateSRS(verbKey, isCorrect, rating = "good") {
  const data = load();
  const rec = getItemSRS(verbKey);

  const now = Date.now();
  const today = todayKey();

  // XP
  const xpGain = {
    again: 0,
    hard: 3,
    good: 5,
    easy: 8,
  }[rating] || 0;

  rec.xp += xpGain;

  // Streak
  if (isCorrect) {
    if (rec.lastStudyDay === today) rec.streak += 1;
    else rec.streak = 1;
  } else {
    rec.streak = 0;
  }

  rec.lastStudyDay = today;

  // Ease factor
  if (rating === "again") rec.ease -= 0.2;
  if (rating === "hard") rec.ease -= 0.05;
  if (rating === "good") rec.ease += 0.0;
  if (rating === "easy") rec.ease += 0.1;

  rec.ease = Math.max(1.3, rec.ease);

  // Interval
  if (rating === "again") rec.interval = 1;
  else if (rating === "hard") rec.interval = Math.max(1, Math.round(rec.interval * 1.2));
  else if (rating === "good") rec.interval = Math.round(rec.interval * rec.ease);
  else if (rating === "easy") rec.interval = Math.round(rec.interval * (rec.ease + 0.15));

  // Next review
  rec.nextReview = now + rec.interval * 86400000;

  // Mastery score
  if (isCorrect) rec.score += 1;
  else rec.score = Math.max(0, rec.score - 1);

  data[verbKey] = rec;
  save(data);

  return rec;
}

// ---------------------------
// Due items
// ---------------------------
export function getDueItems() {
  const data = load();
  const now = Date.now();

  return Object.entries(data)
    .filter(([key, rec]) => rec.nextReview <= now)
    .map(([verbKey, rec]) => ({
      verbKey,
      score: rec.score,
      nextReview: rec.nextReview,
      streak: rec.streak,
      xp: rec.xp,
    }));
}

// ---------------------------
// Stats
// ---------------------------
export function getSRSStats() {
  const data = load();
  const total = Object.keys(data).length;
  const due = getDueItems().length;

  const avgScore =
    total === 0
      ? 0
      : Math.round(
          Object.values(data).reduce((sum, r) => sum + r.score, 0) / total
        );

  const totalXP = Object.values(data).reduce((sum, r) => sum + r.xp, 0);

  return { total, due, avgScore, totalXP };
}

// ---------------------------
// Study session
// ---------------------------
export function initSession(cards) {
  return {
    queue: [...cards],
    current: cards[0] || null,
  };
}

export function gradeCard(state, rating) {
  if (!state.current) return { ...state, queue: [] };

  const [current, ...rest] = state.queue;
  let newQueue = [...rest];

  if (rating === "again") newQueue.splice(1, 0, current);
  else if (rating === "hard") newQueue.push(current);

  return {
    queue: newQueue,
    current: newQueue[0] || null,
  };
}

// ---------------------------
// Top N Recommended Verbs
// ---------------------------
export function getTopRecommendedVerbs(count = 5) {
  const data = load();
  const now = Date.now();

  const scored = verbs.map((verb) => {
    const rec = data[verb.id] || {
      score: 0,
      interval: 1,
      nextReview: now,
      ease: 2.5,
      streak: 0,
      xp: 0,
    };

    let score = 0;

    if (rec.nextReview <= now) score += 50;
    score += Math.max(0, 20 - rec.score * 2);
    score += Math.max(0, 20 - rec.xp / 5);
    if (verb.root.includes("و") || verb.root.includes("ي")) score += 5;

    const overdueDays = Math.floor((now - rec.nextReview) / 86400000);
    if (overdueDays > 0) score += overdueDays * 2;

    return { verb, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, count).map((item) => item.verb);
}

// ---------------------------
// Next recommended verb
// ---------------------------
export function getNextRecommendedVerb(used = new Set()) {
  let best = null;
  let bestScore = -Infinity;

  verbs.forEach((v) => {
    if (used.has(v.id)) return;

    const srs = getItemSRS(v.id);

    const score =
      (10 - srs.interval) * 2 +
      (3 - srs.ease) * 1.5 +
      (srs.repetitions < 2 ? 5 : 0) +
      (srs.nextReview <= Date.now() ? 20 : 0);

    if (score > bestScore) {
      bestScore = score;
      best = v;
    }
  });

  return best;
}

// --------------------------------------------------
// ⭐ COMPATIBILITY EXPORTS (required by StudyFormPage)
// --------------------------------------------------
export function loadStudyProgress() {
  return load();
}

export function saveStudyProgress(data) {
  return save(data);
}

export function updateReview(verbId, rating = "good") {
  return updateSRS(verbId, true, rating);
}
