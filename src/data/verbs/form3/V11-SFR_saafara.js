export default {
  id: "V11",
  type: "verb",

  arabic: { past: "سَافَرَ" },

  transliteration: {
    past: "saafara",
    present: "yusaafir",

    "passive-past": "suufira",
    "passive-present": "yusaafar",

    masdar1: "safar",

    "active-participle": "musāfir",
    "passive-participle": "masfūr", // rarely used but structurally correct

    subjunctive: "yusaafira",
    jussive: "yusaafir",

    "negative-past": "maa saafara",
    "negative-present": "laa yusaafir",

    "future-sa": "sayusaafir",
    "future-sawfa": "sawfa yusaafir"
  },

  english: {
    simple: "to travel",
    detailed: "to travel; to journey"
  },

  root: "س-ف-ر",
  rootFamily: "سفر، مسافر، سفارة",

  form: "Form III",
  wazan: "فَاعَلَ",
  formFamily: {
    name: "faa'ala",
    past: "فَاعَلَ",
    present: "يُفَاعِلُ"
  },

  verbType: "sound",

  difficulty: { cefr: "A1", arabic: "سهل" },
  frequency: "Top 200",

  past: "سَافَرَ",
  present: "يُسَافِرُ",
  imperative: "سَافِرْ",
  future_sa: "سَيُسَافِرُ",
  future_sawfa: "سَوْفَ يُسَافِرُ",

  masdar: ["سَفَر"],

  overrides: {
    past: "سَافَرَ",
    present: "يُسَافِرُ",
    passivePast: "سُوفِرَ",
    passivePresent: "يُسَافَرُ",
    masdar: ["سَفَر"]
  },

  topics: ["travel", "movement"],
  relatedNouns: ["مسافر", "سفر"],
  relatedVerbs: ["ذهب", "رجع"],
  synonyms: ["ارتحل"],
  antonyms: ["أقام"],

  examples: {
    simple: {
      ar: "سَافَرَ الرَّجُلُ إِلَى مِصْرَ.",
      en: "The man traveled to Egypt.",
      tr: "saafara ar-rajulu ila misr"
    },
    natural: {
      ar: "سَافَرْنَا فِي العُطْلَةِ الصَّيْفِيَّةِ.",
      en: "We traveled during the summer vacation.",
      tr: "saafarna fi al-'utlah as-sayfiyyah"
    },
    rich: {
      ar: "سَافَرَ الطُّلَّابُ لِحُضُورِ دَوْرَةٍ تَعْلِيمِيَّةٍ.",
      en: "The students traveled to attend an educational course.",
      tr: "saafara at-tullaabu lihudoori dawratin ta'leemiyyah"
    }
  },

  audio: "",
  notes: ""
};
