// ⭐ Minimal SRS Engine for Nouns
// Prevents crashes in SuperStudyMode, achievements, and tests

// Temporary in‑memory store
let nounSRSData = {};

// ⭐ Load SRS data (dummy)
export function loadNounSRS() {
  return nounSRSData;
}

// ⭐ Save SRS data (dummy)
export function saveNounSRS(data) {
  nounSRSData = data;
}

// ⭐ Update review for a noun (dummy)
export function updateNounSRS(nounId, result) {
  if (!nounSRSData[nounId]) {
    nounSRSData[nounId] = { correct: 0, wrong: 0 };
  }

  if (result === "correct") {
    nounSRSData[nounId].correct++;
  } else {
    nounSRSData[nounId].wrong++;
  }

  return nounSRSData[nounId];
}

// ⭐ Get stats for a noun (dummy)
export function getNounSRSStats(nounId) {
  return nounSRSData[nounId] || { correct: 0, wrong: 0 };
}

// ⭐ Get all SRS stats (dummy)
export function getAllNounSRS() {
  return nounSRSData;
}

// ⭐ Default export (not used but kept for compatibility)
const srsNouns = {};
export default srsNouns;
