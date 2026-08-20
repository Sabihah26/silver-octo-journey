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

export default function detectWeak(rootArray) {
  const [fa, ain, lam] = rootArray;

  const weakLetters = ["و", "ي", "ا"];
  const hamza = ["ء", "أ", "إ", "ؤ", "ئ"];

  // 1. Hamzated verbs
  if (hamza.includes(fa) || hamza.includes(ain) || hamza.includes(lam)) {
    return "hamzated";
  }

  // 2. Doubled verbs (مضعّف)
  if (ain === lam) {
    return "doubled";
  }

  // 3. Hollow verbs (أجوف)
  if (weakLetters.includes(ain)) {
    return "hollow";
  }

  // 4. Final-weak (ناقص)
  if (weakLetters.includes(lam)) {
    return "final-weak";
  }

  // 5. Assimilated (مثال)
  if (weakLetters.includes(fa)) {
    return "assimilated";
  }

  // 6. Mixed weak verbs (two weak radicals)
  const weakCount =
    [fa, ain, lam].filter((l) => weakLetters.includes(l)).length;

  if (weakCount >= 2) {
    return "mixed-weak";
  }

  // 7. Sound (صحيح)
  return "sound";
}
