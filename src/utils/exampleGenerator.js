// src/utils/exampleGenerator.js

import { transliterate } from "../engine/transliterate";
import { colorizeArabic } from "../engine/vowelColorizer";

// Simple pattern-based example generator
export function generateExamples(root, verb, meaning) {
  if (!root || !verb) return [];

  const examples = [
    {
      ar: `أنا ${verb} الآن.`,
      en: `I am ${meaning} now.`,
    },
    {
      ar: `هو يريد أن ${verb}.`,
      en: `He wants to ${meaning}.`,
    },
    {
      ar: `هل يمكنك أن ${verb} بسرعة؟`,
      en: `Can you ${meaning} quickly?`,
    },
    {
      ar: `نحن سنبدأ أن ${verb} غدًا.`,
      en: `We will start to ${meaning} tomorrow.`,
    },
  ];

  return examples.map((ex) => ({
    ...ex,
    ar_colored: colorizeArabic(ex.ar),
    ar_translit: transliterate(ex.ar),
  }));
}
