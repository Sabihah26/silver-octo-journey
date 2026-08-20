// src/utils/studyStorage.js

export function saveStudyProgress({ mode, due, lastReviewed, link }) {
  const data = {
    mode,
    due,
    lastReviewed,
    link,
    timestamp: Date.now(),
  };

  localStorage.setItem("lastStudy", JSON.stringify(data));
}

export function loadStudyProgress() {
  const data = localStorage.getItem("lastStudy");
  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function updateDueCount(newDue) {
  const data = loadStudyProgress();
  if (!data) return;

  data.due = newDue;
  localStorage.setItem("lastStudy", JSON.stringify(data));
}

export function markStudyReviewed() {
  const data = loadStudyProgress();
  if (!data) return;

  data.lastReviewed = "Just now";
  data.timestamp = Date.now();

  localStorage.setItem("lastStudy", JSON.stringify(data));
}
