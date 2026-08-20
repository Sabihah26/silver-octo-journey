// src/utils/dailyGoal.js

const KEY = "dailyGoal_v1";

export function loadDailyGoal() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return { date: today(), count: 0, target: 10 };

  const data = JSON.parse(raw);

  // Reset if new day
  if (data.date !== today()) {
    return { date: today(), count: 0, target: data.target };
  }

  return data;
}

export function incrementDailyGoal() {
  const data = loadDailyGoal();
  data.count += 1;
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function setDailyTarget(n) {
  const data = loadDailyGoal();
  data.target = n;
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function today() {
  return new Date().toISOString().split("T")[0];
}
