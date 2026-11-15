import fs from "fs";
import path from "path";

// Path to your verbs folder
const verbsDir = "./src/data/verbs";

// Semantic category rules (based on topics)
const semanticRules = {
  daily: ["daily"],
  motion: ["motion"],
  thinking: ["thinking"],
  speaking: ["speaking"],
  writing: ["writing"],
  school: ["school"],
  learning: ["learning"],
  communication: ["communication"]
};

// Grammatical category rules (based on verbType)
const grammaticalRules = {
  sound: (v) => v.verbType === "sound",
  weak: (v) => v.verbType === "weak",
  hollow: (v) => v.verbType === "hollow",
  defective: (v) => v.verbType === "defective",
  doubled: (v) => v.verbType === "doubled"
};

// Assign categories to a verb
function autoAssignCategories(verb) {
  const categories = new Set(verb.categories || []);

  // Semantic categories from topics
  if (verb.topics) {
    for (const [cat, keywords] of Object.entries(semanticRules)) {
      if (verb.topics.some((t) => keywords.includes(t))) {
        categories.add(cat);
      }
    }
  }

  // Grammatical categories
  for (const [cat, rule] of Object.entries(grammaticalRules)) {
    if (rule(verb)) categories.add(cat);
  }

  return Array.from(categories);
}

// Loop through all verb files
fs.readdirSync(verbsDir).forEach((file) => {
  const filePath = path.join(verbsDir, file);

  // Load verb file
  const verb = require(filePath).default;

  // Assign categories
  verb.categories = autoAssignCategories(verb);

  // Save updated file
  fs.writeFileSync(
    filePath,
    "export default " + JSON.stringify(verb, null, 2)
  );

  console.log("Updated:", file);
});
