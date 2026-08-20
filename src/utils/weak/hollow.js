// -------------------------------------------------------------
// HOLLOW VERBS (الأجوف)
// Middle radical is weak (و / ي)
// Classical-accurate with hamza interaction
// -------------------------------------------------------------

export default function hollow({ root, form, tables }) {
  const clone = structuredClone(tables);
  const [fa, ain, lam] = root.split(" ");

  const isWaw = ain === "و";
  const isYa  = ain === "ي";

  // ---------------------------------------------------------
  // FORM I — قال / باع patterns
  // ---------------------------------------------------------
  if (form === 1) {
    applyForm1Hollow({ clone, fa, ain, lam, isWaw, isYa });
    return clone;
  }

  // ---------------------------------------------------------
  // FORM II — فَوَّلَ / فَيَّلَ (rare)
  // ---------------------------------------------------------
  if (form === 2) {
    normalizePresentHollow(clone, ain);
    return clone;
  }

  // ---------------------------------------------------------
  // FORM III — ساوَمَ / بايَعَ patterns
  // ---------------------------------------------------------
  if (form === 3) {
    normalizePresentHollow(clone, ain);
    return clone;
  }

  // ---------------------------------------------------------
  // FORM IV — أقامَ / أبانَ patterns
  // ---------------------------------------------------------
  if (form === 4) {
    applyForm4Hollow({ clone, fa, ain, lam, isWaw, isYa });
    return clone;
  }

  // ---------------------------------------------------------
  // FORMS V–X — general hollow behavior
  // ---------------------------------------------------------
  if (form >= 5 && form <= 10) {
    normalizePresentHollow(clone, ain);
    normalizePastHollowGeneral(clone, ain, fa, lam);
    return clone;
  }

  return clone;
}

// -------------------------------------------------------------
// FORM I — Classical Hollow Rules
// -------------------------------------------------------------
function applyForm1Hollow({ clone, fa, ain, lam, isWaw, isYa }) {

  // -------------------------
  // 1. PAST
  // -------------------------
  // هو: قال / باع
  clone.past["هو"] = isWaw
    ? fa + "َا" + lam + "َ"
    : fa + "َا" + lam + "َ";

  // هم: قالوا / باعوا
  clone.past["هم"] = clone.past["هو"].slice(0, -1) + "وا";

  // أنا / أنتَ / أنتِ / نحن / أنتم
  ["أنا", "أنتَ", "أنتِ", "نحن", "أنتم"].forEach((p) => {
    clone.past[p] = isWaw
      ? fa + "ُ" + lam + suffixFor(p)   // قلتُ
      : fa + "ِ" + lam + suffixFor(p);  // بِعتُ
  });

  // -------------------------
  // 2. PRESENT
  // -------------------------
  // Classical:
  // يقول / يبيع
  Object.keys(clone.present).forEach((p) => {
    const prefix = clone.present[p][0]; // ي / ت / أ / ن

    clone.present[p] = isWaw
      ? prefix + fa + "ُو" + lam
      : prefix + fa + "ِي" + lam;

    // Suffixes
    if (p === "أنتِ") clone.present[p] += "نَ";
    if (p === "أنتم" || p === "هم") clone.present[p] += "ونَ";
  });

  // -------------------------
  // 3. IMPERATIVE
  // -------------------------
  clone.imperative["أنتَ"] = isWaw ? "قُلْ" : "بِعْ";
  clone.imperative["أنتِ"] = isWaw ? "قُولِي" : "بِيعِي";
  clone.imperative["أنتم"] = isWaw ? "قُولُوا" : "بِيعُوا";

  // -------------------------
  // 4. ACTIVE PARTICIPLE
  // -------------------------
  clone.activeParticiple = isWaw
    ? fa + "َائِل"
    : fa + "َائِع";

  // -------------------------
  // 5. PASSIVE PARTICIPLE
  // -------------------------
  clone.passiveParticiple = isWaw
    ? fa + "ُو" + lam
    : fa + "ِي" + lam;

  // -------------------------
  // 6. MASDAR
  // -------------------------
  clone.masdar = isWaw
    ? fa + "َوْل"
    : fa + "َيْع";

  // -------------------------
  // 7. ADVERB
  // -------------------------
  clone.adverb = isWaw
    ? "مَ" + fa + "ُو" + lam
    : "مَ" + fa + "ِي" + lam;
}

