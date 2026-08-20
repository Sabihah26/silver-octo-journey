// -------------------------------------------------------------
// Noun Engine (Classical + MSA)
// Handles:
//   - Dual
//   - Regular plurals
//   - Feminine forms
//   - Nisba adjectives
//   - Comparative / superlative
//   - Broken plurals (dictionary-based)
//   - Derived noun patterns (basic)
// -------------------------------------------------------------

import brokenPlurals from "./brokenPlurals.js";

export default function generateNounForms(word) {
  const forms = {};

  // ---------------------------------------------------------
  // 1. Feminine (simple rule: add ة)
  // ---------------------------------------------------------
  forms.feminine = makeFeminine(word);

  // ---------------------------------------------------------
  // 2. Dual (masc/fem)
  // ---------------------------------------------------------
  forms.dual = makeDual(word);

  // ---------------------------------------------------------
  // 3. Regular plurals
  // ---------------------------------------------------------
  forms.pluralMasculine = makePluralMasculine(word);
  forms.pluralFeminine = makePluralFeminine(word);

  // ---------------------------------------------------------
  // 4. Broken plural (dictionary)
  // ---------------------------------------------------------
  forms.brokenPlural = brokenPlurals[word] || null;

  // ---------------------------------------------------------
  // 5. Nisba adjective (النسبة)
  // ---------------------------------------------------------
  forms.nisba = makeNisba(word);

  // ---------------------------------------------------------
  // 6. Comparative / superlative (أفعل التفضيل)
  // ---------------------------------------------------------
  forms.comparative = makeComparative(word);

  return forms;
}

// -------------------------------------------------------------
// Feminine
// -------------------------------------------------------------
function makeFeminine(word) {
  if (word.endsWith("ة")) return word; // already feminine
  return word + "ة";
}

// -------------------------------------------------------------
// Dual
// -------------------------------------------------------------
function makeDual(word) {
  if (word.endsWith("ة")) {
    return word.slice(0, -1) + "تان";
  }
  return word + "ان";
}

// -------------------------------------------------------------
// Regular masculine plural
// -------------------------------------------------------------
function makePluralMasculine(word) {
  return word + "ون";
}

// -------------------------------------------------------------
// Regular feminine plural
// -------------------------------------------------------------
function makePluralFeminine(word) {
  if (word.endsWith("ة")) {
    return word.slice(0, -1) + "ات";
  }
  return word + "ات";
}

// -------------------------------------------------------------
// Nisba adjective
// -------------------------------------------------------------
function makeNisba(word) {
  if (word.endsWith("ة")) {
    return word.slice(0, -1) + "يّ";
  }
  return word + "يّ";
}

// -------------------------------------------------------------
// Comparative / Superlative
// -------------------------------------------------------------
function makeComparative(word) {
  // Simple pattern: أفعل
  // Example: كبير → أكبر
  // This is a placeholder; real rules are more complex.
  return "أ" + word;
}
