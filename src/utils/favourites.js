// src/utils/favourites.js

const KEY = "favourites_v1";

export function loadFavourites() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return [];
  return JSON.parse(raw);
}

export function saveFavourites(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function isFavourite(id) {
  const list = loadFavourites();
  return list.includes(id);
}

export function addFavourite(id) {
  const list = loadFavourites();
  if (!list.includes(id)) {
    list.push(id);
    saveFavourites(list);
  }
}

export function removeFavourite(id) {
  let list = loadFavourites();
  list = list.filter((v) => v !== id);
  saveFavourites(list);
}

export function toggleFavourite(id) {
  if (isFavourite(id)) removeFavourite(id);
  else addFavourite(id);
}
