// Simple quiz engine for verb-specific and global quizzes

import conjugate from "./conjugate";

// Map Arabic pronouns to English (for random question language)
const PRONOUN_MAP = {
  "أنا": "I",
  "نحن": "we",
  "أنتَ": "you (m)",
  "أنتِ": "you (f)",
  "أنتم": "you (pl)",
  "هو": "he",
  "هي": "she",
  "هما": "they (dual)",
  "هم": "they (m)",
  "هن": "they (f)",
};

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getTableByMode(result, mode) {
  if (!result || !result.tables) return {};
  const t = result.tables;
  switch (mode) {
    case "past":
      return t.past || {};
    case "present":
      return t.present || {};
    case "passivePast":
      return t.passivePast || {};
    case "passivePresent":
      return t.passivePresent || {};
    case "imperative":
      return t.imperative || {};
    case "moods":
      return t.moods || {};
    default:
      return t.past || {};
  }
}

// Build questions for a single verb
export function buildVerbQuiz({ verb, root, form, mode }) {
  const result = conjugate(root, form);
  const table = getTableByMode(result, mode);
  const entries = Object.entries(table); // [ [pronoun, formValue], ... ]

  const questions = entries.map(([pronoun, formValue], idx) => {
    const otherForms = entries
      .filter(([p]) => p !== pronoun)
      .map(([, v]) => v);

    const distractors = shuffle(otherForms).slice(0, 3);
    const options = shuffle([formValue, ...distractors]);

    const useArabic = Math.random() < 0.5;
    const pronounEn = PRONOUN_MAP[pronoun] || pronoun;

    // ⭐ PATCH: make ID safe for both verb objects and strings
    const verbLabel =
      typeof verb === "string"
        ? verb
        : verb?.past ||
          verb?.arabic ||
          verb?.english?.simple ||
          String(verb?.id || "");

    const verbIdPart =
      typeof verb === "string"
        ? verb
        : String(verb?.id || verbLabel || "");

    return {
      id: `${verbIdPart}-${mode}-${idx}`, // ⭐ FIXED
      verb,
      root,
      form,
      mode,
      pronounAr: pronoun,
      pronounEn,
      questionLang: useArabic ? "ar" : "en",
      correctAnswer: formValue,
      options,
    };
  });

  return questions;
}

// Placeholder global verbs list (you can expand this later)
const GLOBAL_VERBS = [
  { verb: "كتب", root: "ك ت ب", form: 1 },
  { verb: "قال", root: "ق و ل", form: 1 },
  { verb: "ذهب", root: "ذ ه ب", form: 1 },
];

// Build questions for global quiz (across multiple verbs)
export function buildGlobalQuiz({ mode }) {
  let allQuestions = [];
  GLOBAL_VERBS.forEach(({ verb, root, form }) => {
    const qs = buildVerbQuiz({ verb, root, form, mode });
    allQuestions = allQuestions.concat(qs);
  });
  return shuffle(allQuestions);
}
