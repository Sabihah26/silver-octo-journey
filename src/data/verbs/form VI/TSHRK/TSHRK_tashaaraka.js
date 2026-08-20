// src/data/verbs/form6/TSHRK/TSHRK_tashaaraka.js

export default {
  id: 13,
  type: "verb",

  arabic: "تَشَارَكَ",
  transliteration: "tashaaraka",
  english: {
    simple: "to participate together",
    detailed: "to share in; to take part jointly"
  },

  root: "ش-ر-ك",
  rootFamily: "شرك، مشاركة، شريك",

  form: "Form VI",
  wazan: "تَفَاعَلَ",
  formFamily: {
    name: "tafaa'ala",
    past: "تَفَاعَلَ",
    present: "يَتَفَاعَلُ"
  },

  verbType: "sound",

  difficulty: { cefr: "B1", arabic: "متوسط" },
  frequency: "Common",

  past: "تَشَارَكَ",
  present: "يَتَشَارَكُ",
  imperative: "تَشَارَكْ",
  future_sa: "سَيَتَشَارَكُ",
  future_sawfa: "سَوْفَ يَتَشَارَكُ",

  masdar: ["تَشَارُك"],

  overrides: {
    past: "تَشَارَكَ",
    present: "يَتَشَارَكُ",
    passivePast: "تُشُورِكَ",
    passivePresent: "يُتَشَارَكُ",
    masdar: ["تَشَارُك"]
  },

  topics: ["teamwork", "community"],
  relatedNouns: ["مشاركة", "شريك"],
  relatedVerbs: ["شارك", "تعاون"],
  synonyms: ["تعاون"],
  antonyms: ["انفرد"],

  examples: {
    simple: {
      ar: "تَشَارَكَ الطُّلَّابُ فِي المَشْرُوعِ.",
      en: "The students participated together in the project.",
      tr: "tashaaraka at-tullaabu fi al-mashroo'"
    },
    natural: {
      ar: "تَشَارَكْنَا فِي إِعْدَادِ الحَفْلِ.",
      en: "We collaborated in preparing the event.",
      tr: "tashaaraknaa fi i'daad al-hafl"
    },
    rich: {
      ar: "تَشَارَكَ الفَرِيقُ فِي وَضْعِ خُطَّةٍ جَدِيدَةٍ.",
      en: "The team collaborated in creating a new plan.",
      tr: "tashaaraka al-fareeq fi wad'i khuttah jadeedah"
    }
  },

  audio: "",
  notes: ""
};
