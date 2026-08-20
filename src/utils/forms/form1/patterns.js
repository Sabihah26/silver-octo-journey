// -------------------------------------------------------------
// Form I Patterns (فَعَلَ / فَعِلَ / فَعُلَ)
// -------------------------------------------------------------
// Returns the correct vowel pattern for:
// - past stem
// - present stem
// - imperative stem
// -------------------------------------------------------------

export function detectPattern(root) {
  // You can expand this list later
  const patternB = ["فهم", "علم", "حسب", "حفظ", "جلس"];
  const patternC = ["حسن", "كبر", "شرف", "ظرف"];

  const bare = root.replace(/ /g, "");

  if (patternB.includes(bare)) return "B";
  if (patternC.includes(bare)) return "C";

  return "A"; // default فَعَلَ
}

export function buildStems(root, pattern) {
  const [fa, ain, lam] = root.split(" ");

  switch (pattern) {
    case "B": // فَعِلَ
      return {
        past: fa + "ِ" + ain + "ِ" + lam + "َ",
        present: fa + "ْ" + ain + "ِ" + lam + "ُ",
        imperative: "اِ" + fa + "ْ" + ain + "ِ" + lam
      };

    case "C": // فَعُلَ
      return {
        past: fa + "ُ" + ain + "ُ" + lam + "َ",
        present: fa + "ْ" + ain + "ُ" + lam + "ُ",
        imperative: "اُ" + fa + "ْ" + ain + "ُ" + lam
      };

    default: // A — فَعَلَ
      return {
        past: fa + "َ" + ain + "َ" + lam + "َ",
        present: fa + "ْ" + ain + "ُ" + lam + "ُ",
        imperative: "اُ" + fa + "ْ" + ain + "ُ" + lam
      };
  }
}
