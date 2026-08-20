// src/data/verbs/form8/STM/STM_istamaa.js

export default {
  id: 8,
  type: "verb",

  // ===== LEXICAL INFO =====
  arabic: "اِسْتَمَعَ",
  transliteration: "istamaa",
  english: {
    simple: "to listen",
    detailed: "to listen attentively; to pay attention"
  },

  // ===== ROOT & FORM =====
  root: "س-م-ع",
  rootFamily: "سمع، استماع، مسموع",

  form: "Form VIII",
  wazan: "اِسْتَفْعَلَ",
  formFamily: {
    name: "istaf'ala",
    past: "اِسْتَفْعَلَ",
    present: "يَسْتَفْعِلُ"
  },

  verbType: "sound",

  // ===== DIFFICULTY & FREQUENCY =====
  difficulty: {
    cefr: "A2",
    arabic: "سهل"
  },

  frequency: "Common",

  // ===== LEXICAL FORMS =====
  past: "اِسْتَمَعَ",
  present: "يَسْتَمِعُ",
  imperative: "اِسْتَمِعْ",
  future_sa: "سَيَسْتَمِعُ",
  future_sawfa: "سَوْفَ يَسْتَمِعُ",

  masdar: ["اِسْتِمَاع"],

  // ===== OVERRIDES FOR THE CONJUGATION ENGINE =====
  overrides: {
    past: "اِسْتَمَعَ",
    present: "يَسْتَمِعُ",

    passivePast: "اُسْتُمِعَ",
    passivePresent: "يُسْتَمَعُ",

    masdar: ["اِسْتِمَاع"],
  },

  // ===== SEMANTIC INFO =====
  topics: ["communication", "sound", "learning"],

  relatedNouns: ["استماع", "مستمع", "سمع"],
  relatedVerbs: ["سمع", "أنصت", "أصغى"],
  synonyms: ["أصغى"],
  antonyms: ["تجاهل"],

  // ===== EXAMPLES =====
  examples: {
    simple: {
      ar: "اِسْتَمَعَ الطِّفْلُ إِلَى الأُغْنِيَةِ.",
      en: "The child listened to the song.",
      tr: "istamaa at-tiflu ila al-ughniyah"
    },
    natural: {
      ar: "اِسْتَمَعْنَا لِلمُحَاضَرَةِ بِاهْتِمَامٍ.",
      en: "We listened to the lecture with interest.",
      tr: "istama'naa lil-muhaadarati bi-ihtimaam"
    },
    rich: {
      ar: "اِسْتَمَعَ المُحَقِّقُ لِشَهَادَةِ الشَّاهِدِ بِدِقَّةٍ.",
      en: "The investigator listened carefully to the witness's testimony.",
      tr: "istamaa al-muhaqqiqu li-shahaadati ash-shaahidi bi-diqah"
    }
  },

  audio: "",
  notes: ""
};
