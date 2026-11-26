export default {
  id: "V2_amara",
  type: "verb",

  arabic: {
    past: "أَمَرَ"
  },

  transliteration: {
    past: "amara",
    present: "ya'muru",

    "passive-past": "umira",
    "passive-present": "yu'maru",

    masdar1: "amr",
    masdar2: "",

    "active-participle": "āmir",
    "passive-participle": "ma'mūr",

    subjunctive: "ya'mura",
    jussive: "ya'mur",

    "negative-past": "mā amara",
    "negative-present": "lā ya'muru",
    "negative-future": "lan ya'mura",

    "future-sa": "saya'muru",
    "future-sawfa": "sawfa ya'muru"
  },

  english: {
    simple: "to order; to command",
    detailed: "to order or command someone to do something"
  },

  englishByType: {
    past: "he ordered",
    present: "he orders",
    imperative: "order!",

    "passive-past": "he was ordered",
    "passive-present": "he is ordered",

    "negative-past": "he did not order",
    "negative-present": "he does not order",
    "negative-future": "he will not order",

    "future-sa": "he will order",
    "future-sawfa": "he will order",

    "active-participle": "one who orders",
    "passive-participle": "one who is ordered",

    masdar: "ordering; command"
  },

  root: "أ-م-ر",
  rootFamily: "أمر، آمر، مأمور",

  form: "Form I",
  wazan: "فَعَلَ",

  formFamily: {
    name: "faʿala",
    past: "فَعَلَ",
    present: "يَفْعُلُ"
  },

  verbType: "hamzated",

  difficulty: {
    cefr: "A2",
    english: "Medium",
    arabicLevel: "beginner",
    usage: "Common in instructions and everyday conversation.",
    learnerNotes: "The imperative is مُرْ (mur), with the initial hamza dropped.",
    corpusRank: 300
  },

  frequency: "High",

  past: "أَمَرَ",
  present: "يَأْمُرُ",
  imperative: "مُرْ",

  future_sa: "سَيَأْمُرُ",
  future_sawfa: "سَوْفَ يَأْمُرُ",

  masdar: [
    "أَمْر"
  ],

  activeParticiple: "آمِر",
  passiveParticiple: "مَأْمُور",

  overrides: {
    past: "أَمَرَ",
    present: "يَأْمُرُ",
    passivePast: "أُمِرَ",
    passivePresent: "يُؤْمَرُ",

    masdar: [
      "أَمْر"
    ],

    form1VowelClass: "u"
  },

  superTopic: "Communication & Instructions",

  topics: [
    "commands",
    "communication"
  ],

  semanticFamily: "commanding verbs",

  categories: [
    "communication"
  ],

  relatedVerbs: {
    root: [
      "أمر",
      "آمر",
      "مأمور"
    ],

    semantic: [
      "طَلَبَ",
      "وَجَّهَ"
    ],

    formFamily: [
      "faʿala"
    ]
  },

  relatedNouns: [
    "أَمْر",
    "أَمِير",
    "مَأْمُور"
  ],

  synonyms: [
    "طَلَبَ",
    "وَجَّهَ"
  ],

  antonyms: [
    "نَهَى"
  ],

  examples: {
    simple: {
      ar: "أَمَرَ المُعَلِّمُ الطَّالِبَ بِالقِرَاءَةِ.",
      en: "The teacher ordered the student to read.",
      tr: "amara al-mu'allimu aṭ-ṭāliba bil-qirā'ah",
      audio: ""
    },

    natural: {
      ar: "يَأْمُرُ الأَبُ ابْنَهُ بِتَرْتِيبِ غُرْفَتِهِ.",
      en: "The father tells his son to tidy his room.",
      tr: "ya'muru al-abu ibnahu bitartībi ghurfatihi",
      audio: ""
    },

    rich: {
      ar: "أَمَرَ المُدِيرُ المُوَظَّفِينَ بِإِكْمَالِ العَمَلِ قَبْلَ نِهَايَةِ اليَوْمِ.",
      en: "The manager ordered the employees to finish the work before the end of the day.",
      tr: "amara al-mudīru al-muwaẓẓafīna bi-ikmāli al-'amali qabla nihāyati al-yawm",
      audio: ""
    }
  },

  audio: "",
  notes: "",

  quranExamples: [
    {
      reference: "Qur'an 96:12",
      arabic: "أَوْ أَمَرَ بِٱلتَّقْوَىٰٓ",
      focusWord: "أَمَرَ",
      lemma: "أَمَرَ",
      use: "verb",
      morphology: "Form I perfect, third-person masculine singular",
      translation: "Or he enjoins [of the] righteousness?",
      source: "Quranic Arabic Corpus",
      sourceUrl: "https://corpus.quran.com/wordbyword.jsp?chapter=96&verse=12"
    }
  ]
};
