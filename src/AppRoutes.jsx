// src/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// -----------------------------
// Home
// -----------------------------
import HomePage from "./pages/HomePage";
import RecommendedPage from "./pages/RecommendedPage";

// -----------------------------
// Dictionary Pages
// -----------------------------
import VerbList from "./pages/VerbList";
import VerbPage from "./pages/VerbPage";
import VerbSummary from "./pages/VerbSummary";
import WeakVerbSummaryPage from "./pages/WeakVerbSummaryPage";

import NounList from "./pages/NounList";
import NounPage from "./pages/NounPage";

import AdverbList from "./pages/AdverbList";
import AdverbPage from "./pages/AdverbPage";

// -----------------------------
// Search Pages
// -----------------------------
import SearchResultsList from "./pages/SearchResultsList";
import SearchResultsPage from "./pages/SearchResultsPage";

// -----------------------------
// Grammar Pages
// -----------------------------
import GrammarPage from "./pages/GrammarPage";
import FormCharts from "./pages/FormCharts";
import ActiveParticiplePage from "./pages/ActiveParticiplePage";
import PassiveParticiplePage from "./pages/PassiveParticiplePage";
import MasdarPage from "./pages/MasdarPage";
import MasdarPatternsPage from "./pages/MasdarPatternsPage";

// -----------------------------
// Study Pages
// -----------------------------
import StudyPage from "./pages/StudyPage";
import StudyAllPage from "./pages/StudyAllPage";
import StudyWeakPage from "./pages/StudyWeakPage";
import StudyFormPage from "./pages/StudyFormPage";
import StudyDuePage from "./pages/StudyDuePage";
import StudyMode from "./pages/StudyMode";
import StudySettingsPage from "./pages/StudySettingsPage";
import MasteryDashboard from "./pages/MasteryDashboard";
import ProgressDashboard from "./pages/ProgressDashboard";

// -----------------------------
// Flashcards
// -----------------------------
import FlashcardsPage from "./pages/FlashcardsPage";
import FlashcardsPresentPage from "./pages/FlashcardsPresentPage";
import FlashcardsPassivePastPage from "./pages/FlashcardsPassivePastPage";
import FlashcardsPassivePresentPage from "./pages/FlashcardsPassivePresentPage";
import FlashcardsImperativePage from "./pages/FlashcardsImperativePage";
import FlashcardsMoodsPage from "./pages/FlashcardsMoodsPage";
import MixedFlashcardsPage from "./pages/MixedFlashcardsPage";

// -----------------------------
// Roots
// -----------------------------
import RootFinder from "./pages/RootFinder";
import RootPage from "./pages/RootPage";
import RootPatternExplorerPage from "./pages/RootPatternExplorerPage";
import RootPatternPage from "./pages/RootPatternPage";

// -----------------------------
// User Pages
// -----------------------------
import RecentlyViewedPage from "./pages/RecentlyViewedPage";
import FavouritesPage from "./pages/FavouritesPage";
import SavedWordsPage from "./pages/SavedWordsPage";
import WordOfTheDayPage from "./pages/WordOfTheDayPage";

// -----------------------------
// Premium
// -----------------------------
import BillingPage from "./pages/BillingPage";

// -----------------------------
// ROUTES
// -----------------------------
export default function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<HomePage />} />
      <Route path="/recommended" element={<RecommendedPage />} />

      {/* Dictionary */}
      <Route path="/verbs" element={<VerbList />} />
      <Route path="/verb/:id" element={<VerbPage />} />
      <Route path="/verb-summary/:id" element={<VerbSummary />} />
      <Route path="/weak-verb-summary/:id" element={<WeakVerbSummaryPage />} />

      <Route path="/nouns" element={<NounList />} />
      <Route path="/noun/:id" element={<NounPage />} />

      <Route path="/adverbs" element={<AdverbList />} />
      <Route path="/adverb/:id" element={<AdverbPage />} />

      {/* Search */}
    <Route path="/search" element={<SearchResultsPage />} />


      {/* Grammar */}
      <Route path="/grammar" element={<GrammarPage />} />
      <Route path="/forms" element={<FormCharts />} />
      <Route path="/active-participle" element={<ActiveParticiplePage />} />
      <Route path="/passive-participle" element={<PassiveParticiplePage />} />
      <Route path="/masdar" element={<MasdarPage />} />
      <Route path="/masdar-patterns" element={<MasdarPatternsPage />} />

      {/* Study */}
      <Route path="/study" element={<StudyPage />} />
      <Route path="/study/all" element={<StudyAllPage />} />
      <Route path="/study/weak" element={<StudyWeakPage />} />
      <Route path="/study/form/:form" element={<StudyFormPage />} />
      <Route path="/study/due" element={<StudyDuePage />} />
      <Route path="/study/mode" element={<StudyMode />} />
      <Route path="/study/settings" element={<StudySettingsPage />} />
      <Route path="/study/mastery" element={<MasteryDashboard />} />
      <Route path="/study/progress" element={<ProgressDashboard />} />

      {/* Flashcards */}
      <Route path="/flashcards" element={<FlashcardsPage />} />
      <Route path="/flashcards/present" element={<FlashcardsPresentPage />} />
      <Route path="/flashcards/passive-past" element={<FlashcardsPassivePastPage />} />
      <Route path="/flashcards/passive-present" element={<FlashcardsPassivePresentPage />} />
      <Route path="/flashcards/imperative" element={<FlashcardsImperativePage />} />
      <Route path="/flashcards/moods" element={<FlashcardsMoodsPage />} />
      <Route path="/flashcards/mixed" element={<MixedFlashcardsPage />} />

      {/* Roots */}
      <Route path="/roots" element={<RootFinder />} />
      <Route path="/root/:root" element={<RootPage />} />
      <Route path="/root-patterns" element={<RootPatternExplorerPage />} />
      <Route path="/root-pattern/:pattern" element={<RootPatternPage />} />

      {/* User */}
      <Route path="/recent" element={<RecentlyViewedPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/saved" element={<SavedWordsPage />} />
      <Route path="/word-of-the-day" element={<WordOfTheDayPage />} />

      {/* Premium */}
      <Route path="/billing" element={<BillingPage />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
