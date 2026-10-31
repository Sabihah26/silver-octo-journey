// -------------------------------------------------------------
// detectWeak.js
// Detects weak verb type from a triliteral root
// Handles:
//   - Assimilated (مثال)
//   - Hollow (أجوف)
//   - Final-weak (ناقص)
//   - Doubled (مضعّف)
//   - Hamzated (مهموز)
//   - Mixed weak verbs
// -------------------------------------------------------------

export default function detectWeak(rootInput) {
  if (!rootInput) return "sound";

  // -------------------------------------------------------------
  // ⭐ 1. Normalize root:
  //    "قول" → ["ق","و","ل"]
  //    "ق-و-ل" → ["ق","و","ل"]
  // -------------------------------------------------------------
  let rootArray;

  if (Array.isArray(rootInput)) {
    rootArray = rootInput;
  } else if (rootInput.includes("-")) {
    rootArray = rootInput.split("-");
  } else {
    rootArray = rootInput.split(""); // ⭐ NEW: handles "قول"
  }

  if (rootArray.length !== 3) return "sound";

  const [fa, ain, lam] = rootArray;

  const weakLetters = ["و", "ي", "ا"];
  const hamza = ["ء", "أ", "إ", "ؤ", "ئ"];

  // -------------------------------------------------------------
  // ⭐ 2. Hamzated verbs
  // -------------------------------------------------------------
  if (hamza.includes(fa) || hamza.includes(ain) || hamza.includes(lam)) {
    return "hamzated";
  }

  // -------------------------------------------------------------
  // ⭐ 3. Doubled verbs (مضعّف)
  // -------------------------------------------------------------
  if (ain === lam) {
    return "doubled";
  }

  // -------------------------------------------------------------
  // ⭐ 4. Hollow verbs (أجوف)
  // -------------------------------------------------------------
  if (weakLetters.includes(ain)) {
    return "hollow";
  }

  // -------------------------------------------------------------
  // ⭐ 5. Final-weak (ناقص)
  // -------------------------------------------------------------
  if (weakLetters.includes(lam)) {
    return "final-weak";
  }

  // -------------------------------------------------------------
  // ⭐ 6. Assimilated (مثال)
  // -------------------------------------------------------------
  if (weakLetters.includes(fa)) {
    return "assimilated";
  }

  // -------------------------------------------------------------
  // ⭐ 7. Mixed weak verbs (two weak radicals)
  // -------------------------------------------------------------
  const weakCount = [fa, ain, lam].filter((l) =>
    weakLetters.includes(l)
  ).length;

  if (weakCount >= 2) {
    return "mixed-weak";
  }

  // -------------------------------------------------------------
  // ⭐ 8. Sound (صحيح)
  // -------------------------------------------------------------
  return "sound";
}

