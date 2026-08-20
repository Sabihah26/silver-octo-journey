// -------------------------------------------------------------
// Weak Verb Overrides Router
// Connects all weak-type engines to the main conjugation flow.
// Types (as returned by detectWeakType.js):
//   - "sound"
//   - "final-weak"   (ناقص)
//   - "hollow"       (أجوف)
//   - "assimilated"  (مثال)
//   - "doubled"      (مضعّف)
// -------------------------------------------------------------

import finalWeak from "./finalWeak.js";
import hollow from "./hollow.js";
import assimilated from "./assimilated.js";
import doubled from "./doubled.js";

export default function applyWeakOverrides({ root, form, weakType, tables }) {
  if (!weakType || weakType === "sound") return tables;

  switch (weakType) {
    case "final-weak":
      return finalWeak({ root, form, tables });

    case "hollow":
      return hollow({ root, form, tables });

    case "assimilated":
      return assimilated({ root, form, tables });

    case "doubled":
      return doubled({ root, form, tables });

    default:
      return tables;
  }
}
