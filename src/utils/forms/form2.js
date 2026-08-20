// Form II (فَعَّلَ) - Sound Verbs
// -----------------------------------

function form2({ root, tense, voice, weakType }) {
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
    adverb: "",
  };

  // -------------------------------
  // PAST - فَعَّلَ
  // -------------------------------
  const pastStem = fa + "َ" + ain + "َّ" + lam;

  result.past["هُوَ"] = pastStem;
  result.past["هِيَ"] = pastStem + "َتْ";
  result.past["أَنَا"] = pastStem + "ْتُ";
  result.past["أَنْتَ"] = pastStem + "ْتَ";
  result.past["أَنْتِ"] = pastStem + "ْتِ";
  result.past["نَحْنُ"] = pastStem + "ْنَا";
  result.past["هُمْ"] = pastStem + "ُوا";
  result.past["هُنَّ"] = pastStem + "ْنَ";

  // -------------------------------
  // PRESENT - يُفَعِّلُ
  // -------------------------------
  const presentStem = fa + "ُ" + ain + "ِّ" + lam;

  // You will fill these in later:
  // result.present["هُوَ"] = ...
  // result.present["هِيَ"] = ...
  // etc.

  return result;
}

export default form2;
