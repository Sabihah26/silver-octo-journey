// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ⭐ IMPORTANT — your real provider lives in PremiumContext.jsx
import { PremiumProvider } from "./context/PremiumContext.jsx";

import Layout from "./components/Layout";

// PREMIUM
import BillingPage from "./pages/BillingPage";

// MAIN PAGES
import HomePage from "./pages/HomePage";
import StudyPage from "./pages/StudyPage";
import RecommendedStudyPage from "./pages/RecommendedStudyPage";
import StudyAllVerbsPage from "./pages/StudyAllVerbsPage";
import VerbPage from "./pages/VerbPage";
import VerbConjugationPage from "./pages/VerbConjugationPage";

// ⭐ NEW FULL GRID PAGE
import VerbGridPage from "./pages/VerbGridPage";

// WEAK VERB TRAINERS
import WeakVerbsTrainer from "./pages/WeakVerbsTrainer";
import WeakVerbTrainer from "./pages/WeakVerbTrainer";

// ⭐ FULL WEAK VERBS PAGE (ADDED)
import WeakVerbsPage from "./pages/WeakVerbsPage";   // ← ADDED

// SEARCH
import SearchPage from "./pages/SearchPage";

// FORMS SYSTEM
import FormsPage from "./pages/FormsPage";
import FormPage from "./pages/FormPage";
import FormDifficultyPage from "./pages/FormDifficultyPage";
import FormTopicPage from "./pages/FormTopicPage";

// DICTIONARY
import VerbList from "./pages/VerbList";
import NounList from "./pages/NounList";
import NounPage from "./pages/NounPage";
import AdverbList from "./pages/AdverbList";
import AdverbPage from "./pages/AdverbPage";

// ⭐ VERB CATEGORY SYSTEM (NEW)
import VerbCategoryPage from "./pages/VerbCategoryPage";   // ← NEW

// NOUN CATEGORY SYSTEM
import NounCategoryPage from "./pages/NounCategoryPage";
import NounTopicPage from "./pages/NounTopicPage";

// ADJECTIVES SYSTEM
import AdjectiveList from "./pages/AdjectiveList";
import AdjectivePage from "./pages/AdjectivePage";

// ⭐ RESTORED — AdjectiveCategoryPage (AMENDED)
import AdjectiveCategoryPage from "./pages/AdjectiveCategoryPage";

// ADJECTIVE CATEGORY SYSTEM
import AdjectiveCategoryList from "./pages/AdjectiveCategoryList";

// STUDY BY FORM
import StudyFormPage from "./pages/StudyFormPage";

// DASHBOARD
import ProgressDashboard from "./pages/ProgressDashboard";

// PLACEHOLDER PAGES
import WordOfTheDayPage from "./pages/WordOfTheDayPage";
import RecentlyViewedPage from "./pages/RecentlyViewedPage";
import FavouritesPage from "./pages/FavouritesPage";
import StudySettingsPage from "./pages/StudySettingsPage";

// DEV PAGES
import DevTestPage from "./pages/DevTestPage";
import ConjugationInspector from "./pages/ConjugationInspector";

// FLASHCARDS
import FlashcardsPage from "./pages/FlashcardsPage";

// TOPICS SYSTEM
import TopicPage from "./pages/TopicPage";
import TopicNounList from "./pages/TopicNounList";
import TopicStudyPage from "./pages/TopicStudyPage";
import TopicFlashcardsPage from "./pages/TopicFlashcardsPage";
import TopicAITrainer from "./pages/TopicAITrainer";
import SuperStudyMode from "./pages/SuperStudyMode";

// VERB QUIZ
import VerbQuiz from "./pages/VerbQuiz";

// ⭐ NEW ABOUT + CONTACT ROUTES
import AboutPage from "./pages/AboutPage";       // ← NEW
import ContactPage from "./pages/ContactPage";   // ← NEW

// ⭐ NEW REPORT ERROR PAGE
import ReportErrorPage from "./pages/ReportErrorPage";   // ← ADDED

// ⭐ ADMIN DASHBOARD (ADDED)
import AdminDashboard from "./pages/AdminDashboard";   // ← ADDED

