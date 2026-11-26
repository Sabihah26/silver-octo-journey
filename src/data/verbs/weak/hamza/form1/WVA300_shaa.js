export default {
  id: "WVA300_shaa",
  type: "verb",

  arabic: {
    past: "شَاءَ"
  },

  transliteration: {
    past: "shāʾa",
    present: "yashāʾu",

    "passive-past": "shīʾa",
    "passive-present": "yushāʾu",

    masdar1: "mashīʾah",
    masdar2: "shayʾ",

    "active-participle": "shāʾin",
    "passive-participle": "mashīʾ",

    subjunctive: "yashāʾa",
    jussive: "yashaʾ",

    "negative-past": "mā shāʾa",
    "negative-present": "lā yashāʾu",
    "negative-future": "lan yashāʾa",

    "future-sa": "sayashāʾu",
    "future-sawfa": "sawfa yashāʾu"
  },

  english: {
    simple: "to wish; to will",
    detailed: "to want or wish for something; to will or choose something"
  },

  englishByType: {
    past: "he wished; he wanted",
    present: "he wishes; he wants",
    imperative: "wish!",

    "passive-past": "it was willed",
    "passive-present": "it is willed",

    "negative-past": "he did not wish",
    "negative-present": "he does not wish",
    "negative-future": "he will not wish",

    "future-sa": "he will wish",
    "future-sawfa": "he will wish",

    "active-participle": "wishing; one who wishes",
    "passive-participle": "willed; desired",

    masdar: "will; wish"
  },

  root: "ش-ي-ء",
  rootFamily: "شَاءَ، يَشَاءُ، مَشِيئَة، شَيْء",

  form: "Form I",
  wazan: "فَعَلَ",

  formFamily: {
    name: "faʿala",
    past: "فَعَلَ",
    present: "يَفْعَلُ"
  },

  verbType: "hollow",

  difficulty: {
    cefr: "A2",
    english: "Intermediate",
    arabicLevel: "beginner",
    usage: "Common in everyday and formal Arabic.",
    learnerNotes: "Often followed by أَنْ plus a verb, or used in the expression إِنْ شَاءَ اللهُ.",
    corpusRank: 100
  },

  frequency: "Very High",

  past: "شَاءَ",
  present: "يَشَاءُ",
  imperative: "شَأْ",

  future_sa: "سَيَشَاءُ",
  future_sawfa: "سَوْفَ يَشَاءُ",

  masdar: [
    "مَشِيئَة",
    "شَيْء"
  ],

  activeParticiple: "شَاءٍ",
  passiveParticiple: "مَشِيء",

  overrides: {
    past: "شَاءَ",
    present: "يَشَاءُ",
    passivePast: "شِيءَ",
    passivePresent: "يُشَاءُ",

    masdar: [
      "مَشِيئَة",
      "شَيْء"
    ],

    form1VowelClass: "a"
  },

  superTopic: "Wishes & Decisions",

  topics: [
    "wishes",
    "decisions"
  ],

  semanticFamily: "willing and wanting verbs",

  categories: [
    "daily"
  ],

  relatedVerbs: {
    root: [
      "شَاءَ",
      "يَشَاءُ",
      "مَشِيئَة"
    ],

    semantic: [
      "أَرَادَ",
      "رَغِبَ",
      "اخْتَارَ"
    ],

    formFamily: [
      "faʿala"
    ]
  },

  relatedNouns: [
    "مَشِيئَة",
    "شَيْء",
    "إِرَادَة"
  ],

  synonyms: [
    "أَرَادَ",
    "رَغِبَ"
  ],

  antonyms: [
    "أَبَى"
  ],

  examples: {
    simple: {
      ar: "شَاءَ الطَّالِبُ أَنْ يَتَعَلَّمَ العَرَبِيَّةَ.",
      en: "The student wanted to learn Arabic.",
      tr: "shāʾa aṭ-ṭālibu ʾan yataʿallama al-ʿarabiyyata",
      audio: ""
    },

    natural: {
      ar: "سَأَفْعَلُ ذَلِكَ إِنْ شَاءَ اللهُ.",
      en: "I will do that, God willing.",
      tr: "saʾafʿalu dhālika ʾin shāʾa allāhu",
      audio: ""
    },

    rich: {
      ar: "شَاءَ المُسَافِرُ أَنْ يَبْقَى فِي المَدِينَةِ أُسْبُوعًا آخَرَ.",
      en: "The traveler wanted to stay in the city for another week.",
      tr: "shāʾa al-musāfiru ʾan yabqā fī al-madīnati ʾusbūʿan ʾākhara",
      audio: ""
    }
  },

  audio: "",
  notes: "Hollow verb with a final hamza. The imperative شَأْ is uncommon; the verb is more often used in past and present forms.",

  quranExamples: [
    {
      reference: "Qur'an 80:12",
      arabic: "فَمَن شَآءَ ذَكَرَهُۥ",
      focusWord: "شَآءَ",
      lemma: "شَاءَ",
      use: "verb",
      morphology: "Form I perfect, third-person masculine singular",
      translation: "So whosoever wills may remember it.",
      source: "Quranic Arabic Corpus",
      sourceUrl: "https://corpus.quran.com/wordbyword.jsp?chapter=80&verse=12"
    }
  ]
};
