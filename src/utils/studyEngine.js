// src/utils/studyEngine.js

// Load study data safely
function loadStudyData() {
  try {
    const data = localStorage.getItem('studyData');
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load study data', e);
    return {};
  }
}

// Save study data safely
function saveStudyData(data) {
  try {
    localStorage.setItem('studyData', JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save study data', e);
  }
}

// Return words that are due for review
export function getDueWords(allWords = []) {
  const studyData = loadStudyData();
  const now = Date.now();

  return allWords.filter(word => {
    const entry = studyData[word.id];
    if (!entry) return true; // never studied → due
    return entry.nextReview <= now;
  });
}

// Update spaced repetition review result
export function updateWordReview(wordId, result) {
  const studyData = loadStudyData();
  const now = Date.now();

  const previous = studyData[wordId] || {
    interval: 1,
    nextReview: now
  };

  let newInterval = previous.interval;

  if (result === 'correct') {
    newInterval = Math.min(previous.interval * 2, 60 * 24 * 30); // max 30 days
  } else {
    newInterval = 1; // reset
  }

  studyData[wordId] = {
    interval: newInterval,
    nextReview: now + newInterval * 60 * 60 * 1000 // hours → ms
  };

  saveStudyData(studyData);
}

// Export default object for compatibility
export default {
  getDueWords,
  updateWordReview
};