export default function App() {
  return (
    <PremiumProvider>
      <Router>

        {/* ❌ REMOVED FLOATING REPORT BUTTON (as requested) */}
        {/* <FloatingReportButton /> */}

        <Routes>
          <Route element={<Layout />}>

            {/* HOME */}
            <Route path="/" element={<HomePage />} />

            {/* SEARCH */}
            <Route path="/search" element={<SearchPage />} />

            {/* VERB DETAILS */}
            <Route path="/verb/:id" element={<VerbPage />} />
            <Route path="/verb/:id/grid" element={<VerbGridPage />} />
            <Route path="/verb/:id/:tense" element={<VerbConjugationPage />} />

            {/* ⭐ VERB CATEGORY SYSTEM (NEW) */}
            <Route path="/verbs/categories" element={<VerbCategoryPage />} />   {/* ← NEW */}
            <Route path="/verbs/category/:category" element={<VerbList />} />   {/* ← NEW */}

            {/* STUDY SYSTEM */}
            <Route path="/study" element={<StudyPage />} />
            <Route path="/recommended-study" element={<RecommendedStudyPage />} />

            {/* STUDY BY FORM */}
            <Route path="/study-form" element={<StudyFormPage />} />

            {/* STUDY ALL VERBS */}
            <Route path="/study-all" element={<StudyAllVerbsPage />} />

            {/* WEAK VERB TRAINERS */}
            <Route path="/study/weak" element={<WeakVerbsTrainer />} />
            <Route path="/study/weak-quiz" element={<WeakVerbTrainer />} />

            {/* ⭐ FULL WEAK VERBS PAGE (ADDED) */}
            <Route path="/weak-verbs" element={<WeakVerbsPage />} />

            {/* FORMS I–X SYSTEM */}
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/forms/:formNumber" element={<FormPage />} />
            <Route path="/forms/:formNumber/:difficulty" element={<FormDifficultyPage />} />
            <Route path="/forms/:formNumber/:difficulty/:topic" element={<FormTopicPage />} />

            {/* DICTIONARY */}
            <Route path="/verbs" element={<VerbList />} />

            {/* ⭐ FIXED — noun categories restored */}
            <Route path="/nouns/categories" element={<NounCategoryPage />} />

            {/* noun list */}
            <Route path="/nouns" element={<NounList />} />

            {/* noun details */}
            <Route path="/noun/:id" element={<NounPage />} />

            {/* ⭐ FIXED — category buttons now work */}
            <Route path="/nouns/category/:category" element={<NounList />} />

            {/* topic inside category */}
            <Route path="/nouns/category/:category/topic/:topic" element={<NounTopicPage />} />

            {/* ADVERBS */}
            <Route path="/adverbs" element={<AdverbList />} />
            <Route path="/adverbs/:id" element={<AdverbPage />} />

            {/* ⭐ ADVERB CATEGORY SYSTEM (NEW) */}
            <Route path="/adverbs/category/:category" element={<AdverbList />} />   {/* ← NEW */}

            {/* ADJECTIVES */}
            <Route path="/adjectives" element={<AdjectiveList />} />
            <Route path="/adjectives/:id" element={<AdjectivePage />} />

            {/* ⭐ RESTORED — AdjectiveCategoryPage (AMENDED) */}
            <Route path="/adjectives/category/:category" element={<AdjectiveCategoryPage />} />
            <Route path="/adjectives/category" element={<AdjectiveCategoryPage />} />

            {/* ADJECTIVE CATEGORY LIST (still valid) */}
            <Route path="/adjectives/category/:category/list" element={<AdjectiveCategoryList />} />

            {/* DASHBOARD */}
            <Route path="/study/mastery" element={<ProgressDashboard />} />

            {/* ⭐ ADMIN DASHBOARD (NEW) */}
            <Route path="/admin" element={<AdminDashboard />} />   {/* ← ADDED */}

            {/* PLACEHOLDER PAGES */}
            <Route path="/word-of-the-day" element={<WordOfTheDayPage />} />
            <Route path="/recent" element={<RecentlyViewedPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/study/settings" element={<StudySettingsPage />} />

            {/* ⭐ PREMIUM */}
            <Route path="/billing" element={<BillingPage />} />

            {/* DEV PAGES */}
            <Route path="/dev/tests" element={<DevTestPage />} />
            <Route path="/dev/inspector" element={<ConjugationInspector />} />

            {/* FLASHCARDS */}
            <Route path="/flashcards" element={<FlashcardsPage />} />

            {/* TOPICS SYSTEM */}
            <Route path="/topics" element={<TopicPage />} />
            <Route path="/topics/:topic" element={<TopicNounList />} />
            <Route path="/topics/:topic/study" element={<TopicStudyPage />} />
            <Route path="/topics/:topic/flashcards" element={<TopicFlashcardsPage />} />
            <Route path="/topics/:topic/ai" element={<TopicAITrainer />} />
            <Route path="/topics/:topic/super" element={<SuperStudyMode />} />

            {/* VERB QUIZ */}
            <Route path="/verb-quiz" element={<VerbQuiz />} />

            {/* ⭐ NEW ABOUT + CONTACT ROUTES */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* ⭐ NEW REPORT ERROR ROUTE */}
            <Route path="/report-error" element={<ReportErrorPage />} />

            {/* 404 */}
            <Route
              path="*"
              element={
                <div style={{ padding: 40, color: "white" }}>
                  <h1>404 — Page Not Found</h1>
                  <p>The page you requested does not exist.</p>
                </div>
              }
            />

          </Route>
        </Routes>
      </Router>
    </PremiumProvider>
  );
}
