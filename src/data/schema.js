// src/data/schema.js

export const DictionarySchema = {
  id: "number",
  type: "verb | noun | adjective | adverb",
  root: "string",
  form: "string | null",

  arabic: "string",
  transliteration: "string",
  english: {
    simple: "string",
    detailed: "string"
  },

  derivedWords: [
    {
      word: "string",
      type: "verb | noun | adjective | adverb",
      id: "number"
    }
  ],

  examples: {
    simple: { ar: "string", en: "string" },
    natural: { ar: "string", en: "string" },
    rich: { ar: "string", en: "string" }
  },

  conjugations: {
    past: "string",
    present: "string",
    future: "string",
    imperative: "string"
  },

  masdar: ["string"],

  relatedWords: {
    synonyms: ["string"],
    antonyms: ["string"]
  },

  audio: {
    word: "string",
    example: "string"
  },

  notes: "string"
};
