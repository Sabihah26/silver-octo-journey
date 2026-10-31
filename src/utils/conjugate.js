// ------------------------------------------------------
// Unified Arabic Conjugation Engine — lemma‑based
// Full Sarf engine: weak verbs, Form I patterns, imperatives,
// jussive/subjunctive, passive, participles, masdar.
// ------------------------------------------------------

// ⭐ Normalize UI/data labels ("Form I", "Form1", "1") → engine keys ("I")
const FORM_KEY_MAP = {
  // Roman‑numeral labels
  "Form I": "I",
  "Form II": "II",
  "Form III": "III",
  "Form IV": "IV",
  "Form V": "V",
  "Form VI": "VI",
  "Form VII": "VII",
  "Form VIII": "VIII",
  "Form IX": "IX",
  "Form X": "X",

  // Numeric labels used in data / UI
  "Form1": "I",
  "Form2": "II",
  "Form3": "III",
  "Form4": "IV",
  "Form5": "V",
  "Form6": "VI",
  "Form7": "VII",
  "Form8": "VIII",
  "Form9": "IX",
  "Form10": "X",

  // Lowercase variants
  "form1": "I",
  "form2": "II",
  "form3": "III",
  "form4": "IV",
  "form5": "V",
  "form6": "VI",
  "form7": "VII",
  "form8": "VIII",
  "form9": "IX",
  "form10": "X",

  // Bare numbers (from verb.form.replace("Form", ""))
  "1": "I",
  "2": "II",
  "3": "III",
  "4": "IV",
  "5": "V",
  "6": "VI",
  "7": "VII",
  "8": "VIII",
  "9": "IX",
  "10": "X",
};

// Normalise root input: "ك-ت-ب" → ["ك","ت","ب"]
function normalizeRoot(root) {
  if (Array.isArray(root)) return root;
  if (typeof root === "string") {
    return root.split("-").map((r) => r.trim());
  }
  return ["", "", ""];
}

// ------------------------------------------------------
// Weak Verb Detection (extended)
// ------------------------------------------------------
function detectWeakType([f, a, l]) {
  const isWeak = (x) => x === "و" || x === "ي";

  if (isWeak(a)) return "hollow";
  if (isWeak(l)) return "defective";
  if (isWeak(f)) return "assimilated";

  // simple doubled detection: middle and last same consonant
  if (a === l) return "doubled";

  // hamzated: any radical is hamza
  if (f === "ء" || a === "ء" || l === "ء" || f === "أ" || a === "أ" || l === "أ") {
    return "hamzated";
  }

  return "sound";
}

// ------------------------------------------------------
// Pattern Application (fallback for when no lemma is given)
// ------------------------------------------------------
function applyPattern([f, a, l], pattern) {
  return pattern.replace(/ف|ع|ل/g, (m) => (m === "ف" ? f : m === "ع" ? a : l));
}

// ------------------------------------------------------
// Form I vowel pattern detection (very simple heuristic)
// ------------------------------------------------------
function detectFormIPattern(past3ms) {
  // expects something like فَعَلَ / فَعِلَ / فَعُلَ
  if (!past3ms) return "faʿala";
  if (past3ms.includes("ِ")) return "faʿila";
  if (past3ms.includes("ُ")) return "faʿula";
  return "faʿala";
}

