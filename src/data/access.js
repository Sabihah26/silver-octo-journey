// src/data/access.js
//
// Free tier rules. The fixed list of free word IDs lives in freeWords.js;
// every other word needs full access (paying, admin or complimentary).
//
// Note: this is client-side gating. All word data still ships in the JS
// bundle, so it keeps casual users out but is not secure against someone
// reading the source. Real protection needs the data served from Supabase.

import verbs from "./verbs";
import nouns from "./nouns";
import adjectives from "./adjectives";
import adverbs from "./Adverbs";
import { FREE_IDS } from "./freeWords";

export const FREE_LIMIT = 25;

export const ALL_WORDS = { verb: verbs, noun: nouns, adjective: adjectives, adverb: adverbs };

const FREE_SETS = Object.fromEntries(
  Object.entries(FREE_IDS).map(([type, ids]) => [type, new Set(ids.map(String))])
);

export function isFreeItem(type, id) {
  const set = FREE_SETS[type];
  return set ? set.has(String(id)) : true;
}

export function freeListOf(type, list = ALL_WORDS[type]) {
  return list.filter((item) => isFreeItem(type, item.id));
}

export function freeCount(type) {
  return freeListOf(type).length;
}

export function totalCount(type) {
  return ALL_WORDS[type]?.length ?? 0;
}
