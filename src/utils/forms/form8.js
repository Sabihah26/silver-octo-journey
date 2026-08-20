// -------------------------------------------------------------
// Form VIII — اِفْتَعَلَ
// Example: اِجْتَمَعَ، اِعْتَمَدَ، اِقْتَرَبَ
// -------------------------------------------------------------

export default function form8({ root }) {
  const [fa, ain, lam] = root.split(" ");

  // -------------------------
  // STEMS
  // -------------------------
  const past = "اِ" + fa + "ْتَ" + ain + "َ" + lam + "َ";          // اِفْتَعَلَ
  const presentStem = "َ" + fa + "ْتَ" + ain + "ِ" + lam;          // يَفْتَعِلُ (minus prefix)

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
  result.past["هو"] = past;
  result.past["هي"] = past.slice(0, -1) + "تْ";
  result.past["أنا"] = past.slice(0, -1) + "تُ";
  result.past["أنتَ"] = past.slice(0, -1) + "تَ";
  result.past["أنتِ"] = past.slice(0, -1) + "تِ";
  result.past["نحن"] = past.slice(0, -1) + "نَا";
  result.past["أنتم"] = past.slice(0, -1) + "تُمْ";
  result.past["هم"] = past.slice(0, -1) + "وا";

  // -------------------------
  // PRESENT
  // -------------------------
  result.present["هو"] = "ي" + presentStem;
  result.present["هي"] = "ت" + presentStem;
  result.present["أنتَ"] = "ت" + presentStem;
  result.present["أنتِ"] = "ت" + presentStem + "ينَ";
  result.present["أنا"] = "أ" + presentStem;
  result.present["نحن"] = "ن" + presentStem;
  result.present["أنتم"] = "ت" + presentStem + "ونَ";
  result.present["هم"] = "ي" + presentStem + "ونَ";

  // -------------------------
  // IMPERATIVE — اِفْتَعِلْ
  // -------------------------
  const imp = "اِ" + fa + "ْتِ" + ain + "ِ" + lam;

  result.imperative["أنتَ"] = imp + "ْ";
  result.imperative["أنتِ"] = imp + "ي";
  result.imperative["أنتم"] = imp + "وا";

  // -------------------------
  // PASSIVE PAST — اُفْتُعِلَ
  // -------------------------
  const passivePast = "اُ" + fa + "ْتُ" + ain + "ِ" + lam + "َ";

  result.passivePast["هو"] = passivePast;
  result.passivePast["هي"] = passivePast.slice(0, -1) + "تْ";
  result.passivePast["أنا"] = passivePast.slice(0, -1) + "تُ";
  result.passivePast["أنتَ"] = passivePast.slice(0, -1) + "تَ";
  result.passivePast["أنتِ"] = passivePast.slice(0, -1) + "تِ";
  result.passivePast["نحن"] = passivePast.slice(0, -1) + "نَا";
  result.passivePast["أنتم"] = passivePast.slice(0, -1) + "تُمْ";
  result.passivePast["هم"] = passivePast.slice(0, -1) + "وا";

  // -------------------------
  // PASSIVE PRESENT — يُفْتَعَلُ
  // -------------------------
  const passivePresentStem = "ُ" + fa + "ْتَ" + ain + "َ" + lam;

  result.passivePresent["هو"] = "ي" + passivePresentStem;
  result.passivePresent["هي"] = "ت" + passivePresentStem;
  result.passivePresent["أنتَ"] = "ت" + passivePresentStem;
  result.passivePresent["أنتِ"] = "ت" + passivePresentStem + "ينَ";
  result.passivePresent["أنا"] = "أ" + passivePresentStem;
  result.passivePresent["نحن"] = "ن" + passivePresentStem;
  result.passivePresent["أنتم"] = "ت" + passivePresentStem + "ونَ";
  result.passivePresent["هم"] = "ي" + passivePresentStem + "ونَ";

  // -------------------------
  // PARTICIPLES
  // -------------------------
  result.activeParticiple = "مُ" + fa + "ْتَ" + ain + "ِ" + lam;   // مُفْتَعِل
  result.passiveParticiple = "مُ" + fa + "ْتَ" + ain + "َ" + lam;  // مُفْتَعَل

  // -------------------------
  // MASDAR — اِفْتِعَال
  // -------------------------
  result.masdar = "اِ" + fa + "ْتِ" + ain + "َ" + lam;

  // -------------------------
  // NEGATIVE
  // -------------------------
  result.negative = {
    past: "لَمْ " + "ي" + presentStem.slice(1),
    present: "لا " + "ي" + presentStem,
    future: "لَنْ " + "ي" + presentStem
  };

  // -------------------------
  // ADVERB — مَفْتَعَل
  // -------------------------
  result.adverb = "مَ" + fa + "ْتَ" + ain + "َ" + lam;

  return result;
}
