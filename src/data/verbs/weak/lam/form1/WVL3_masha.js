export default {
  id: "WVL3_masha",
  type: "verb",

  arabic: {
    past: "مَشَى"
  },

  transliteration: {
    past: "mashā",
    present: "yamshī",

    "passive-past": "mushiya",
    "passive-present": "yamshā",

    masdar1: "mashy",
    masdar2: "mashāyah",

    "active-participle": "māshin",
    "passive-participle": "mamshiyy",

    subjunctive: "yamshiya",
    jussive: "yamshi",

    "negative-past": "mā mashā",
    "negative-present": "lā yamshī",
    "negative-future": "lan yamshiya",

    "future-sa": "sayamshī",
    "future-sawfa": "sawfa yamshī"
  },

  english: {
    simple: "to walk",
    detailed: "to walk; to move on foot"
  },

  englishByType: {
    past: "he walked",
    present: "he walks",
    imperative: "walk!",

    "passive-past": "it was walked on; it was walked upon; it was trodden",
    "passive-present": "it is walked on; it is walked upon; it is trodden",

    "negative-past": "he did not walk",
    "negative-present": "he does not walk",
    "negative-future": "he will not walk",

    "future-sa": "he will walk",
    "future-sawfa": "he will walk",

    "active-participle": "one who walks; walker",
    "passive-participle": "walked on; walked upon; trodden",

    masdar: "walking"
  },

  root: "م-ش-ي",
  rootFamily: "مَشَى، مَاشٍ، مَشْي",

  form: "Form I",
  wazan: "فَعَلَ",

  formFamily: {
    name: "faʿala",
    past: "فَعَلَ",
    present: "يَفْعِلُ"
  },

  verbType: "defective",

  difficulty: {
    cefr: "A1",
    english: "Easy",
    arabicLevel: "beginner",
    usage: "Common in everyday conversation.",
    learnerNotes: "This is a weak-final verb. Its imperative is اِمْشِ (imshi).",
    corpusRank: 100
  },

  frequency: "Very High",

  past: "مَشَى",
  present: "يَمْشِي",
  imperative: "اِمْشِ",

  future_sa: "سَيَمْشِي",
  future_sawfa: "سَوْفَ يَمْشِي",

  masdar: [
    "مَشْي"
  ],

  activeParticiple: "مَاشٍ",
  passiveParticiple: "",

  overrides: {
    past: "مَشَى",
    present: "يَمْشِي",
    passivePast: "مُشِيَ",
    passivePresent: "يُمْشَى",

    masdar: [
      "مَشْي"
    ]
  },

  superTopic: "Daily Life & Movement",

  topics: [
    "walking",
    "movement"
  ],

  semanticFamily: "movement verbs",

  categories: [
    "daily"
  ],

  relatedVerbs: {
    root: [
      "مَشَى",
      "مَشَّى",
      "تَمَشَّى"
    ],

    semantic: [
      "سَارَ",
      "خَطَا"
    ],

    formFamily: [
      "faʿala"
    ]
  },

  relatedNouns: [
    "مَشْي",
    "مَاشٍ",
    "مَمْشًى"
  ],

  synonyms: [
    "سَارَ"
  ],

  antonyms: [
    "وَقَفَ"
  ],

  examples: {
    simple: {
      ar: "مَشَى الرَّجُلُ إِلَى السُّوقِ.",
      en: "The man walked to the market.",
      tr: "mashā ar-rajulu ilā as-sūq",
      audio: ""
    },

    natural: {
      ar: "يَمْشِي الطَّالِبُ إِلَى المَدْرَسَةِ كُلَّ صَبَاحٍ.",
      en: "The student walks to school every morning.",
      tr: "yamshī aṭ-ṭālibu ilā al-madrasati kulla ṣabāḥ",
      audio: ""
    },

    rich: {
      ar: "مَشَى أَفْرَادُ الأُسْرَةِ عَلَى الشَّاطِئِ عِنْدَ الغُرُوبِ.",
      en: "The family members walked along the beach at sunset.",
      tr: "mashā afrādu al-usrah ʿalā ash-shāṭiʾi ʿinda al-ghurūb",
      audio: ""
    }
  },

  audio: "",
  notes: "This verb is intransitive, so passive forms are not normally used.",

  quranExamples: [
    {
      reference: "Qur'an 67:22",
      arabic: "أَفَمَن يَمْشِى مُكِبًّا عَلَىٰ وَجْهِهِۦٓ أَهْدَىٰٓ أَمَّن يَمْشِى سَوِيًّا عَلَىٰ صِرَٰطٍ مُّسْتَقِيمٍ",
      focusWord: "يَمْشِى",
      lemma: "مَشَى",
      use: "verb",
      morphology: "Form I imperfect, third-person masculine singular",
      translation: "Then is he who walks fallen on his face better guided, or (he) who walks upright on (the) Path Straight?",
      source: "Quranic Arabic Corpus",
      sourceUrl: "https://corpus.quran.com/wordbyword.jsp?chapter=67&verse=22"
    }
  ]
};
