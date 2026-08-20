// -------------------------------------------------------------
// Defective Verbs (فعل with weak ل)
// Example: رمى، دعا، سعى
// -------------------------------------------------------------

export default function defective(result, root, formNumber) {
  const [fa, ain, lam] = root.split(" ");

  // Past
  result.past["هو"] = fa + "َ" + ain + "َ" + "ى";
  result.past["هي"] = fa + "َ" + ain + "َ" + "تْ";
  result.past["أنا"] = fa + "َ" + ain + "َ" + "يْتُ";
  result.past["أنتَ"] = fa + "َ" + ain + "َ" + "يْتَ";
  result.past["أنتِ"] = fa + "َ" + ain + "َ" + "يْتِ";
  result.past["نحن"] = fa + "َ" + ain + "َ" + "يْنَا";
  result.past["أنتم"] = fa + "َ" + ain + "َ" + "يْتُمْ";
  result.past["هم"] = fa + "َ" + ain + "َ" + "وْا";

  // Present
  const presentStem = fa + "ْ" + ain + "ِ" + "ي";

  result.present["هو"] = "يَ" + presentStem;
  result.present["هي"] = "تَ" + presentStem;
  result.present["أنتَ"] = "تَ" + presentStem;
  result.present["أنتِ"] = "تَ" + presentStem + "نَ";
  result.present["أنا"] = "أَ" + presentStem;
  result.present["نحن"] = "نَ" + presentStem;
  result.present["أنتم"] = "تَ" + presentStem + "ونَ";
  result.present["هم"] = "يَ" + presentStem + "ونَ";

  // Imperative
  const imp = fa + "ِ" + ain + "ِ";

  result.imperative["أنتَ"] = imp + "ِ";
  result.imperative["أنتِ"] = imp + "ي";
  result.imperative["أنتم"] = imp + "وا";

  return result;
}
