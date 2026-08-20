// -------------------------------------------------------------
// Form III — فَاعَلَ
// Example: كاتَبَ، شاهَدَ، قاتَلَ
// -------------------------------------------------------------

export default function form3(root) {
  const [fa, ain, lam] = root.split(" ");

  const past = fa + "ا" + ain + "َ" + lam + "َ";       // فَاعَلَ
  const presentStem = "ُ" + fa + "ا" + ain + "ِ" + lam; // يُفَاعِلُ (minus prefix)

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
  // IMPERATIVE
  // -------------------------
  const imp = fa + "ا" + ain + "ِ" + lam;

  result.imperative["أنتَ"] = imp + "ْ";
  result.imperative["أنتِ"] = imp + "ي";
  result.imperative["أنتم"] = imp + "وا";

  // -------------------------
  // PASSIVE PAST — فُوعِلَ
  // -------------------------
  const passivePast = fa + "ُو" + ain + "ِ" + lam + "َ";

  result.passivePast["هو"] = passivePast;
  result.passivePast["هي"] = passivePast.slice(0, -1) + "تْ";
  result.passivePast["أنا"] = passivePast.slice(0, -1) + "تُ";
  result.passivePast["أنتَ"] = passivePast.slice(0, -1) + "تَ";
  result.passivePast["أنتِ"] = passivePast.slice(0, -1) + "تِ";
  result.passivePast["نحن"] = passivePast.slice(0, -1) + "نَا";
  result.passivePast["أنتم"] = passivePast.slice(0, -1) + "تُمْ";
  result.passivePast["هم"] = passivePast.slice(0, -1) + "وا";

  // -------------------------
  // PASSIVE PRESENT — يُفَاعَلُ
  // -------------------------
  const passivePresentStem = "ُ" + fa + "ا" + ain + "َ" + lam;

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
  result.activeParticiple = "مُ" + fa + "ا" + ain + "ِ" + lam;   // مُفَاعِل
  result.passiveParticiple = "مُ" + fa + "ا" + ain + "َ" + lam;  // مُفَاعَل

  // -------------------------
  // MASDAR
  // -------------------------
  result.masdar = "مُ" + fa + "ا" + ain + "َ" + lam + "ة"; // مُفَاعَلَة

  // -------------------------
  // NEGATIVE
  // -------------------------
  result.negative = {
    past: "لَمْ " + "ي" + presentStem.slice(1),
    present: "لا " + "ي" + presentStem,
    future: "لَنْ " + "ي" + presentStem
  };

  // -------------------------
  // ADVERB — مَفَاعَل
  // -------------------------
  result.adverb = "مَ" + fa + "ا" + ain + "َ" + lam;

  return result;
}
