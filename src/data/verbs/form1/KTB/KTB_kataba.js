export default {
  id: 3,
  type: "verb",

  arabic: "كتب",
  transliteration: "kataba",
  english: {
    simple: "to write",
    detailed: "to write; to compose text"
  },

  root: "ك-ت-ب",
  form: "Form I",
  wazan: "فَعَلَ",

  past: "كَتَبَ",
  present: "يَكْتُبُ",

  masdar: [
    { ar: "كِتَابَة", tr: "kitābah", en: "writing" },
    { ar: "كِتَاب", tr: "kitāb", en: "book; writing" }
  ],

  activeParticiple: {
    ar: "كاتِب",
    tr: "kātib",
    en: "writer"
  },

  passiveParticiple: {
    ar: "مَكْتُوب",
    tr: "maktūb",
    en: "written"
  },

  difficulty: {
    level: "A2",
    frequency: "high",
    arabicLevel: "beginner",
    usage: "High frequency in MSA and dialects.",
    learnerNotes: "Essential verb for writing contexts.",
    corpusRank: 312
  },

  overrides: {
    past: "كَتَبَ",
    present: "يَكْتُبُ",
    passivePast: "كُتِبَ",
    passivePresent: "يُكْتَبُ",
    masdar: [
      { ar: "كِتَابَة", tr: "kitābah", en: "writing" },
      { ar: "كِتَاب", tr: "kitāb", en: "book; writing" }
    ]
  },

  topics: ["writing", "communication"],

  examples: {
    simple: {
      ar: "كَتَبَ الرَّجُلُ رِسَالَةً.",
      en: "The man wrote a letter."
    }
  }
};
