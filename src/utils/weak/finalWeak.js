// -------------------------------------------------------------
// FINAL‑WEAK (Naqis) Override Engine
// Handles both:
//   - Naqis Waw (دعا، غزا)
//   - Naqis Ya (رمى، بنى)
// -------------------------------------------------------------

export default function finalWeak({ root, form, tables }) {
  const [fa, ain, lam] = root.split(" ");

  const isWaw = lam === "و";
  const isYa  = lam === "ي";

  const clone = structuredClone(tables);

  // -------------------------------------------------------------
  // FORM I — فَعَلَ / فَعِلَ / فَعُلَ  (Naqis)
  // -------------------------------------------------------------
  if (form === 1) {
    applyForm1FinalWeak({ clone, isWaw, isYa, lam });
  }

  // -------------------------------------------------------------
  // TODO: Add Forms II–X here (we will do them next)
  // -------------------------------------------------------------

  return clone;
}

// -------------------------------------------------------------
// FORM I — FINAL‑WEAK RULES
// -------------------------------------------------------------
function applyForm1FinalWeak({ clone, isWaw, isYa, lam }) {

  // -------------------------
  // 1. PAST TENSE
  // -------------------------
  // هو keeps the weak letter:
  //   دعا، رمى
  // All other persons drop the weak letter:
  //   دعوتُ، رميتُ
  const dropKeys = ["أنا", "أنتَ", "أنتِ", "نحن", "أنتم", "هم", "هي"];
  dropKeys.forEach((key) => {
    if (!clone.past[key]) return;
    clone.past[key] = clone.past[key].replace(new RegExp(lam + "َ?$"), "");
  });

  // -------------------------
  // 2. PRESENT TENSE
  // -------------------------
  // Waw → يَدْعُو
  // Ya  → يَرْمِي
  Object.keys(clone.present).forEach((key) => {
    let v = clone.present[key];

    if (isWaw) {
      // Replace final "وَ" or "وُ" with "و"
      v = v.replace(/و[َُ]?$/, "و");
    }

    if (isYa) {
      // Replace final "يَ" or "يُ" with "ي"
      v = v.replace(/ي[َُ]?$/, "ي");
    }

    clone.present[key] = v;
  });

  // -------------------------
  // 3. IMPERATIVE
  // -------------------------
  // ادْعُ — ادْعُوا — ادْعِي
  // ارمِ — ارمُوا — ارمِي
  Object.keys(clone.imperative).forEach((key) => {
    let v = clone.imperative[key];

    if (isWaw) {
      v = v.replace(/وْ?$/, ""); // ادعُ
    }

    if (isYa) {
      v = v.replace(/يْ?$/, ""); // ارمِ
    }

    clone.imperative[key] = v;
  });

  // -------------------------
  // 4. ACTIVE PARTICIPLE
  // -------------------------
  // داعٍ — رامٍ
  if (clone.activeParticiple) {
    clone.activeParticiple = clone.activeParticiple.replace(
      new RegExp(lam + "$"),
      "ٍ"
    );
  }

  // -------------------------
  // 5. PASSIVE PARTICIPLE
  // -------------------------
  // مدعوّ — مرميّ
  if (clone.passiveParticiple) {
    if (isWaw) clone.passiveParticiple += "وّ";
    if (isYa) clone.passiveParticiple += "يّ";
  }

  // -------------------------
  // 6. MASDAR
  // -------------------------
  // دعاء — رمي
  if (clone.masdar) {
    if (isWaw) clone.masdar = clone.masdar.replace(/وَ?$/, "اء");
    if (isYa) clone.masdar = clone.masdar.replace(/يَ?$/, "ي");
  }

  // -------------------------
  // 7. ADVERB (اسم الزمان والمكان)
  // -------------------------
  // مَدْعًى — مَرْمًى
  if (clone.adverb) {
    clone.adverb = clone.adverb.replace(new RegExp(lam + "$"), "ًى");
  }
}