// ------------------------------------------------------
// Form Patterns (fallback only)
// ------------------------------------------------------
const FORM_PATTERNS = {
  I: {
    past: "فَعَلَ",
    present: "يَفْعَلُ",
    imperative: "اِفْعَلْ",
  },
  II: {
    past: "فَعَّلَ",
    present: "يُفَعِّلُ",
    imperative: "فَعِّلْ",
  },
  III: {
    past: "فَاعَلَ",
    present: "يُفَاعِلُ",
    imperative: "فَاعِلْ",
  },
  IV: {
    past: "أَفْعَلَ",
    present: "يُفْعِلُ",
    imperative: "أَفْعِلْ",
  },
  V: {
    past: "تَفَعَّلَ",
    present: "يَتَفَعَّلُ",
    imperative: "تَفَعَّلْ",
  },
  VI: {
    past: "تَفَاعَلَ",
    present: "يَتَفَاعَلُ",
    imperative: "تَفَاعَلْ",
  },
  VII: {
    past: "اِنْفَعَلَ",
    present: "يَنْفَعِلُ",
    imperative: "اِنْفَعِلْ",
  },
  VIII: {
    past: "اِفْتَعَلَ",
    present: "يَفْتَعِلُ",
    imperative: "اِفْتَعِلْ",
  },
  IX: {
    past: "اِفْعَلَّ",
    present: "يَفْعَلُّ",
    imperative: "اِفْعَلَّ",
  },
  X: {
    past: "اِسْتَفْعَلَ",
    present: "يَسْتَفْعِلُ",
    imperative: "اِسْتَفْعِلْ",
  },
};

// ------------------------------------------------------
// Passive Patterns (fallback only)
// ------------------------------------------------------
const PASSIVE_FORM_PATTERNS = {
  I: {
    past: "فُعِلَ",
    present: "يُفْعَلُ",
  },
  II: {
    past: "فُعِّلَ",
    present: "يُفَعَّلُ",
  },
  III: {
    past: "فُوعِلَ",
    present: "يُفَاعَلُ",
  },
  IV: {
    past: "أُفْعِلَ",
    present: "يُفْعَلُ",
  },
  V: {
    past: "تُفُعِّلَ",
    present: "يُتَفَعَّلُ",
  },
  VI: {
    past: "تُفُوعِلَ",
    present: "يُتَفَاعَلُ",
  },
  VII: {
    past: "اُنْفُعِلَ",
    present: "يُنْفَعَلُ",
  },
  VIII: {
    past: "اُفْتُعِلَ",
    present: "يُفْتَعَلُ",
  },
  IX: {
    past: "اُفْعُلَّ",
    present: "يُفْعَلُّ",
  },
  X: {
    past: "اِسْتُفْعِلَ",
    present: "يُسْتَفْعَلُ",
  },
};

// ------------------------------------------------------
// Helpers to strip final short vowel
// ------------------------------------------------------
function stripFinalHaraka(word) {
  if (!word) return "";
  return word.replace(/[ًٌٍَُِّْ]$/u, "");
}

// ------------------------------------------------------
// Weak-verb helpers
// ------------------------------------------------------
function isWeakLetter(ch) {
  return ch === "و" || ch === "ي";
}

function removeFinalWeakLetter(word) {
  if (!word) return "";
  const chars = [...word];
  if (chars.length === 0) return word;
  const last = chars[chars.length - 1];
  if (isWeakLetter(last)) {
    return chars.slice(0, -1).join("");
  }
  return word;
}

