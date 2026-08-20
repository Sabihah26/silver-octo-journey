// src/data/verbs/form1/QRA/QRA_qaraa.js

export default {
  id: 5,
  type: "verb",

  arabic: "قَرَأَ",
  transliteration: "qara'a",
  english: {
    simple: "to read",
    detailed: "to read; to recite"
  },

  root: "ق-ر-أ",
  rootFamily: "قرأ، قراءة، مقرأ",

  form: "Form I",
  wazan: "فَعَلَ",
  formFamily: {
    name: "nasara",
    past: "فَعَلَ",
    present: "يَفْعُلُ"
  },

  verbType: "hamzated",

  difficulty: {
    cefr: "A1",
    arabic: "سهل"
  },

  frequency: "Top 100",

  past: "قَرَأَ",
  present: "يَقْرَأُ",
  imperative: "اِقْرَأْ",
  future_sa: "سَيَقْرَأُ",
  future_sawfa: "سَوْفَ يَقْرَأُ",

  masdar: ["قِرَاءَة"],

  overrides: {
    past: "قَرَأَ",
    present: "يَقْرَأُ",
    passivePast: "قُرِئَ",
    passivePresent: "يُقْرَأُ",
    masdar: ["قِرَاءَة"]
  },

  topics: ["reading", "school", "learning"],

  relatedNouns: ["كتاب", "قارئ", "قراءة"],
  relatedVerbs: ["كتب", "تعلّم", "راجع"],
  synonyms: ["تلا"],
  antonyms: ["أهمل"],

  examples: {
    simple: {
      ar: "قَرَأَ الطِّفْلُ القِصَّةَ.",
      en: "The child read the story.",
      tr: "qara'a at-tiflu al-qissata"
    },
    natural: {
      ar: "قَرَأْتُ الكِتَابَ فِي يَوْمَيْنِ.",
      en: "I read the book in two days.",
      tr: "qara'tu al-kitaaba fi yawmayn"
    },
    rich: {
      ar: "قَرَأَ القَارِئُ النَّصَّ بِصَوْتٍ وَاضِحٍ وَمُعَبِّرٍ.",
      en: "The reader recited the text with a clear and expressive voice.",
      tr: "qara'a al-qaari'u an-nassa bisawtin waadihin wa mu'abbirin"
    }
  },

  audio: "",
  notes: ""
};
