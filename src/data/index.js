// src/data/index.js

// These files have DEFAULT exports
import verbs from "./verbs.js";
import nouns from "./nouns.js";
import adjectives from "./adjectives.js";
import adverbs from "./Adverbs.js";

// These files DO NOT have default exports — so we import EVERYTHING
import * as freeVerbs from "./freeVerbs.js";
import * as verbTopics from "./verbTopics.js";
import * as premium from "./premium.js";
import * as schema from "./schema.js";

export default {
  verbs,
  freeVerbs,
  verbTopics,
  nouns,
  adjectives,
  adverbs,
  premium,
  schema
};
