// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";   // ⭐ USE LAYOUT HERE

import HomePage from "./pages/HomePage";
import StudyPage from "./pages/StudyPage";
import RecommendedStudyPage from "./pages/RecommendedStudyPage";
import StudyAllVerbsPage from "./pages/StudyAllVerbsPage";
import VerbPage from "./pages/VerbPage";
import VerbConjugationPage from "./pages/VerbConjugationPage";

// Weak verb trainers
import WeakVerbsTrainer from "./pages/WeakVerbsTrainer";
import WeakVerbTrainer from "./pages/WeakVerbTrainer";

// Search
import SearchPage from "./pages/SearchPage";

// ⭐ FORMS SYSTEM PAGES
import FormsPage from "./pages/FormsPage";
import FormPage from "./pages/FormPage";
import FormDifficultyPage from "./pages/FormDifficultyPage";
import FormTopicPage from "./pages/FormTopicPage";

// Dictionary pages
import VerbList from "./pages/VerbList";
import NounList from "./pages/NounList";
import NounPage from "./pages/NounPage";
import AdverbList from "./pages/AdverbList";

// ⭐ NEW — Noun Category + Topic Pages
import NounCategoryPage from "./pages/NounCategoryPage";
import NounTopicPage from "./pages/NounTopicPage";

// ⭐ ADJECTIVES SYSTEM (NEW)
import AdjectiveList from "./pages/AdjectiveList";
import AdjectivePage from "./pages/AdjectivePage";

// ⭐ NEW — ADJECTIVE CATEGORY SYSTEM
import AdjectiveCategoryPage from "./pages/AdjectiveCategoryPage";
import AdjectiveCategoryList from "./pages/AdjectiveCategoryList";

// Study by Form
import StudyFormPage from "./pages/StudyFormPage";

// REAL Progress Dashboard
import ProgressDashboard from "./pages/ProgressDashboard";

// Placeholder pages
import WordOfTheDayPage from "./pages/WordOfTheDayPage";
import RecentlyViewedPage from "./pages/RecentlyViewedPage";
import FavouritesPage from "./pages/FavouritesPage";
import StudySettingsPage from "./pages/StudySettingsPage";

// ⭐ NEW DEVELOPER PAGES
import DevTestPage from "./pages/DevTestPage";
import ConjugationInspector from "./pages/ConjugationInspector";

// ⭐ REPORTING SYSTEM
import FloatingReportButton from "./components/FloatingReportButton";

// ⭐ ADDED — Flashcards Page
import FlashcardsPage from "./pages/FlashcardsPage";

// ⭐ YOUR TOPIC SYSTEM PAGES
import TopicPage from "./pages/TopicPage";
import TopicNounList from "./pages/TopicNounList";
import TopicStudyPage from "./pages/TopicStudyPage";
import TopicFlashcardsPage from "./pages/TopicFlashcardsPage";
import TopicAITrainer from "./pages/TopicAITrainer";
import SuperStudyMode from "./pages/SuperStudyMode";

export default function App() {
  return (
    <Router>
      <FloatingReportButton />

      {/* ⭐ ALL ROUTES NOW USE LAYOUT */}
      <Layout>
        <Routes>

          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* SEARCH */}
          <Route path="/search" element={<SearchPage />} />

          {/* VERB DETAILS */}
          <Route path="/verb/:id" element={<VerbPage />} />
          <Route path="/verb/:id/:tense" element={<VerbConjugationPage />} />

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

          {/* ⭐ FORMS I–X SYSTEM */}
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/forms/:formNumber" element={<FormPage />} />
          <Route path="/forms/:formNumber/:difficulty" element={<FormDifficultyPage />} />
          <Route path="/forms/:formNumber/:difficulty/:topic" element={<FormTopicPage />} />

          {/* ⭐ DICTIONARY SECTIONS */}
          <Route path="/verbs" element={<VerbList />} />

          {/* ⭐ UPDATED NOUN ROUTES */}
          <Route path="/nouns" element={<NounCategoryPage />} />
          <Route path="/nouns/category/:category" element={<NounTopicPage />} />
          <Route path="/nouns/category/:category/topic/:topic" element={<NounList />} />
          <Route path="/noun/:id" element={<NounPage />} />

          {/* ADVERBS */}
          <Route path="/adverbs" element={<AdverbList />} />

          {/* ⭐ ADJECTIVES (NEW) */}
          <Route path="/adjectives" element={<AdjectiveList />} />
          <Route path="/adjectives/:id" element={<AdjectivePage />} />

          {/* ⭐ ADJECTIVE CATEGORY SYSTEM (NEW) */}
          <Route path="/adjectives/categories" element={<AdjectiveCategoryPage />} />
          <Route path="/adjectives/category/:category" element={<AdjectiveCategoryList />} />

          {/* ⭐ TOPICS SYSTEM */}
          <Route path="/topics" element={<TopicPage />} />
          <Route path="/topics/:topic" element={<TopicNounList />} />
          <Route path="/topics/:topic/study" element={<TopicStudyPage />} />
          <Route path="/topics/:topic/flashcards" element={<TopicFlashcardsPage />} />
          <Route path="/topics/:topic/ai" element={<TopicAITrainer />} />
          <Route path="/topics/:topic/super" element={<SuperStudyMode />} />

          {/* REAL DASHBOARD */}
          <Route path="/study/mastery" element={<ProgressDashboard />} />

          {/* PLACEHOLDER PAGES */}
          <Route path="/word-of-the-day" element={<WordOfTheDayPage />} />
          <Route path="/recent" element={<RecentlyViewedPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/study/settings" element={<StudySettingsPage />} />

          {/* ⭐ DEVELOPER TOOLS */}
          <Route path="/dev/tests" element={<DevTestPage />} />
          <Route path="/dev/inspector" element={<ConjugationInspector />} />

          {/* ⭐ FLASHCARDS PAGE */}
          <Route path="/flashcards" element={<FlashcardsPage />} />

        </Routes>
      </Layout>
    </Router>
  );
}
