// src/data/verbs/form4/ARSL/ARSL_arsala.js

export default {
  id: 12,                     // ⭐ FIXED — must be a number
  type: "verb",

  arabic: "أَرْسَلَ",
  transliteration: "arsala",
  english: {
    simple: "to send",
    detailed: "to send; to dispatch"
  },

  root: "ر-س-ل",
  rootFamily: "رسل، إرسال، رسالة",

  form: "Form IV",
  wazan: "أَفْعَلَ",
  formFamily: {
    name: "af'ala",
    past: "أَفْعَلَ",
    present: "يُفْعِلُ"
  },

  verbType: "sound",

  difficulty: { cefr: "A2", arabic: "سهل" },
  frequency: "Common",

  past: "أَرْسَلَ",
  present: "يُرْسِلُ",
  imperative: "أَرْسِلْ",
  future_sa: "سَيُرْسِلُ",
  future_sawfa: "سَوْفَ يُرْسِلُ",

  masdar: ["إِرْسَال"],

  overrides: {
    past: "أَرْسَلَ",
    present: "يُرْسِلُ",
    passivePast: "أُرْسِلَ",
    passivePresent: "يُرْسَلُ",
    masdar: ["إِرْسَال"]
  },

  topics: ["communication"],
  relatedNouns: ["رسالة", "مرسل"],
  relatedVerbs: ["بعث", "أوصل"],
  synonyms: ["بعث"],
  antonyms: ["استقبل"],

  examples: {
    simple: {
      ar: "أَرْسَلَ الرَّجُلُ رِسَالَةً.",
      en: "The man sent a letter.",
      tr: "arsala ar-rajulu risalah"
    },
    natural: {
      ar: "أَرْسَلْتُ البَرِيدَ الإِلِكْتُرُونِيَّ.",
      en: "I sent the email.",
      tr: "arsaltu al-barida al-elektroniyy"
    },
    rich: {
      ar: "أَرْسَلَتِ الشَّرِكَةُ تَقْرِيرًا مُفَصَّلًا لِلمُدِيرِ.",
      en: "The company sent a detailed report to the manager.",
      tr: "arsalat ash-sharikah taqreeran mufassalan lil-mudeer"
    }
  },

  audio: "",
  notes: ""
};
