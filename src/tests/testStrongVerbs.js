// ------------------------------------------------------
// Strong Verb Test Suite (Form I Sound Verbs)
// ------------------------------------------------------

import conjugate from "../utils/conjugate";

// List of strong (sound) verbs to test
const strongVerbs = [
  { root: "ك-ت-ب", example: "كتب", form: "I" },
  { root: "د-ر-س", example: "درس", form: "I" },
  { root: "ف-ت-ح", example: "فتح", form: "I" },
  { root: "ج-ل-س", example: "جلس", form: "I" },
  { root: "خ-ر-ج", example: "خرج", form: "I" },
  { root: "س-م-ع", example: "سمع", form: "I" },
  { root: "ع-م-ل", example: "عمل", form: "I" },
  { root: "ق-ر-أ", example: "قرأ", form: "I" },
  { root: "ل-ع-ب", example: "لعب", form: "I" },
  { root: "ش-ر-ب", example: "شرب", form: "I" },
];

// Divider for console readability
function divider(title) {
  console.log("\n=====================================");
  console.log(title);
  console.log("=====================================\n");
}

// Test a single verb safely
function testStrongVerb({ root, example, form }) {
  try {
    divider(`Testing ${example}  (root: ${root}, form: ${form})`);

    const c = conjugate(root, form);

    console.log("PAST:");
    console.table(c.tables?.past || { error: "missing past" });

    console.log("PRESENT:");
    console.table(c.tables?.present || { error: "missing present" });

    console.log("SUBJUNCTIVE:");
    console.table(c.tables?.subjunctive || { error: "missing subjunctive" });

    console.log("JUSSIVE:");
    console.table(c.tables?.jussive || { error: "missing jussive" });

    console.log("IMPERATIVE:");
    console.table(c.imperative || { error: "missing imperative" });

    console.log("ACTIVE PARTICIPLE:", c.activeParticiple);
    console.log("PASSIVE PARTICIPLE:", c.passiveParticiple);

    console.log("MASDAR:", c.masdar);
    console.log("\n\n");
  } catch (err) {
    console.error(`❌ Error testing ${example}:`, err);
  }
}

// Exported function to run all tests
export function runStrongVerbTests() {
  console.clear();
  console.log("Running strong verb tests...\n");
  strongVerbs.forEach(testStrongVerb);
}
