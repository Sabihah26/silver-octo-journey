const nouns = [
{
 id: "N1",
  type: "noun",
  arabic: "كِتَاب",
  transliteration: "kitaab",
  english: "book",
  root: "ك-ت-ب",
  gender: "m",
  singular: "كِتَاب",
  dual: "كِتَابَانِ",
  plural: "كُتُب",
  category: "school",
  topics: ["stationery", "school"],
  notes: "Common noun used in basic vocabulary.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَقْرَأُ كِتَابًا جَدِيدًا",
        en: "He is reading a new book",
        tr: "huwa yaqra'u kitaaban jadeedan"
      }
    ],
    medium: [
      {
        ar: "هِيَ تَضَعُ الكِتَابَ عَلَى المَكْتَبِ",
        en: "She is placing the book on the desk",
        tr: "hiya tada'u al-kitaab 'ala al-maktab"
      },
      {
        ar: "هُمْ يَأْخُذُونَ الكِتَابَ مَعَهُمْ إِلَى المَدْرَسَةِ",
        en: "They are taking the book with them to school",
        tr: "hum ya'khudhoon al-kitaab ma'ahum ila al-madrasa"
      }
    ],
    advanced: [
      {
        ar: "هُوَ بَحَثَ عَنْ كِتَابٍ مُهِمٍّ لِمَشْرُوعِهِ الجَدِيدِ",
        en: "He searched for an important book for his new project",
        tr: "huwa bahatha 'an kitaabin muhimmin limashroo'ihi al-jadeed"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ كُتُبًا كَثِيرَةً لِلدِّرَاسَةِ",
        en: "They will buy many books for studying",
        tr: "hum sayashtaroon kutuban katheeratan lildiraasa"
      }
    ]
  }
},

 {
  id: "N2",
  type: "noun",
  arabic: "مَدْرَسَة",
  transliteration: "madrasa",
  english: "school",
  root: "د-ر-س",
  gender: "f",
  singular: "مَدْرَسَة",
  dual: "مَدْرَسَتَانِ",
  plural: "مَدَارِس",
  category: "school",
  topics: ["places", "school"],
  notes: "A place of learning; common in everyday vocabulary.",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَذْهَبُ إِلَى المَدْرَسَةِ",
        en: "She goes to the school",
        tr: "hiya tadhhab ila al-madrasa"
      }
    ],
    medium: [
      {
        ar: "هُمْ يَدْرُسُونَ فِي المَدَارِسِ كُلَّ يَوْمٍ",
        en: "They study in schools every day",
        tr: "hum yadrusoon fil-madaris kulla yawm"
      },
      {
        ar: "هُوَ يَعْمَلُ فِي مَدْرَسَةٍ كَمُعَلِّمٍ",
        en: "He works in a school as a teacher",
        tr: "huwa ya‘mal fi madrasa kamua‘llim"
      }
    ],
    advanced: [
      {
        ar: "هُمْ سَيَبْنُونَ مَدَارِسَ جَدِيدَةً فِي المِنْطَقَةِ",
        en: "They will build new schools in the area",
        tr: "hum sayabnoon madaris jadeeda fil-mintaqa"
      },
      {
        ar: "هِيَ تَدْرُسُ فِي مَدْرَسَةٍ مُتَخَصِّصَةٍ",
        en: "She studies in a specialised school",
        tr: "hiya tadrus fi madrasa mutakhasisa"
      }
    ]
  }
},

 {
  id: "N3",
  type: "noun",
  arabic: "مَاء",
  transliteration: "maa'",
  english: "water",
  root: "م-و-ه",
  gender: "m",
  singular: "مَاء",
  dual: "",
  plural: "مِيَاه",
  category: "food",
  topics: ["drinks"],
  notes: "Essential for life; used in drinking, cooking, and cleaning.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَشْرَبُ المَاءَ الآن",
        en: "He is drinking water now",
        tr: "huwa yashrab al-maa' al-aan"
      }
    ],
    medium: [
      {
        ar: "هِيَ وَضَعَتِ المَاءَ عَلَى المَائِدَةِ",
        en: "She placed the water on the table",
        tr: "hiya wada'at al-maa' 'ala al-maa'ida"
      },
      {
        ar: "هُمْ يَأْخُذُونَ زُجَاجَةَ مَاءٍ مَعَهُمْ",
        en: "They are taking a bottle of water with them",
        tr: "hum ya'khudhoon zujaajata maa'in ma'ahum"
      }
    ],
    advanced: [
      {
        ar: "هُوَ بَحَثَ عَنْ مَاءٍ بَارِدٍ فِي الحَقِيبَةِ",
        en: "He looked for cold water in the bag",
        tr: "huwa bahatha 'an maa'in baaridin fil-haqeeba"
      },
      {
        ar: "هُمْ سَيَسْتَخْدِمُونَ المَاءَ لِطَبْخِ الطَّعَامِ",
        en: "They will use water to cook the food",
        tr: "hum sayastakhdimoon al-maa' litabkh al-ta'aam"
      }
    ]
  }
},

 {
  id: "N4",
  type: "noun",
  arabic: "قَلَم",
  transliteration: "qalam",
  english: "pen",
  root: "ق-ل-م",
  gender: "m",
  singular: "قَلَم",
  dual: "قَلَمَانِ",
  plural: "أَقْلَام",
  category: "school",
  topics: ["stationery", "school"],
  notes: "A writing tool used for school, work, and daily tasks.",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَسْتَخْدِمُ القَلَمَ فِي الكِتَابَةِ",
        en: "She is using the pen for writing",
        tr: "hiya tastakhdim al-qalam fil-kitaaba"
      }
    ],
    medium: [
      {
        ar: "هُوَ وَضَعَ القَلَمَ عَلَى الدَّفْتَرِ",
        en: "He placed the pen on the notebook",
        tr: "huwa wada'a al-qalam 'ala al-daftar"
      },
      {
        ar: "هُمْ يَأْخُذُونَ أَقْلَامَهُمْ إِلَى المَدْرَسَةِ",
        en: "They are taking their pens to school",
        tr: "hum ya'khudhoon aqlamahum ila al-madrasa"
      }
    ],
    advanced: [
      {
        ar: "هُوَ اشْتَرَى قَلَمًا جَيِّدًا لِلكِتَابَةِ الدَّقِيقَةِ",
        en: "He bought a good pen for precise writing",
        tr: "huwa ishtara qalaman jayyidan lil-kitaaba al-daqeeqa"
      },
      {
        ar: "هُمْ سَيَسْتَخْدِمُونَ أَقْلَامًا مُخْتَلِفَةً فِي الرَّسْمِ",
        en: "They will use different pens for drawing",
        tr: "hum sayastakhdimoon aqlaman mukhtalifatan fir-rasm"
      }
    ]
  }
},

 {
  id: "N5",
  type: "noun",
  arabic: "طَعَام",
  transliteration: "ta'aam",
  english: "food",
  root: "ط-ع-م",
  gender: "m",
  singular: "طَعَام",
  dual: "",
  plural: "أَطْعِمَة",
  category: "food",
  topics: ["meals"],
  notes: "Anything eaten for nourishment; essential daily vocabulary.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَأْكُلُ الطَّعَامَ الآن",
        en: "He is eating the food now",
        tr: "huwa ya'kul al-ta'aam al-aan"
      }
    ],
    medium: [
      {
        ar: "هِيَ طَبَخَتِ الطَّعَامَ فِي المَطْبَخِ",
        en: "She cooked the food in the kitchen",
        tr: "hiya tabakhat al-ta'aam fil-matbakh"
      },
      {
        ar: "هُمْ يُقَدِّمُونَ الطَّعَامَ لِلضُّيُوفِ",
        en: "They are serving the food to the guests",
        tr: "hum yuqaddimoon al-ta'aam lil-duyoof"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَعَدَّ طَعَامًا صِحِّيًّا لِلغَدَاءِ",
        en: "He prepared healthy food for lunch",
        tr: "huwa a'adda ta'aaman sihiyyan lil-ghadaa'"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ مَوَادًّا لِطَبْخِ الطَّعَامِ",
        en: "They will buy ingredients to cook the food",
        tr: "hum sayashtaroon mawaddan litabkh al-ta'aam"
      }
    ]
  }
},

  {
  id: "N6",
  type: "noun",
  arabic: "سَيَّارَة",
  transliteration: "sayyaara",
  english: "car",
  root: "س-ي-ر",
  gender: "f",
  singular: "سَيَّارَة",
  dual: "سَيَّارَتَانِ",
  plural: "سَيَّارَات",
  category: "places",
  topics: ["transport", "travel"],
  notes: "A common mode of transport used for travel and daily commuting.",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَقُودُ السَّيَّارَةَ فِي الشَّارِعِ",
        en: "She is driving the car on the street",
        tr: "hiya taqood al-sayyaara fish-shaari'"
      }
    ],
    medium: [
      {
        ar: "هُوَ نَظَّفَ السَّيَّارَةَ قَبْلَ الرِّحْلَةِ",
        en: "He cleaned the car before the trip",
        tr: "huwa nazzafa al-sayyaara qabl al-rihla"
      },
      {
        ar: "هُمْ يَسْتَخْدِمُونَ السَّيَّارَةَ لِلسَّفَرِ",
        en: "They are using the car for travel",
        tr: "hum yastakhdimoon al-sayyaara lil-safar"
      }
    ],
    advanced: [
      {
        ar: "هِيَ أَصْلَحَتِ السَّيَّارَةَ لِأَنَّ فِيهَا عُطَلًا",
        en: "She repaired the car because it had a malfunction",
        tr: "hiya aslaha al-sayyaara li'anna feeha 'utalan"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ سَيَّارَةً جَدِيدَةً لِعَائِلَتِهِمْ",
        en: "They will buy a new car for their family",
        tr: "hum sayashtaroon sayyaara jadeeda li'aa'ilatihim"
      }
    ]
  }
},

 {
id: "N7",
  type: "noun",
  arabic: "مَسْجِد",
  transliteration: "masjid",
  english: "mosque",
  root: "س-ج-د",
  gender: "m",
  singular: "مَسْجِد",
  dual: "مَسْجِدَانِ",
  plural: "مَسَاجِد",
  category: "places",
  topics: ["buildings", "public-places"],
  notes: "A place of worship for Muslims.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَذْهَبُ إِلَى المَسْجِدِ كُلَّ يَوْمٍ",
        en: "He goes to the mosque every day",
        tr: "huwa yadhhab ila al-masjid kulla yawm"
      }
    ],
    medium: [
      {
        ar: "هِيَ دَخَلَتِ المَسْجِدَ لِأَدَاءِ الصَّلَاةِ",
        en: "She entered the mosque to perform prayer",
        tr: "hiya dakhalat al-masjid li'adaa' al-salaah"
      },
      {
        ar: "هُمْ يَجْلِسُونَ فِي المَسْجِدِ بَعْدَ الدَّرْسِ",
        en: "They are sitting in the mosque after the lesson",
        tr: "hum yajlisoon fil-masjid ba'd al-dars"
      }
    ],
    advanced: [
      {
        ar: "هُوَ سَاعَدَ فِي تَنْظِيفِ المَسْجِدِ قَبْلَ الجُمُعَةِ",
        en: "He helped clean the mosque before Friday",
        tr: "huwa saa'ada fi tanzif al-masjid qabl al-jum'a"
      },
      {
        ar: "هُمْ سَيُنَظِّمُونَ مُحَاضَرَةً دِينِيَّةً فِي المَسْجِدِ",
        en: "They will organize a religious lecture in the mosque",
        tr: "hum sayunazzimoon muhaadara deeniya fil-masjid"
      }
    ]
  }
},
{
  id: "N8",
  type: "noun",
  arabic: "طَالِب",
  transliteration: "taalib",
  english: "student",
  root: "ط-ل-ب",
  gender: "m",
  singular: "طَالِب",
  dual: "طَالِبَانِ",
  plural: "طُلَّاب",
  category: "people",
  topics: ["school", "people"],
  notes: "A learner or pupil; used in school contexts.",

  examples: {
    beginner: [
      {
        ar: "هُوَ طَالِبٌ فِي المَدْرَسَةِ",
        en: "He is a student in the school",
        tr: "huwa taalibun fil-madrasa"
      }
    ],
    medium: [
      {
        ar: "هِيَ تُسَاعِدُ طَالِبًا فِي الفَصْلِ",
        en: "She is helping a student in the classroom",
        tr: "hiya tusa‘id taaliban fil-fasl"
      },
      {
        ar: "هُمْ يَتَحَدَّثُونَ مَعَ الطُّلَّابِ بَعْدَ الدَّرْسِ",
        en: "They are talking with the students after the lesson",
        tr: "hum yatahaddathoon ma‘a al-tullaab ba‘d al-dars"
      }
    ],
    advanced: [
      {
        ar: "هُوَ يُشَارِكُ كَطَالِبٍ نَشِيطٍ فِي المَشْرُوعِ الجَمَاعِيِّ",
        en: "He participates as an active student in the group project",
        tr: "huwa yushaarik kataalib nasheet fil-mashroo‘ al-jama‘i"
      },
      {
        ar: "هُمْ يُشَجِّعُونَ كُلَّ طَالِبٍ عَلَى التَّعَلُّمِ وَالمُحَاوَلَةِ",
        en: "They encourage every student to learn and keep trying",
        tr: "hum yushajjioon kulla taalib ‘ala al-ta‘allum wal-muhaawala"
      }
    ]
  }
},

{
  id: "N9",
  type: "noun",
  arabic: "مُعَلِّم",
  transliteration: "mu‘allim",
  english: "teacher",
  root: "ع-ل-م",
  gender: "m",
  singular: "مُعَلِّم",
  dual: "مُعَلِّمَانِ",
  plural: "مُعَلِّمُونَ",
  category: "people",
  topics: ["school", "people"],
  notes: "A person who teaches; central role in education.",

  examples: {
    beginner: [
      {
        ar: "المُعَلِّمُ فِي الفَصْلِ الآن",
        en: "The teacher is in the classroom now",
        tr: "al-mu‘allim fil-fasl al-aan"
      }
    ],
    medium: [
      {
        ar: "هُوَ يُسَاعِدُ الطُّلَّابَ فِي الدَّرْسِ",
        en: "He helps the students in the lesson",
        tr: "huwa yusa‘id al-tullaab fid-dars"
      },
      {
        ar: "هُمْ يَسْأَلُونَ المُعَلِّمَ أَسْئِلَةً صَعْبَةً",
        en: "They ask the teacher difficult questions",
        tr: "hum yas’aloon al-mu‘allim as’ilatan sa‘ba"
      }
    ],
    advanced: [
      {
        ar: "هُوَ شَرَحَ الدَّرْسَ بِطَرِيقَةٍ وَاضِحَةٍ",
        en: "He explained the lesson clearly",
        tr: "huwa sharaha ad-dars bitareeqa waadihah"
      },
      {
        ar: "هُمْ سَيُقَيِّمُونَ المُعَلِّمَ فِي نِهَايَةِ الفَصْلِ",
        en: "They will evaluate the teacher at the end of the term",
        tr: "hum sayuqayyimoon al-mu‘allim fi nihaayat al-fasl"
      }
    ]
  }
},

{
  id: "N10",
  type: "noun",
  arabic: "مَكْتَب",
  transliteration: "maktab",
  english: "desk",
  root: "ك-ت-ب",
  gender: "m",
  singular: "مَكْتَب",
  dual: "مَكْتَبَانِ",
  plural: "مَكَاتِب",
  category: "school",
  topics: ["furniture", "school"],
  notes: "A piece of furniture used for writing, studying, or working.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَجْلِسُ عِنْدَ المَكْتَبِ",
        en: "He is sitting at the desk",
        tr: "huwa yajlis ‘inda al-maktab"
      }
    ],
    medium: [
      {
        ar: "هِيَ تَضَعُ الكُتُبَ عَلَى المَكْتَبِ",
        en: "She puts the books on the desk",
        tr: "hiya tada‘u al-kutub ‘ala al-maktab"
      },
      {
        ar: "هُمْ يُرَتِّبُونَ المَكَاتِبَ قَبْلَ الدَّرْسِ",
        en: "They arrange the desks before the lesson",
        tr: "hum yurattiboon al-makaatib qabl ad-dars"
      }
    ],
    advanced: [
      {
        ar: "هُوَ نَظَّفَ المَكْتَبَ لِأَنَّهُ مُتَّسِخٌ",
        en: "He cleaned the desk because it was dirty",
        tr: "huwa nazzafa al-maktab li’annahu muttasiqh"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ مَكَاتِبَ جَدِيدَةً لِلفَصْلِ",
        en: "They will buy new desks for the classroom",
        tr: "hum sayashtaroon makaatib jadeeda lil-fasl"
      }
    ]
  }
},

{
  id: "N11",
  type: "noun",
  arabic: "كُرْسِيّ",
  transliteration: "kursiyy",
  english: "chair",
  root: "ك-ر-س",
  gender: "m",
  singular: "كُرْسِيّ",
  dual: "كُرْسِيَّانِ",
  plural: "كَرَاسِي",
  category: "household",
  topics: ["furniture", "school"],
  notes: "A piece of furniture used for sitting.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَجْلِسُ عَلَى الكُرْسِيِّ",
        en: "He is sitting on the chair",
        tr: "huwa yajlis ‘ala al-kursiyy"
      }
    ],
    medium: [
      {
        ar: "هِيَ نَقَلَتِ الكُرْسِيَّ إِلَى الزَّاوِيَةِ",
        en: "She moved the chair to the corner",
        tr: "hiya naqalat al-kursiyy ila az-zaawiya"
      },
      {
        ar: "هُمْ يَضَعُونَ الكَرَاسِيَّ فِي صَفٍّ مُنَظَّمٍ",
        en: "They place the chairs in an organized row",
        tr: "hum yada‘oon al-karaasi fi saff munazzam"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَصْلَحَ الكُرْسِيَّ لِأَنَّهُ مَكْسُورٌ",
        en: "He repaired the chair because it was broken",
        tr: "huwa aslaha al-kursiyy li’annahu maksuur"
      },
      {
        ar: "هُمْ سَيَجْلِسُونَ عَلَى كَرَاسِيٍّ جَدِيدَةٍ فِي القَاعَةِ",
        en: "They will sit on new chairs in the hall",
        tr: "hum sayajlisoon ‘ala karaasi jadeeda fil-qa‘a"
      }
    ]
  }
},

