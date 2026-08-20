// src/data/verbs/form2/DRS/DRS_darrasa.js

export default {
  id: 10,
  type: "verb",

  arabic: "دَرَّسَ",
  transliteration: "darrasa",
  english: {
    simple: "to teach",
    detailed: "to teach; to instruct; to give lessons"
  },

  root: "د-ر-س",
  rootFamily: "درس، تدريس، مدرس",

  form: "Form II",
  wazan: "فَعَّلَ",
  formFamily: {
    name: "fa''ala",
    past: "فَعَّلَ",
    present: "يُفَعِّلُ"
  },

  verbType: "sound",

  difficulty: { cefr: "A2", arabic: "سهل" },
  frequency: "Common",

  past: "دَرَّسَ",
  present: "يُدَرِّسُ",
  imperative: "دَرِّسْ",
  future_sa: "سَيُدَرِّسُ",
  future_sawfa: "سَوْفَ يُدَرِّسُ",

  masdar: ["تَدْرِيس"],

  overrides: {
    past: "دَرَّسَ",
    present: "يُدَرِّسُ",
    passivePast: "دُرِّسَ",
    passivePresent: "يُدَرَّسُ",
    masdar: ["تَدْرِيس"]
  },

  topics: ["education", "school"],
  relatedNouns: ["مدرس", "درس", "تدريس"],
  relatedVerbs: ["علّم", "شرح"],
  synonyms: ["علّم"],
  antonyms: ["تَعَلَّمَ"],

  examples: {
    simple: {
      ar: "دَرَّسَ المُعَلِّمُ الدَّرْسَ.",
      en: "The teacher taught the lesson.",
      tr: "darrasa al-mu'allimu ad-darsa"
    },
    natural: {
      ar: "دَرَّسْتُ الطُّلَّابَ بِطَرِيقَةٍ جَدِيدَةٍ.",
      en: "I taught the students using a new method.",
      tr: "darrastu at-tullaaba bitareeqatin jadeedah"
    },
    rich: {
      ar: "دَرَّسَ الأُسْتَاذُ المَادَّةَ بِشَرْحٍ مُفَصَّلٍ.",
      en: "The professor taught the subject with detailed explanation.",
      tr: "darrasa al-ustaadhu al-maaddata bisharhin mufassal"
    }
  },

  audio: "",
  notes: ""
};
