// src/data/verbs/form9/HMR/HMR_ihmarra.js

export default {
  id: 14,
  type: "verb",

  arabic: "اِحْمَرَّ",
  transliteration: "ihmarra",
  english: {
    simple: "to become red",
    detailed: "to turn red; to blush"
  },

  root: "ح-م-ر",
  rootFamily: "حمر، أحمر، حمرة",

  form: "Form IX",
  wazan: "اِفْعَلَّ",
  formFamily: {
    name: "if'allaa",
    past: "اِفْعَلَّ",
    present: "يَفْعَلُّ"
  },

  verbType: "sound",

  difficulty: { cefr: "B1", arabic: "متوسط" },
  frequency: "Common",

  past: "اِحْمَرَّ",
  present: "يَحْمَرُّ",
  imperative: "اِحْمَرَّ",
  future_sa: "سَيَحْمَرُّ",
  future_sawfa: "سَوْفَ يَحْمَرُّ",

  masdar: ["اِحْمِرَار"],

  overrides: {
    past: "اِحْمَرَّ",
    present: "يَحْمَرُّ",
    passivePast: "اُحْمِرَّ",
    passivePresent: "يُحْمَرُّ",
    masdar: ["اِحْمِرَار"]
  },

  topics: ["colors", "appearance"],
  relatedNouns: ["أحمر", "حمرة"],
  relatedVerbs: ["اصفرّ", "اسودّ"],
  synonyms: ["تورّد"],
  antonyms: ["ابيضّ"],

  examples: {
    simple: {
      ar: "اِحْمَرَّ الوَجْهُ خَجَلًا.",
      en: "The face turned red from embarrassment.",
      tr: "ihmarra al-wajhu khajalan"
    },
    natural: {
      ar: "اِحْمَرَّتِ السَّمَاءُ عِنْدَ الغُرُوبِ.",
      en: "The sky turned red at sunset.",
      tr: "ihmarrat as-samaa' inda al-ghuroob"
    },
    rich: {
      ar: "اِحْمَرَّتِ الأَوْرَاقُ بَعْدَ تَغَيُّرِ الفَصْلِ.",
      en: "The leaves turned red after the seasonal change.",
      tr: "ihmarrat al-awraaq ba'da taghayyur al-fasl"
    }
  },

  audio: "",
  notes: ""
};
