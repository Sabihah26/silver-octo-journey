// src/utils/extractRoot.js

// Remove tashkeel
function stripTashkeel(word) {
  return word.replace(/[ًٌٍَُِّْ]/g, "");
}

// Patterns for Forms I–X
const patterns = [
  { form: "I", regex: /^(.)(.)(.)$/, root: (m) => m.slice(1, 4) },

  { form: "II", regex: /^(.)(ّ)(.)(.)$/, root: (m) => [m[1], m[3], m[4]] },

  { form: "III", regex: /^(.)(ا)(.)(.)$/, root: (m) => [m[1], m[3], m[4]] },

  { form: "IV", regex: /^(أ)(.)(.)(.)$/, root: (m) => m.slice(2, 5) },

  { form: "V", regex: /^(ت)(.)(ّ)(.)(.)$/, root: (m) => [m[2], m[4], m[5]] },

  { form: "VI", regex: /^(ت)(ا)(.)(.)(.)$/, root: (m) => [m[3], m[4], m[5]] },

  { form: "VII", regex: /^(ا)(ن)(.)(.)(.)$/, root: (m) => m.slice(3, 6) },

  { form: "VIII", regex: /^(ا)(.)(ت)(.)(.)$/, root: (m) => [m[2], m[4], m[5]] },

  { form: "IX", regex: /^(ا)(.)(.)(ّ)$/, root: (m) => [m[2], m[3], m[3]] },

  { form: "X", regex: /^(ا)(س)(ت)(.)(.)(.)$/, root: (m) => m.slice(4, 7) },
];

export default function extractRoot(word) {
  const clean = stripTashkeel(word);

  for (const p of patterns) {
    const match = clean.match(p.regex);
    if (match) {
      return {
        form: p.form,
        root: p.root(match),
      };
    }
  }

  // fallback: assume Form I
  return {
    form: "I",
    root: clean.slice(0, 3).split(""),
  };
}
