// src/data/verbs/form5/TLM/TLM_taallama.js

export default {
  id: 4,
  type: "verb",

  // ===== LEXICAL INFO =====
  arabic: "تَعَلَّمَ",
  transliteration: "ta'allama",
  english: {
    simple: "to learn",
    detailed: "to learn; to acquire knowledge; to study"
  },

  // ===== ROOT & FORM =====
  root: "ع-ل-م",
  rootFamily: "علم، تعليم، معلومة",

  form: "Form V",
  wazan: "تَفَعَّلَ",
  formFamily: {
    name: "tafa'ala",
    past: "تَفَعَّلَ",
    present: "يَتَفَعَّلُ"
  },

  verbType: "sound",

  // ===== DIFFICULTY & FREQUENCY =====
  difficulty: {
    cefr: "A2",
    arabic: "متوسط"
  },

  frequency: "Top 200",

  // ===== LEXICAL FORMS =====
  past: "تَعَلَّمَ",
  present: "يَتَعَلَّمُ",
  imperative: "تَعَلَّمْ",
  future_sa: "سَيَتَعَلَّمُ",
  future_sawfa: "سَوْفَ يَتَعَلَّمُ",

  masdar: ["تَعَلُّم"],

  // ===== OVERRIDES FOR THE CONJUGATION ENGINE =====
  overrides: {
    past: "تَعَلَّمَ",
    present: "يَتَعَلَّمُ",

    passivePast: "تُعُلِّمَ",
    passivePresent: "يُتَعَلَّمُ",

    masdar: ["تَعَلُّم"],
  },

  // ===== SEMANTIC INFO =====
  topics: ["education", "school", "self‑development"],

  relatedNouns: ["علم", "تعليم", "معلومة"],
  relatedVerbs: ["درس", "قرأ", "فهم"],
  synonyms: ["اكتسب المعرفة"],
  antonyms: ["جَهِلَ"],

  // ===== EXAMPLES =====
  examples: {
    simple: {
      ar: "تَعَلَّمَ الوَلَدُ الكِتَابَةَ.",
      en: "The boy learned writing.",
      tr: "ta'allama al-waladu al-kitaabata"
    },
    natural: {
      ar: "تَعَلَّمْتُ اللُّغَةَ العَرَبِيَّةَ فِي المَدْرَسَةِ.",
      en: "I learned the Arabic language at school.",
      tr: "ta'allamtu al-lughata al-arabiyyata fi al-madrasah"
    },
    rich: {
      ar: "تَعَلَّمَ الطُّلَّابُ مَهَارَاتٍ جَدِيدَةً مِنْ خِلَالِ الدَّرْسِ التَّطْبِيقِيِّ.",
      en: "The students learned new skills through the practical lesson.",
      tr: "ta'allama at-tullaabu mahaaratan jadeedatan min khilaali ad-darsi at-tatbiqiyy"
    }
  },

  audio: "",
  notes: ""
};
