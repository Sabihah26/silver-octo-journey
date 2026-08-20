// src/utils/rootFinder.js

// Remove Arabic diacritics (tashkeel)
const removeTashkeel = (text) => {
  return text.replace(/[\u064B-\u0652]/g, "");
};

// Normalize Arabic forms for easier pattern matching
const normalize = (word) => {
  return removeTashkeel(word)
    .replace(/أ|إ|آ/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه");
};

// Basic triliteral verb patterns (very simplified)
const patterns = [
  { name: "Form I", regex: /^(.)(.)(.)$/ },
  { name: "Form II", regex: /^(.)(.)(.)ّ$/ },
  { name: "Form III", regex: /^(.)(ا)(.)$/ },
  { name: "Form IV", regex: /^أ(.)(.)$/ },
  { name: "Form V", regex: /^ت(.)(.)(.)ّ$/ },
  { name: "Form VI", regex: /^ت(.)(ا)(.)$/ },
  { name: "Form VII", regex: /^ان(.)(.)$/ },
  { name: "Form VIII", regex: /^ا(.)(ت)(.)$/ },
  { name: "Form IX", regex: /^(.)(.)(.)ّ$/ },
  { name: "Form X", regex: /^است(.)(.)$/ },
];

// Main root extraction function
export function extractRoot(word) {
  const cleaned = normalize(word);

  // Direct 3-letter candidate
  if (cleaned.length === 3) {
    return {
      root: cleaned.split(""),
      pattern: "Trilateral (simple)",
      confidence: 0.95,
      alternatives: [],
    };
  }

  // Try pattern-based extraction
  for (const p of patterns) {
    const match = cleaned.match(p.regex);
    if (match) {
      const letters = match.slice(1).filter((c) => c !== "ا" && c !== "ت");
      if (letters.length === 3) {
        return {
          root: letters,
          pattern: p.name,
          confidence: 0.85,
          alternatives: [],
        };
      }
    }
  }

  // Weak verb fallback (remove weak letters)
  const weak = cleaned.replace(/[اوي]/g, "");
  if (weak.length === 3) {
    return {
      root: weak.split(""),
      pattern: "Weak verb (derived)",
      confidence: 0.6,
      alternatives: [],
    };
  }

  // No good match
  return {
    root: [],
    pattern: "Unknown",
    confidence: 0.2,
    alternatives: [],
  };
}