{
  id: "N12",
  type: "noun",
  arabic: "حَقِيبَة",
  transliteration: "haqeeba",
  english: "bag",
  root: "ح-ق-ب",
  gender: "f",
  singular: "حَقِيبَة",
  dual: "حَقِيبَتَانِ",
  plural: "حَقَائِب",
  category: "school",
  topics: ["object"],
  notes: "A container used for carrying items, especially in school.",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَحْمِلُ الحَقِيبَةَ",
        en: "She is carrying the bag",
        tr: "hiya tahmil al-haqeeba"
      }
    ],
    medium: [
      {
        ar: "هُوَ وَضَعَ الحَقِيبَةَ عَلَى المَكْتَبِ",
        en: "He placed the bag on the desk",
        tr: "huwa wada‘a al-haqeeba ‘ala al-maktab"
      },
      {
        ar: "هُمْ يَأْخُذُونَ حَقَائِبَهُمْ إِلَى المَدْرَسَةِ",
        en: "They take their bags to school",
        tr: "hum ya’khudhoon haqa’ibahum ila al-madrasa"
      }
    ],
    advanced: [
      {
        ar: "هُوَ بَحَثَ عَنْ حَقِيبَتِهِ فِي الغُرْفَةِ",
        en: "He searched for his bag in the room",
        tr: "huwa bahatha ‘an haqeebatihi fil-ghurfa"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ حَقَائِبَ جَدِيدَةً لِلعَامِ الدِّرَاسِيِّ",
        en: "They will buy new bags for the school year",
        tr: "hum sayashtaroon haqa’ib jadeeda lil-‘aam ad-diraasi"
      }
    ]
  }
},

{
  id: "N13",
  type: "noun",
  arabic: "مِفْتَاح",
  transliteration: "miftaah",
  english: "key",
  root: "ف-ت-ح",
  gender: "m",
  singular: "مِفْتَاح",
  dual: "مِفْتَاحَانِ",
  plural: "مَفَاتِيح",
  category: "household",
  topics: ["furniture"],
  notes: "A tool used to open or lock doors and containers.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَحْمِلُ المِفْتَاحَ",
        en: "He is carrying the key",
        tr: "huwa yahmil al-miftaah"
      }
    ],
    medium: [
      {
        ar: "هِيَ وَجَدَتِ المِفْتَاحَ تَحْتَ الكُرْسِيِّ",
        en: "She found the key under the chair",
        tr: "hiya wajadat al-miftaah taht al-kursiyy"
      },
      {
        ar: "هُمْ يَسْتَخْدِمُونَ المَفَاتِيحَ لِفَتْحِ البَابِ",
        en: "They use the keys to open the door",
        tr: "hum yastakhdimoon al-mafaateeh lifath al-baab"
      }
    ],
    advanced: [
      {
        ar: "هُوَ فَقَدَ المِفْتَاحَ أَمْسِ",
        en: "He lost the key yesterday",
        tr: "huwa faqada al-miftaah ams"
      },
      {
        ar: "هُمْ سَيَصْنَعُونَ مَفَاتِيحَ جَدِيدَةً لِلمَكْتَبِ",
        en: "They will make new keys for the office",
        tr: "hum sayasna‘oon mafaateeh jadeeda lil-maktab"
      }
    ]
  }
},

  {
  id: "N14",
  type: "noun",
  arabic: "بَاب",
  transliteration: "baab",
  english: "door",
  root: "ب-و-ب",
  gender: "m",
  singular: "بَاب",
  dual: "بَابَانِ",
  plural: "أَبْوَاب",
  category: "household",
  topics: ["furniture"],
  notes: "A movable barrier used to open or close an entrance.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَفْتَحُ البَابَ الآن",
        en: "He is opening the door now",
        tr: "huwa yaftah al-baab al-aan"
      }
    ],
    medium: [
      {
        ar: "هِيَ أَغْلَقَتِ البَابَ قَبْلَ النَّوْمِ",
        en: "She closed the door before sleeping",
        tr: "hiya aghlaqat al-baab qabl an-nawm"
      },
      {
        ar: "هُمْ يَدْخُلُونَ مِنَ البَابِ الرَّئِيسِيِّ",
        en: "They enter through the main door",
        tr: "hum yadkhuloon min al-baab ar-ra’eesee"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَصْلَحَ البَابَ لِأَنَّهُ لَا يُغْلَقُ جَيِّدًا",
        en: "He repaired the door because it didn’t close well",
        tr: "huwa aslaha al-baab li’annahu laa yughlq jayyidan"
      },
      {
        ar: "هُمْ سَيَبْنُونَ أَبْوَابًا جَدِيدَةً لِلمَنْزِلِ",
        en: "They will build new doors for the house",
        tr: "hum sayabnoon abwaab jadeeda lil-manzil"
      }
    ]
  }
},

{
  id: "N15",
  type: "noun",
  arabic: "شُبَّاك",
  transliteration: "shubbak",
  english: "window",
  root: "ش-ب-ك",
  gender: "m",
  singular: "شُبَّاك",
  dual: "شُبَّاكَانِ",
  plural: "شَبَابِيك",
  category: "household",
  topics: ["furniture"],
  notes: "An opening in a wall that lets in air and light.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَفْتَحُ الشُّبَّاكَ",
        en: "He is opening the window",
        tr: "huwa yaftah ash-shubbak"
      }
    ],
    medium: [
      {
        ar: "هِيَ تُغْلِقُ الشُّبَّاكَ لِأَنَّ الجَوَّ بَارِدٌ",
        en: "She closes the window because the weather is cold",
        tr: "hiya tughlq ash-shubbak li’anna al-jaw baarid"
      },
      {
        ar: "هُمْ يَنْظُرُونَ مِنَ الشَّبَابِيكِ",
        en: "They look through the windows",
        tr: "hum yanzuroon min ash-shababeek"
      }
    ],
    advanced: [
      {
        ar: "هُوَ نَظَّفَ الشُّبَّاكَ قَبْلَ الصَّبَاحِ",
        en: "He cleaned the window before morning",
        tr: "huwa nazzafa ash-shubbak qabl as-sabaah"
      },
      {
        ar: "هُمْ سَيُرَكِّبُونَ شَبَابِيكَ جَدِيدَةً فِي البَيْتِ",
        en: "They will install new windows in the house",
        tr: "hum sayurakkiboon shababeek jadeeda fil-bayt"
      }
    ]
  }
},

{
  id: "N16",
  type: "noun",
  arabic: "سَاعَة",
  transliteration: "saa‘a",
  english: "clock",
  root: "س-و-ع",
  gender: "f",
  singular: "سَاعَة",
  dual: "سَاعَتَانِ",
  plural: "سَاعَات",
  category: "household",
  topics: ["object"],
  notes: "A device used to measure and show time.",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَنْظُرُ إِلَى السَّاعَةِ",
        en: "She is looking at the clock",
        tr: "hiya tanzur ila as-saa‘a"
      }
    ],
    medium: [
      {
        ar: "هُوَ ضَبَطَ السَّاعَةَ قَبْلَ النَّوْمِ",
        en: "He set the clock before sleeping",
        tr: "huwa dabata as-saa‘a qabl an-nawm"
      },
      {
        ar: "هُمْ يَسْمَعُونَ صَوْتَ السَّاعَةِ كُلَّ دَقِيقَةٍ",
        en: "They hear the clock every minute",
        tr: "hum yasma‘oon sawt as-saa‘a kulla daqeeqa"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَصْلَحَ السَّاعَةَ لِأَنَّهَا تَتَوَقَّفُ أَحْيَانًا",
        en: "He repaired the clock because it stops sometimes",
        tr: "huwa aslaha as-saa‘a li’annahā tatawaqqaf ahyānan"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ سَاعَاتٍ جَدِيدَةً لِلغُرَفِ",
        en: "They will buy new clocks for the rooms",
        tr: "hum sayashtaroon saa‘aat jadeeda lil-ghuraf"
      }
    ]
  }
},

{
  id: "N17",
  type: "noun",
  arabic: "هَاتِف",
  transliteration: "haatif",
  english: "phone",
  root: "ه-ت-ف",
  gender: "m",
  singular: "هَاتِف",
  dual: "هَاتِفَانِ",
  plural: "هَوَاتِف",
  category: "work",
  topics: ["technology"],
  notes: "A device used for calling, messaging, and communication.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَسْتَخْدِمُ الهَاتِفَ الآن",
        en: "He is using the phone now",
        tr: "huwa yastakhdim al-haatif al-aan"
      }
    ],
    medium: [
      {
        ar: "هِيَ تَتَصِلُ بِصَدِيقَتِهَا بِالهَاتِفِ",
        en: "She calls her friend on the phone",
        tr: "hiya tatasil bisadeeqatiha bil-haatif"
      },
      {
        ar: "هُمْ يَتَحَدَّثُونَ بِالهَوَاتِفِ بَعْدَ العَمَلِ",
        en: "They talk on their phones after work",
        tr: "hum yatahaddathoon bil-hawaatif ba‘d al-‘amal"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَصْلَحَ الهَاتِفَ لِأَنَّ الشَّاشَةَ مَكْسُورَةٌ",
        en: "He repaired the phone because the screen was broken",
        tr: "huwa aslaha al-haatif li’anna ash-shaasha maksura"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ هَوَاتِفَ جَدِيدَةً فِي العُطْلَةِ",
        en: "They will buy new phones during the holiday",
        tr: "hum sayashtaroon hawaatif jadeeda fil-‘utla"
      }
    ]
  }
},

{
  id: "N18",
  type: "noun",
  arabic: "حَاسُوب",
  transliteration: "hasoob",
  english: "computer",
  root: "ح-س-ب",
  gender: "m",
  singular: "حَاسُوب",
  dual: "حَاسُوبَانِ",
  plural: "حَوَاسِيب",
  category: "work",
  topics: ["technology"],
  notes: "An electronic device used for computing, writing, and work.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَسْتَعْمِلُ الحَاسُوبَ",
        en: "He is using the computer",
        tr: "huwa yasta‘mil al-hasoob"
      }
    ],
    medium: [
      {
        ar: "هِيَ تَكْتُبُ عَلَى الحَاسُوبِ كُلَّ يَوْمٍ",
        en: "She writes on the computer every day",
        tr: "hiya taktub ‘ala al-hasoob kulla yawm"
      },
      {
        ar: "هُمْ يُشَغِّلُونَ الحَوَاسِيبَ فِي المَكْتَبِ",
        en: "They turn on the computers in the office",
        tr: "hum yushaghiloon al-hawaseeb fil-maktab"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَصْلَحَ الحَاسُوبَ لِأَنَّهُ بَطِيءٌ",
        en: "He repaired the computer because it was slow",
        tr: "huwa aslaha al-hasoob li’annahu batee’"
      },
      {
        ar: "هُمْ سَيُحَدِّثُونَ الحَوَاسِيبَ لِلعَمَلِ الجَدِيدِ",
        en: "They will upgrade the computers for the new work",
        tr: "hum sayuhaddithoon al-hawaseeb lil-‘amal al-jadeed"
      }
    ]
  }
},

{
  id: "N19",
  type: "noun",
  arabic: "كُوب",
  transliteration: "koob",
  english: "cup",
  root: "ك-و-ب",
  gender: "m",
  singular: "كُوب",
  dual: "كُوبَانِ",
  plural: "أَكْوَاب",
  category: "household",
  topics: ["kitchen"],
  notes: "A container used for drinking liquids.",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَشْرَبُ مِنَ الكُوبِ",
        en: "He is drinking from the cup",
        tr: "huwa yashrab min al-koob"
      }
    ],
    medium: [
      {
        ar: "هِيَ تَغْسِلُ الأَكْوَابَ بَعْدَ الغَدَاءِ",
        en: "She washes the cups after lunch",
        tr: "hiya taghsil al-akwaab ba‘d al-ghadaa’"
      },
      {
        ar: "هُمْ يَضَعُونَ الأَكْوَابَ عَلَى المَائِدَةِ",
        en: "They place the cups on the table",
        tr: "hum yada‘oon al-akwaab ‘ala al-maa’ida"
      }
    ],
    advanced: [
      {
        ar: "هُوَ كَسَرَ الكُوبَ بِالْخَطَأِ",
        en: "He accidentally broke the cup",
        tr: "huwa kasara al-koob bil-khata’"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ أَكْوَابًا جَدِيدَةً لِلمَطْبَخِ",
        en: "They will buy new cups for the kitchen",
        tr: "hum sayashtaroon akwaab jadeeda lil-matbakh"
      }
    ]
  }
},

  {
  id: "N20",
  type: "noun",
  arabic: "صَحْن",
  transliteration: "sahn",
  english: "plate",
  root: "",
  gender: "m",
  singular: "صَحْن",
  dual: "صَحْنَانِ",
  plural: "صُحُون",
  category: "household",
  topics: ["kitchen"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَضَعُ الطَّعَامَ فِي الصَّحْنِ",
        en: "She puts the food on the plate",
        tr: "hiya tada‘u at-ta‘aam fis-sahn"
      }
    ],
    medium: [
      {
        ar: "هُوَ غَسَلَ الصُّحُونَ بَعْدَ العَشَاءِ",
        en: "He washed the plates after dinner",
        tr: "huwa ghasala as-suhoon ba‘d al-‘ashaa’"
      },
      {
        ar: "هُمْ يُرَتِّبُونَ الصُّحُونَ عَلَى الرَّفِّ",
        en: "They arrange the plates on the shelf",
        tr: "hum yurattiboon as-suhoon ‘ala ar-raf"
      }
    ],
    advanced: [
      {
        ar: "هُوَ كَسَرَ صَحْنًا قَدِيمًا",
        en: "He broke an old plate",
        tr: "huwa kasara sahnan qadeeman"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ صُحُونًا جَدِيدَةً لِلمَائِدَةِ",
        en: "They will buy new plates for the dining table",
        tr: "hum sayashtaroon suhoon jadeeda lil-maa’ida"
      }
    ]
  }
},

{
  id: "N21",
  type: "noun",
  arabic: "مِلْعَقَة",
  transliteration: "mil‘aqa",
  english: "spoon",
  root: "",
  gender: "f",
  singular: "مِلْعَقَة",
  dual: "مِلْعَقَتَانِ",
  plural: "مَلَاعِق",
  category: "household",
  topics: ["kitchen"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَأْكُلُ بِالمِلْعَقَةِ",
        en: "He is eating with the spoon",
        tr: "huwa ya’kul bil-mil‘aqa"
      }
    ],
    medium: [
      {
        ar: "هِيَ تَغْسِلُ المَلَاعِقَ بَعْدَ الطَّبْخِ",
        en: "She washes the spoons after cooking",
        tr: "hiya taghsil al-malaa‘iq ba‘d at-tabkh"
      },
      {
        ar: "هُمْ يَضَعُونَ المَلَاعِقَ عَلَى المَائِدَةِ",
        en: "They place the spoons on the table",
        tr: "hum yada‘oon al-malaa‘iq ‘ala al-maa’ida"
      }
    ],
    advanced: [
      {
        ar: "هُوَ فَقَدَ مِلْعَقَتَهُ فِي المَطْبَخِ",
        en: "He lost his spoon in the kitchen",
        tr: "huwa faqada mil‘aqatahu fil-matbakh"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ مَلَاعِقَ جَدِيدَةً لِلعَائِلَةِ",
        en: "They will buy new spoons for the family",
        tr: "hum sayashtaroon malaa‘iq jadeeda lil-‘aaila"
      }
    ]
  }
},

{
  id: "N22",
  type: "noun",
  arabic: "سِكِّين",
  transliteration: "sikkeen",
  english: "knife",
  root: "",
  gender: "m",
  singular: "سِكِّين",
  dual: "سِكِّينَانِ",
  plural: "سَكَاكِين",
  category: "household",
  topics: ["kitchen"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَقْطَعُ الخُضَارَ بِالسِّكِّينِ",
        en: "He is cutting vegetables with the knife",
        tr: "huwa yaqta‘ al-khudhaar bis-sikkeen"
      }
    ],
    medium: [
      {
        ar: "هِيَ تَضَعُ السَّكَاكِينِ فِي الدُّرْجِ",
        en: "She puts the knives in the drawer",
        tr: "hiya tada‘u as-sakakeen fid-durj"
      },
      {
        ar: "هُمْ يَسْتَخْدِمُونَ السَّكِّينَ فِي الطَّبْخِ",
        en: "They use the knife for cooking",
        tr: "hum yastakhdimoon as-sikkeen fit-tabkh"
      }
    ],
    advanced: [
      {
        ar: "هُوَ شَحَذَ السِّكِّينَ لِأَنَّهُ بَاهِتٌ",
        en: "He sharpened the knife because it was dull",
        tr: "huwa shahadha as-sikkeen li’annahu baahit"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ سَكَاكِينِ جَدِيدَةً لِلمَطْبَخِ",
        en: "They will buy new knives for the kitchen",
        tr: "hum sayashtaroon sakakeen jadeeda lil-matbakh"
      }
    ]
  }
},

{
  id: "N23",
  type: "noun",
  arabic: "طَاوِلَة",
  transliteration: "taawila",
  english: "table",
  root: "",
  gender: "f",
  singular: "طَاوِلَة",
  dual: "طَاوِلَتَانِ",
  plural: "طَاوِلَات",
  category: "household",
  topics: ["furniture"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَضَعُ الكُتُبَ عَلَى الطَّاوِلَةِ",
        en: "She puts the books on the table",
        tr: "hiya tada‘u al-kutub ‘ala at-taawila"
      }
    ],
    medium: [
      {
        ar: "هُوَ نَظَّفَ الطَّاوِلَةَ قَبْلَ الغَدَاءِ",
        en: "He cleaned the table before lunch",
        tr: "huwa nazzafa at-taawila qabl al-ghadaa’"
      },
      {
        ar: "هُمْ يُرَتِّبُونَ الطَّاوِلَاتِ فِي القَاعَةِ",
        en: "They arrange the tables in the hall",
        tr: "hum yurattiboon at-taawilaat fil-qa‘a"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَصْلَحَ الطَّاوِلَةَ لِأَنَّهَا مَكْسُورَةٌ",
        en: "He repaired the table because it was broken",
        tr: "huwa aslaha at-taawila li’annahā maksura"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ طَاوِلَاتٍ جَدِيدَةً لِلمَنْزِلِ",
        en: "They will buy new tables for the house",
        tr: "hum sayashtaroon taawilaat jadeeda lil-manzil"
      }
    ]
  }
},

