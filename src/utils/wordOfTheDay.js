// src/utils/wordOfTheDay.js

import verbs from "../data/verbs";

const KEY = "wordOfTheDay_v1";

export function today() {
  return new Date().toISOString().split("T")[0];
}

// `list` is the verbs this user may open; a stored word outside it (e.g.
// picked while the user had Premium) is replaced.
export function loadWordOfTheDay(list = verbs) {
  if (!list.length) return null;
  const raw = localStorage.getItem(KEY);

  if (raw) {
    const data = JSON.parse(raw);

    // If same day → return stored word
    if (data.date === today()) {
      const stored = list.find((v) => v.id === data.id);
      if (stored) return stored;
    }
  }

  // Otherwise pick a new word
  const random = list[Math.floor(Math.random() * list.length)];

  const data = {
    id: random.id,
    date: today(),
  };

  localStorage.setItem(KEY, JSON.stringify(data));

  return random;
}
