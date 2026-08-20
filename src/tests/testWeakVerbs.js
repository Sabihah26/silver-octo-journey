// src/tests/testWeakVerbs.js

// Example weak verb test suite.
// You can expand this with your real logic.

export function runWeakVerbTests() {
  console.log("=== Running Weak Verb Tests ===");

  // Example weak verbs (replace with your real data)
  const weakVerbs = [
    { root: "قال", meaning: "to say" },
    { root: "باع", meaning: "to sell" },
    { root: "زاد", meaning: "to increase" },
    { root: "نام", meaning: "to sleep" }
  ];

  weakVerbs.forEach(v => {
    console.log(`Testing weak verb: ${v.root} (${v.meaning})`);
    // Add your conjugation test logic here
  });

  console.log("=== Weak Verb Tests Complete ===");
}
