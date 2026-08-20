// -------------------------------------------------------------
// DOUBLED VERBS (المُضَعَّف)
// 2nd and 3rd radicals identical (شَدَّ، مَدَّ، رَدَّ)
// Classical-accurate gemination rules
// -------------------------------------------------------------

export default function doubled({ root, form, tables }) {
  const clone = structuredClone(tables);
  const [fa, ain, lam] = root.split(" ");

  // Only doubled if ain === lam
  if (ain !== lam) return clone;

  // ---------------------------------------------------------
  // FORM I — شَدَّ / مَدَّ patterns
  // ---------------------------------------------------------
  if (form === 1) {
    applyForm1Doubled({ clone, fa, ain, lam });
    return clone;
  }

  // ---------------------------------------------------------
  // FORMS II–X — doubled behaves mostly regular
  // but we normalize participles and masdar
  // ---------------------------------------------------------
  if (form >= 2 && form <= 10) {
    applyGeneralDoubled({ clone, fa, ain, lam });
    return clone;
  }

  return clone;
}

// -------------------------------------------------------------
// FORM I — Classical Doubled Rules
// -------------------------------------------------------------
function applyForm1Doubled({ clone, fa, ain, lam }) {

  // -------------------------
  // 1. PAST
  // -------------------------
  // هو: شَدَّ / مَدَّ
  clone.past["هو"] = fa + "َ" + ain + "َّ";

  // هم: شَدُّوا
  clone.past["هم"] = fa + "َ" + ain + "ُّوا";

  // أنا / أنتَ / أنتِ / نحن / أنتم → split the doubled consonant
  ["أنا", "أنتَ", "أنتِ", "نحن", "أنتم"].forEach((p) => {
    clone.past[p] = fa + "َ" + ain + "َ" + lam + suffixFor(p);
  });

  // -------------------------
  // 2. PRESENT
  // -------------------------
  // Classical: يَشُدُّ / يَمُدُّ
  Object.keys(clone.present).forEach((p) => {
    const prefix = clone.present[p][0]; // ي / ت / أ / ن
    clone.present[p] = prefix + fa + "ُ" + ain + "ُّ";

    if (p === "أنتِ") clone.present[p] += "نَ";
    if (p === "أنتم" || p === "هم") clone.present[p] += "ونَ";
  });

  // -------------------------
  // 3. IMPERATIVE
  // -------------------------
  clone.imperative["أنتَ"] = "اُ" + fa + "ْ" + ain + "َّ";
  clone.imperative["أنتِ"] = "اُ" + fa + "ْ" + ain + "ِّي";
  clone.imperative["أنتم"] = "اُ" + fa + "ْ" + ain + "ُّوا";

  // -------------------------
  // 4. ACTIVE PARTICIPLE
  // -------------------------
  clone.activeParticiple = fa + "َ" + ain + "ّ" + "ٌ"; // شادٌّ

  // -------------------------
  // 5. PASSIVE PARTICIPLE
  // -------------------------
  clone.passiveParticiple = "مَ" + fa + "ْ" + ain + "ود"; // مَشْدود

  // -------------------------
  // 6. MASDAR
  // -------------------------
  clone.masdar = fa + "َ" + ain + "ّ"; // شَدّ / مَدّ

  // -------------------------
  // 7. ADVERB
  // -------------------------
  clone.adverb = "مَ" + fa + "ْ" + ain + "ّ"; // مَشَدّ
}

// -------------------------------------------------------------
// FORMS II–X — General Doubled Rules
// -------------------------------------------------------------
function applyGeneralDoubled({ clone, fa, ain, lam }) {

  // Present: keep gemination
  Object.keys(clone.present).forEach((p) => {
    clone.present[p] = clone.present[p].replace(
      new RegExp(ain + lam),
      ain + "ّ"
    );
  });

  // Past: keep gemination for هو / هم
  clone.past["هو"] = clone.past["هو"].replace(
    new RegExp(ain + lam),
    ain + "ّ"
  );
  clone.past["هم"] = clone.past["هم"].replace(
    new RegExp(ain + lam),
    ain + "ّ"
  );

  // Other persons: split doubled consonant
  ["أنا", "أنتَ", "أنتِ", "نحن", "أنتم"].forEach((p) => {
    if (!clone.past[p]) return;
    clone.past[p] = clone.past[p].replace(
      new RegExp(ain + lam),
      ain + "َ" + lam
    );
  });

  // Participles
  clone.activeParticiple = fa + "َ" + ain + "ّ";
  clone.passiveParticiple = "مَ" + fa + "ْ" + ain + "ود";

  // Masdar
  clone.masdar = fa + "َ" + ain + "ّ";

  // Adverb
  clone.adverb = "مَ" + fa + "ْ" + ain + "ّ";
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
