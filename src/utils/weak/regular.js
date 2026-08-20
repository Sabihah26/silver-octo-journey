// -------------------------------------------------------------
// Form I Regular (فَعَلَ / فَعِلَ / فَعُلَ)
// Base engine for sound verbs (non‑weak)
// -------------------------------------------------------------

import { detectPattern, buildStems } from "../forms/form1/patterns.js";
import masdarDict from "../forms/form1/masdarDictionary.js";

export default function regularForm1(root, tense = "past", voice = "active") {
  const pattern = detectPattern(root);
  const stems = buildStems(root, pattern);
  const [fa, ain, lam] = root.split(" ");

  const result = {
    past: {},
    present: {},
    imperative: {},
    passivePast: {},
    passivePresent: {},
    activeParticiple: "",
    passiveParticiple: "",
    masdar: "",
    negative: {},
    adverb: ""
  };

  // -------------------------
  // PAST
  // -------------------------
  const P = stems.past; // e.g., كَتَبَ / فَهِمَ / حَسُنَ

  result.past["هو"] = P;
  result.past["هي"] = P.slice(0, -1) + "تْ";
  result.past["أنا"] = P.slice(0, -1) + "تُ";
  result.past["أنتَ"] = P.slice(0, -1) + "تَ";
  result.past["أنتِ"] = P.slice(0, -1) + "تِ";
  result.past["نحن"] = P.slice(0, -1) + "نَا";
  result.past["أنتم"] = P.slice(0, -1) + "تُمْ";
  result.past["هم"] = P.slice(0, -1) + "وا";

  // -------------------------
  // PRESENT
  // -------------------------
  const PR = stems.present; // e.g., يَفْعُلُ / يَفْعِلُ / يَفْعُلُ

  result.present["هو"] = "يَ" + PR;
  result.present["هي"] = "تَ" + PR;
  result.present["أنتَ"] = "تَ" + PR;
  result.present["أنتِ"] = "تَ" + PR.slice(0, -1) + "ينَ";
  result.present["أنا"] = "أَ" + PR;
  result.present["نحن"] = "نَ" + PR;
  result.present["أنتم"] = "تَ" + PR.slice(0, -1) + "ونَ";
  result.present["هم"] = "يَ" + PR.slice(0, -1) + "ونَ";

  // -------------------------
  // IMPERATIVE
  // -------------------------
  const IMP = stems.imperative; // e.g., اُكْتُب / اِفْهَم / اُحْسُن

  result.imperative["أنتَ"] = IMP + "ْ";
  result.imperative["أنتِ"] = IMP + "ي";
  result.imperative["أنتم"] = IMP + "وا";

  // -------------------------
  // PASSIVE PAST — فُعِلَ
  // -------------------------
  const passivePastStem = fa + "ُ" + ain + "ِ" + lam + "َ";

  result.passivePast["هو"] = passivePastStem;
  result.passivePast["هي"] = passivePastStem.slice(0, -1) + "تْ";
  result.passivePast["أنا"] = passivePastStem.slice(0, -1) + "تُ";
  result.passivePast["أنتَ"] = passivePastStem.slice(0, -1) + "تَ";
  result.passivePast["أنتِ"] = passivePastStem.slice(0, -1) + "تِ";
  result.passivePast["نحن"] = passivePastStem.slice(0, -1) + "نَا";
  result.passivePast["أنتم"] = passivePastStem.slice(0, -1) + "تُمْ";
  result.passivePast["هم"] = passivePastStem.slice(0, -1) + "وا";

  // -------------------------
  // PASSIVE PRESENT — يُفْعَلُ
  // -------------------------
  const passivePresentStem = fa + "ْ" + ain + "َ" + lam + "ُ";

  result.passivePresent["هو"] = "يُ" + passivePresentStem;
  result.passivePresent["هي"] = "تُ" + passivePresentStem;
  result.passivePresent["أنتَ"] = "تُ" + passivePresentStem;
  result.passivePresent["أنتِ"] = "تُ" + passivePresentStem.slice(0, -1) + "ينَ";
  result.passivePresent["أنا"] = "أُ" + passivePresentStem;
  result.passivePresent["نحن"] = "نُ" + passivePresentStem;
  result.passivePresent["أنتم"] = "تُ" + passivePresentStem.slice(0, -1) + "ونَ";
  result.passivePresent["هم"] = "يُ" + passivePresentStem.slice(0, -1) + "ونَ";

  // -------------------------
  // PARTICIPLES
  // -------------------------
  result.activeParticiple = "فَاعِل".replace("ف", fa).replace("ع", ain).replace("ل", lam);
  result.passiveParticiple = "مَفْعُول".replace("ف", fa).replace("ع", ain).replace("ل", lam);

  // -------------------------
  // MASDAR
  // -------------------------
  const bare = root.replace(/ /g, "");

  if (masdarDict[bare]) {
    result.masdar = masdarDict[bare]; // override
  } else {
    result.masdar = fa + "ِ" + ain + "َ" + lam + "ة"; // default فِعَالَة
  }

  // -------------------------
  // NEGATIVE FORMS
  // -------------------------
  result.negative = {
    past: "لَمْ " + "يَ" + PR.slice(0, -1),
    present: "لا " + "يَ" + PR,
    future: "لَنْ " + "يَ" + PR
  };

  // -------------------------
  // ADVERB — مَفْعَل
  // -------------------------
  result.adverb = "مَ" + fa + "ْ" + ain + "َ" + lam;

  return result;
}