// -------------------------------------------------------------
// FORM IV — Hollow Rules (أقامَ / أبانَ)
// -------------------------------------------------------------
function applyForm4Hollow({ clone, fa, ain, lam, isWaw, isYa }) {

  // Past هو: أقامَ / أبانَ
  clone.past["هو"] = isWaw
    ? "أَ" + fa + "َا" + lam + "َ"
    : "أَ" + fa + "َا" + lam + "َ";

  // Present: يُقيم / يُبين
  Object.keys(clone.present).forEach((p) => {
    const prefix = clone.present[p][0];

    clone.present[p] = isWaw
      ? prefix + "ُ" + fa + "ِي" + lam
      : prefix + "ُ" + fa + "ِي" + lam;

    if (p === "أنتِ") clone.present[p] += "نَ";
    if (p === "أنتم" || p === "هم") clone.present[p] += "ونَ";
  });

  // Imperative: أَقِمْ / أَبِنْ
  clone.imperative["أنتَ"] = isWaw ? "أَقِمْ" : "أَبِنْ";
  clone.imperative["أنتِ"] = isWaw ? "أَقِيمِي" : "أَبِينِي";
  clone.imperative["أنتم"] = isWaw ? "أَقِيمُوا" : "أَبِينُوا";

  // Masdar: إقامة / إبانة
  clone.masdar = isWaw ? "إِقَامَة" : "إِبَانَة";

  // Active participle: مُقيم / مُبين
  clone.activeParticiple = isWaw ? "مُقِيم" : "مُبِين";

  // Passive participle: مُقام / مُبان
  clone.passiveParticiple = isWaw ? "مُقَام" : "مُبَان";

  // Adverb: مُقام / مُبان
  clone.adverb = clone.passiveParticiple;
}

// -------------------------------------------------------------
// General Hollow Past for Forms V–X
// -------------------------------------------------------------
function normalizePastHollowGeneral(clone, ain, fa, lam) {
  const isWaw = ain === "و";
  const isYa = ain === "ي";

  // هو: تَفَوَّلَ → تَفَالَ
  clone.past["هو"] = isWaw
    ? clone.past["هو"].replace(ain, "ا")
    : clone.past["هو"].replace(ain, "ا");

  // هم: تَفَالُوا
  clone.past["هم"] = clone.past["هو"].slice(0, -1) + "وا";

  // أنا / أنتَ / أنتِ / نحن / أنتم
  ["أنا", "أنتَ", "أنتِ", "نحن", "أنتم"].forEach((p) => {
    clone.past[p] = isWaw
      ? clone.past[p].replace(ain, "ُ")
      : clone.past[p].replace(ain, "ِ");
  });
}

// -------------------------------------------------------------
// Present normalization for Forms II–X
// -------------------------------------------------------------
function normalizePresentHollow(clone, ain) {
  const isWaw = ain === "و";
  const isYa = ain === "ي";

  Object.keys(clone.present).forEach((p) => {
    clone.present[p] = clone.present[p].replace(
      ain,
      isWaw ? "و" : "ي"
    );
  });
}

// -------------------------------------------------------------
// Past suffix helper
// -------------------------------------------------------------
function suffixFor(person) {
  switch (person) {
    case "أنا": return "تُ";
    case "أنتَ": return "تَ";
    case "أنتِ": return "تِ";
    case "نحن": return "نَا";
    case "أنتم": return "تُمْ";
    default: return "";
  }
}

