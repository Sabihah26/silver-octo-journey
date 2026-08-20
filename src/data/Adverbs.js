const adverbs = [
  // ⭐ FREE ADVERBS (IDs 301–305)
  {
    id: 301,
    type: "adverb",
    arabic: "دَائِمًا",
    transliteration: "daa'iman",
    english: "always",
    category: "frequency",
    example_ar: "أَدْرُسُ دَائِمًا فِي الْمَسَاءِ.",
    example_en: "I always study in the evening.",
    notes: ""
  },
  {
    id: 302,
    type: "adverb",
    arabic: "أَحْيَانًا",
    transliteration: "ahyaanan",
    english: "sometimes",
    category: "frequency",
    example_ar: "أَذْهَبُ إِلَى الْحَدِيقَةِ أَحْيَانًا.",
    example_en: "I sometimes go to the park.",
    notes: ""
  },
  {
    id: 303,
    type: "adverb",
    arabic: "نَادِرًا",
    transliteration: "naadiran",
    english: "rarely",
    category: "frequency",
    example_ar: "أَزُورُ الْمَدِينَةَ نَادِرًا.",
    example_en: "I rarely visit the city.",
    notes: ""
  },
  {
    id: 304,
    type: "adverb",
    arabic: "سَرِيعًا",
    transliteration: "saree'an",
    english: "quickly",
    category: "manner",
    example_ar: "يَجْرِي سَرِيعًا.",
    example_en: "He runs quickly.",
    notes: ""
  },
  {
    id: 305,
    type: "adverb",
    arabic: "بِبُطْء",
    transliteration: "bibut'",
    english: "slowly",
    category: "manner",
    example_ar: "تَتَكَلَّمُ بِبُطْء.",
    example_en: "She speaks slowly.",
    notes: ""
  },

  // ⭐ PREMIUM ADVERBS (IDs 306–320)
  {
    id: 306,
    type: "adverb",
    arabic: "فَوْرًا",
    transliteration: "fawran",
    english: "immediately",
    category: "time",
    example_ar: "اِرْجِعْ فَوْرًا!",
    example_en: "Come back immediately!",
    notes: ""
  },
  {
    id: 307,
    type: "adverb",
    arabic: "قَرِيبًا",
    transliteration: "qareeban",
    english: "soon",
    category: "time",
    example_ar: "سَأَعُودُ قَرِيبًا.",
    example_en: "I will return soon.",
    notes: ""
  },
  {
    id: 308,
    type: "adverb",
    arabic: "بَعِيدًا",
    transliteration: "ba‘eedan",
    english: "far away",
    category: "place",
    example_ar: "الْمَدِينَةُ بَعِيدًا.",
    example_en: "The city is far away.",
    notes: ""
  },
  {
    id: 309,
    type: "adverb",
    arabic: "مَعًا",
    transliteration: "ma‘an",
    english: "together",
    category: "manner",
    example_ar: "نَعْمَلُ مَعًا.",
    example_en: "We work together.",
    notes: ""
  },
  {
    id: 310,
    type: "adverb",
    arabic: "وَحْدَهُ",
    transliteration: "waḥdahu",
    english: "alone",
    category: "manner",
    example_ar: "يَجْلِسُ وَحْدَهُ.",
    example_en: "He sits alone.",
    notes: ""
  },
  {
    id: 311,
    type: "adverb",
    arabic: "حَقًّا",
    transliteration: "ḥaqqan",
    english: "truly",
    category: "manner",
    example_ar: "هَذَا حَقًّا جَمِيل.",
    example_en: "This is truly beautiful.",
    notes: ""
  },
  {
    id: 312,
    type: "adverb",
    arabic: "جِدًّا",
    transliteration: "jiddan",
    english: "very",
    category: "manner",
    example_ar: "هُوَ طَوِيلٌ جِدًّا.",
    example_en: "He is very tall.",
    notes: ""
  },
  {
    id: 313,
    type: "adverb",
    arabic: "قَبْلًا",
    transliteration: "qabl-an",
    english: "before",
    category: "time",
    example_ar: "لَمْ أَرَهُ قَبْلًا.",
    example_en: "I haven't seen him before.",
    notes: ""
  },
  {
    id: 314,
    type: "adverb",
    arabic: "بَعْدًا",
    transliteration: "ba‘dan",
    english: "afterward",
    category: "time",
    example_ar: "سَنَتَحَدَّثُ بَعْدًا.",
    example_en: "We will talk afterward.",
    notes: ""
  },
  {
    id: 315,
    type: "adverb",
    arabic: "هُنَاكَ",
    transliteration: "hunaak",
    english: "there",
    category: "place",
    example_ar: "الْكِتَابُ هُنَاكَ.",
    example_en: "The book is there.",
    notes: ""
  },
  {
    id: 316,
    type: "adverb",
    arabic: "هُنَا",
    transliteration: "hunaa",
    english: "here",
    category: "place",
    example_ar: "أَنَا هُنَا.",
    example_en: "I am here.",
    notes: ""
  },
  {
    id: 317,
    type: "adverb",
    arabic: "فِي الْغَالِب",
    transliteration: "fi al-ghaalib",
    english: "mostly",
    category: "frequency",
    example_ar: "فِي الْغَالِب نَتَنَاوَلُ الْعَشَاءَ مُبَكِّرًا.",
    example_en: "We mostly eat dinner early.",
    notes: ""
  },
  {
    id: 318,
    type: "adverb",
    arabic: "حَالًا",
    transliteration: "ḥaalan",
    english: "instantly",
    category: "time",
    example_ar: "سَأُجِيبُ حَالًا.",
    example_en: "I will answer instantly.",
    notes: ""
  },
  {
    id: 319,
    type: "adverb",
    arabic: "مُجَدَّدًا",
    transliteration: "mujaddadan",
    english: "again",
    category: "frequency",
    example_ar: "جَرِّبْ مُجَدَّدًا.",
    example_en: "Try again.",
    notes: ""
  },
  {
    id: 320,
    type: "adverb",
    arabic: "بِالضَّبْط",
    transliteration: "bi-dh-dhabt",
    english: "exactly",
    category: "manner",
    example_ar: "هَذَا هُوَ الْجَوَابُ بِالضَّبْط.",
    example_en: "This is exactly the answer.",
    notes: ""
  }
];

export default adverbs;
