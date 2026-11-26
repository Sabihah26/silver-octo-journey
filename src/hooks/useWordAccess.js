// src/hooks/useWordAccess.js
//
// - allVerbs / allNouns / allAdjectives / allAdverbs: every word. Use these
//   for browse lists, which show locked words with a padlock.
// - verbs / nouns / adjectives / adverbs: only the words this user may open
//   (everything with full access, the free tier otherwise). Use these for
//   study, flashcard and quiz pools.
// - isLocked(type, id): true when this user can't open that word.
import { useMemo } from "react";
import { usePremium } from "../context/PremiumContext";
import { ALL_WORDS, freeListOf, isFreeItem } from "../data/access";

const ALL = {
  allVerbs: ALL_WORDS.verb,
  allNouns: ALL_WORDS.noun,
  allAdjectives: ALL_WORDS.adjective,
  allAdverbs: ALL_WORDS.adverb,
};

const FREE_WORDS = {
  verbs: freeListOf("verb"),
  nouns: freeListOf("noun"),
  adjectives: freeListOf("adjective"),
  adverbs: freeListOf("adverb"),
};

const FULL_WORDS = {
  verbs: ALL.allVerbs,
  nouns: ALL.allNouns,
  adjectives: ALL.allAdjectives,
  adverbs: ALL.allAdverbs,
};

export default function useWordAccess() {
  const { hasFullAccess, loading } = usePremium();

  return useMemo(
    () => ({
      ...ALL,
      ...(hasFullAccess ? FULL_WORDS : FREE_WORDS),
      hasFullAccess,
      loading,
      isLocked: (type, id) => !hasFullAccess && !isFreeItem(type, id),
    }),
    [hasFullAccess, loading]
  );
}
