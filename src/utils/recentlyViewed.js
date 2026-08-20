// src/utils/recentlyViewed.js

const KEY = "recentlyViewed_v1";
const LIMIT = 20;

export function loadRecentlyViewed() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return [];
  return JSON.parse(raw);
}

export function addRecentlyViewed(id) {
  let list = loadRecentlyViewed();

  list = list.filter((v) => v !== id);
  list.unshift(id);

  if (list.length > LIMIT) {
    list = list.slice(0, LIMIT);
  }

  localStorage.setItem(KEY, JSON.stringify(list));
}

export function clearRecentlyViewed() {
  localStorage.removeItem(KEY);
}
