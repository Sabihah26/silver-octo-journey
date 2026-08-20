// -------------------------------------------------------------
// ASSIMILATED VERBS (المِثَال)
// First radical is weak (و / ي)
// Classical-accurate with hamza interaction
// -------------------------------------------------------------

export default function assimilated({ root, form, tables }) {
  const clone = structuredClone(tables);
  const [fa, ain, lam] = root.split(" ");

  const isWaw = fa === "و";
  const isYa  = fa === "ي";

  // ---------------------------------------------------------
  // FORM I — يَعِدُ / يَضَعُ patterns
  // ---------------------------------------------------------
  if (form === 1) {
    applyForm1Assimilated({ clone, fa, ain, lam, isWaw, isYa });
    return clone;
  }

  // ---------------------------------------------------------
  // FORMS II–X — keep the weak letter
  // ---------------------------------------------------------
  if (form >= 2 && form <= 10) {
    applyGeneralAssimilated({ clone, fa, ain, lam, isWaw, isYa });
    return clone;
  }

  return clone;
}

// -------------------------------------------------------------
// FORM I — Classical Assimilated Rules
// -------------------------------------------------------------
function applyForm1Assimilated({ clone, fa, ain, lam, isWaw, isYa }) {

  // -------------------------
  // 1. PRESENT — drop initial و only
  // -------------------------
  // وَعَدَ → يَعِدُ
  // وَضَعَ → يَضَعُ
  // يَئِسَ → يَيْأَسُ (hamza interaction)
  Object.keys(clone.present).forEach((p) => {
    let v = clone.present[p];

    // Drop initial و
    if (isWaw) {
      v = v.replace(/^يَو/, "يَ"); // يَو → يَ
      v = v.replace(/^تَو/, "تَ");
      v = v.replace(/^أَو/, "أَ");
      v = v.replace(/^نَو/, "نَ");
    }

    // Hamza cases: يَئِسَ → يَيْأَسُ
    if (fa === "ي" && ain === "ئ") {
      v = v.replace(/^ي/, "يَيْ");
    }

    clone.present[p] = v;
  });

  // -------------------------
  // 2. IMPERATIVE — drop initial و
  // -------------------------
  // عِدْ — ضَعْ
  if (isWaw) {
    clone.imperative["أنتَ"] = ain + "ِ" + lam + "ْ"; // عِدْ
    clone.imperative["أنتِ"] = ain + "ِ" + lam + "ي"; // عِدي
    clone.imperative["أنتم"] = ain + "ِ" + lam + "وا"; // عِدوا
  }

  // -------------------------
  // 3. ACTIVE PARTICIPLE
  // -------------------------
  // واعد → واعِد
  clone.activeParticiple = isWaw
    ? "واعِ" + lam
    : clone.activeParticiple;

  // -------------------------
  // 4. PASSIVE PARTICIPLE
  // -------------------------
  // مَوْعود → مَوْعود (unchanged)
  // مَيْسور (from يسر) — special case
  if (fa === "ي" && ain === "س" && lam === "ر") {
    clone.passiveParticiple = "مَيْسور";
  }

  // -------------------------
  // 5. MASDAR
  // -------------------------
  // وَعَدَ → وَعْد
  // وَضَعَ → وَضْع
  clone.masdar = fa + "َ" + ain + "ْ" + lam;

  // -------------------------
  // 6. ADVERB
  // -------------------------
  clone.adverb = "مَ" + ain + "ْ" + lam;
}

// -------------------------------------------------------------
// FORMS II–X — Assimilated Rules
// -------------------------------------------------------------
function applyGeneralAssimilated({ clone, fa, ain, lam, isWaw, isYa }) {

  // -------------------------
  // 1. PRESENT — keep و / ي
  // -------------------------
  // يُوَعِّدُ — يُوافِقُ — يَسْتَوْعِبُ
  Object.keys(clone.present).forEach((p) => {
    let v = clone.present[p];

    // Ensure و is preserved
    if (isWaw) {
      v = v.replace(/^ي/, "يُو");
      v = v.replace(/^ت/, "تُو");
      v = v.replace(/^أ/, "أُو");
      v = v.replace(/^ن/, "نُو");
    }

    // يَسَّرَ → يُيَسِّرُ (rare)
    if (isYa) {
      v = v.replace(/^ي/, "يُي");
    }

    clone.present[p] = v;
  });

  // -------------------------
  // 2. IMPERATIVE — keep و / ي
  // -------------------------
  // وَافَقَ → وافِقْ
  if (isWaw) {
    clone.imperative["أنتَ"] = "و" + ain + "ِ" + lam + "ْ";
    clone.imperative["أنتِ"] = "و" + ain + "ِ" + lam + "ي";
    clone.imperative["أنتم"] = "و" + ain + "ِ" + lam + "وا";
  }

  // -------------------------
  // 3. PARTICIPLES
  // -------------------------
  clone.activeParticiple = isWaw
    ? "مُو" + ain + "ِّ" + lam
    : clone.activeParticiple;

  clone.passiveParticiple = isWaw
    ? "مُو" + ain + "َّ" + lam
    : clone.passiveParticiple;

  // -------------------------
  // 4. MASDAR
  // -------------------------
  // وَافَقَ → مُوافَقَة
  if (isWaw) {
    clone.masdar = "مُو" + ain + "َ" + lam + "َة";
  }

  // -------------------------
  // 5. ADVERB
  // -------------------------
  clone.adverb = isWaw
    ? "مَوْ" + ain + "َ" + lam
    : clone.adverb;
}
