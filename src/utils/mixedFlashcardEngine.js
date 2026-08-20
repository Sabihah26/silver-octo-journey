// src/utils/mixedFlashcardEngine.js

import verbs from '../data/verbs';
import nouns from '../data/nouns';
import adverbs from '../data/Adverbs';

export function getMixedFlashcards() {
  const all = [
    ...verbs.map(v => ({ ...v, type: 'verb' })),
    ...nouns.map(n => ({ ...n, type: 'noun' })),
    ...adverbs.map(a => ({ ...a, type: 'adverb' }))
  ];

  // Shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  return all.slice(0, 20); // return 20 random cards
}

export default {
  getMixedFlashcards
};
