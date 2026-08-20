// src/utils/studySettings.js

const KEY = "studySettings_v1";

export function loadSettings() {
  const raw = localStorage.getItem(KEY);

  let settings;

  if (!raw) {
    settings = {
      dailyGoal: 10,
      darkMode: false,
      defaultStudyMode: "srs",
    };
  } else {
    try {
      settings = JSON.parse(raw);
    } catch {
      // If corrupted, reset
      settings = {
        dailyGoal: 10,
        darkMode: false,
        defaultStudyMode: "srs",
      };
    }
  }

  // ⭐ Apply dark mode SAFELY on load (only after settings exist)
  if (settings.darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  return settings;
}

export function saveSettings(settings) {
  localStorage.setItem(KEY, JSON.stringify(settings));
}

export function setDailyGoal(n) {
  const s = loadSettings();
  s.dailyGoal = n;
  saveSettings(s);
}

export function toggleDarkMode() {
  const s = loadSettings();
  s.darkMode = !s.darkMode;
  saveSettings(s);

  // ⭐ Apply dark mode ONLY when toggled (safe)
  if (s.darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

export function setDefaultStudyMode(mode) {
  const s = loadSettings();
  s.defaultStudyMode = mode;
  saveSettings(s);
}