{
  id: "N24",
  type: "noun",
  arabic: "سَرِير",
  transliteration: "sareer",
  english: "bed",
  root: "",
  gender: "m",
  singular: "سَرِير",
  dual: "سَرِيرَانِ",
  plural: "أَسِرَّة",
  category: "household",
  topics: ["furniture"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَنَامُ عَلَى السَّرِيرِ",
        en: "He is sleeping on the bed",
        tr: "huwa yanaam ‘ala as-sareer"
      }
    ],
    medium: [
      {
        ar: "هِيَ تُرَتِّبُ السَّرِيرَ كُلَّ صَبَاحٍ",
        en: "She arranges the bed every morning",
        tr: "hiya turattib as-sareer kulla sabaah"
      },
      {
        ar: "هُمْ يَجْلِسُونَ عَلَى السَّرِيرِ لِلقِرَاءَةِ",
        en: "They sit on the bed to read",
        tr: "hum yajlisoon ‘ala as-sareer lil-qiraa’a"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَصْلَحَ السَّرِيرَ لِأَنَّهُ كَانَ يَصْدُرُ صَوْتًا",
        en: "He repaired the bed because it was making noise",
        tr: "huwa aslaha as-sareer li’annahu kaana yasdur sawtan"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ أَسِرَّةً جَدِيدَةً لِغُرَفِ النَّوْمِ",
        en: "They will buy new beds for the bedrooms",
        tr: "hum sayashtaroon asirra jadeeda li-ghuraf an-nawm"
      }
    ]
  }
},

{
  id: "N25",
  type: "noun",
  arabic: "مِرْآة",
  transliteration: "mir’aah",
  english: "mirror",
  root: "",
  gender: "f",
  singular: "مِرْآة",
  dual: "مِرْآَتَانِ",
  plural: "مَرَايَا",
  category: "household",
  topics: ["furniture"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَنْظُرُ فِي المِرْآةِ",
        en: "She is looking in the mirror",
        tr: "hiya tanzur fil-mir’aah"
      }
    ],
    medium: [
      {
        ar: "هُوَ نَظَّفَ المِرْآةَ قَبْلَ الخُرُوجِ",
        en: "He cleaned the mirror before going out",
        tr: "huwa nazzafa al-mir’aah qabl al-khurooj"
      },
      {
        ar: "هُمْ يَضَعُونَ مَرَايَا جَدِيدَةً فِي المَمَرِّ",
        en: "They place new mirrors in the hallway",
        tr: "hum yada‘oon maraya jadeeda fil-mamar"
      }
    ],
    advanced: [
      {
        ar: "هُوَ كَسَرَ المِرْآةَ بِالْخَطَأِ",
        en: "He accidentally broke the mirror",
        tr: "huwa kasara al-mir’aah bil-khata’"
      },
      {
        ar: "هُمْ سَيُرَكِّبُونَ مَرَايَا كَبِيرَةً فِي غُرْفَةِ الجُلُوسِ",
        en: "They will install large mirrors in the living room",
        tr: "hum sayurakkiboon maraya kabeera fil-ghurfa al-juloos"
      }
    ]
  }
},

  {
  id: "N26",
  type: "noun",
  arabic: "سِتَارَة",
  transliteration: "sitaara",
  english: "curtain",
  root: "",
  gender: "f",
  singular: "سِتَارَة",
  dual: "سِتَارَتَانِ",
  plural: "سَتَائِر",
  category: "household",
  topics: ["appliances"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هِيَ تُغْلِقُ السِّتَارَةَ",
        en: "She is closing the curtain",
        tr: "hiya tughlq as-sitaara"
      }
    ],
    medium: [
      {
        ar: "هُوَ فَتَحَ السَّتَائِرَ لِدُخُولِ الضَّوْءِ",
        en: "He opened the curtains to let the light in",
        tr: "huwa fatah as-sata’ir lidukhool ad-daw’"
      },
      {
        ar: "هُمْ يُغَيِّرُونَ السَّتَائِرَ كُلَّ صَيْفٍ",
        en: "They change the curtains every summer",
        tr: "hum yughayyiroon as-sata’ir kulla sayf"
      }
    ],
    advanced: [
      {
        ar: "هُوَ اشْتَرَى سَتَائِرَ ثَقِيلَةً لِغُرْفَةِ النَّوْمِ",
        en: "He bought heavy curtains for the bedroom",
        tr: "huwa ishtara sata’ir thaqeela lil-ghurfa an-nawm"
      },
      {
        ar: "هُمْ سَيُرَكِّبُونَ سَتَائِرَ جَدِيدَةً فِي المَنْزِلِ",
        en: "They will install new curtains in the house",
        tr: "hum sayurakkiboon sata’ir jadeeda fil-manzil"
      }
    ]
  }
},

{
  id: "N27",
  type: "noun",
  arabic: "ثَلَّاجَة",
  transliteration: "thallaja",
  english: "fridge",
  root: "",
  gender: "f",
  singular: "ثَلَّاجَة",
  dual: "ثَلَّاجَتَانِ",
  plural: "ثَلَّاجَات",
  category: "household",
  topics: ["daily-life", "food", "home"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَفْتَحُ الثَّلَّاجَةَ",
        en: "She is opening the fridge",
        tr: "hiya taftah ath-thallaja"
      }
    ],
    medium: [
      {
        ar: "هُوَ يَضَعُ الطَّعَامَ فِي الثَّلَّاجَةِ",
        en: "He puts the food in the fridge",
        tr: "huwa yada‘u at-ta‘aam fil-thallaja"
      },
      {
        ar: "هُمْ يُنَظِّفُونَ الثَّلَّاجَةَ كُلَّ أُسْبُوعٍ",
        en: "They clean the fridge every week",
        tr: "hum yunazzifoon ath-thallaja kulla usboo‘"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَصْلَحَ الثَّلَّاجَةَ لِأَنَّهَا لَا تُبَرِّدُ جَيِّدًا",
        en: "He repaired the fridge because it wasn’t cooling well",
        tr: "huwa aslaha ath-thallaja li’annaha laa tubarrid jayyidan"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ ثَلَّاجَاتٍ جَدِيدَةً لِلمَطْبَخِ",
        en: "They will buy new fridges for the kitchen",
        tr: "hum sayashtaroon thallajaat jadeeda lil-matbakh"
      }
    ]
  }
},

{
  id: "N28",
  type: "noun",
  arabic: "فُرْن",
  transliteration: "furn",
  english: "oven",
  root: "",
  gender: "m",
  singular: "فُرْن",
  dual: "فُرْنَانِ",
  plural: "أَفْرَان",
  category: "household",
  topics: ["appliances"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هُوَ يَفْتَحُ الفُرْنَ",
        en: "He is opening the oven",
        tr: "huwa yaftah al-furn"
      }
    ],
    medium: [
      {
        ar: "هِيَ تَضَعُ الخُبْزَ فِي الفُرْنِ",
        en: "She puts the bread in the oven",
        tr: "hiya tada‘u al-khubz fil-furn"
      },
      {
        ar: "هُمْ يَسْتَخْدِمُونَ الأَفْرَانَ لِلطَّبْخِ",
        en: "They use ovens for cooking",
        tr: "hum yastakhdimoon al-afraan lit-tabkh"
      }
    ],
    advanced: [
      {
        ar: "هُوَ أَصْلَحَ الفُرْنَ لِأَنَّهُ لَا يَسْتَوِي الطَّعَامُ فِيهِ",
        en: "He repaired the oven because food wasn’t cooking evenly",
        tr: "huwa aslaha al-furn li’annahu laa yastawi at-ta‘aam feehi"
      },
      {
        ar: "هُمْ سَيَشْتَرُونَ أَفْرَانًا جَدِيدَةً لِلمَطْبَخِ",
        en: "They will buy new ovens for the kitchen",
        tr: "hum sayashtaroon afraan jadeeda lil-matbakh"
      }
    ]
  }
},

