export default function form1(root) {
  if (!root) return {};

  const [f, a, l] = root.split(" ");

  const past = {
    "هو": `${f}${a}${l}َ`,
    "هي": `${f}${a}${l}َتْ`,
    "أنا": `${f}${a}${l}ْتُ`,
    "أنتَ": `${f}${a}${l}ْتَ`,
    "أنتِ": `${f}${a}${l}ْتِ`,
    "نحن": `${f}${a}${l}ْنَا`,
    "هم": `${f}${a}${l}ُوا`,
  };

  return {
    past,
    present: {},
    masdar: `${f}${a}ْ${l}ْب`,
    activeParticiple: `${f}ا${a}${l}`,
    passiveParticiple: `${f}و${a}${l}`,
    imperative: `${f}${a}${l}`,
    imperativeNegative: `لا تَ${f}${a}${l}`,
  };
}
