// src/data/verbs/form1/AMR/AMR_amara.js

export default {
  id: 2,                     // ⭐ FIXED — must be a number
  type: "verb",

  arabic: "أمر",
  transliteration: "amara",
  english: {
    simple: "to order",
    detailed: "to order; to command; to instruct"
  },

  root: "أ-م-ر",
  rootFamily: "أمر، مأمور، أمارة",

  form: "Form I",            // ⭐ FIXED — must match your UI system
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

  past: "أَمَرَ",
  present: "يَأْمُرُ",
  imperative: "مُرْ",
  future_sa: "سَيَأْمُرُ",
  future_sawfa: "سَوْفَ يَأْمُرُ",

  masdar: ["أَمْر", "مَأْمُورِيَّة"],

  overrides: {
    past: "أَمَرَ",
    present: "يَأْمُرُ",
    passivePast: "أُمِرَ",
    passivePresent: "يُؤْمَرُ",
    masdar: ["أَمْر", "مَأْمُورِيَّة"],
  },

  topics: ["commands", "authority", "speech"],

  relatedNouns: ["أمر", "مأمور", "أوامر"],
  relatedVerbs: ["نهى", "طلب", "أوجب"],
  synonyms: ["طلب", "وجه"],
  antonyms: ["رفض", "امتنع"],

  examples: {
    simple: {
      ar: "أَمَرَ المُعَلِّمُ الطُّلَّابَ بِالصَّمْتِ.",
      en: "The teacher ordered the students to be quiet.",
      tr: "amara al-mu'allimu al-tullāba bi-s-samti"
    },
    natural: {
      ar: "أَمَرَ الوَالِدُ ابْنَهُ بِتَرْتِيبِ الغُرْفَةِ.",
      en: "The father instructed his son to tidy the room.",
      tr: "amara al-wālidu ibnahu bi-tartīb al-ghurfah"
    },
    rich: {
      ar: "أَمَرَ القَائِدُ الجُنُودَ بِالتَّقَدُّمِ بَعْدَ دِرَاسَةِ الوَضْعِ.",
      en: "The commander ordered the soldiers to advance after assessing the situation.",
      tr: "amara al-qā'idu al-junūda bi-t-taqaddumi ba'da dirāsati al-wad'i"
    }
  },

  audio: "",
  notes: ""
};