// ------------------------------------------------------
// Build FULL 14‑PERSON ACTIVE PAST from lemma (3ms past)
// with weak-verb handling
// ------------------------------------------------------
function buildPastFromLemma(past3ms, root, weakType, form) {
  let base = past3ms;
  let stem = stripFinalHaraka(base);

  // simple hollow handling: قال، باع، نام etc.
  if (weakType === "hollow" && form === "I") {
    // e.g. قالَ → قالوا، قلتُ
    // we keep lemma as 3ms, but stem used for suffixes
    stem = stripFinalHaraka(base);
  }

  // defective: سعى، دعا، رمى
  if (weakType === "defective" && form === "I") {
    // keep stem without final weak letter for some persons
    const stemNoWeak = removeFinalWeakLetter(stem);

    return {
      "3ms": base,
      "3md": stemNoWeak + "يَا",
      "3mp": stemNoWeak + "وْا",
      "3fs": stemNoWeak + "تْ",
      "3fd": stemNoWeak + "تَا",
      "3fp": stemNoWeak + "يْنَ",

      "2ms": stemNoWeak + "تَ",
      "2md": stemNoWeak + "تُمَا",
      "2mp": stemNoWeak + "تُمْ",
      "2fs": stemNoWeak + "تِ",
      "2fd": stemNoWeak + "تُمَا",
      "2fp": stemNoWeak + "تُنَّ",

      "1s": stemNoWeak + "تُ",
      "1p": stemNoWeak + "نَا",
    };
  }

  return {
    "3ms": base,
    "3md": stem + "ا",
    "3mp": stem + "وا",
    "3fs": stem + "تْ",
    "3fd": stem + "تَا",
    "3fp": stem + "نَ",

    "2ms": stem + "تَ",
    "2md": stem + "تُمَا",
    "2mp": stem + "تُمْ",
    "2fs": stem + "تِ",
    "2fd": stem + "تُمَا",
    "2fp": stem + "تُنَّ",

    "1s": stem + "تُ",
    "1p": stem + "نَا",
  };
}
// ------------------------------------------------------
// Build FULL 14‑PERSON ACTIVE PRESENT from lemma (3ms present)
// with weak-verb + Form I pattern handling
// ------------------------------------------------------
function buildPresentFromLemma(present3ms, root, weakType, form, past3ms) {
  let base = present3ms;
  let stem = stripFinalHaraka(base);
  let withoutPrefix = stem.slice(1);

  // Form I vowel pattern adjustment
  if (form === "I") {
    const pattern = detectFormIPattern(past3ms);
    if (pattern === "faʿila") {
      // يَفْعِلُ pattern
      base = applyPattern(root, "يَفْعِلُ");
      stem = stripFinalHaraka(base);
      withoutPrefix = stem.slice(1);
    } else if (pattern === "faʿula") {
      // يَفْعُلُ pattern
      base = applyPattern(root, "يَفْعُلُ");
      stem = stripFinalHaraka(base);
      withoutPrefix = stem.slice(1);
    }
  }

  // hollow verbs: قال → يقول، باع → يبيع
  if (weakType === "hollow" && form === "I") {
    // very simplified: use يُفْعِلُ pattern for many hollow verbs
    base = applyPattern(root, "يَفُولُ"); // e.g. يقول
    stem = stripFinalHaraka(base);
    withoutPrefix = stem.slice(1);
  }

  // defective verbs: سعى، دعا، رمى
  if (weakType === "defective" && form === "I") {
    // simplified: يسعى، يدعو، يرمي
    const [f, a, l] = root;
    if (l === "ى") {
      base = "ي" + f + a + "ى";
    } else if (l === "و") {
      base = "ي" + f + a + "و";
    } else if (l === "ي") {
      base = "ي" + f + a + "ي";
    }
    stem = stripFinalHaraka(base);
    withoutPrefix = stem.slice(1);
  }

  return {
    "3ms": base,
    "3md": "ي" + withoutPrefix + "ان",
    "3mp": "ي" + withoutPrefix + "ون",
    "3fs": "ت" + withoutPrefix,
    "3fd": "ت" + withoutPrefix + "ان",
    "3fp": "ي" + withoutPrefix + "ن",

    "2ms": "ت" + withoutPrefix,
    "2md": "ت" + withoutPrefix + "ان",
    "2mp": "ت" + withoutPrefix + "ون",
    "2fs": "ت" + withoutPrefix + "ين",
    "2fd": "ت" + withoutPrefix + "ان",
    "2fp": "ت" + withoutPrefix + "ن",

    "1s": "أ" + withoutPrefix,
    "1p": "ن" + withoutPrefix,
  };
}

// ------------------------------------------------------
// FULL 14‑PERSON PASSIVE PAST (from passive lemma or pattern)
// ------------------------------------------------------
function buildPassivePastFromLemma(passivePast3ms) {
  const base = passivePast3ms;
  const stem = stripFinalHaraka(base);

  return {
    "3ms": base,
    "3md": stem + "ا",
    "3mp": stem + "وا",
    "3fs": stem + "تْ",
    "3fd": stem + "تَا",
    "3fp": stem + "نَ",

    "2ms": stem + "تَ",
    "2md": stem + "تُمَا",
    "2mp": stem + "تُمْ",
    "2fs": stem + "تِ",
    "2fd": stem + "تُمَا",
    "2fp": stem + "تُنَّ",

    "1s": stem + "تُ",
    "1p": stem + "نَا",
  };
}

