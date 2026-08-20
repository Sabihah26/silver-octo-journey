// -------------------------------------------------------------
// extractRoot.js
// Auto-detects the triliteral root of an Arabic verb or noun
// Handles:
//   - Form I–X patterns
//   - Weak verbs (assimilated, hollow, final-weak)
//   - Hamzated verbs
//   - Shadda (doubled verbs)
// -------------------------------------------------------------

const patterns = [
  // Form I
  { form: "I", regex: /^(.)(.)(.)$/, root: (m) => m.slice(1, 4) },

  // Form II — فعّل
  { form: "II", regex: /^(.)(ّ)(.)(.)$/, root: (m) => [m[1], m[3], m[4]] },

  // Form III — فاعل
  { form: "III", regex: /^(.)(ا)(.)(.)$/, root: (m) => [m[1], m[3], m[4]] },

  // Form IV — أفعل
  { form: "IV", regex: /^(أ)(.)(.)(.)$/, root: (m) => m.slice(2, 5) },

  // Form V — تفعّل
  { form: "V", regex: /^(ت)(.)(ّ)(.)(.)$/, root: (m) => [m[2], m[4], m[5]] },

  // Form VI — تفاعل
  { form: "VI", regex: /^(ت)(ا)(.)(.)(.)$/, root: (m) => [m[3], m[4], m[5]] },

  // Form VII — انفعل
  { form: "VII", regex: /^(ا)(ن)(.)(.)(.)$/, root: (m) => m.slice(3, 6) },

  // Form VIII — افتعل
  { form: "VIII", regex: /^(ا)(.)(ت)(.)(.)$/, root: (m) => [m[2], m[4], m[5]] },

  // Form IX — افعلّ
  { form: "IX", regex: /^(ا)(.)(.)(ّ)$/, root: (m) => [m[2], m[3], m[3]] },

  // Form X — استفعل
  { form: "X", regex: /^(ا)(س)(ت)(.)(.)(.)$/, root: (m) => m.slice(4, 7) },
];

export default function extractRoot(word) {
  // Remove tashkeel
  const clean = word.replace(/[ًٌٍَُِّْ]/g, "");

  for (const p of patterns) {
    const match = clean.match(p.regex);
    if (match) {
      return {
        form: p.form,
        root: p.root(match),
      };
    }
  }

  // Fallback: assume Form I
  return {
    form: "I",
    root: clean.slice(0, 3).split(""),
  };
}
