export default {
  id: "V14",
  type: "verb",

  arabic: { past: "اِحْمَرَّ" },

  transliteration: {
    past: "ihmarra",
    present: "yahmarru",

    "passive-past": "uhmirra",
    "passive-present": "yuhmarra",

    masdar1: "ihmiraar",

    "active-participle": "muhmarr",
    "passive-participle": "muhmarr", // Form IX usually shares the same pattern

    subjunctive: "yahmarra",
    jussive: "yahmarr",

    "negative-past": "maa ihmarra",
    "negative-present": "laa yahmarru",

    "future-sa": "sayahmarru",
    "future-sawfa": "sawfa yahmarru"
  },

  english: {
    simple: "to become red",
    detailed: "to redden; to turn red; to blush"
  },

  root: "ح-م-ر",
  rootFamily: "حمر، أحمر، حمرة",

  form: "Form IX",
  wazan: "اِفْعَلَّ",
  formFamily: {
    name: "if'all",
    past: "اِفْعَلَّ",
    present: "يَفْعَلُّ"
  },

  verbType: "sound",

  difficulty: { cefr: "B1", arabic: "متوسط" },
  frequency: "Common",

  past: "اِحْمَرَّ",
  present: "يَحْمَرُّ",
  imperative: "—", // Form IX rarely has a usable imperative
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

  topics: ["colors", "appearance", "emotions"],

  relatedNouns: ["أحمر", "حمرة"],
  relatedVerbs: ["اصفرّ", "اخضرّ"], // other Form IX color-change verbs
  synonyms: ["تلوّن"],
  antonyms: ["ابيضّ"],

  examples: {
    simple: {
      ar: "اِحْمَرَّ الوَجْهُ خَجَلًا.",
      en: "The face turned red from embarrassment.",
      tr: "ihmarra al-wajhu khajalan"
    },
    natural: {
      ar: "اِحْمَرَّتِ السَّمَاءُ عِنْدَ الغُرُوبِ.",
      en: "The sky became red at sunset.",
      tr: "ihmarrat as-samaa'u 'inda al-ghuroob"
    },
    rich: {
      ar: "اِحْمَرَّتِ الأَوْرَاقُ فِي الخَرِيفِ بِتَدَرُّجٍ جَمِيلٍ.",
      en: "The leaves gradually turned red in autumn.",
      tr: "ihmarrat al-awraaqu fi al-khareef bi-tadarrujin jameel"
    }
  },

  audio: "",
  notes: ""
};
