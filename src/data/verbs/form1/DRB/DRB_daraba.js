// src/data/verbs/form1/DRB/DRB_daraba.js

export default {
  id: 9,
  type: "verb",

  arabic: "ضَرَبَ",
  transliteration: "daraba",
  english: {
    simple: "to hit",
    detailed: "to strike; to beat; to hit something"
  },

  root: "ض-ر-ب",
  rootFamily: "ضرب، مضروب، ضاربة",

  form: "Form I",
  wazan: "فَعَلَ",
  formFamily: {
    name: "nasara",
    past: "فَعَلَ",
    present: "يَفْعُلُ"
  },

  verbType: "sound",

  difficulty: {
    cefr: "A2",
    arabic: "متوسط"
  },

  frequency: "Common",

  past: "ضَرَبَ",
  present: "يَضْرِبُ",
  imperative: "اِضْرِبْ",
  future_sa: "سَيَضْرِبُ",
  future_sawfa: "سَوْفَ يَضْرِبُ",

  masdar: ["ضَرْب"],

  overrides: {
    past: "ضَرَبَ",
    present: "يَضْرِبُ",
    passivePast: "ضُرِبَ",
    passivePresent: "يُضْرَبُ",
    masdar: ["ضَرْب"]
  },

  topics: ["movement", "actions"],

  relatedNouns: ["ضرب", "مضروب"],
  relatedVerbs: ["لكم", "صفع"],
  synonyms: ["لكم"],
  antonyms: ["حَمَى"],

  examples: {
    simple: {
      ar: "ضَرَبَ الوَلَدُ الكُرَةَ.",
      en: "The boy hit the ball.",
      tr: "daraba al-waladu al-kurata"
    },
    natural: {
      ar: "ضَرَبْتُ المِثَالَ لِلتَّوْضِيحِ.",
      en: "I gave an example for clarification.",
      tr: "darabtu al-mithaala li-t-tawdih"
    },
    rich: {
      ar: "ضَرَبَ الجُنْدِيُّ العَدُوَّ دِفَاعًا عَنِ الوَطَنِ.",
      en: "The soldier struck the enemy in defense of the homeland.",
      tr: "daraba al-jundiyyu al-'aduwwa difa'an 'ani al-watan"
    }
  },

  audio: "",
  notes: ""
};