// ------------------------------------------------------
// FULL 14‑PERSON PASSIVE PRESENT (from passive lemma or pattern)
// ------------------------------------------------------
function buildPassivePresentFromLemma(passivePresent3ms) {
  const base = passivePresent3ms;
  const stem = stripFinalHaraka(base);
  const withoutPrefix = stem.slice(1);

  return {
    "3ms": base,
    "3md": "ي" + withoutPrefix + "ان",
    "3mp": "ي" + withoutPrefix + "ون",
    "3fs": "ت" + withoutPrefix,
    "3fd": "ت" + withoutPrefix + "ان",
    "3fp": "ي" + withoutPrefix + "ن",

    "2ms": "ت" + withoutPrefix,
    "2md": "ت" + withoutPrefix + "ان",
    "2mp": "ت" + withoutPrefix + "ون",
    "2fs": "ت" + withoutPrefix + "ين",
    "2fd": "ت" + withoutPrefix + "ان",
    "2fp": "ت" + withoutPrefix + "ن",

    "1s": "أ" + withoutPrefix,
    "1p": "ن" + withoutPrefix,
  };
}

// ------------------------------------------------------
// Imperative — 6 PERSONS ONLY (2nd person)
// with weak-verb + hamzat al-wasl handling (simplified)
// ------------------------------------------------------
function buildImperativeFromPresent(present3ms, root, weakType, form) {
  let stem = stripFinalHaraka(present3ms).slice(1); // remove prefix

  // sound verbs: use stem as-is
  let base = stem;

  // hollow verbs: قال → قُلْ، باع → بِعْ
  if (weakType === "hollow" && form === "I") {
    const [f, a, l] = root;
    // very simplified: قُلْ, بِعْ, نَمْ
    base = f + "ُ" + l; // e.g. قُل
  }

  // defective verbs: سعى → اِسْعَ، دعا → اُدعُ، رمى → اِرمِ
  if (weakType === "defective" && form === "I") {
    const [f, a, l] = root;
    // simplified hamzat al-wasl patterns
    if (l === "ى") {
      base = "اسْ" + f + a; // اِسْعَ
    } else if (l === "و") {
      base = "ادْ" + f + a; // اُدعُ (approx)
    } else if (l === "ي") {
      base = "ارْ" + f + a; // اِرمِ
    }
  }

  // assimilated verbs: وعد → عِدْ, وجد → جِدْ
  if (weakType === "assimilated" && form === "I") {
    const [f, a, l] = root;
    base = a + "ِ" + l; // عِدْ, جِدْ
  }

  return {
    "2ms": base,
    "2fs": base + "ي",
    "2md": base + "ا",
    "2mp": base + "وا",
    "2fd": base + "ا",
    "2fp": base + "نَ",
  };
}

// ------------------------------------------------------
// Derived Sets: Jussive, Subjunctive, Negatives, Future
// with weak-verb handling
// ------------------------------------------------------
function buildJussive(present, root, weakType, form) {
  const out = {};
  for (const [k, v] of Object.entries(present)) {
    if (!v) continue;

    let formVal = v;

    // defective verbs: final weak letter drops in jussive
    if (weakType === "defective" && form === "I") {
      // e.g. يسعى → لم يسعْ, يدعو → لم يدعُ, يرمي → لم يرمِ
      formVal = removeFinalWeakLetter(formVal);
    }

    // feminine plural keep ن but take sukoon
    if (formVal.endsWith("ن")) {
      out[k] = formVal.replace(/[ُ]$/u, "ْ");
    }
    // plural/dual with ن in ون / ان / ين → drop ن
    else if (formVal.endsWith("ون") || formVal.endsWith("ان") || formVal.endsWith("ين")) {
      out[k] = formVal.slice(0, -1);
    } else {
      out[k] = formVal.replace(/[ُ]$/u, "ْ");
    }
  }
  return out;
}

