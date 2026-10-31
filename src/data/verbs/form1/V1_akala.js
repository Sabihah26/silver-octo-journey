export default {
  id: "V1_akala",
  type: "verb",

  arabic: { past: "أَكَلَ" },

  transliteration: {
    past: "akala",
    present: "ya'kulu",

    "passive-past": "ukila",
    "passive-present": "yu'kal",

    masdar1: "akl",
    masdar2: "ma'kul", // optional second masdar

    "active-participle": "akil",
    "passive-participle": "ma'kul",

    subjunctive: "ya'kula",
    jussive: "ya'kul",

    "negative-past": "maa akala",
    "negative-present": "laa ya'kulu",

    "future-sa": "sayakulu",
    "future-sawfa": "sawfa ya'kulu"
  },

  english: {
    simple: "to eat",
    detailed: "to eat; to consume food"
  },

  root: "أ-ك-ل",
  rootFamily: "أكل، آكل، مأكول",

  form: "Form I",
  wazan: "فَعَلَ",
  formFamily: {
    name: "faʿala",
    past: "فَعَلَ",
    present: "يَفْعُلُ"
  },

  verbType: "sound",

  difficulty: { cefr: "A1", english: "Easy" },
  frequency: "High",

  past: "أَكَلَ",
  present: "يَأْكُلُ",
  imperative: "كُلْ",
  future_sa: "سَيَأْكُلُ",
  future_sawfa: "سَوْفَ يَأْكُلُ",

  masdar: ["أَكْل"],

  overrides: {
    past: "أَكَلَ",
    present: "يَأْكُلُ",
    passivePast: "أُكِلَ",
    passivePresent: "يُؤْكَلُ",
    masdar: ["أَكْل"]
  },

  superTopic: "Food & Daily Life",
  topics: ["food", "daily life", "basic actions"],
  semanticFamily: "eating verbs",

  relatedVerbs: {
    root: ["أكل", "آكل", "مأكول"],
    semantic: ["شَرِبَ", "طَبَخَ"],
    formFamily: ["faʿala"]
  },

  relatedNouns: ["أَكْل", "مَأْكُول"],
  synonyms: ["تناول"],
  antonyms: ["جاع"],

  examples: {
    simple: {
      ar: "أَكَلَ الوَلَدُ التُّفَّاحَةَ.",
      en: "The boy ate the apple.",
      tr: "akala al-waladu at-tuffāḥata"
    },

    natural: {
      ar: "يَأْكُلُ النَّاسُ مَعًا فِي الْمَائِدَةِ.",
      en: "People eat together at the table.",
      tr: "ya'kulu an-nāsu maʿan fī al-māʾidah"
    },

    rich: {
      ar: "يُحَاوِلُ أَنْ يَأْكُلَ طَعَامًا صِحِّيًّا كُلَّ يَوْمٍ.",
      en: "He tries to eat healthy food every day.",
      tr: "yuḥāwilu an ya'kula ṭaʿāman ṣiḥḥiyyan kulla yawmin"
    }
  },

  audio: "",
  notes: ""
};
