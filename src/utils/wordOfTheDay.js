// src/utils/wordOfTheDay.js

import verbs from "../data/verbs";

const KEY = "wordOfTheDay_v1";

export function today() {
  return new Date().toISOString().split("T")[0];
}

export function loadWordOfTheDay() {
  const raw = localStorage.getItem(KEY);

  if (raw) {
    const data = JSON.parse(raw);

    // If same day → return stored word
    if (data.date === today()) {
      return verbs.find((v) => v.id === data.id);
    }
  }

  // Otherwise pick a new word
  const random = verbs[Math.floor(Math.random() * verbs.length)];

  const data = {
    id: random.id,
    date: today(),
  };

  localStorage.setItem(KEY, JSON.stringify(data));

  return random;
}