function buildSubjunctive(present, root, weakType, form) {
  const out = {};
  for (const [k, v] of Object.entries(present)) {
    if (!v) continue;

    let formVal = v;

    // defective verbs: keep final weak letter in subjunctive
    if (weakType === "defective" && form === "I") {
      formVal = v; // no deletion
    }

    if (formVal.endsWith("ون")) {
      out[k] = formVal.slice(0, -2) + "وا";
    } else if (formVal.endsWith("ان")) {
      out[k] = formVal;
    } else if (formVal.endsWith("ين")) {
      out[k] = formVal;
    } else {
      out[k] = formVal.replace(/[ُ]$/u, "َ");
    }
  }
  return out;
}

function buildNegativePast(past) {
  const out = {};
  for (const [k, v] of Object.entries(past)) out[k] = "ما " + v;
  return out;
}

function buildNegativePresent(present) {
  const out = {};
  for (const [k, v] of Object.entries(present)) out[k] = "لا " + v;
  return out;
}

function buildFuture(present, prefix) {
  const out = {};
  for (const [k, v] of Object.entries(present)) out[k] = prefix + v;
  return out;
}
// ------------------------------------------------------
// Participles (pattern‑based; these are regular)
// ------------------------------------------------------
const ACTIVE_PARTICIPLE = {
  I: "فَاعِل",
  II: "مُفَعِّل",
  III: "مُفَاعِل",
  IV: "مُفْعِل",
  V: "مُتَفَعِّل",
  VI: "مُتَفَاعِل",
  VII: "مُنْفَعِل",
  VIII: "مُفْتَعِل",
  IX: "مُفْعَلّ",
  X: "مُسْتَفْعِل",
};

const PASSIVE_PARTICIPLE = {
  I: "مَفْعُول",
  II: "مُفَعَّل",
  III: "مُفَاعَل",
  IV: "مُفْعَل",
  V: "مُتَفَعَّل",
  VI: "مُتَفَاعَل",
  VII: "مُنْفَعَل",
  VIII: "مُفْتَعَل",
  IX: "مُفْعَلّ",
  X: "مُسْتَفْعَل",
};

// ------------------------------------------------------
// Masdar (fallback)
// ------------------------------------------------------
const MASDAR_PATTERNS = {
  I: "فَعْل",
  II: "تَفْعِيل",
  III: "مُفَاعَلَة",
  IV: "إِفْعَال",
  V: "تَفَعُّل",
  VI: "تَفَاعُل",
  VII: "اِنْفِعَال",
  VIII: "اِفْتِعَال",
  IX: "اِفْعِلال",
  X: "اِسْتِفْعَال",
};

// ------------------------------------------------------
// 14‑PERSON ORDER (UI uses this)
// ------------------------------------------------------
export const PERSONS_14 = [
  { key: "3ms", labelAr: "هو", labelEn: "he" },
  { key: "3md", labelAr: "هما (م)", labelEn: "they two (m)" },
  { key: "3mp", labelAr: "هم", labelEn: "they (m, pl)" },
  { key: "3fs", labelAr: "هي", labelEn: "she" },
  { key: "3fd", labelAr: "هما (ف)", labelEn: "they two (f)" },
  { key: "3fp", labelAr: "هنّ", labelEn: "they (f, pl)" },

  { key: "2ms", labelAr: "أنتَ", labelEn: "you (m)" },
  { key: "2md", labelAr: "أنتما", labelEn: "you two" },
  { key: "2mp", labelAr: "أنتم", labelEn: "you (m, pl)" },
  { key: "2fs", labelAr: "أنتِ", labelEn: "you (f)" },
  { key: "2fd", labelAr: "أنتما", labelEn: "you two (f)" },
  { key: "2fp", labelAr: "أنتنّ", labelEn: "you (f, pl)" },

  { key: "1s", labelAr: "أنا", labelEn: "I" },
  { key: "1p", labelAr: "نحن", labelEn: "we" },
];

// ------------------------------------------------------
// Convert tense map → ordered 14‑row list
// ------------------------------------------------------
export function expandTo14(tenseMap) {
  if (!tenseMap) return [];

  return PERSONS_14
    .map((p) => {
      const form = tenseMap[p.key];
      if (!form) return null;
      return { ...p, form };
    })
    .filter(Boolean);
}