{
 id: "N29",
  type: "noun",
  arabic: "مِكْنَسَة",
  transliteration: "miknasa",
  english: "broom",
  root: "",
  gender: "f",
  singular: "مِكْنَسَة",
  dual: "مِكْنَسَتَانِ",
  plural: "مَكَانِس",
  category: "household",
  topics: ["cleaning"],
  notes: "",

  examples: {
    beginner: [
      {
        ar: "هِيَ تَكْنُسُ الأَرْضَ بِالمِكْنَسَةِ",
        en: "She is sweeping the floor with the broom",
        tr: "hiya taknus al-ard bil-miknasa"
      }
    ],
    medium: [
      {
        ar: "هُوَ يَضَعُ المَكَانِسَ فِي الخِزَانَةِ",
        en: "He puts the brooms in the closet",
        tr: "huwa yada‘u al-makānis fil-khizāna"
      },
      {
        ar: "هُمْ يَسْتَخْدِمُونَ المِكْنَسَةَ لِتَنْظِيفِ البَيْتِ",
        en: "They use the broom to clean the house",
        tr: "hum yastakhdimoon al-miknasa lit-tanzif al-bayt"
      }
    ],
    advanced: [
      {
        ar: "هُوَ اشْتَرَى مِكْنَسَةً جَدِيدَةً لِأَنَّ القَدِيمَةَ لَا تَعْمَلُ جَيِّدًا",
        en: "He bought a new broom because the old one didn’t work well",
        tr: "huwa ishtara miknasa jadeeda li’anna al-qadeema laa ta‘mal jayyidan"
      },
      {
        ar: "هُمْ سَيُنَظِّفُونَ الحَدِيقَةَ بِالمَكَانِسِ",
        en: "They will clean the garden with the brooms",
        tr: "hum sayunazzifoon al-hadeeqa bil-makānis"
      }
    ]
  }
},
{
  id: "N30",
  type: "noun",
  arabic: "مِصْبَاح",
  transliteration: "misbaah",
  english: "lamp",
  root: "",
  gender: "m",
  singular: "مِصْبَاح",
  dual: "مِصْبَاحَانِ",
  plural: "مَصَابِيح",
  category: "household",
  topics: ["appliances"],
  notes: "",

  examples: {
    beginner: [
      { ar: "هُوَ يُشَغِّلُ المِصْبَاحَ", en: "He turns on the lamp", tr: "huwa yushaghil al-misbaah" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ المِصْبَاحَ عَلَى الطَّاوِلَةِ", en: "She puts the lamp on the table", tr: "hiya tada‘u al-misbaah ‘ala at-taawila" },
      { ar: "هُمْ يُغَيِّرُونَ مَصَابِيحَ الغُرْفَةِ", en: "They change the lamps in the room", tr: "hum yughayyiroon masaabeeh al-ghurfa" }
    ],
    advanced: [
      { ar: "هُوَ أَصْلَحَ المِصْبَاحَ لِأَنَّهُ لَا يَعْمَلُ", en: "He repaired the lamp because it wasn’t working", tr: "huwa aslaha al-misbaah li’annahu laa ya‘mal" },
      { ar: "هُمْ سَيَشْتَرُونَ مَصَابِيحَ جَدِيدَةً لِلمَنْزِلِ", en: "They will buy new lamps for the house", tr: "hum sayashtaroon masaabeeh jadeeda lil-manzil" }
    ]
  }
},
{
  id: "N31",
  type: "noun",
  arabic: "سِجَّادَة",
  transliteration: "sajjaada",
  english: "carpet",
  root: "",
  gender: "f",
  singular: "سِجَّادَة",
  dual: "سِجَّادَتَانِ",
  plural: "سَجَّاد",
  category: "household",
  topics: ["object"],
  notes: "",

  examples: {
    beginner: [
      { ar: "هِيَ تَنْظُفُ السِّجَّادَةَ", en: "She cleans the carpet", tr: "hiya tunazzif as-sajjaada" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ السِّجَّادَةَ فِي غُرْفَةِ الجُلُوسِ", en: "He places the carpet in the living room", tr: "huwa yada‘u as-sajjaada fil-ghurfa al-juloos" },
      { ar: "هُمْ يَغْسِلُونَ السَّجَّادَ كُلَّ شِتَاءٍ", en: "They wash the carpets every winter", tr: "hum yaghsiloon as-sajjaad kulla shitaa’" }
    ],
    advanced: [
      { ar: "هُوَ اشْتَرَى سِجَّادَةً كَبِيرَةً لِلغُرْفَةِ", en: "He bought a large carpet for the room", tr: "huwa ishtara sajjaada kabeera lil-ghurfa" },
      { ar: "هُمْ سَيُرَكِّبُونَ سِجَّادًا جَدِيدًا فِي المَنْزِلِ", en: "They will install new carpeting in the house", tr: "hum sayurakkiboon sajjaad jadeed fil-manzil" }
    ]
  }
},
{
  id: "N32",
  type: "noun",
  arabic: "مِظَلَّة",
  transliteration: "mizalla",
  english: "umbrella",
  root: "",
  gender: "f",
  singular: "مِظَلَّة",
  dual: "مِظَلَّتَانِ",
  plural: "مِظَلَّات",
  category: "household",
  topics: ["weather"],
  notes: "",

  examples: {
    beginner: [
      { ar: "هِيَ تَسْتَخْدِمُ المِظَلَّةَ فِي المَطَرِ", en: "She uses the umbrella in the rain", tr: "hiya tastakhdim al-mizalla fil-matar" }
    ],
    medium: [
      { ar: "هُوَ يَحْمِلُ مِظَلَّتَهُ فِي الطَّرِيقِ", en: "He carries his umbrella on the road", tr: "huwa yahmil mizallatahu fit-tareeq" },
      { ar: "هُمْ يَضَعُونَ المِظَلَّاتِ عِنْدَ البَابِ", en: "They place the umbrellas near the door", tr: "hum yada‘oon al-mizallaat ‘ind al-baab" }
    ],
    advanced: [
      { ar: "هُوَ فَقَدَ المِظَلَّةَ أَمْسِ", en: "He lost the umbrella yesterday", tr: "huwa faqada al-mizalla ams" },
      { ar: "هُمْ سَيَشْتَرُونَ مِظَلَّاتٍ جَوْدَةٍ عَالِيَةٍ", en: "They will buy high‑quality umbrellas", tr: "hum sayashtaroon mizallaat jawda ‘aaliya" }
    ]
  }
},
{
 id: "N33",
  type: "noun",
  arabic: "قِنِّينَة",
  transliteration: "qinneena",
  english: "bottle",
  root: "",
  gender: "f",
  singular: "قِنِّينَة",
  dual: "قِنِّينَتَانِ",
  plural: "قَنَانٍ",
  category: "household",
  topics: ["kitchen"],
  notes: "",

  examples: {
    beginner: [
      { ar: "هُوَ يَشْرَبُ مِنَ القِنِّينَةِ", en: "He drinks from the bottle", tr: "huwa yashrab min al-qinneena" }
    ],
    medium: [
      { ar: "هِيَ تَمْلَأُ القِنِّينَةَ بِالمَاءِ", en: "She fills the bottle with water", tr: "hiya tamla’ al-qinneena bil-maa’" },
      { ar: "هُمْ يَضَعُونَ القَنَانِي فِي الثَّلَّاجَةِ", en: "They place the bottles in the fridge", tr: "hum yada‘oon al-qanaani fil-thallaja" }
    ],
    advanced: [
      { ar: "هُوَ اشْتَرَى قَنَانِي زُجَاجِيَّةً", en: "He bought glass bottles", tr: "huwa ishtara qanaani zujaajiya" },
      { ar: "هُمْ سَيُعِيدُونَ تَدْوِيرَ القَنَانِي", en: "They will recycle the bottles", tr: "hum sayu‘eedoon tadweer al-qanaani" }
    ]
  }
},
{
 id: "N34",
  type: "noun",
  arabic: "مِفْرَش",
  transliteration: "mifrash",
  english: "blanket",
  root: "",
  gender: "m",
  singular: "مِفْرَش",
  dual: "مِفْرَشَانِ",
  plural: "مَفَارِش",
  category: "household",
  topics: ["daily-life", "home"],
  notes: "",

  examples: {
    beginner: [
      { ar: "هُوَ يَسْتَعْمِلُ المِفْرَشَ فِي اللَّيْلِ", en: "He uses the blanket at night", tr: "huwa yasta‘mil al-mifrash fil-layl" }
    ],
    medium: [
      { ar: "هِيَ تَغْسِلُ المَفَارِشَ كُلَّ أُسْبُوعٍ", en: "She washes the blankets every week", tr: "hiya taghsil al-mafaarish kulla usboo‘" },
      { ar: "هُمْ يَضَعُونَ المِفْرَشَ عَلَى السَّرِيرِ", en: "They place the blanket on the bed", tr: "hum yada‘oon al-mifrash ‘ala as-sareer" }
    ],
    advanced: [
      { ar: "هُوَ اشْتَرَى مِفْرَشًا دَافِئًا لِلشِّتَاءِ", en: "He bought a warm blanket for winter", tr: "huwa ishtara mifrash daafi’an lish-shitaa’" },
      { ar: "هُمْ سَيَسْتَخْدِمُونَ مَفَارِشَ جَدِيدَةً فِي غُرَفِ النَّوْمِ", en: "They will use new blankets in the bedrooms", tr: "hum sayastakhdimoon mafaarish jadeeda fil-ghuraf" }
    ]
  }
},
{
  id: "N35",
  type: "noun",
  arabic: "شَوْكَة",
  transliteration: "shawka",
  english: "fork",
  root: "ش-و-ك",
  gender: "f",
  singular: "شَوْكَة",
  dual: "شَوْكَتَانِ",
  plural: "شَوْك",
  category: "household",
  topics: ["kitchen"],
  notes: "Used for eating food.",
  examples: {
    beginner: [
      { ar: "هِيَ تَأْكُلُ بِالشَّوْكَةِ", en: "She eats with the fork", tr: "hiya ta'kul bish-shawka" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ الشَّوْكَةَ عَلَى المَائِدَةِ", en: "He puts the fork on the table", tr: "huwa yada'u ash-shawka 'ala al-maa'ida" }
    ],
    advanced: [
      { ar: "هُمْ سَيَشْتَرُونَ شَوْكًا جَدِيدًا لِلمَطْبَخِ", en: "They will buy new forks for the kitchen", tr: "hum sayashtaroon shawkan jadeedan lil-matbakh" }
    ]
  }
},
{
  id: "N36",
  type: "noun",
  arabic: "دَفْتَر",
  transliteration: "daftar",
  english: "notebook",
  root: "د-ف-ت",
  gender: "m",
  singular: "دَفْتَر",
  dual: "دَفْتَرَانِ",
  plural: "دَفَاتِر",
  category: "school",
  topics: ["stationery", "school"],
  notes: "Used for writing notes.",
  examples: {
    beginner: [
      { ar: "هُوَ يَكْتُبُ فِي الدَّفْتَرِ", en: "He writes in the notebook", tr: "huwa yaktub fid-daftar" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ الدَّفْتَرَ فِي الحَقِيبَةِ", en: "She puts the notebook in the bag", tr: "hiya tada'u ad-daftar fil-haqeeba" }
    ],
    advanced: [
      { ar: "هُمْ يُرَتِّبُونَ دَفَاتِرَهُمْ لِلدِّرَاسَةِ", en: "They organise their notebooks for studying", tr: "hum yurattiboon dafatirahum lid-diraasa" }
    ]
  }
},
{
  id: "N37",
  type: "noun",
  arabic: "مِسْطَرَة",
  transliteration: "mistara",
  english: "ruler",
  root: "س-ط-ر",
  gender: "f",
  singular: "مِسْطَرَة",
  dual: "مِسْطَرَتَانِ",
  plural: "مَسَاطِر",
  category: "school",
  topics: ["stationery", "school"],
  notes: "Used for measuring.",
  examples: {
    beginner: [
      { ar: "هُوَ يَقِيسُ بِالمِسْطَرَةِ", en: "He measures with the ruler", tr: "huwa yaqees bil-mistara" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ المِسْطَرَةَ عَلَى المَكْتَبِ", en: "She puts the ruler on the desk", tr: "hiya tada'u al-mistara 'ala al-maktab" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ مَسَاطِرَ طَوِيلَةً فِي الرَّسْمِ", en: "They use long rulers for drawing", tr: "hum yastakhdimoon masatir taweela fir-rasm" }
    ]
  }
},
{
  id: "N38",
  type: "noun",
  arabic: "مِمْحَاة",
  transliteration: "mimhaa",
  english: "eraser",
  root: "م-ح-و",
  gender: "f",
  singular: "مِمْحَاة",
  dual: "مِمْحَاتَانِ",
  plural: "مَمَاحٍ",
  category: "school",
  topics: ["stationery", "school"],
  notes: "Used to erase writing.",
  examples: {
    beginner: [
      { ar: "هُوَ يَمْسَحُ الكَلِمَاتِ بِالمِمْحَاةِ", en: "He erases the words with the eraser", tr: "huwa yamsah al-kalimaat bil-mimhaa" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ المِمْحَاةَ فِي الحَقِيبَةِ", en: "She puts the eraser in the bag", tr: "hiya tada'u al-mimhaa fil-haqeeba" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ مِمْحَاةً جَيِّدَةً فِي الرَّسْمِ", en: "They use a good eraser for drawing", tr: "hum yastakhdimoon mimhaa jayyida fir-rasm" }
    ]
  }
},
{
  id: "N39",
  type: "noun",
  arabic: "حَقِيبَة ظَهْر",
  transliteration: "haqeebat zahr",
  english: "backpack",
  root: "",
  gender: "f",
  singular: "حَقِيبَة ظَهْر",
  dual: "حَقِيبَتَا ظَهْر",
  plural: "حَقَائِب ظَهْر",
  category: "school",
  topics: ["stationery", "school"],
  notes: "Used for carrying school items.",
  examples: {
    beginner: [
      { ar: "هُوَ يَحْمِلُ حَقِيبَةَ الظَّهْرِ", en: "He carries the backpack", tr: "huwa yahmil haqeebat az-zahr" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ الكُتُبَ فِي الحَقِيبَةِ", en: "She puts the books in the backpack", tr: "hiya tada'u al-kutub fil-haqeeba" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ حَقَائِبَ ظَهْرٍ جَدِيدَةً", en: "They buy new backpacks", tr: "hum yashtaroon haqa'ib zahr jadeeda" }
    ]
  }
},
{
  id: "N40",
  type: "noun",
  arabic: "طَمَاطِم",
  transliteration: "tamaatim",
  english: "tomato",
  root: "",
  gender: "f",
  singular: "طَمَاطِمَة",
  dual: "طَمَاطِمَتَانِ",
  plural: "طَمَاطِم",
  category: "food",
  topics: ["vegetables"],
  notes: "Common vegetable used in cooking.",
  examples: {
    beginner: [
      { ar: "هِيَ تَغْسِلُ الطَّمَاطِمَ", en: "She washes the tomatoes", tr: "hiya taghsil at-tamaatim" }
    ],
    medium: [
      { ar: "هُوَ يَقْطَعُ الطَّمَاطِمَ لِلسَّلَطَةِ", en: "He cuts tomatoes for salad", tr: "huwa yaqta' at-tamaatim lis-salata" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ الطَّمَاطِمَ فِي الطَّبْخِ", en: "They use tomatoes in cooking", tr: "hum yastakhdimoon at-tamaatim fit-tabkh" }
    ]
  }
},
{
  id: "N41",
  type: "noun",
  arabic: "تُفَّاحَة",
  transliteration: "tuffaaha",
  english: "apple",
  root: "ت-ف-ح",
  gender: "f",
  singular: "تُفَّاحَة",
  dual: "تُفَّاحَتَانِ",
  plural: "تُفَّاح",
  category: "food",
  topics: ["fruits"],
  notes: "A common fruit.",
  examples: {
    beginner: [
      { ar: "هُوَ يَأْكُلُ تُفَّاحَةً", en: "He eats an apple", tr: "huwa ya'kul tuffaaha" }
    ],
    medium: [
      { ar: "هِيَ تَغْسِلُ التُّفَّاحَ قَبْلَ الأَكْلِ", en: "She washes the apples before eating", tr: "hiya taghsil at-tuffaah qabl al-akl" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ تُفَّاحًا طَازِجًا", en: "They buy fresh apples", tr: "hum yashtaroon tuffaahan taazijan" }
    ]
  }
},
{
  id: "N42",
  type: "noun",
  arabic: "مَوْز",
  transliteration: "mawz",
  english: "banana",
  root: "",
  gender: "m",
  singular: "مَوْزَة",
  dual: "مَوْزَتَانِ",
  plural: "مَوْز",
  category: "food",
  topics: ["fruits"],
  notes: "A sweet fruit.",
  examples: {
    beginner: [
      { ar: "هُوَ يَأْكُلُ مَوْزَةً", en: "He eats a banana", tr: "huwa ya'kul mawza" }
    ],
    medium: [
      { ar: "هِيَ تَشْتَرِي مَوْزًا لِلغَدَاءِ", en: "She buys bananas for lunch", tr: "hiya tashtari mawzan lil-ghadaa'" }
    ],
    advanced: [
      { ar: "هُمْ يَضَعُونَ المَوْزَ فِي السَّلَّةِ", en: "They place bananas in the basket", tr: "hum yada'oon al-mawz fis-salla" }
    ]
  }
},
{
  id: "N43",
  type: "noun",
  arabic: "بَصَل",
  transliteration: "basal",
  english: "onion",
  root: "",
  gender: "m",
  singular: "بَصَلَة",
  dual: "بَصَلَتَانِ",
  plural: "بَصَل",
  category: "food",
  topics: ["vegetables"],
  notes: "Used in cooking.",
  examples: {
    beginner: [
      { ar: "هِيَ تَقْطَعُ البَصَلَ", en: "She cuts the onion", tr: "hiya taqta' al-basal" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ البَصَلَ فِي القِدْرِ", en: "He puts the onion in the pot", tr: "huwa yada' al-basal fil-qidr" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ البَصَلَ فِي كَثِيرٍ مِنَ الوَصَفَاتِ", en: "They use onions in many recipes", tr: "hum yastakhdimoon al-basal fee katheer min al-wasafaat" }
    ]
  }
},
{
  id: "N44",
  type: "noun",
  arabic: "حَلِيب",
  transliteration: "haleeb",
  english: "milk",
  root: "ح-ل-ب",
  gender: "m",
  singular: "حَلِيب",
  dual: "",
  plural: "",
  category: "food",
  topics: ["drinks"],
  notes: "A common drink.",
  examples: {
    beginner: [
      { ar: "هُوَ يَشْرَبُ الحَلِيبَ", en: "He drinks milk", tr: "huwa yashrab al-haleeb" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ الحَلِيبَ فِي الكُوبِ", en: "She pours milk into the cup", tr: "hiya tada'u al-haleeb fil-koob" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ حَلِيبًا طَازِجًا", en: "They buy fresh milk", tr: "hum yashtaroon haleeban taazijan" }
    ]
  }
},
{
  id: "N45",
  type: "noun",
  arabic: "عَصِير",
  transliteration: "aseer",
  english: "juice",
  root: "ع-ص-ر",
  gender: "m",
  singular: "عَصِير",
  dual: "",
  plural: "عَصَائِر",
  category: "food",
  topics: ["drinks"],
  notes: "Fruit drink.",
  examples: {
    beginner: [
      { ar: "هُوَ يَشْرَبُ العَصِيرَ", en: "He drinks juice", tr: "huwa yashrab al-aseer" }
    ],
    medium: [
      { ar: "هِيَ تَصْنَعُ عَصِيرًا طَازِجًا", en: "She makes fresh juice", tr: "hiya tasna' aseeran taazijan" }
    ],
    advanced: [
      { ar: "هُمْ يَقْدِمُونَ العَصَائِرَ فِي الحَفْلَةِ", en: "They serve juices at the party", tr: "hum yuqaddimoon al-asaa'ir fil-hafla" }
    ]
  }
},
{
  id: "N46",
  type: "noun",
  arabic: "حَافِلَة",
  transliteration: "haafila",
  english: "bus",
  root: "",
  gender: "f",
  singular: "حَافِلَة",
  dual: "حَافِلَتَانِ",
  plural: "حَافِلَات",
  category: "places",
  topics: ["transport"],
  notes: "Used for public transport.",
  examples: {
    beginner: [
      { ar: "هُوَ يَرْكَبُ الحَافِلَةَ", en: "He rides the bus", tr: "huwa yarkab al-haafila" }
    ],
    medium: [
      { ar: "هِيَ تَنْتَظِرُ الحَافِلَةَ", en: "She waits for the bus", tr: "hiya tantazir al-haafila" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ الحَافِلَاتِ لِلسَّفَرِ", en: "They use buses for travel", tr: "hum yastakhdimoon al-haafilat lis-safar" }
    ]
  }
},
{
  id: "N47",
  type: "noun",
  arabic: "قِطَار",
  transliteration: "qitaar",
  english: "train",
  root: "ق-ط-ر",
  gender: "m",
  singular: "قِطَار",
  dual: "قِطَارَانِ",
  plural: "قِطَارَات",
  category: "places",
  topics: ["transport"],
  notes: "A vehicle that runs on rails for transport.",
  examples: {
    beginner: [
      { ar: "هُوَ يَرْكَبُ القِطَارَ", en: "He rides the train", tr: "huwa yarkab al-qitaar" }
    ],
    medium: [
      { ar: "هِيَ تَنْتَظِرُ القِطَارَ فِي المَحَطَّةِ", en: "She waits for the train at the station", tr: "hiya tantazir al-qitaar fil-mahatta" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ القِطَارَ لِلسَّفَرِ بَيْنَ المُدُنِ", en: "They use the train to travel between cities", tr: "hum yastakhdimoon al-qitaar lis-safar bayn al-mudun" }
    ]
  }
},
{
  id: "N48",
  type: "noun",
  arabic: "طَائِرَة",
  transliteration: "taa'ira",
  english: "airplane",
  root: "ط-ي-ر",
  gender: "f",
  singular: "طَائِرَة",
  dual: "طَائِرَتَانِ",
  plural: "طَائِرَات",
  category: "places",
  topics: ["transport", "travel"],
  notes: "Used for air travel.",
  examples: {
    beginner: [
      { ar: "هُوَ يَرْكَبُ الطَّائِرَةَ", en: "He boards the airplane", tr: "huwa yarkab at-taa'ira" }
    ],
    medium: [
      { ar: "هِيَ تُسَافِرُ بِالطَّائِرَةِ إِلَى بَلَدٍ آخَرَ", en: "She travels by plane to another country", tr: "hiya tusaafir bit-taa'ira ila balad aakhar" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ الطَّائِرَاتِ فِي الرِّحْلَاتِ الطَّوِيلَةِ", en: "They use airplanes for long trips", tr: "hum yastakhdimoon at-taa'iraat fir-rihlaat at-taweela" }
    ]
  }
},
{
  id: "N49",
  type: "noun",
  arabic: "شَارِع",
  transliteration: "shaari'",
  english: "street",
  root: "ش-ر-ع",
  gender: "m",
  singular: "شَارِع",
  dual: "شَارِعَانِ",
  plural: "شَوَارِع",
  category: "places",
  topics: ["public-places"],
  notes: "A public road in a town or city.",
  examples: {
    beginner: [
      { ar: "هُوَ يَمْشِي فِي الشَّارِعِ", en: "He walks in the street", tr: "huwa yamshi fish-shaari'" }
    ],
    medium: [
      { ar: "هِيَ تَعْبُرُ الشَّارِعَ بِحَذَرٍ", en: "She crosses the street carefully", tr: "hiya ta'bur ash-shaari' bihadhar" }
    ],
    advanced: [
      { ar: "هُمْ يُنَظِّفُونَ الشَّوَارِعَ كُلَّ صَبَاحٍ", en: "They clean the streets every morning", tr: "hum yunazzifoon ash-shawari' kulla sabaah" }
    ]
  }
},
{
  id: "N50",
  type: "noun",
  arabic: "حَدِيقَة",
  transliteration: "hadeeqa",
  english: "park",
  root: "ح-د-ق",
  gender: "f",
  singular: "حَدِيقَة",
  dual: "حَدِيقَتَانِ",
  plural: "حَدَائِق",
  category: "places",
  topics: ["public-places", "landscapes"],
  notes: "A public garden or green area.",
  examples: {
    beginner: [
      { ar: "هُوَ يَلْعَبُ فِي الحَدِيقَةِ", en: "He plays in the park", tr: "huwa yal'ab fil-hadeeqa" }
    ],
    medium: [
      { ar: "هِيَ تَجْلِسُ فِي الحَدِيقَةِ مَعَ أَصْدِقَائِهَا", en: "She sits in the park with her friends", tr: "hiya tajlis fil-hadeeqa ma'a asdiqa'iha" }
    ],
    advanced: [
      { ar: "هُمْ يَتَمَشَّوْنَ فِي الحَدَائِقِ الكَبِيرَةِ", en: "They stroll in large parks", tr: "hum yatamashshoon fil-hadaa'iq al-kabeera" }
    ]
  }
},
{
  id: "N51",
  type: "noun",
  arabic: "جَبَل",
  transliteration: "jabal",
  english: "mountain",
  root: "ج-ب-ل",
  gender: "m",
  singular: "جَبَل",
  dual: "جَبَلَانِ",
  plural: "جِبَال",
  category: "nature",
  topics: ["landscapes"],
  notes: "A large natural elevation of the earth.",
  examples: {
    beginner: [
      { ar: "هُوَ يَنْظُرُ إِلَى الجَبَلِ", en: "He looks at the mountain", tr: "huwa yanzur ila al-jabal" }
    ],
    medium: [
      { ar: "هِيَ تَتَصَوَّرُ أَمَامَ الجِبَالِ", en: "She takes photos in front of the mountains", tr: "hiya tatasawwar amaam al-jibaal" }
    ],
    advanced: [
      { ar: "هُمْ يَتَسَلَّقُونَ الجِبَالَ فِي الرِّحْلَاتِ", en: "They climb mountains on trips", tr: "hum yatasallaqoon al-jibaal fir-rihlaat" }
    ]
  }
},
{
  id: "N52",
  type: "noun",
  arabic: "نَهْر",
  transliteration: "nahr",
  english: "river",
  root: "ن-ه-ر",
  gender: "m",
  singular: "نَهْر",
  dual: "نَهْرَانِ",
  plural: "أَنْهَار",
  category: "nature",
  topics: ["landscapes"],
  notes: "A natural stream of water.",
  examples: {
    beginner: [
      { ar: "هُوَ يَجْلِسُ عِنْدَ النَّهْرِ", en: "He sits by the river", tr: "huwa yajlis 'ind an-nahr" }
    ],
    medium: [
      { ar: "هِيَ تَنْظُرُ إِلَى الأَنْهَارِ مِنَ الجِسْرِ", en: "She looks at the rivers from the bridge", tr: "hiya tanzur ila al-anhaar min al-jisr" }
    ],
    advanced: [
      { ar: "هُمْ يَقُومُونَ بِرِحْلَاتٍ عَلَى ضِفَافِ الأَنْهَارِ", en: "They go on trips along river banks", tr: "hum yaqumoon bir-rihlaat 'ala difaaf al-anhaar" }
    ]
  }
},
{
  id: "N53",
  type: "noun",
  arabic: "زَهْرَة",
  transliteration: "zahra",
  english: "flower",
  root: "ز-ه-ر",
  gender: "f",
  singular: "زَهْرَة",
  dual: "زَهْرَتَانِ",
  plural: "زُهُور",
  category: "nature",
  topics: ["flowers"],
  notes: "A colorful part of a plant.",
  examples: {
    beginner: [
      { ar: "هِيَ تُمْسِكُ زَهْرَةً جَمِيلَةً", en: "She holds a beautiful flower", tr: "hiya tumsik zahra jameela" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ الزُّهُورَ فِي المِزْهَرِيَّةِ", en: "He puts the flowers in the vase", tr: "huwa yada' az-zuhuur fil-mizhariyya" }
    ],
    advanced: [
      { ar: "هُمْ يَزْرَعُونَ زُهُورًا مُلَوَّنَةً فِي الحَدِيقَةِ", en: "They plant colorful flowers in the garden", tr: "hum yazra'oon zuhuran mulawwana fil-hadeeqa" }
    ]
  }
},
{
  id: "N54",
  type: "noun",
  arabic: "سَحَابَة",
  transliteration: "sahaaba",
  english: "cloud",
  root: "س-ح-ب",
  gender: "f",
  singular: "سَحَابَة",
  dual: "سَحَابَتَانِ",
  plural: "سُحُب",
  category: "nature",
  topics: ["weather"],
  notes: "Visible mass of water droplets in the sky.",
  examples: {
    beginner: [
      { ar: "هُوَ يَنْظُرُ إِلَى السَّحَابَةِ فِي السَّمَاءِ", en: "He looks at the cloud in the sky", tr: "huwa yanzur ila as-sahaaba fis-samaa'" }
    ],
    medium: [
      { ar: "هِيَ تُحِبُّ شَكْلَ السُّحُبِ فِي المَسَاءِ", en: "She likes the shape of the clouds in the evening", tr: "hiya tuhibb shakl as-suhub fil-masaa'" }
    ],
    advanced: [
      { ar: "هُمْ يُرَاقِبُونَ السُّحُبَ لِمَعْرِفَةِ حَالِ الطَّقْسِ", en: "They watch the clouds to know the weather", tr: "hum yuraaqiboon as-suhub lima'rifat haal at-taqs" }
    ]
  }
},
{
  id: "N55",
  type: "noun",
  arabic: "طَابِعَة",
  transliteration: "taabi'a",
  english: "printer",
  root: "ط-ب-ع",
  gender: "f",
  singular: "طَابِعَة",
  dual: "طَابِعَتَانِ",
  plural: "طَابِعَات",
  category: "work",
  topics: ["technology", "office"],
  notes: "A machine used to print documents.",
  examples: {
    beginner: [
      { ar: "هُوَ يَطْبَعُ الوَرَقَ بِالطَّابِعَةِ", en: "He prints the paper with the printer", tr: "huwa yatba' al-waraq bit-taabi'a" }
    ],
    medium: [
      { ar: "هِيَ تُصْلِحُ الطَّابِعَةَ لِأَنَّهَا تَتَوَقَّفُ", en: "She fixes the printer because it stops", tr: "hiya tuslih at-taabi'a li'annaha tatawaqqaf" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ طَابِعَاتٍ سَرِيعَةً فِي المَكْتَبِ", en: "They use fast printers in the office", tr: "hum yastakhdimoon taabi'aat saree'a fil-maktab" }
    ]
  }
},
{
  id: "N56",
  type: "noun",
  arabic: "لَوْحَةُ مَفَاتِيح",
  transliteration: "lawhat mafateeh",
  english: "keyboard",
  root: "",
  gender: "f",
  singular: "لَوْحَةُ مَفَاتِيح",
  dual: "لَوْحَتَا مَفَاتِيح",
  plural: "لَوْحَاتُ مَفَاتِيح",
  category: "work",
  topics: ["technology"],
  notes: "Used for typing on a computer.",
  examples: {
    beginner: [
      { ar: "هُوَ يَكْتُبُ عَلَى لَوْحَةِ المَفَاتِيحِ", en: "He types on the keyboard", tr: "huwa yaktub 'ala lawhat al-mafateeh" }
    ],
    medium: [
      { ar: "هِيَ تُنَظِّفُ لَوْحَةَ المَفَاتِيحِ", en: "She cleans the keyboard", tr: "hiya tunazzif lawhat al-mafateeh" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ لَوْحَاتٍ مِهْنِيَّةً فِي العَمَلِ", en: "They use professional keyboards at work", tr: "hum yastakhdimoon lawhaat mihniyya fil-'amal" }
    ]
  }
},
{
  id: "N57",
  type: "noun",
  arabic: "مِطْرَقَة",
  transliteration: "mitraqa",
  english: "hammer",
  root: "",
  gender: "f",
  singular: "مِطْرَقَة",
  dual: "مِطْرَقَتَانِ",
  plural: "مَطَارِق",
  category: "tools",
  topics: ["hand-tools"],
  notes: "Used for hitting nails.",
  examples: {
    beginner: [
      { ar: "هُوَ يَسْتَخْدِمُ المِطْرَقَةَ", en: "He uses the hammer", tr: "huwa yastakhdim al-mitraqa" }
    ],
    medium: [
      { ar: "هِيَ تَضْرِبُ المِسْمَارَ بِالمِطْرَقَةِ", en: "She hits the nail with the hammer", tr: "hiya tadrib al-mismar bil-mitraqa" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ مَطَارِقَ قَوِيَّةً فِي العَمَلِ", en: "They use strong hammers at work", tr: "hum yastakhdimoon mataariq qawiyya fil-'amal" }
    ]
  }
},
{
  id: "N58",
  type: "noun",
  arabic: "مِفَكّ",
  transliteration: "mifakk",
  english: "screwdriver",
  root: "",
  gender: "m",
  singular: "مِفَكّ",
  dual: "مِفَكَّانِ",
  plural: "مَفَاكّ",
  category: "tools",
  topics: ["hand-tools"],
  notes: "Used for tightening screws.",
  examples: {
    beginner: [
      { ar: "هُوَ يَشُدُّ المِسْمَارَ بِالمِفَكِّ", en: "He tightens the screw with the screwdriver", tr: "huwa yashudd al-mismar bil-mifakk" }
    ],
    medium: [
      { ar: "هِيَ تَسْتَخْدِمُ المِفَكَّ فِي التَّصْلِيحِ", en: "She uses the screwdriver for repair", tr: "hiya tastakhdim al-mifakk fit-tasleeh" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ مَفَاكّ مُخْتَلِفَةً فِي العَمَلِ", en: "They use different screwdrivers at work", tr: "hum yastakhdimoon mafakk mukhtalifa fil-'amal" }
    ]
  }
},
{
  id: "N59",
  type: "noun",
  arabic: "مُوَظَّف",
  transliteration: "muwaẓẓaf",
  english: "employee",
  root: "و-ظ-ف",
  gender: "m",
  singular: "مُوَظَّف",
  dual: "مُوَظَّفَانِ",
  plural: "مُوَظَّفُونَ",
  category: "people",
  topics: ["work", "roles"],
  notes: "A person who works in an organisation.",
  examples: {
    beginner: [
      { ar: "هُوَ مُوَظَّفٌ فِي الشَّرِكَةِ", en: "He is an employee in the company", tr: "huwa muwazzaf fish-sharika" }
    ],
    medium: [
      { ar: "هِيَ تُسَاعِدُ المُوَظَّفِينَ فِي المَكْتَبِ", en: "She helps the employees in the office", tr: "hiya tusa'id al-muwazzafeen fil-maktab" }
    ],
    advanced: [
      { ar: "هُمْ يُقَيِّمُونَ المُوَظَّفِينَ كُلَّ شَهْرٍ", en: "They evaluate employees every month", tr: "hum yuqayyimoon al-muwazzafeen kulla shahr" }
    ]
  }
},
{
   id: "N60",
  type: "noun",
  arabic: "مُدِير",
  transliteration: "mudeer",
  english: "manager",
  root: "د-و-ر",
  gender: "m",
  singular: "مُدِير",
  dual: "مُدِيرَانِ",
  plural: "مُدَرَاء",
  category: "people",
  topics: ["work", "roles"],
  notes: "A person who supervises employees.",
  examples: {
    beginner: [
      { ar: "هُوَ مُدِيرُ المَكْتَبِ", en: "He is the office manager", tr: "huwa mudeer al-maktab" }
    ],
    medium: [
      { ar: "هِيَ تَتَحَدَّثُ مَعَ المُدِيرِ", en: "She speaks with the manager", tr: "hiya tatahaddath ma'a al-mudeer" }
    ],
    advanced: [
      { ar: "هُمْ يُنَظِّمُونَ لِقَاءً مَعَ المُدَرَاءِ", en: "They organise a meeting with the managers", tr: "hum yunazzimoon liqaa'an ma'a al-mudara'" }
    ]
  }
},
{
  id: "N61",
  type: "noun",
  arabic: "فِكْرَة",
  transliteration: "fikra",
  english: "idea",
  root: "ف-ك-ر",
  gender: "f",
  singular: "فِكْرَة",
  dual: "فِكْرَتَانِ",
  plural: "أَفْكَار",
  category: "abstract",
  topics: ["ideas"],
  notes: "A thought or concept.",
  examples: {
    beginner: [
      { ar: "هِيَ عِنْدَهَا فِكْرَةٌ جَيِّدَةٌ", en: "She has a good idea", tr: "hiya 'indaha fikra jayyida" }
    ],
    medium: [
      { ar: "هُوَ يَشْرَحُ فِكْرَتَهُ لِلفَرِيقِ", en: "He explains his idea to the team", tr: "huwa yashrah fikratahu lil-fareeq" }
    ],
    advanced: [
      { ar: "هُمْ يُطَوِّرُونَ أَفْكَارًا جَدِيدَةً", en: "They develop new ideas", tr: "hum yutawwiron afkaran jadeeda" }
    ]
  }
},
{
  id: "N62",
  type: "noun",
  arabic: "مَشَاعِر",
  transliteration: "masha'ir",
  english: "feelings",
  root: "ش-ع-ر",
  gender: "f",
  singular: "مَشْعَر",
  dual: "",
  plural: "مَشَاعِر",
  category: "abstract",
  topics: ["emotions"],
  notes: "Human emotional states.",
  examples: {
    beginner: [
      { ar: "هِيَ تُعَبِّرُ عَنْ مَشَاعِرِهَا", en: "She expresses her feelings", tr: "hiya tu'abbir 'an masha'iriha" }
    ],
    medium: [
      { ar: "هُوَ يَتَحَدَّثُ عَنْ مَشَاعِرِهِ بِصَرَاحَةٍ", en: "He talks about his feelings honestly", tr: "huwa yatahaddath 'an masha'irihi bisaraaha" }
    ],
    advanced: [
      { ar: "هُمْ يَفْهَمُونَ مَشَاعِرَ الآخَرِينَ", en: "They understand the feelings of others", tr: "hum yafhamoon masha'ir al-aakhareen" }
    ]
  }
},
{
  id: "N63",
  type: "noun",
  arabic: "رَقْم",
  transliteration: "raqm",
  english: "number",
  root: "ر-ق-م",
  gender: "m",
  singular: "رَقْم",
  dual: "رَقْمَانِ",
  plural: "أَرْقَام",
  category: "abstract",
  topics: ["numbers"],
  notes: "A symbol used for counting.",
  examples: {
    beginner: [
      { ar: "هُوَ يَكْتُبُ رَقْمًا", en: "He writes a number", tr: "huwa yaktub raqman" }
    ],
    medium: [
      { ar: "هِيَ تَقْرَأُ الأَرْقَامَ", en: "She reads the numbers", tr: "hiya taqra' al-arqaam" }
    ],
    advanced: [
      { ar: "هُمْ يَحْسِبُونَ الأَرْقَامَ فِي الجَدْوَلِ", en: "They calculate the numbers in the table", tr: "hum yahsiboon al-arqaam fil-jadwal" }
    ]
  }
},
{
  id: "N64",
  type: "noun",
  arabic: "وَقْت",
  transliteration: "waqt",
  english: "time",
  root: "و-ق-ت",
  gender: "m",
  singular: "وَقْت",
  dual: "",
  plural: "أَوْقَات",
  category: "abstract",
  topics: ["time"],
  notes: "A measure of duration.",
  examples: {
    beginner: [
      { ar: "هُوَ يَنْظُرُ إِلَى الوَقْتِ", en: "He looks at the time", tr: "huwa yanzur ila al-waqt" }
    ],
    medium: [
      { ar: "هِيَ تُنَظِّمُ وَقْتَهَا جَيِّدًا", en: "She organises her time well", tr: "hiya tunazzim waqtaha jayyidan" }
    ],
    advanced: [
      { ar: "هُمْ يُدِيرُونَ أَوْقَاتَهُمْ بِكَفَاءَةٍ", en: "They manage their time efficiently", tr: "hum yudeeroon awqaatihum bikafaa'a" }
    ]
  }
},
{
  id: "N65",
  type: "noun",
  arabic: "طَبِيب",
  transliteration: "tabeeb",
  english: "doctor",
  root: "ط-ب-ب",
  gender: "m",
  singular: "طَبِيب",
  dual: "طَبِيبَانِ",
  plural: "أَطِبَّاء",
  category: "people",
  topics: ["roles"],
  notes: "A medical professional.",
  examples: {
    beginner: [
      { ar: "هُوَ طَبِيبٌ فِي المُسْتَشْفَى", en: "He is a doctor in the hospital", tr: "huwa tabeeb fil-mustashfa" }
    ],
    medium: [
      { ar: "هِيَ تَتَحَدَّثُ مَعَ الطَّبِيبِ", en: "She speaks with the doctor", tr: "hiya tatahaddath ma'a at-tabeeb" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَشِيرُونَ الأَطِبَّاءَ فِي العِلَاجِ", en: "They consult doctors for treatment", tr: "hum yastasheeroon al-atibbaa' fil-'ilaaj" }
    ]
  }
},
{
  id: "N66",
  type: "noun",
  arabic: "مُمَرِّضَة",
  transliteration: "mumarrida",
  english: "nurse",
  root: "م-ر-ض",
  gender: "f",
  singular: "مُمَرِّضَة",
  dual: "مُمَرِّضَتَانِ",
  plural: "مُمَرِّضَات",
  category: "people",
  topics: ["roles"],
  notes: "A healthcare assistant.",
  examples: {
    beginner: [
      { ar: "هِيَ مُمَرِّضَةٌ فِي العِيَادَةِ", en: "She is a nurse in the clinic", tr: "hiya mumarrida fil-'iyaada" }
    ],
    medium: [
      { ar: "هُوَ يَتَحَدَّثُ مَعَ المُمَرِّضَةِ", en: "He speaks with the nurse", tr: "huwa yatahaddath ma'a al-mumarrida" }
    ],
    advanced: [
      { ar: "هُمْ يُسَاعِدُونَ المَرْضَى مَعَ المُمَرِّضَاتِ", en: "They help patients with the nurses", tr: "hum yusa'idoon al-marḍa ma'a al-mumarridat" }
    ]
  }
},
{
 id: "N67",
  type: "noun",
  arabic: "مُهَنْدِس",
  transliteration: "muhandis",
  english: "engineer",
  root: "ه-ن-د-س",
  gender: "m",
  singular: "مُهَنْدِس",
  dual: "مُهَنْدِسَانِ",
  plural: "مُهَنْدِسُونَ",
  category: "people",
  topics: ["work", "roles"],
  notes: "A technical professional.",
  examples: {
    beginner: [
      { ar: "هُوَ مُهَنْدِسٌ فِي الشَّرِكَةِ", en: "He is an engineer in the company", tr: "huwa muhandis fish-sharika" }
    ],
    medium: [
      { ar: "هِيَ تَعْمَلُ مَعَ المُهَنْدِسِينَ", en: "She works with the engineers", tr: "hiya ta'mal ma'a al-muhandiseen" }
    ],
    advanced: [
      { ar: "هُمْ يُصَمِّمُونَ مَشَارِيعَ جَدِيدَةً", en: "They design new projects", tr: "hum yusammimoon mashari'a jadeeda" }
    ]
  }
},
{
 id: "N68",
  type: "noun",
  arabic: "مِفْتَاح رَبْط",
  transliteration: "miftaah rabt",
  english: "wrench",
  root: "",
  gender: "m",
  singular: "مِفْتَاح رَبْط",
  dual: "مِفْتَاحَا رَبْط",
  plural: "مَفَاتِيح رَبْط",
  category: "tools",
  topics: ["repair-tools"],
  notes: "Used for tightening bolts.",
  examples: {
    beginner: [
      { ar: "هُوَ يَسْتَخْدِمُ مِفْتَاحَ الرَّبْطِ", en: "He uses the wrench", tr: "huwa yastakhdim miftaah ar-rabt" }
    ],
    medium: [
      { ar: "هِيَ تُصْلِحُ الآلَةَ بِمِفْتَاحِ الرَّبْطِ", en: "She repairs the machine with the wrench", tr: "hiya tuslih al-aala bimiftaah ar-rabt" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ مَفَاتِيحَ رَبْطٍ كَبِيرَةً", en: "They use large wrenches", tr: "hum yastakhdimoon mafateeh rabt kabeera" }
    ]
  }
},
{
  id: "N69",
  type: "noun",
  arabic: "مِثْقَاب",
  transliteration: "mithqaab",
  english: "drill",
  root: "ث-ق-ب",
  gender: "m",
  singular: "مِثْقَاب",
  dual: "مِثْقَابَانِ",
  plural: "مَثَاقِيب",
  category: "tools",
  topics: ["repair-tools"],
  notes: "Used for making holes.",
  examples: {
    beginner: [
      { ar: "هُوَ يَسْتَخْدِمُ المِثْقَابَ", en: "He uses the drill", tr: "huwa yastakhdim al-mithqaab" }
    ],
    medium: [
      { ar: "هِيَ تَحْفِرُ الجِدَارَ بِالمِثْقَابِ", en: "She drills the wall with the drill", tr: "hiya tahfir al-jidaar bil-mithqaab" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ مَثَاقِيبَ قَوِيَّةً فِي العَمَلِ", en: "They use powerful drills at work", tr: "hum yastakhdimoon mathaqeeb qawiyya fil-'amal" }
    ]
  }
},
{
  id: "N70",
  type: "noun",
  arabic: "مَطَر",
  transliteration: "matar",
  english: "rain",
  root: "م-ط-ر",
  gender: "m",
  singular: "مَطَر",
  dual: "",
  plural: "أَمْطَار",
  category: "nature",
  topics: ["weather"],
  notes: "Water falling from clouds.",
  examples: {
    beginner: [
      { ar: "هُوَ يَمْشِي فِي المَطَرِ", en: "He walks in the rain", tr: "huwa yamshi fil-matar" }
    ],
    medium: [
      { ar: "هِيَ تَسْتَخْدِمُ المِظَلَّةَ فِي المَطَرِ", en: "She uses the umbrella in the rain", tr: "hiya tastakhdim al-mizalla fil-matar" }
    ],
    advanced: [
      { ar: "هُمْ يُرَاقِبُونَ الأَمْطَارَ لِمَعْرِفَةِ الطَّقْسِ", en: "They monitor the rain to know the weather", tr: "hum yuraaqiboon al-amtaar lima'rifat at-taqs" }
    ]
  }
},
{
  id: "N71",
  type: "noun",
  arabic: "ثَلْج",
  transliteration: "thalj",
  english: "snow",
  root: "ث-ل-ج",
  gender: "m",
  singular: "ثَلْج",
  dual: "",
  plural: "ثُلُوج",
  category: "nature",
  topics: ["weather"],
  notes: "Frozen ice crystals falling from the sky.",
  examples: {
    beginner: [
      { ar: "هُوَ يَلْعَبُ بِالثَّلْجِ", en: "He plays with the snow", tr: "huwa yal'ab bith-thalj" }
    ],
    medium: [
      { ar: "هِيَ تَنْظُرُ إِلَى الثُّلُوجِ", en: "She looks at the snow", tr: "hiya tanzur ila ath-thuloog" }
    ],
    advanced: [
      { ar: "هُمْ يَسَافِرُونَ إِلَى مَكَانٍ مُمْتَلِئٍ بِالثُّلُوجِ", en: "They travel to a snowy place", tr: "hum yusaafiroon ila makaan mumtali' bith-thuloog" }
    ]
  }
},
{
  id: "N72",
  type: "noun",
  arabic: "جُبْن",
  transliteration: "jubn",
  english: "cheese",
  root: "",
  gender: "m",
  singular: "جُبْن",
  dual: "",
  plural: "أَجْبَان",
  category: "food",
  topics: ["ingredients"],
  notes: "A dairy ingredient.",
  examples: {
    beginner: [
      { ar: "هُوَ يَأْكُلُ الجُبْنَ", en: "He eats cheese", tr: "huwa ya'kul al-jubn" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ الجُبْنَ فِي السَّنْدَوِيتْشِ", en: "She puts cheese in the sandwich", tr: "hiya tada' al-jubn fis-sandawitch" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ أَجْبَانًا مُخْتَلِفَةً فِي الطَّبْخِ", en: "They use different cheeses in cooking", tr: "hum yastakhdimoon ajbaan mukhtalifa fit-tabkh" }
    ]
  }
},
{
  id: "N73",
  type: "noun",
  arabic: "خِزَانَة",
  transliteration: "khizaana",
  english: "cupboard",
  root: "خ-ز-ن",
  gender: "f",
  singular: "خِزَانَة",
  dual: "خِزَانَتَانِ",
  plural: "خَزَائِن",
  category: "household",
  topics: ["furniture"],
  notes: "Used for storage.",
  examples: {
    beginner: [
      { ar: "هِيَ تَضَعُ الأَطْبَاقَ فِي الخِزَانَةِ", en: "She puts the dishes in the cupboard", tr: "hiya tada' al-atbaaq fil-khizaana" }
    ],
    medium: [
      { ar: "هُوَ يُرَتِّبُ الخِزَانَةَ", en: "He organises the cupboard", tr: "huwa yurattib al-khizaana" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ خَزَائِنَ كَبِيرَةً فِي المَنْزِلِ", en: "They use large cupboards in the house", tr: "hum yastakhdimoon khaza'in kabeera fil-manzil" }
    ]
  }
},
{
  id: "N74",
  type: "noun",
  arabic: "رَفّ",
  transliteration: "raff",
  english: "shelf",
  root: "ر-ف-ف",
  gender: "m",
  singular: "رَفّ",
  dual: "رَفَّانِ",
  plural: "رُفُوف",
  category: "household",
  topics: ["furniture"],
  notes: "Used for storing items.",
  examples: {
    beginner: [
      { ar: "هُوَ يَضَعُ الكُتُبَ عَلَى الرَّفِّ", en: "He puts the books on the shelf", tr: "huwa yada' al-kutub 'ala ar-raff" }
    ],
    medium: [
      { ar: "هِيَ تُرَتِّبُ الرُّفُوفَ فِي الغُرْفَةِ", en: "She arranges the shelves in the room", tr: "hiya turattib ar-rufoof fil-ghurfa" }
    ],
    advanced: [
      { ar: "هُمْ يَرْكَبُونَ رُفُوفًا جَدِيدَةً فِي المَنْزِلِ", en: "They install new shelves in the house", tr: "hum yarkaboon rufoofan jadeeda fil-manzil" }
    ]
  }
},
{
 id: "N75",
  type: "noun",
  arabic: "فُلْفُل",
  transliteration: "fulful",
  english: "pepper",
  root: "",
  gender: "m",
  singular: "فُلْفُل",
  dual: "",
  plural: "فَلَافِل",
  category: "food",
  topics: ["ingredients"],
  notes: "A common spice used in cooking.",
  examples: {
    beginner: [
      { ar: "هُوَ يُضِيفُ الفُلْفُلَ إِلَى الطَّعَامِ", en: "He adds pepper to the food", tr: "huwa yudeef al-fulful ila at-ta'aam" }
    ],
    medium: [
      { ar: "هِيَ تَشْتَرِي فُلْفُلًا أَسْوَدَ", en: "She buys black pepper", tr: "hiya tashtari fulfulan aswad" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ الفَلَافِلَ فِي الوَصَفَاتِ", en: "They use pepper in recipes", tr: "hum yastakhdimoon al-falafil fil-wasafaat" }
    ]
  }
},
{
 id: "N76",
  type: "noun",
  arabic: "ثُوم",
  transliteration: "thoom",
  english: "garlic",
  root: "",
  gender: "m",
  singular: "ثُومَة",
  dual: "ثُومَتَانِ",
  plural: "ثُوم",
  category: "food",
  topics: ["ingredients"],
  notes: "A strong ingredient used in cooking.",
  examples: {
    beginner: [
      { ar: "هِيَ تَقْطَعُ الثُّومَ", en: "She cuts the garlic", tr: "hiya taqta' ath-thoom" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ الثُّومَ فِي القِدْرِ", en: "He puts garlic in the pot", tr: "huwa yada' ath-thoom fil-qidr" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ الثُّومَ فِي الطَّبْخِ الشَّرْقِيِّ", en: "They use garlic in eastern cooking", tr: "hum yastakhdimoon ath-thoom fit-tabkh ash-sharqi" }
    ]
  }
},
{
  id: "N77",
  type: "noun",
  arabic: "وَرَقَة",
  transliteration: "waraqa",
  english: "leaf",
  root: "و-ر-ق",
  gender: "f",
  singular: "وَرَقَة",
  dual: "وَرَقَتَانِ",
  plural: "أَوْرَاق",
  category: "nature",
  topics: ["plants"],
  notes: "Part of a plant.",
  examples: {
    beginner: [
      { ar: "هُوَ يَنْظُرُ إِلَى الوَرَقَةِ", en: "He looks at the leaf", tr: "huwa yanzur ila al-waraqa" }
    ],
    medium: [
      { ar: "هِيَ تَجْمَعُ أَوْرَاقًا مِنَ الحَدِيقَةِ", en: "She collects leaves from the garden", tr: "hiya tajma' awraaqan min al-hadeeqa" }
    ],
    advanced: [
      { ar: "هُمْ يَدْرُسُونَ أَوْرَاقَ النَّبَاتَاتِ", en: "They study plant leaves", tr: "hum yadrusoon awraaq an-nabaataat" }
    ]
  }
},
{
  id: "N78",
  type: "noun",
  arabic: "أَسَد",
  transliteration: "asad",
  english: "lion",
  root: "",
  gender: "m",
  singular: "أَسَد",
  dual: "أَسَدَانِ",
  plural: "أُسُود",
  category: "nature",
  topics: ["animals"],
  notes: "A large wild animal.",
  examples: {
    beginner: [
      { ar: "هُوَ يَرَى الأَسَدَ فِي الحَدِيقَةِ", en: "He sees the lion in the park", tr: "huwa yara al-asad fil-hadeeqa" }
    ],
    medium: [
      { ar: "هِيَ تُصَوِّرُ الأُسُودَ", en: "She photographs the lions", tr: "hiya tusawwir al-usood" }
    ],
    advanced: [
      { ar: "هُمْ يَدْرُسُونَ سُلُوكَ الأُسُودِ", en: "They study the behaviour of lions", tr: "hum yadrusoon sulook al-usood" }
    ]
  }
},
{
  id: "N79",
  type: "noun",
  arabic: "رَسَّام",
  transliteration: "rassaam",
  english: "painter",
  root: "ر-س-م",
  gender: "m",
  singular: "رَسَّام",
  dual: "رَسَّامَانِ",
  plural: "رَسَّامُونَ",
  category: "people",
  topics: ["roles"],
  notes: "A person who paints artwork.",
  examples: {
    beginner: [
      { ar: "هُوَ رَسَّامٌ مَهَرَةٌ", en: "He is a skilled painter", tr: "huwa rassaam mahir" }
    ],
    medium: [
      { ar: "هِيَ تُشَاهِدُ الرَّسَّامَ وَهُوَ يَرْسُمُ", en: "She watches the painter as he paints", tr: "hiya tushahid ar-rassaam wahuwa yarsum" }
    ],
    advanced: [
      { ar: "هُمْ يَعْرِضُونَ لَوْحَاتِ الرَّسَّامِينَ", en: "They display the painters' artworks", tr: "hum ya'ridoon lawhaat ar-rassaameen" }
    ]
  }
},
{
 id: "N80",
  type: "noun",
  arabic: "رَئِيس",
  transliteration: "ra'eess",
  english: "boss",
  root: "ر-أ-س",
  gender: "m",
  singular: "رَئِيس",
  dual: "رَئِيسَانِ",
  plural: "رُؤَسَاء",
  category: "people",
  topics: ["work", "roles"],
  notes: "A person in charge.",
  examples: {
    beginner: [
      { ar: "هُوَ رَئِيسُ الفَرِيقِ", en: "He is the team boss", tr: "huwa ra'eess al-fareeq" }
    ],
    medium: [
      { ar: "هِيَ تَتَحَدَّثُ مَعَ الرَّئِيسِ", en: "She speaks with the boss", tr: "hiya tatahaddath ma'a ar-ra'eess" }
    ],
    advanced: [
      { ar: "هُمْ يَجْتَمِعُونَ مَعَ الرُّؤَسَاءِ كُلَّ أُسْبُوعٍ", en: "They meet with the bosses every week", tr: "hum yajtamioon ma'a ar-ru'asa' kulla usboo'" }
    ]
  }
},
{
  id: "N81",
  type: "noun",
  arabic: "صَمْغ",
  transliteration: "samgh",
  english: "glue",
  root: "",
  gender: "m",
  singular: "صَمْغ",
  dual: "",
  plural: "صُمُوغ",
  category: "school",
  topics: ["stationery"],
  notes: "Used for sticking objects.",
  examples: {
    beginner: [
      { ar: "هُوَ يَسْتَخْدِمُ الصَّمْغَ", en: "He uses the glue", tr: "huwa yastakhdim as-samgh" }
    ],
    medium: [
      { ar: "هِيَ تَلْصَقُ الوَرَقَ بِالصَّمْغِ", en: "She sticks the paper with glue", tr: "hiya talsaq al-waraq bis-samgh" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ صُمُوغًا قَوِيَّةً فِي المَشَارِيعِ", en: "They use strong glue in projects", tr: "hum yastakhdimoon sumoog qawiyya fil-mashari'" }
    ]
  }
},
{
 id: "N82",
  type: "noun",
  arabic: "شَمْعَة",
  transliteration: "sham'a",
  english: "candle",
  root: "ش-م-ع",
  gender: "f",
  singular: "شَمْعَة",
  dual: "شَمْعَتَانِ",
  plural: "شَمْع",
  category: "household",
  topics: ["objects"],
  notes: "Used for light or decoration.",
  examples: {
    beginner: [
      { ar: "هِيَ تُشْعِلُ الشَّمْعَةَ", en: "She lights the candle", tr: "hiya tush'il ash-sham'a" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ الشَّمْعَ فِي الغُرْفَةِ", en: "He places the candle in the room", tr: "huwa yada' ash-sham' fil-ghurfa" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ الشَّمْعَ فِي الحَفَلَاتِ", en: "They use candles in events", tr: "hum yastakhdimoon ash-sham' fil-hafalaat" }
    ]
  }
},
{
  id: "N83",
  type: "noun",
  arabic: "تَسْرِيحَة",
  transliteration: "tasreeha",
  english: "vanity",
  root: "",
  gender: "f",
  singular: "تَسْرِيحَة",
  dual: "تَسْرِيحَتَانِ",
  plural: "تَسْرِيحَات",
  category: "household",
  topics: ["furniture"],
  notes: "A small dressing table with a mirror.",
  examples: {
    beginner: [
      { ar: "هِيَ تَجْلِسُ عِنْدَ التَّسْرِيحَةِ", en: "She sits at the vanity", tr: "hiya tajlis 'ind at-tasreeha" }
    ],
    medium: [
      { ar: "هُوَ يُرَتِّبُ الأَشْيَاءَ عَلَى التَّسْرِيحَةِ", en: "He arranges items on the vanity", tr: "huwa yurattib al-ashyaa' 'ala at-tasreeha" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ تَسْرِيحَاتٍ جَدِيدَةً لِلغُرَفِ", en: "They buy new vanities for the rooms", tr: "hum yashtaroon tasreehaat jadeeda lil-ghuraf" }
    ]
  }
},
{
  id: "N84",
  type: "noun",
  arabic: "شَجَاعَة",
  transliteration: "shaja'a",
  english: "courage",
  root: "ش-ج-ع",
  gender: "f",
  singular: "شَجَاعَة",
  dual: "",
  plural: "",
  category: "abstract",
  topics: ["qualities"],
  notes: "A positive human quality.",
  examples: {
    beginner: [
      { ar: "هِيَ عِنْدَهَا شَجَاعَةٌ كَبِيرَةٌ", en: "She has great courage", tr: "hiya 'indaha shaja'a kabeera" }
    ],
    medium: [
      { ar: "هُوَ يُظْهِرُ شَجَاعَتَهُ فِي المَوَاقِفِ الصَّعْبَةِ", en: "He shows his courage in difficult situations", tr: "huwa yuzhir shaja'atahu fil-mawaaqif as-sa'ba" }
    ],
    advanced: [
      { ar: "هُمْ يُشَجِّعُونَ الآخَرِينَ عَلَى الشَّجَاعَةِ", en: "They encourage others to be courageous", tr: "hum yushajjioon al-aakhareen 'ala ash-shaja'a" }
    ]
  }
},
{
  id: "N85",
  type: "noun",
  arabic: "فَرَاوْلَة",
  transliteration: "farawla",
  english: "strawberry",
  root: "",
  gender: "f",
  singular: "فَرَاوْلَة",
  dual: "فَرَاوْلَتَانِ",
  plural: "فَرَاوْل",
  category: "food",
  topics: ["fruits"],
  notes: "A sweet red fruit.",
  examples: {
    beginner: [
      { ar: "هِيَ تَأْكُلُ فَرَاوْلَةً", en: "She eats a strawberry", tr: "hiya ta'kul farawla" }
    ],
    medium: [
      { ar: "هُوَ يَغْسِلُ الفَرَاوْلَةَ قَبْلَ الأَكْلِ", en: "He washes the strawberries before eating", tr: "huwa yaghsil al-farawla qabl al-akl" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ فَرَاوْلَةً طَازِجَةً", en: "They buy fresh strawberries", tr: "hum yashtaroon farawla taazija" }
    ]
  }
},
{
  id: "N86",
  type: "noun",
  arabic: "بَطِّيخ",
  transliteration: "batteekh",
  english: "watermelon",
  root: "",
  gender: "m",
  singular: "بَطِّيخَة",
  dual: "بَطِّيخَتَانِ",
  plural: "بَطِّيخ",
  category: "food",
  topics: ["fruits"],
  notes: "A large sweet fruit.",
  examples: {
    beginner: [
      { ar: "هُوَ يَأْكُلُ بَطِّيخًا", en: "He eats watermelon", tr: "huwa ya'kul batteekhan" }
    ],
    medium: [
      { ar: "هِيَ تَقْطَعُ البَطِّيخَ لِلغَدَاءِ", en: "She cuts the watermelon for lunch", tr: "hiya taqta' al-batteekh lil-ghadaa'" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ بَطِّيخًا كَبِيرًا لِلعَائِلَةِ", en: "They buy a large watermelon for the family", tr: "hum yashtaroon batteekhan kabeeran lil-'aaila" }
    ]
  }
},
{
  id: "N87",
  type: "noun",
  arabic: "فَرَاشَة",
  transliteration: "farasha",
  english: "butterfly",
  root: "",
  gender: "f",
  singular: "فَرَاشَة",
  dual: "فَرَاشَتَانِ",
  plural: "فَرَاشَات",
  category: "nature",
  topics: ["animals"],
  notes: "A colorful flying insect.",
  examples: {
    beginner: [
      { ar: "هِيَ تَرَى فَرَاشَةً جَمِيلَةً", en: "She sees a beautiful butterfly", tr: "hiya tara farasha jameela" }
    ],
    medium: [
      { ar: "هُوَ يُصَوِّرُ الفَرَاشَاتِ فِي الحَدِيقَةِ", en: "He photographs butterflies in the garden", tr: "huwa yusawwir al-farashaat fil-hadeeqa" }
    ],
    advanced: [
      { ar: "هُمْ يَدْرُسُونَ أَلْوَانَ الفَرَاشَاتِ", en: "They study the colors of butterflies", tr: "hum yadrusoon alwan al-farashaat" }
    ]
  }
},
{
  id: "N88",
  type: "noun",
  arabic: "نَجَّار",
  transliteration: "najjaar",
  english: "carpenter",
  root: "ن-ج-ر",
  gender: "m",
  singular: "نَجَّار",
  dual: "نَجَّارَانِ",
  plural: "نَجَّارُونَ",
  category: "people",
  topics: ["roles", "work"],
  notes: "A person who works with wood.",
  examples: {
    beginner: [
      { ar: "هُوَ نَجَّارٌ مَاهِرٌ", en: "He is a skilled carpenter", tr: "huwa najjaar maahir" }
    ],
    medium: [
      { ar: "هِيَ تَطْلُبُ مُسَاعَدَةَ النَّجَّارِ", en: "She asks for the carpenter's help", tr: "hiya tatlub musaa'adat an-najjaar" }
    ],
    advanced: [
      { ar: "هُمْ يَصْنَعُونَ أَثَاثًا مَعَ النَّجَّارِينَ", en: "They make furniture with carpenters", tr: "hum yasna'oon athaathan ma'a an-najareen" }
    ]
  }
},
{
 id: "N89",
  type: "noun",
  arabic: "دَهَّان",
  transliteration: "dahhaan",
  english: "house painter",
  root: "د-ه-ن",
  gender: "m",
  singular: "دَهَّان",
  dual: "دَهَّانَانِ",
  plural: "دَهَّانُونَ",
  category: "people",
  topics: ["work", "roles"],
  notes: "A person who paints walls and buildings.",
  examples: {
    beginner: [
      { ar: "هُوَ دَهَّانٌ فِي الشَّرِكَةِ", en: "He is a painter in the company", tr: "huwa dahhaan fish-sharika" }
    ],
    medium: [
      { ar: "هِيَ تُرَاقِبُ الدَّهَّانَ وَهُوَ يَطْلِي الجِدَارَ", en: "She watches the painter paint the wall", tr: "hiya turaaqib ad-dahhaan wahuwa yatli al-jidaar" }
    ],
    advanced: [
      { ar: "هُمْ يُصْلِحُونَ الجُدْرَانَ مَعَ الدَّهَّانِينَ", en: "They repair walls with painters", tr: "hum yuslihoon al-judraan ma'a ad-dahhaneen" }
    ]
  }
},
{
 id: "N90",
  type: "noun",
  arabic: "طَقْمُ مَفَاكّ",
  transliteration: "taqm mafakk",
  english: "screwdriver set",
  root: "",
  gender: "m",
  singular: "طَقْمُ مَفَاكّ",
  dual: "",
  plural: "أَطْقَامُ مَفَاكّ",
  category: "tools",
  topics: ["repair-tools"],
  notes: "A set of screwdrivers.",
  examples: {
    beginner: [
      { ar: "هُوَ يَسْتَخْدِمُ طَقْمَ المَفَاكِّ", en: "He uses the screwdriver set", tr: "huwa yastakhdim taqm al-mafakk" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ الطَّقْمَ فِي الصُّنْدُوقِ", en: "She puts the set in the box", tr: "hiya tada' at-taqm fis-sunduq" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ أَطْقَامًا مُخْتَلِفَةً فِي العَمَلِ", en: "They use different sets at work", tr: "hum yastakhdimoon atqaman mukhtalifa fil-'amal" }
    ]
  }
},
{
  id: "N91",
  type: "noun",
  arabic: "مِكْنَسَة كَهْرَبَائِيَّة",
  transliteration: "miknasa kahraba'iyya",
  english: "vacuum cleaner",
  root: "",
  gender: "f",
  singular: "مِكْنَسَة كَهْرَبَائِيَّة",
  dual: "مِكْنَسَتَانِ كَهْرَبَائِيَّتَانِ",
  plural: "مَكَانِس كَهْرَبَائِيَّة",
  category: "household",
  topics: ["cleaning", "appliances"],
  notes: "Used for cleaning floors.",
  examples: {
    beginner: [
      { ar: "هِيَ تَسْتَخْدِمُ المِكْنَسَةَ الكَهْرَبَائِيَّةَ", en: "She uses the vacuum cleaner", tr: "hiya tastakhdim al-miknasa al-kahraba'iyya" }
    ],
    medium: [
      { ar: "هُوَ يُنَظِّفُ الغُرْفَةَ بِالمِكْنَسَةِ", en: "He cleans the room with the vacuum", tr: "huwa yunazzif al-ghurfa bil-miknasa" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ مَكَانِسَ كَهْرَبَائِيَّةً جَدِيدَةً", en: "They buy new vacuum cleaners", tr: "hum yashtaroon makaanis kahraba'iyya jadeeda" }
    ]
  }
},
{
  id: "N92",
  type: "noun",
  arabic: "غِطَاءُ لِحَاف",
  transliteration: "ghitaa' lihaaf",
  english: "duvet cover",
  root: "",
  gender: "m",
  singular: "غِطَاءُ لِحَاف",
  dual: "غِطَاءَا لِحَاف",
  plural: "أَغْطِيَةُ لِحَاف",
  category: "household",
  topics: ["objects"],
  notes: "A cover used for blankets.",
  examples: {
    beginner: [
      { ar: "هِيَ تُغَيِّرُ غِطَاءَ اللِّحَافِ", en: "She changes the duvet cover", tr: "hiya tughayyir ghitaa' al-lihaaf" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ غِطَاءً جَدِيدًا عَلَى اللِّحَافِ", en: "He puts a new cover on the duvet", tr: "huwa yada' ghitaa'an jadeedan 'ala al-lihaaf" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ أَغْطِيَةً مُلَوَّنَةً لِلغُرَفِ", en: "They buy colorful covers for the rooms", tr: "hum yashtaroon aghṭiya mulawwana lil-ghuraf" }
    ]
  }
},
{
  id: "N93",
  type: "noun",
  arabic: "صِدْق",
  transliteration: "sidq",
  english: "honesty",
  root: "ص-د-ق",
  gender: "m",
  singular: "صِدْق",
  dual: "",
  plural: "",
  category: "abstract",
  topics: ["qualities"],
  notes: "A positive moral quality.",
  examples: {
    beginner: [
      { ar: "هُوَ يَتَحَدَّثُ بِصِدْقٍ", en: "He speaks honestly", tr: "huwa yatahaddath bisidq" }
    ],
    medium: [
      { ar: "هِيَ تُحِبُّ الصِّدْقَ فِي العَلَاقَاتِ", en: "She values honesty in relationships", tr: "hiya tuhibb as-sidq fil-'alaaqaat" }
    ],
    advanced: [
      { ar: "هُمْ يُشَجِّعُونَ الصِّدْقَ فِي العَمَلِ", en: "They encourage honesty at work", tr: "hum yushajjioon as-sidq fil-'amal" }
    ]
  }
},
{
  id: "N94",
  type: "noun",
  arabic: "صَبْر",
  transliteration: "sabr",
  english: "patience",
  root: "ص-ب-ر",
  gender: "m",
  singular: "صَبْر",
  dual: "",
  plural: "",
  category: "abstract",
  topics: ["qualities"],
  notes: "A calm ability to wait.",
  examples: {
    beginner: [
      { ar: "هُوَ يُظْهِرُ صَبْرًا كَبِيرًا", en: "He shows great patience", tr: "huwa yuzhir sabran kabeeran" }
    ],
    medium: [
      { ar: "هِيَ تَتَصَرَّفُ بِصَبْرٍ فِي المَوَاقِفِ الصَّعْبَةِ", en: "She acts patiently in difficult situations", tr: "hiya tatasarraf bisabr fil-mawaaqif as-sa'ba" }
    ],
    advanced: [
      { ar: "هُمْ يَتَعَلَّمُونَ الصَّبْرَ فِي الحَيَاةِ", en: "They learn patience in life", tr: "hum yata'allamoon as-sabr fil-hayaah" }
    ]
  }
},
{
  id: "N95",
  type: "noun",
  arabic: "خَوْخَة",
  transliteration: "khawkha",
  english: "peach",
  root: "",
  gender: "f",
  singular: "خَوْخَة",
  dual: "خَوْخَتَانِ",
  plural: "خَوْخ",
  category: "food",
  topics: ["fruits"],
  notes: "A sweet soft fruit.",
  examples: {
    beginner: [
      { ar: "هِيَ تَأْكُلُ خَوْخَةً", en: "She eats a peach", tr: "hiya ta'kul khawkha" }
    ],
    medium: [
      { ar: "هُوَ يَغْسِلُ الخَوْخَ قَبْلَ الأَكْلِ", en: "He washes the peaches before eating", tr: "huwa yaghsil al-khawkh qabl al-akl" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ خَوْخًا طَازِجًا", en: "They buy fresh peaches", tr: "hum yashtaroon khawkhan taazijan" }
    ]
  }
},
{
  id: "N96",
  type: "noun",
  arabic: "عِنَب",
  transliteration: "inab",
  english: "grapes",
  root: "",
  gender: "m",
  singular: "عِنَبَة",
  dual: "عِنَبَتَانِ",
  plural: "عِنَب",
  category: "food",
  topics: ["fruits"],
  notes: "A small sweet fruit.",
  examples: {
    beginner: [
      { ar: "هُوَ يَأْكُلُ العِنَبَ", en: "He eats grapes", tr: "huwa ya'kul al-inab" }
    ],
    medium: [
      { ar: "هِيَ تَغْسِلُ العِنَبَ قَبْلَ التَّقْدِيمِ", en: "She washes the grapes before serving", tr: "hiya taghsil al-inab qabl at-taqdeem" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ عِنَبًا أَحْمَرَ لِلغَدَاءِ", en: "They buy red grapes for lunch", tr: "hum yashtaroon inaban ahmar lil-ghadaa'" }
    ]
  }
},
{
  id: "N97",
  type: "noun",
  arabic: "جَمَل",
  transliteration: "jamal",
  english: "camel",
  root: "",
  gender: "m",
  singular: "جَمَل",
  dual: "جَمَلَانِ",
  plural: "جِمَال",
  category: "nature",
  topics: ["animals"],
  notes: "A desert animal known for endurance.",
  examples: {
    beginner: [
      { ar: "هُوَ يَرْكَبُ الجَمَلَ", en: "He rides the camel", tr: "huwa yarkab al-jamal" }
    ],
    medium: [
      { ar: "هِيَ تُطْعِمُ الجِمَالَ فِي المَزْرَعَةِ", en: "She feeds the camels on the farm", tr: "hiya tut'im al-jimaal fil-mazra'a" }
    ],
    advanced: [
      { ar: "هُمْ يَدْرُسُونَ حَيَاةَ الجِمَالِ فِي الصَّحْرَاءِ", en: "They study camel life in the desert", tr: "hum yadrusoon hayaat al-jimaal fis-sahra'" }
    ]
  }
},
{
  id: "N98",
  type: "noun",
  arabic: "عَالِم",
  transliteration: "aalim",
  english: "scientist",
  root: "ع-ل-م",
  gender: "m",
  singular: "عَالِم",
  dual: "عَالِمَانِ",
  plural: "عُلَمَاء",
  category: "people",
  topics: ["roles", "work"],
  notes: "A person who studies science.",
  examples: {
    beginner: [
      { ar: "هُوَ عَالِمٌ فِي المَعْمَلِ", en: "He is a scientist in the lab", tr: "huwa aalim fil-ma'mal" }
    ],
    medium: [
      { ar: "هِيَ تَعْمَلُ مَعَ العُلَمَاءِ", en: "She works with scientists", tr: "hiya ta'mal ma'a al-ulamaa'" }
    ],
    advanced: [
      { ar: "هُمْ يَكْتَشِفُونَ مَعْلُومَاتٍ جَدِيدَةً", en: "They discover new information", tr: "hum yaktashifoon ma'loomaat jadeeda" }
    ]
  }
},
{
  id: "N99",
  type: "noun",
  arabic: "مُحَاسِب",
  transliteration: "muhaasib",
  english: "accountant",
  root: "ح-س-ب",
  gender: "m",
  singular: "مُحَاسِب",
  dual: "مُحَاسِبَانِ",
  plural: "مُحَاسِبُونَ",
  category: "people",
  topics: ["work", "roles"],
  notes: "A person who manages financial records.",
  examples: {
    beginner: [
      { ar: "هُوَ مُحَاسِبٌ فِي الشَّرِكَةِ", en: "He is an accountant in the company", tr: "huwa muhaasib fish-sharika" }
    ],
    medium: [
      { ar: "هِيَ تُرَاجِعُ حِسَابَاتِ الشَّهْرِ", en: "She reviews the monthly accounts", tr: "hiya turaaji' hisaabaat ash-shahr" }
    ],
    advanced: [
      { ar: "هُمْ يُدَقِّقُونَ فِي السِّجِلَّاتِ المَالِيَّةِ", en: "They audit the financial records", tr: "hum yudaqqiqoon fis-sijillaat al-maaliyya" }
    ]
  }
},
{
  id: "N100",
  type: "noun",
  arabic: "صُنْدُوقُ أَدَوَات",
  transliteration: "sunduq adawaat",
  english: "toolbox",
  root: "",
  gender: "m",
  singular: "صُنْدُوقُ أَدَوَات",
  dual: "صُنْدُوقَا أَدَوَات",
  plural: "صَنَادِيقُ أَدَوَات",
  category: "tools",
  topics: ["repair-tools"],
  notes: "A box used to store tools.",
  examples: {
    beginner: [
      { ar: "هُوَ يَحْمِلُ صُنْدُوقَ الأَدَوَاتِ", en: "He carries the toolbox", tr: "huwa yahmil sunduq al-adawaat" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ الأَدَوَاتِ فِي الصُّنْدُوقِ", en: "She puts the tools in the box", tr: "hiya tada' al-adawaat fis-sunduq" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ صَنَادِيقَ أَدَوَاتٍ كَبِيرَةً", en: "They use large toolboxes", tr: "hum yastakhdimoon sanadeeq adawaat kabeera" }
    ]
  }
},
{
  id: "N101",
  type: "noun",
  arabic: "أَرِيكَة",
  transliteration: "areeka",
  english: "sofa",
  root: "",
  gender: "f",
  singular: "أَرِيكَة",
  dual: "أَرِيكَتَانِ",
  plural: "أَرَائِك",
  category: "household",
  topics: ["furniture"],
  notes: "A comfortable seat for multiple people.",
  examples: {
    beginner: [
      { ar: "هِيَ تَجْلِسُ عَلَى الأَرِيكَةِ", en: "She sits on the sofa", tr: "hiya tajlis 'ala al-areeka" }
    ],
    medium: [
      { ar: "هُوَ يُرَتِّبُ الأَرِيكَةَ فِي غُرْفَةِ الجُلُوسِ", en: "He arranges the sofa in the living room", tr: "huwa yurattib al-areeka fil-ghurfa al-juloos" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ أَرَائِكَ جَدِيدَةً لِلمَنْزِلِ", en: "They buy new sofas for the house", tr: "hum yashtaroon araa'ik jadeeda lil-manzil" }
    ]
  }
},
{
  id: "N102",
  type: "noun",
  arabic: "دُولَاب",
  transliteration: "doolaab",
  english: "wardrobe",
  root: "",
  gender: "m",
  singular: "دُولَاب",
  dual: "دُولَابَانِ",
  plural: "دَوَالِيب",
  category: "household",
  topics: ["furniture"],
  notes: "Used for storing clothes.",
  examples: {
    beginner: [
      { ar: "هُوَ يَضَعُ مَلَابِسَهُ فِي الدُّولَابِ", en: "He puts his clothes in the wardrobe", tr: "huwa yada' malaabisahu fid-doolaab" }
    ],
    medium: [
      { ar: "هِيَ تُرَتِّبُ الدُّولَابَ كُلَّ أُسْبُوعٍ", en: "She organizes the wardrobe every week", tr: "hiya turattib ad-doolaab kulla usboo'" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ دَوَالِيبَ جَدِيدَةً لِلغُرَفِ", en: "They buy new wardrobes for the rooms", tr: "hum yashtaroon dawaaleeb jadeeda lil-ghuraf" }
    ]
  }
},
{
  id: "N103",
  type: "noun",
  arabic: "حِكْمَة",
  transliteration: "hikma",
  english: "wisdom",
  root: "ح-ك-م",
  gender: "f",
  singular: "حِكْمَة",
  dual: "",
  plural: "",
  category: "abstract",
  topics: ["qualities"],
  notes: "Deep understanding and good judgment.",
  examples: {
    beginner: [
      { ar: "هُوَ يَتَكَلَّمُ بِحِكْمَةٍ", en: "He speaks with wisdom", tr: "huwa yatakallam bihikma" }
    ],
    medium: [
      { ar: "هِيَ تُحِبُّ النَّاسَ ذَوِي الحِكْمَةِ", en: "She likes people with wisdom", tr: "hiya tuhibb an-naas dhawil-hikma" }
    ],
    advanced: [
      { ar: "هُمْ يَتَعَلَّمُونَ الحِكْمَةَ مِنَ التَّجَارِبِ", en: "They learn wisdom from experiences", tr: "hum yata'allamoon al-hikma min at-tajaarib" }
    ]
  }
},
{
  id: "N104",
  type: "noun",
  arabic: "أَمَل",
  transliteration: "amal",
  english: "hope",
  root: "أ-م-ل",
  gender: "m",
  singular: "أَمَل",
  dual: "",
  plural: "آمَال",
  category: "abstract",
  topics: ["emotions"],
  notes: "A positive feeling about the future.",
  examples: {
    beginner: [
      { ar: "هُوَ عِنْدَهُ أَمَلٌ كَبِيرٌ", en: "He has great hope", tr: "huwa 'indahu amal kabeer" }
    ],
    medium: [
      { ar: "هِيَ تَتَحَدَّثُ عَنْ آمَالِهَا", en: "She talks about her hopes", tr: "hiya tatahaddath 'an aamaaliha" }
    ],
    advanced: [
      { ar: "هُمْ يُشَجِّعُونَ الآخَرِينَ عَلَى الأَمَلِ", en: "They encourage others to have hope", tr: "hum yushajjioon al-aakhareen 'ala al-amal" }
    ]
  }
},
{
  id: "N105",
  type: "noun",
  arabic: "قَارَّة",
  transliteration: "qaara",
  english: "continent",
  root: "",
  gender: "f",
  singular: "قَارَّة",
  dual: "قَارَّتَانِ",
  plural: "قَارَّات",
  category: "places",
  topics: ["geography"],
  notes: "A large landmass on Earth.",
  examples: {
    beginner: [
      { ar: "هُوَ يَدْرُسُ القَارَّاتِ", en: "He studies the continents", tr: "huwa yadrus al-qaaraat" }
    ],
    medium: [
      { ar: "هِيَ تَسَافِرُ إِلَى قَارَّةٍ جَدِيدَةٍ", en: "She travels to a new continent", tr: "hiya tusaafir ila qaara jadeeda" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَكْشِفُونَ مَعَالِمَ القَارَّاتِ", en: "They explore the landmarks of continents", tr: "hum yastakshifoon ma'aalim al-qaaraat" }
    ]
  }
},
{
  id: "N106",
  type: "noun",
  arabic: "صَحْرَاء",
  transliteration: "sahraa'",
  english: "desert",
  root: "",
  gender: "f",
  singular: "صَحْرَاء",
  dual: "صَحْرَاوَانِ",
  plural: "صَحَارٍ",
  category: "places",
  topics: ["geography", "landscapes"],
  notes: "A dry sandy region.",
  examples: {
    beginner: [
      { ar: "هُوَ يَمْشِي فِي الصَّحْرَاءِ", en: "He walks in the desert", tr: "huwa yamshi fis-sahraa'" }
    ],
    medium: [
      { ar: "هِيَ تُصَوِّرُ مَنَاظِرَ الصَّحْرَاءِ", en: "She photographs desert scenery", tr: "hiya tusawwir manazir as-sahraa'" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَكْشِفُونَ صَحَارِيَّ جَدِيدَةً", en: "They explore new deserts", tr: "hum yastakshifoon sahariyya jadeeda" }
    ]
  }
},
{
  id: "N107",
  type: "noun",
  arabic: "مَمَرّ",
  transliteration: "mamar",
  english: "hallway",
  root: "",
  gender: "m",
  singular: "مَمَرّ",
  dual: "مَمَرَّانِ",
  plural: "مَمَرَّات",
  category: "household",
  topics: ["rooms"],
  notes: "A passage inside a house.",
  examples: {
    beginner: [
      { ar: "هُوَ يَمْشِي فِي المَمَرِّ", en: "He walks in the hallway", tr: "huwa yamshi fil-mamar" }
    ],
    medium: [
      { ar: "هِيَ تُنَظِّفُ المَمَرَّ كُلَّ يَوْمٍ", en: "She cleans the hallway every day", tr: "hiya tunazzif al-mamar kulla yawm" }
    ],
    advanced: [
      { ar: "هُمْ يُزَيِّنُونَ المَمَرَّ بِالصُّوَرِ", en: "They decorate the hallway with pictures", tr: "hum yuzayinoon al-mamar bis-suwar" }
    ]
  }
},
{
  id: "N108",
  type: "noun",
  arabic: "غَزَال",
  transliteration: "ghazaal",
  english: "deer",
  root: "",
  gender: "m",
  singular: "غَزَال",
  dual: "غَزَالَانِ",
  plural: "غِزْلَان",
  category: "nature",
  topics: ["animals"],
  notes: "A graceful wild animal.",
  examples: {
    beginner: [
      { ar: "هُوَ يَرَى غَزَالًا فِي الغَابَةِ", en: "He sees a deer in the forest", tr: "huwa yara ghazaalan fil-ghaaba" }
    ],
    medium: [
      { ar: "هِيَ تُصَوِّرُ الغِزْلَانَ", en: "She photographs the deer", tr: "hiya tusawwir al-ghizlaan" }
    ],
    advanced: [
      { ar: "هُمْ يَدْرُسُونَ حَرَكَاتِ الغِزْلَانِ", en: "They study the movements of deer", tr: "hum yadrusoon harakaat al-ghizlaan" }
    ]
  }
},
{
  id: "N109",
  type: "noun",
  arabic: "مَهَمَّة",
  transliteration: "mahama",
  english: "task",
  root: "ه-م-م",
  gender: "f",
  singular: "مَهَمَّة",
  dual: "مَهَمَّتَانِ",
  plural: "مَهَامّ",
  category: "work",
  topics: ["tasks"],
  notes: "A job or duty to complete.",
  examples: {
    beginner: [
      { ar: "هُوَ يُنَفِّذُ مَهَمَّةً جَدِيدَةً", en: "He completes a new task", tr: "huwa yunaffidh mahama jadeeda" }
    ],
    medium: [
      { ar: "هِيَ تُرَتِّبُ مَهَامَّهَا كُلَّ صَبَاحٍ", en: "She organizes her tasks every morning", tr: "hiya turattib mahaamaha kulla sabaah" }
    ],
    advanced: [
      { ar: "هُمْ يُنَجِّزُونَ المَهَامَّ فِي وَقْتٍ قَصِيرٍ", en: "They finish tasks in a short time", tr: "hum yunajjizoon al-mahaam fi waqt qaseer" }
    ]
  }
},
{
  id: "N110",
  type: "noun",
  arabic: "كَمَّاشَة",
  transliteration: "kammasha",
  english: "pliers",
  root: "",
  gender: "f",
  singular: "كَمَّاشَة",
  dual: "كَمَّاشَتَانِ",
  plural: "كَمَّاشَات",
  category: "tools",
  topics: ["hand-tools"],
  notes: "Used for gripping objects.",
  examples: {
    beginner: [
      { ar: "هُوَ يَسْتَخْدِمُ الكَمَّاشَةَ", en: "He uses the pliers", tr: "huwa yastakhdim al-kammasha" }
    ],
    medium: [
      { ar: "هِيَ تُصْلِحُ السِّلْكِ بِالكَمَّاشَةِ", en: "She fixes the wire with pliers", tr: "hiya tuslih as-silk bil-kammasha" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ كَمَّاشَاتٍ قَوِيَّةً فِي العَمَلِ", en: "They use strong pliers at work", tr: "hum yastakhdimoon kammashaat qawiyya fil-'amal" }
    ]
  }
},
{
  id: "N111",
  type: "noun",
  arabic: "مِجْرَف",
  transliteration: "mijraf",
  english: "shovel",
  root: "",
  gender: "m",
  singular: "مِجْرَف",
  dual: "مِجْرَفَانِ",
  plural: "مَجَارِف",
  category: "tools",
  topics: ["outdoor-tools"],
  notes: "Used for digging soil.",
  examples: {
    beginner: [
      { ar: "هُوَ يَحْفِرُ بِالمِجْرَفِ", en: "He digs with the shovel", tr: "huwa yahfir bil-mijraf" }
    ],
    medium: [
      { ar: "هِيَ تَسْتَخْدِمُ المِجْرَفَ فِي الحَدِيقَةِ", en: "She uses the shovel in the garden", tr: "hiya tastakhdim al-mijraf fil-hadeeqa" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ مَجَارِفَ كَبِيرَةً لِلحَفْرِ", en: "They use large shovels for digging", tr: "hum yastakhdimoon majaarif kabeera lil-hafr" }
    ]
  }
},
{
  id: "N112",
  type: "noun",
  arabic: "مِسْحَاة",
  transliteration: "mishha",
  english: "rake",
  root: "",
  gender: "f",
  singular: "مِسْحَاة",
  dual: "مِسْحَاتَانِ",
  plural: "مَسَاحٍ",
  category: "tools",
  topics: ["outdoor-tools"],
  notes: "Used for gathering leaves.",
  examples: {
    beginner: [
      { ar: "هُوَ يَجْمَعُ الأَوْرَاقَ بِالمِسْحَاةِ", en: "He gathers leaves with the rake", tr: "huwa yajma' al-awraaq bil-mishha" }
    ],
    medium: [
      { ar: "هِيَ تَنْظُفُ الحَدِيقَةَ بِالمِسْحَاةِ", en: "She cleans the garden with the rake", tr: "hiya tunazzif al-hadeeqa bil-mishha" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ مَسَاحِيَّ كَبِيرَةً فِي المَزَارِعِ", en: "They use large rakes on farms", tr: "hum yastakhdimoon masaahi kabeera fil-mazari'" }
    ]
  }
},
{
  id: "N113",
  type: "noun",
  arabic: "قُبَّعَة",
  transliteration: "qubba'a",
  english: "hat",
  root: "",
  gender: "f",
  singular: "قُبَّعَة",
  dual: "قُبَّعَتَانِ",
  plural: "قُبَّعَات",
  category: "people",
  topics: ["accessories"],
  notes: "A head covering.",
  examples: {
    beginner: [
      { ar: "هِيَ تَلْبَسُ قُبَّعَةً", en: "She wears a hat", tr: "hiya talbas qubba'a" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ القُبَّعَةَ عَلَى الرَّفِّ", en: "He puts the hat on the shelf", tr: "huwa yada' al-qubba'a 'ala ar-raff" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ قُبَّعَاتٍ لِلرِّحْلَةِ", en: "They buy hats for the trip", tr: "hum yashtaroon qubba'aat lil-rihla" }
    ]
  }
},
{
  id: "N114",
  type: "noun",
  arabic: "وِشَاح",
  transliteration: "wishaah",
  english: "scarf",
  root: "",
  gender: "m",
  singular: "وِشَاح",
  dual: "وِشَاحَانِ",
  plural: "أَوْشِحَة",
  category: "people",
  topics: ["accessories"],
  notes: "A cloth worn around the neck.",
  examples: {
    beginner: [
      { ar: "هِيَ تَلْبَسُ وِشَاحًا", en: "She wears a scarf", tr: "hiya talbas wishaahan" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ الوِشَاحَ فِي الخِزَانَةِ", en: "He puts the scarf in the cupboard", tr: "huwa yada' al-wishaah fil-khizaana" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ أَوْشِحَةً لِلشِّتَاءِ", en: "They buy scarves for winter", tr: "hum yashtaroon awshiha lil-shitaa'" }
    ]
  }
},
{
  id: "N115",
  type: "noun",
  arabic: "غَلَّايَة",
  transliteration: "ghallaaya",
  english: "kettle",
  root: "",
  gender: "f",
  singular: "غَلَّايَة",
  dual: "غَلَّايَتَانِ",
  plural: "غَلَّايَات",
  category: "household",
  topics: ["kitchen", "appliances"],
  notes: "Used for boiling water.",
  examples: {
    beginner: [
      { ar: "هِيَ تَغْلِي المَاءَ بِالغَلَّايَةِ", en: "She boils water with the kettle", tr: "hiya taghli al-maa' bil-ghallaaya" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ الغَلَّايَةَ عَلَى الطَّاوِلَةِ", en: "He puts the kettle on the table", tr: "huwa yada' al-ghallaaya 'ala at-taawila" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ غَلَّايَاتٍ جَدِيدَةً لِلمَطْبَخِ", en: "They buy new kettles for the kitchen", tr: "hum yashtaroon ghallaayaat jadeeda lil-matbakh" }
    ]
  }
},
{
  id: "N116",
  type: "noun",
  arabic: "أَرْنَب",
  transliteration: "arnab",
  english: "rabbit",
  root: "",
  gender: "m",
  singular: "أَرْنَب",
  dual: "أَرْنَبَانِ",
  plural: "أَرَانِب",
  category: "nature",
  topics: ["animals"],
  notes: "A small fast animal.",
  examples: {
    beginner: [
      { ar: "هُوَ يَرَى أَرْنَبًا فِي الحَدِيقَةِ", en: "He sees a rabbit in the garden", tr: "huwa yara arnabaan fil-hadeeqa" }
    ],
    medium: [
      { ar: "هِيَ تُطْعِمُ الأَرَانِبَ", en: "She feeds the rabbits", tr: "hiya tut'im al-araanib" }
    ],
    advanced: [
      { ar: "هُمْ يَدْرُسُونَ سُلُوكَ الأَرَانِبِ", en: "They study rabbit behaviour", tr: "hum yadrusoon sulook al-araanib" }
    ]
  }
},
{
  id: "N117",
  type: "noun",
  arabic: "عِلِّيَّة",
  transliteration: "illiya",
  english: "attic",
  root: "",
  gender: "f",
  singular: "عِلِّيَّة",
  dual: "عِلِّيَّتَانِ",
  plural: "عِلِّيَّات",
  category: "household",
  topics: ["rooms"],
  notes: "A storage room under the roof.",
  examples: {
    beginner: [
      { ar: "هُوَ يَصْعَدُ إِلَى العِلِّيَّةِ", en: "He goes up to the attic", tr: "huwa yas'ad ila al-illiya" }
    ],
    medium: [
      { ar: "هِيَ تُرَتِّبُ الأَشْيَاءَ فِي العِلِّيَّةِ", en: "She organizes things in the attic", tr: "hiya turattib al-ashyaa' fil-illiya" }
    ],
    advanced: [
      { ar: "هُمْ يُخَزِّنُونَ الأَثَاثَ فِي العِلِّيَّاتِ", en: "They store furniture in attics", tr: "hum yukhazzinoon al-athaath fil-illiyat" }
    ]
  }
},
{
  id: "N118",
  type: "noun",
  arabic: "مَكْتَبَة",
  transliteration: "maktaba",
  english: "library",
  root: "ك-ت-ب",
  gender: "f",
  singular: "مَكْتَبَة",
  dual: "مَكْتَبَتَانِ",
  plural: "مَكْتَبَات",
  category: "places",
  topics: ["buildings", "public-places"],
  notes: "A place where books are kept.",
  examples: {
    beginner: [
      { ar: "هُوَ يَذْهَبُ إِلَى المَكْتَبَةِ", en: "He goes to the library", tr: "huwa yadhhab ila al-maktaba" }
    ],
    medium: [
      { ar: "هِيَ تَقْرَأُ فِي المَكْتَبَةِ", en: "She reads in the library", tr: "hiya taqra' fil-maktaba" }
    ],
    advanced: [
      { ar: "هُمْ يَبْنُونَ مَكْتَبَاتٍ جَدِيدَةً فِي المَدِينَةِ", en: "They build new libraries in the city", tr: "hum yabnoon maktabat jadeeda fil-madeena" }
    ]
  }
},
{
  id: "N119",
  type: "noun",
  arabic: "ابْنُ عَمّ / ابْنُ خَال",
  transliteration: "ibn 'amm / ibn khaal",
  english: "cousin (male)",
  root: "",
  gender: "m",
  singular: "ابْنُ عَمّ",
  dual: "ابْنَا عَمّ",
  plural: "أَبْنَاءُ عَمّ",
  category: "people",
  topics: ["family"],
  notes: "A male cousin.",
  examples: {
    beginner: [
      { ar: "هُوَ ابْنُ عَمِّي", en: "He is my cousin", tr: "huwa ibn 'ammi" }
    ],
    medium: [
      { ar: "هِيَ تَتَحَدَّثُ مَعَ ابْنِ عَمِّهَا", en: "She speaks with her cousin", tr: "hiya tatahaddath ma'a ibn 'ammiha" }
    ],
    advanced: [
      { ar: "هُمْ يَزُورُونَ أَبْنَاءَ عَمِّهِمْ فِي العُطْلَةِ", en: "They visit their cousins during the holiday", tr: "hum yazuroon abnaa' ammihim fil-'utla" }
    ]
  }
},
{
    id: "N120",
  type: "noun",
  arabic: "طَبَاشِير",
  transliteration: "tabaasheer",
  english: "chalk",
  root: "",
  gender: "m",
  singular: "طَبَاشِيرَة",
  dual: "طَبَاشِيرَتَانِ",
  plural: "طَبَاشِير",
  category: "school",
  topics: ["stationery"],
  notes: "Used for writing on the board.",
  examples: {
    beginner: [
      { ar: "هُوَ يَكْتُبُ بِالطَّبَاشِيرِ", en: "He writes with chalk", tr: "huwa yaktub bit-tabaasheer" }
    ],
    medium: [
      { ar: "هِيَ تَضَعُ الطَّبَاشِيرَ عَلَى المَكْتَبِ", en: "She puts the chalk on the desk", tr: "hiya tada' at-tabaasheer 'ala al-maktab" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ طَبَاشِيرَ مُلَوَّنًا فِي الدَّرْسِ", en: "They use colored chalk in the lesson", tr: "hum yastakhdimoon tabaasheer mulawwanan fid-dars" }
    ]
  }
},
{
  id: "N121",
  type: "noun",
  arabic: "سَبُّورَة",
  transliteration: "sabboora",
  english: "whiteboard",
  root: "",
  gender: "f",
  singular: "سَبُّورَة",
  dual: "سَبُّورَتَانِ",
  plural: "سَبُّورَات",
  category: "school",
  topics: ["furniture"],
  notes: "Used for writing in classrooms.",
  examples: {
    beginner: [
      { ar: "هُوَ يَكْتُبُ عَلَى السَّبُّورَةِ", en: "He writes on the whiteboard", tr: "huwa yaktub 'ala as-sabboora" }
    ],
    medium: [
      { ar: "هِيَ تَمْسَحُ السَّبُّورَةَ", en: "She wipes the whiteboard", tr: "hiya tamsah as-sabboora" }
    ],
    advanced: [
      { ar: "هُمْ يُرَكِّبُونَ سَبُّورَاتٍ جَدِيدَةً فِي الفُصُولِ", en: "They install new whiteboards in classrooms", tr: "hum yurakkiboon sabbooraat jadeeda fil-fusool" }
    ]
  }
},
{
  id: "N122",
  type: "noun",
  arabic: "مُدِيرُ المَدْرَسَة",
  transliteration: "mudeer al-madrasa",
  english: "principal",
  root: "",
  gender: "m",
  singular: "مُدِيرُ المَدْرَسَة",
  dual: "مُدِيرَا المَدْرَسَة",
  plural: "مُدَرَاءُ المَدَارِس",
  category: "people",
  topics: ["school", "roles"],
  notes: "The head of a school.",
  examples: {
    beginner: [
      { ar: "هُوَ مُدِيرُ المَدْرَسَةِ", en: "He is the school principal", tr: "huwa mudeer al-madrasa" }
    ],
    medium: [
      { ar: "هِيَ تَتَحَدَّثُ مَعَ مُدِيرِ المَدْرَسَةِ", en: "She speaks with the principal", tr: "hiya tatahaddath ma'a mudeer al-madrasa" }
    ],
    advanced: [
      { ar: "هُمْ يَجْتَمِعُونَ مَعَ مُدَرَاءِ المَدَارِسِ", en: "They meet with school principals", tr: "hum yajtamioon ma'a mudara' al-madaaris" }
    ]
  }
},
{
  id: "N123",
  type: "noun",
  arabic: "دَبَّاسَة",
  transliteration: "dabbaasa",
  english: "stapler",
  root: "",
  gender: "f",
  singular: "دَبَّاسَة",
  dual: "دَبَّاسَتَانِ",
  plural: "دَبَّاسَات",
  category: "work",
  topics: ["office", "tools"],
  notes: "Used for stapling papers.",
  examples: {
    beginner: [
      { ar: "هُوَ يَسْتَخْدِمُ الدَّبَّاسَةَ", en: "He uses the stapler", tr: "huwa yastakhdim ad-dabbaasa" }
    ],
    medium: [
      { ar: "هِيَ تُدَبِّسُ الأَوْرَاقَ", en: "She staples the papers", tr: "hiya tudabbis al-awraaq" }
    ],
    advanced: [
      { ar: "هُمْ يَسْتَخْدِمُونَ دَبَّاسَاتٍ جَوْدَةٍ عَالِيَةٍ", en: "They use high-quality staplers", tr: "hum yastakhdimoon dabbaasaat jawda 'aaliya" }
    ]
  }
},
{
  id: "N124",
  type: "noun",
  arabic: "سِوَار",
  transliteration: "siwaar",
  english: "bracelet",
  root: "",
  gender: "m",
  singular: "سِوَار",
  dual: "سِوَارَانِ",
  plural: "أَسَاوِر",
  category: "people",
  topics: ["accessories"],
  notes: "A decorative item worn on the wrist.",
  examples: {
    beginner: [
      { ar: "هِيَ تَلْبَسُ سِوَارًا جَمِيلًا", en: "She wears a beautiful bracelet", tr: "hiya talbas siwaaran jameelan" }
    ],
    medium: [
      { ar: "هُوَ يَضَعُ السِّوَارَ فِي الصُّنْدُوقِ", en: "He puts the bracelet in the box", tr: "huwa yada' as-siwaar fis-sunduq" }
    ],
    advanced: [
      { ar: "هُمْ يَشْتَرُونَ أَسَاوِرَ ذَهَبِيَّةً", en: "They buy golden bracelets", tr: "hum yashtaroon asaawir dhahabiyya" }
    ]
  }
},

];
export default nouns;

