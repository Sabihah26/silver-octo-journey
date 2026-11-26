// src/data/index.js

// These files have DEFAULT exports
import verbs from "./verbs.js";
import nouns from "./nouns.js";
import adjectives from "./adjectives.js";
import adverbs from "./Adverbs.js";

// These files DO NOT have default exports — so we import EVERYTHING
import * as verbTopics from "./verbTopics.js";
import * as schema from "./schema.js";

export default {
  verbs,
  verbTopics,
  nouns,
  adjectives,
  adverbs,
  schema
};
