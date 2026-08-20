// src/data/verbs/form1/AKL/AKL_akala.js

export default {
  id: 1,
  type: "verb",

  // ===== LEXICAL INFO =====
  arabic: "أكل",
  transliteration: "akala",
  english: {
    simple: "to eat",
    detailed: "to eat; to consume food"
  },

  // ===== ROOT & FORM =====
  root: "أ-ك-ل",
  form: "Form I", // keep this clean for the engine

  wazan: "فَعَلَ",
  formFamily: {
    name: "nasara",
    past: "فَعَلَ",
    present: "يَفْعُلُ"
  },

  verbType: "sound",

  // ===== DIFFICULTY & FREQUENCY =====
  difficulty: {
    cefr: "A1",
    arabic: "سهل"
  },

  frequency: "Top 100",

  // ===== LEXICAL FORMS =====
  past: "أَكَلَ",
  present: "يَأْكُلُ",
  masdar: ["أَكْل", "مَأْكَل"],

  // ===== OVERRIDES FOR THE CONJUGATION ENGINE =====
  overrides: {
    past: "أَكَلَ",
    present: "يَأْكُلُ",

    // Passive forms (lexical truth)
    passivePast: "أُكِلَ",
    passivePresent: "يُؤْكَلُ",

    // Masdar (engine accepts string OR array)
    masdar: ["أَكْل", "مَأْكَل"],
  },

  // ===== SEMANTIC INFO =====
  topics: ["food", "daily life", "family meals"],

  relatedNouns: ["طعام", "مأكولات", "وجبة"],
  relatedVerbs: ["شرب", "طعم", "هضم"],
  synonyms: ["تناول"],
  antonyms: ["جاع"],

  // ===== EXAMPLES =====
  examples: {
    simple: {
      ar: "أَكَلَ الوَلَدُ التُّفَّاحَةَ.",
      en: "The boy ate the apple.",
      tr: "akala al-waladu al-tuffaahata"
    },
    natural: {
      ar: "أَكَلْنَا الطَّعَامَ مَعَ الأُسْرَةِ.",
      en: "We ate food with the family.",
      tr: "akalnaa al-ta'aama ma'a al-usrati"
    },
    rich: {
      ar: "أَكَلَ الضُّيُوفُ الطَّعَامَ الَّذِي أَعَدَّهُ المُضِيفُ.",
      en: "The guests ate the food prepared by the host.",
      tr: "akala al-duyuufu al-ta'aama alladhi a'addahu al-mudeefu"
    }
  },

  audio: "",
  notes: ""
};
