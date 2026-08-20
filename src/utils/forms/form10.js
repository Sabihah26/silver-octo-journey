// -------------------------------------------------------------
// Form X — اِسْتَفْعَلَ
// Example: اِسْتَغْفَرَ، اِسْتَعْمَلَ، اِسْتَخْرَجَ
// -------------------------------------------------------------

export default function form10({ root }) {
  const [fa, ain, lam] = root.split(" ");

  // -------------------------
  // STEMS
  // -------------------------
  const past = "اِسْتَ" + fa + "ْ" + ain + "َ" + lam + "َ";         // اِسْتَفْعَلَ
  const presentStem = "َسْتَ" + fa + "ْ" + ain + "ِ" + lam;         // يَسْتَفْعِلُ (minus prefix)

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
  // IMPERATIVE — اِسْتَفْعِلْ
  // -------------------------
  const imp = "اِسْتِ" + fa + "ْ" + ain + "ِ" + lam;

  result.imperative["أنتَ"] = imp + "ْ";
  result.imperative["أنتِ"] = imp + "ي";
  result.imperative["أنتم"] = imp + "وا";

  // -------------------------
  // PASSIVE PAST — اُسْتُفْعِلَ
  // -------------------------
  const passivePast = "اُسْتُ" + fa + "ْ" + ain + "ِ" + lam + "َ";

  result.passivePast["هو"] = passivePast;
  result.passivePast["هي"] = passivePast.slice(0, -1) + "تْ";
  result.passivePast["أنا"] = passivePast.slice(0, -1) + "تُ";
  result.passivePast["أنتَ"] = passivePast.slice(0, -1) + "تَ";
  result.passivePast["أنتِ"] = passivePast.slice(0, -1) + "تِ";
  result.passivePast["نحن"] = passivePast.slice(0, -1) + "نَا";
  result.passivePast["أنتم"] = passivePast.slice(0, -1) + "تُمْ";
  result.passivePast["هم"] = passivePast.slice(0, -1) + "وا";

  // -------------------------
  // PASSIVE PRESENT — يُسْتَفْعَلُ
  // -------------------------
  const passivePresentStem = "ُسْتَ" + fa + "ْ" + ain + "َ" + lam;

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
  result.activeParticiple = "مُسْتَ" + fa + "ْ" + ain + "ِ" + lam;   // مُسْتَفْعِل
  result.passiveParticiple = "مُسْتَ" + fa + "ْ" + ain + "َ" + lam;  // مُسْتَفْعَل

  // -------------------------
  // MASDAR — اِسْتِفْعَال
  // -------------------------
  result.masdar = "اِسْتِ" + fa + "ْ" + ain + "َ" + lam;

  // -------------------------
  // NEGATIVE
  // -------------------------
  result.negative = {
    past: "لَمْ " + "ي" + presentStem.slice(1),
    present: "لا " + "ي" + presentStem,
    future: "لَنْ " + "ي" + presentStem
  };

  // -------------------------
  // ADVERB — مَسْتَفْعَل
  // -------------------------
  result.adverb = "مَسْتَ" + fa + "ْ" + ain + "َ" + lam;

  return result;
}