// ------------------------------------------------------
// MAIN ENGINE
// ------------------------------------------------------
export default function conjugate(rootInput, formInput, overrides = {}) {
  const root = normalizeRoot(rootInput);
  const weakType = detectWeakType(root);

  // ⭐ Normalize "Form I", "Form1", "form1", "1" → "I" etc.
  const form = FORM_KEY_MAP[formInput] || formInput;

  const formPatterns = FORM_PATTERNS[form];
  const passivePatterns = PASSIVE_FORM_PATTERNS[form];
  const masdarTemplate = MASDAR_PATTERNS[form];

  if (!formPatterns || !passivePatterns || !masdarTemplate) {
    console.error("❌ Invalid form passed to conjugate():", form);

    return {
      root,
      form,
      weakType,
      past: {},
      present: {},
      imperative: {},
      passivePast: {},
      passivePresent: {},
      jussive: {},
      subjunctive: {},
      negativePast: {},
      negativePresent: {},
      future_sa: {},
      future_sawfa: {},
      activeParticiple: "",
      passiveParticiple: "",
      masdar: "",
      tables: {},
    };
  }

  // --- ACTIVE LEMMAS ---
  const lemmaPast =
    overrides.past || applyPattern(root, formPatterns.past);

  const lemmaPresent =
    overrides.present || applyPattern(root, formPatterns.present);

  // --- PASSIVE LEMMAS ---
  const lemmaPassivePast =
    overrides.passivePast || applyPattern(root, passivePatterns.past);

  const lemmaPassivePresent =
    overrides.passivePresent || applyPattern(root, passivePatterns.present);

  // --- FULL TABLES (14-person keys) ---
  const past14 = buildPastFromLemma(lemmaPast, root, weakType, form);
  const present14 = buildPresentFromLemma(lemmaPresent, root, weakType, form, lemmaPast);
  const passivePast14 = buildPassivePastFromLemma(lemmaPassivePast);
  const passivePresent14 = buildPassivePresentFromLemma(lemmaPassivePresent);

  const jussive14 = buildJussive(present14, root, weakType, form);
  const subjunctive14 = buildSubjunctive(present14, root, weakType, form);
  const negativePast14 = buildNegativePast(past14);
  const negativePresent14 = buildNegativePresent(present14);
  const future_sa14 = buildFuture(present14, "س");
  const future_sawfa14 = buildFuture(present14, "سوف ");

  const masdar = overrides.masdar || applyPattern(root, masdarTemplate);

  const tables = {
    past: past14,
    present: present14,
    imperative: buildImperativeFromPresent(lemmaPresent, root, weakType, form),

    passivePast: passivePast14,
    passivePresent: passivePresent14,

    jussive: jussive14,
    subjunctive: subjunctive14,

    negativePast: negativePast14,
    negativePresent: negativePresent14,

    future_sa: future_sa14,
    future_sawfa: future_sawfa14,

    activeParticiple: applyPattern(root, ACTIVE_PARTICIPLE[form]),
    passiveParticiple: applyPattern(root, PASSIVE_PARTICIPLE[form]),
    masdar,
  };

  function toArabicMap(tense14) {
    const out = {};
    for (const p of PERSONS_14) {
      const val = tense14[p.key];
      if (val) out[p.labelAr] = val;
    }
    return out;
  }

  return {
    root,
    form,
    weakType,

    past: toArabicMap(past14),
    present: toArabicMap(present14),
    imperative: tables.imperative,
    passivePast: toArabicMap(passivePast14),
    passivePresent: toArabicMap(passivePresent14),
    jussive: toArabicMap(jussive14),
    subjunctive: toArabicMap(subjunctive14),
    negativePast: toArabicMap(negativePast14),
    negativePresent: toArabicMap(negativePresent14),
    future_sa: toArabicMap(future_sa14),
    future_sawfa: toArabicMap(future_sawfa14),

    activeParticiple: tables.activeParticiple,
    passiveParticiple: tables.passiveParticiple,
    masdar,

    tables,
  };
}
