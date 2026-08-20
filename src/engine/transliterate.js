// src/engine/transliterate.js

// Very simple Arabic → Latin transliteration.
// This is intentionally basic and readable for learners.
const map = {
  "ا": "ā",
  "أ": "a",
  "إ": "i",
  "آ": "ā",
  "ب": "b",
  "ت": "t",
  "ث": "th",
  "ج": "j",
  "ح": "ḥ",
  "خ": "kh",
  "د": "d",
  "ذ": "dh",
  "ر": "r",
  "ز": "z",
  "س": "s",
  "ش": "sh",
  "ص": "ṣ",
  "ض": "ḍ",
  "ط": "ṭ",
  "ظ": "ẓ",
  "ع": "ʿ",
  "غ": "gh",
  "ف": "f",
  "ق": "q",
  "ك": "k",
  "ل": "l",
  "م": "m",
  "ن": "n",
  "ه": "h",
  "و": "w",
  "ي": "y",
  "ى": "ā",
  "ء": "ʾ",
  "ؤ": "ʾ",
  "ئ": "ʾ",

  "َ": "a",
  "ُ": "u",
  "ِ": "i",
  "ْ": "",
  "ّ": "",

  " ": " ",
  "ـ": "",
};

export function transliterate(arabic) {
  if (!arabic) return "";

  let result = "";

  for (let i = 0; i < arabic.length; i++) {
    const ch = arabic[i];
    const t = map[ch];
    result += t !== undefined ? t : ch;
  }

  return result;
}
