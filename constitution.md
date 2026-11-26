# Arabic Dictionary — Project Constitution

> Reference document for future work in this repo. It records how the project is put together,
> its conventions, and its known pitfalls. Last surveyed: **2026-11-22**; free tier added **2026-11-23** (branch `main`, HEAD `b362d8f`).
> Update this file whenever the structure or conventions change.

---

## 1. What the product is

A client-side **React** web app for learners of Arabic. It covers:

- **Dictionary**: verbs (with full conjugation across Forms I–X and weak-verb classes), nouns (singular/dual/plural, gender, examples by level), adjectives and adverbs, all browsable by category or topic.
- **Conjugation**: a rule-based *ṣarf* engine (`src/utils/conjugate.js`) that produces 14-person tables for past, present, imperative, passive, jussive, subjunctive, negatives, futures, participles and masdar.
- **Learning tools**: flashcards, verb quizzes, SRS (spaced repetition, SM-2 style), weak-verb trainers, study-by-form, topic study / "AI trainer" / "super study" modes, progress & mastery dashboard, word of the day, favourites, recently viewed, XP / streaks / achievements / daily reward chest.
- **Accounts & Premium**: Supabase Auth + Stripe subscriptions via Supabase Edge Functions.
- **Error reporting**: users can report data mistakes (Supabase `reports` table, plus an email Edge Function).

All dictionary content is **static JS data bundled into the app**. There is no backend for dictionary content. Supabase is used only for auth, the premium profile and reports.

---

## 2. Tech stack

| Area | Choice / version | Notes |
|---|---|---|
| Build | `react-scripts` **4.0.3** (CRA 4, webpack 4) | Scripts run with `NODE_OPTIONS=--openssl-legacy-provider` through `cross-env`, which CRA 4 needs on modern Node (local Node is v24). |
| React | **19.2.8** installed | ⚠️ `react` and `react-dom` are **not declared** in `package.json`. They are pulled in transitively. Declare them before upgrading anything. |
| Router | `react-router-dom` 6.4.x | `BrowserRouter` with a single `<Layout>` route wrapping `<Outlet/>`. |
| Styling | Tailwind 3.4 + PostCSS + plain CSS + **lots of inline `style={{}}`** | Global navy theme forced in `src/index.css` (`#0A2A5A !important`, white text). Custom Tailwind fonts/sizes in `tailwind.config.js`. |
| Fonts | `@fontsource/cairo`, `noto-naskh-arabic`, `noto-sans` | Tailwind `font-arabic` maps to Amiri/Scheherazade. |
| Backend | Supabase (`@supabase/supabase-js` **2.49.1**, recently upgraded from v1) | Project ref `bdwpavckdqqmionygyvf`. |
| Payments | Stripe (`npm:stripe@17.7.0` inside Deno Edge Functions) | |
| Email | Resend (in the `send-report-email` function) | |
| Tests | None real. `src/tests/*.js` are console-log stubs, and there are dev pages at `/dev/tests` and `/dev/inspector`. | `npm test` runs CRA Jest, with no test files present. |

### Commands
```powershell
npm install
```
```powershell
npm start
```
```powershell
npm run build
```

### Environment
- `.env.local` (git-ignored) must define `REACT_APP_SUPABASE_ANON_KEY` (and optionally `REACT_APP_SUPABASE_URL`). See `.env.example`.
- `src/supabase.js` **throws at import time** if the anon key is missing, so the whole app goes blank without it.
- Edge Function secrets live in Supabase, never in the repo: `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`, `SUPABASE_SERVICE_ROLE_KEY`, `ALLOWED_ORIGINS`, `RESEND_API_KEY`.

---

## 3. Repository map

```
arabic-dictionary/
├── constitution.md          ← this file
├── .agent.md                ← older agent brief ("App Error Checker"): minimal, explained, consent-first fixes
├── README.md                ← outdated boilerplate (describes a tiny search app)
├── package.json / tailwind.config.js / postcss.config.js
├── public/                  ← index.html, plus audio/example asset folders (verbs/forms, verbs/examples, nouns/, adverbs/), mostly empty
├── scripts/autoAssignCategories.js   ← Node script that tags verb files with semantic/grammatical categories
├── supabase/
│   ├── config.toml          ← function settings (verify_jwt per function)
│   ├── migrations/          ← profiles table + RLS + new-user trigger + grant
│   └── functions/
│       ├── create-checkout-session/   (verify_jwt = true)
│       ├── create-customer-portal/    (verify_jwt = true)
│       ├── stripe-webhook/            (verify_jwt = false, verifies Stripe signature)
│       └── send-report-email/         (verify_jwt = false, Resend)
├── build/                   ← CRA build output (git-ignored)
└── src/
    ├── index.js             ← mounts <SavedWordsProvider><App/></SavedWordsProvider>
    ├── App.js               ← ⭐ THE LIVE ROUTER (all routes are defined here)
    ├── AppRoutes.jsx        ← ⚠️ legacy, unused route table (references many unrouted pages)
    ├── supabase.js          ← Supabase client singleton
    ├── index.css            ← Tailwind directives + global theme + hero/home styles
    ├── context/
    │   ├── PremiumContext.jsx    ← auth user + isPremium + Stripe checkout/portal (usePremium())
    │   ├── SavedWordsContext.jsx ← saved words in localStorage
    │   └── ThemeContext.js       ← light/dark (not mounted in App)
    ├── components/          ← Navbar, Layout, conjugation tables, PremiumLock/Modal, ReportIssue, reward chest, audio…
    │   └── Word/            ← older WordEntry component family
    ├── data/                ← ⭐ ALL DICTIONARY CONTENT (see §4)
    ├── utils/               ← engines: conjugate, srs, quiz, study, nouns, roots, weak detection, storage helpers
    │   ├── forms/form1..10.js, utils/weak/*.js  ← older per-form / per-weak-type modules (not used by conjugate.js)
    ├── engine/              ← transliterate.js, vowelColorizer.js
    ├── pages/               ← ~115 page components (many not routed, see §6)
    │   └── dictionary/ flashcards/ grammar/ premium/ root/ study/ user/  ← barrel index.js files
    ├── styles/, hooks/useSRS (empty file), tests/ (stubs)
```

Stray items: `check-ids.js/` is an **empty directory**. `src/pages/src/pages/` is an accidental nested folder. `src/pages/SRS Engine (Spaced Repetition)` is a stray file with spaces in its name. There's also a PNG in `src/`. `Audio/` is empty.

---

## 4. Data layer (the heart of the project)

### 4.1 Verbs: one file per verb, auto-loaded
`src/data/verbs.js` uses webpack `require.context("./verbs", true, /\.js$/)` to import **every** `.js` file under `src/data/verbs/**`. It keeps each `default` export whose `type === "verb"`.

- **Adding a verb = dropping a new file in the right folder.** No registry to update.
- Any `.js` file under that tree is imported, so don't put helpers there. **Empty files** are imported harmlessly but are clutter (currently `weak/lam/form5/TKHL_takhallaa.js` and `TWLY_tawallaa.js` are 0 bytes).
- ~131 real verbs as of this survey.

Folder layout:
```
src/data/verbs/
├── form1 … form10/                 ← sound verbs by derived form
└── weak/
    ├── fa/form1, fa/form4          ← assimilated (first-radical weak, و/ي)
    ├── ain/form1, ain/form4        ← hollow (middle-radical weak)
    ├── lam/form1, /form4, /form5, /form8   ← defective (final-radical weak)
    ├── hamza/form1,2,3,4,5,6,8,10  ← hamzated
    └── doubled/                    ← geminate verbs
```

File naming and ID conventions (the **ID must match the filename stem's identity** and be globally unique):
- Sound verbs: `V<n>-<ROOT>_<translit>.js` → `id: "V1_akala"` (older files vary, e.g. `V16-adraka.js`)
- Weak verbs: `WV<A|F|L|…><n>_<translit>.js` → `id: "WVA1_qāla"` (A = ʿayn/hollow, F = fāʾ/assimilated, L = lām/defective). Transliteration uses diacritics (ā, ḥ, ṣ, ʿ, ʾ).
- The most recent commit, "Standardize weak verb data", moved weak verbs into `formN/` subfolders and renumbered some (e.g. `WVF24→25`). Keep that layout.

Canonical verb object (see `form1/V1-AKL_akala.js` and `weak/ain/form1/WVA1_qāla.js`):
```js
export default {
  id, type: "verb",
  arabic: { past },
  transliteration: { past, present, "passive-past", "passive-present", masdar1, masdar2,
                     "active-participle", "passive-participle", subjunctive, jussive,
                     "negative-past", "negative-present", "negative-future", "future-sa", "future-sawfa" },
  english: { simple, detailed },
  englishByType: { past, present, imperative, "passive-past", …, masdar },
  root: "ق-و-ل",              // hyphen-separated radicals
  rootFamily, form: "Form I", wazan: "فَعَلَ",
  formFamily: { name, past, present },
  verbType: "sound" | "hollow" | "defective" | "assimilated" | "hamzated" | "doubled" | …,
  difficulty: { cefr, english, arabicLevel, usage, learnerNotes, corpusRank },
  frequency,
  past, present, imperative, future_sa, future_sawfa,
  masdar: [ … ], activeParticiple, passiveParticiple,
  overrides: { past, present, passivePast, passivePresent, masdar, form1VowelClass: "a"|"i"|"u" },
  superTopic, topics: [ … ], semanticFamily, categories: [ … ],
  relatedVerbs: { root, semantic, formFamily }, relatedNouns, synonyms, antonyms,
  examples: { simple|natural|rich: { ar, en, tr, audio } },
  audio, notes
}
```
- `form` must be a label the engine understands (`"Form I"` … `"Form X"`). Two files use `"Form Iq (quadriliteral)"`, which `conjugate()` **cannot** handle (it logs "Invalid form" and returns empty tables).
- `verbType` values in use: sound, hollow, defective, assimilated, hamzated, doubled, plus a few non-standard ones (`weak-initial`, `weak-medial`, `reduplicated-quadriliteral`). Prefer the six standard values.
- `overrides` is how the data corrects the engine. **Always pass `verb.overrides` to `conjugate()`.**

### 4.2 Nouns, adjectives, adverbs: single array files
| File | Count | ID | Field names |
|---|---|---|---|
| `data/nouns.js` | ~124 | `"N1"`… | `arabic, transliteration, english, root, gender, singular, dual, plural, category, topics[], notes, examples.{beginner,medium,advanced}[]{ar,en,tr}` |
| `data/adjectives.js` | ~19 | `"A1"`… | ⚠️ `ar, en, tr`, `key`, `category`, `example_ar/en` |
| `data/Adverbs.js` (capital A) | ~20 | `"D1"`… | `key, arabic, transliteration, english, category, example_ar/en`, optional `premium: true` |

Noun categories: household, people, food, nature, school, places, abstract, tools, work.
⚠️ Field naming is **inconsistent across types** (adjectives use `ar/en/tr`, while the others use `arabic/english/transliteration`). Pages written for one shape break on another, so check before reusing.

### 4.3 Other data files
- `data/index.js`: barrel aggregating everything.
- `data/schema.js`: an **aspirational** schema (numeric ids, nested conjugations) that does **not** match the real verb files. Don't treat it as truth.
- `data/categories.json`: semantic and grammatical category lists (used by `scripts/autoAssignCategories.js`).
- `data/verbTopics.js`: ⚠️ **stale**. It references numeric IDs that no longer exist (current ids are strings like `"V1_akala"`).
- `data/freeWords.js` + `data/access.js`: the free tier (see §8).

---

## 5. Conjugation engine: `src/utils/conjugate.js`

`conjugate(root, form, overrides = {})`, the single source of truth for generated forms.

- `root`: `"ك-ت-ب"` or an array of radicals. `form`: any of `"Form I"`, `"Form1"`, `"form1"`, `"1"`, `"I"` (normalized via `FORM_KEY_MAP`).
- Detects the weak type from the radicals, applies form patterns (`FORM_PATTERNS`, `PASSIVE_FORM_PATTERNS`, `MASDAR_PATTERNS`, `ACTIVE_/PASSIVE_PARTICIPLE`), then builds full tables.
- Lemma precedence: `overrides.past/present/passivePast/passivePresent/masdar` win over generated patterns. `overrides.form1VowelClass` picks the Form I present vowel (a/i/u).
- Returns **two shapes**:
  - Top level: maps keyed by **Arabic pronoun labels** (`"هو"`, `"أنتَ"`…) for past, present, passivePast, passivePresent, jussive, subjunctive, negativePast/Present/Future, future_sa, future_sawfa, plus participles and masdar strings.
  - `tables`: the same data keyed by **person codes** (`3ms, 3md, 3mp, 3fs, 3fd, 3fp, 2ms, 2md, 2mp, 2fs, 2fd, 2fp, 1s, 1p`).
- `PERSONS_14` and `expandTo14(tenseMap)` give the canonical UI row order.
- Main consumers: `VerbConjugationPage` (passes overrides ✔), `VerbConjugationTable`, `VerbQuiz`/`quizEngine`, `SearchResultsPage`, many unrouted tense pages (most call it **without** overrides ✘). `VerbPage` calls it and discards the result. It mostly renders fields straight from the data file.
- `utils/weak/*.js` and `utils/forms/form*.js` are older modular engines that the main engine **does not use**.
- Weak-verb accuracy is the main quality risk. Hand-written fields in the data file (`past`, `present`, `imperative`, `masdar`, `overrides`) exist so wrong output can be corrected per verb.

---

## 6. Routing & pages

**`src/App.js` is the only live router.** Everything sits under `<Layout>` (Navbar + `<Outlet/>`). Key routes:

| Area | Routes |
|---|---|
| Home / search | `/`, `/search` (query `?q=` or `?root=`) |
| Verbs | `/verbs`, `/verbs/categories`, `/verbs/category/:category`, `/verb/:id`, `/verb/:id/grid`, `/verb/:id/:tense` |
| Forms | `/forms`, `/forms/:formNumber`, `/forms/:formNumber/:difficulty`, `/forms/:formNumber/:difficulty/:topic` |
| Weak verbs | `/weak-verbs`, `/study/weak` (SRS trainer), `/study/weak-quiz` |
| Nouns | `/nouns`, `/nouns/categories`, `/nouns/category/:category`, `/nouns/category/:category/topic/:topic`, `/noun/:id` |
| Adjectives | `/adjectives`, `/adjectives/category[/:category[/list]]`, `/adjectives/:id` |
| Adverbs | `/adverbs`, `/adverbs/category/:category`, `/adverbs/:id` |
| Study | `/study`, `/recommended-study`, `/study-form`, `/study-all`, `/study/mastery`, `/study/settings`, `/verb-quiz`, `/flashcards` |
| Topics | `/topics`, `/topics/:topic[/study|/flashcards|/ai|/super]` |
| User | `/word-of-the-day`, `/recent`, `/favourites` |
| Account | `/billing`, `/auth` |
| Misc | `/about`, `/contact`, `/report-error`, `/admin` (GA4 placeholders), `/dev/tests`, `/dev/inspector` (the last three are admin-only via `AdminRoute`) |
| 404 | inline `*` route |

Navbar links: Home, Verbs (`/verbs/categories`), Nouns (`/nouns/categories`), Adjectives (`/adjectives/category`), Adverbs, About, Contact, Report Error, Premium (`/billing`), Sign in/Account (`/auth`).

**Unrouted / dead pages** (only referenced by the unused `AppRoutes.jsx` or nothing at all): AchievementsPage, ActiveParticiplePage, AdverbCategoryList, AdverbTimePlacePage, CompareVerbs, Dashboard, DictionaryPage, ExamplesPage, Flashcards{Imperative,Moods,PassivePast,PassivePresent,Present}Page, FormCharts, GrammarPage, Imperative(Negative)Page, Masdar(Patterns)Page, MasteryDashboard, MixedFlashcardsPage, MultiTopic{AITrainer,Flashcards,Quiz,Select,Study}, Passive{Participle,Past,Present}Page, PastPage, PresentPage, PresentMoodsPage, ProgressDashboardPage, QuizPage, RecommendedPage, RootAnalysisPage, RootFinder, RootPage, RootPattern(Explorer)Page, SRSQueue, SavedWordsPage, SearchResultsList/Page, StudyAllPage, StudyMode, StudyWeakPage, StudyDuePage, VerbDetailPage, VerbSummary, WeakVerbSummaryPage, WordPage.
→ Before building a "new" feature, check whether one of these already half-implements it (e.g. roots explorer, grammar pages, per-tense flashcards). Before deleting any, confirm with the user.

---

## 7. State & persistence

- **Contexts**: `PremiumProvider` (in `App.js`) and `SavedWordsProvider` (in `index.js`). `ThemeProvider` exists but is not mounted.
- **localStorage is the only persistence for learning data** (no server sync). Keys in use include:
  `srsData`, `studyData`, `lastStudy`, `lastStudyDate`, `xp`, `dailyXP`, `level`, `streak`, `bestStreak`, `badges`, `achievements`, `lastChestClaimDate`, `weakType`, `searchHistory`, `mute`, `theme`, `arabicDictionary`, `savedWords`, `arabic_saved_words_v1`, `favourites_v1`, `recentlyViewed_v1`, `dailyGoal_v1`, `studySettings_v1`, `wordOfTheDay_v1`.
  Some overlap (two "saved words" keys, and `studyData` vs `srsData`). New keys should use the `name_v1` style.
- SRS: `utils/srsEngine.js` (SM-2 intervals, ease, XP, streaks, due items, recommendations). There are also lighter `studyEngine.js` and `studyStorage.js` and `srsNouns.js`.
- Quiz: `utils/quizEngine.js` (`buildVerbQuiz`, `buildGlobalQuiz`). Flashcards: `mixedFlashcardEngine.js` and per-page logic.
- TTS: `utils/tts.js` uses the browser Speech Synthesis API (`speakArabic`, `speakEnglish`).

---

## 8. Auth, Premium & billing

Flow:
1. `/auth` (`AuthPage.jsx`): Supabase email auth.
2. On sign-up, a DB trigger `handle_new_user` inserts a row in `public.profiles`.
3. `PremiumContext` listens to `onAuthStateChange` and reads `profiles.is_premium, is_admin, is_complimentary, stripe_customer_id` (RLS: a user can select only their own row). It exposes `isPremium` (paying), `isAdmin`, `isComplimentary` and `hasFullAccess` (any of the three).
4. `startCheckout()` → Edge Function `create-checkout-session` (JWT required) → Stripe Checkout URL → redirect.
5. `stripe-webhook` (signature-verified, service-role) updates `is_premium`, `subscription_status`, `subscription_period_end`, etc. Premium = status `active`, `trialing` or `past_due` (`past_due` keeps access while Stripe retries a failed renewal).
6. `openCustomerPortal()` → `create-customer-portal` → Stripe billing portal.

Rules:
- **Premium status is only written server-side** by the webhook. The client never writes `profiles`. Keep it that way.
- `is_admin` / `is_complimentary` are set **by hand** in the Supabase Table Editor (migration `20261123000000_profile_access_flags.sql`). Stripe never touches them. Users can't write `profiles` (RLS has no update policy).
- Client gating is cosmetic, because all data ships in the JS bundle.

### Free tier (word gating)
- **Who:** full access = paying, admin or complimentary. Free = signed out, or signed in without any of those. Signed-out visitors get the same free words.
- **What's free:** the fixed ID list in `data/freeWords.js` (25 verbs spread across forms, 25 nouns across categories; all 19 adjectives and 20 adverbs). It is fixed on purpose: adding words never changes what free users already have. Edit it by hand. `data/access.js` exposes `isFreeItem`, `freeListOf`, `FREE_LIMIT`.
- **`useWordAccess()`** (`hooks/useWordAccess.js`): `allVerbs/allNouns/allAdjectives/allAdverbs` for **browse lists** (locked words still show, dimmed, with 🔒 via `components/WordLink.jsx`); `verbs/nouns/adjectives/adverbs` (the accessible subset) for **study, flashcard, quiz and word-of-the-day pools**; `isLocked(type, id)`.
- **Detail routes** (`/verb/:id/*`, `/noun/:id`, `/adjectives/:id`, `/adverbs/:id`) are wrapped in `components/PremiumGate.jsx`, which shows an upgrade card for locked words. `components/FreeTierBanner.jsx` ("25 of N are free") sits on the main list pages.
- `/admin` and `/dev/*` are wrapped in `components/AdminRoute.jsx` (admins only).
- New pages that list or study words must use `useWordAccess()`, not a direct `import verbs from "../data/verbs"`. `srsEngine.getNextRecommendedVerb(used, list)` and `wordOfTheDay.loadWordOfTheDay(list)` take the allowed list.

### Reports
- `components/ReportIssue.jsx` inserts `{ description }` into a Supabase **`reports`** table. That table has **no migration in the repo**, so it was presumably created manually.
- `send-report-email` emails reports via Resend. It has no JWT check and no input validation.

---

## 9. Conventions & house style

- Function components and hooks only. Files are `.jsx` for pages/components, with a few `.js`.
- Comments use a "⭐ NEW / ← ADDED / ❌ REMOVED" annotation style (from earlier AI-assisted edits). It's fine to keep, but don't let it pile up.
- Arabic text is always **fully vowelled** (with ḥarakāt) in data. Roots use hyphens `ف-ع-ل`. Transliteration uses scholarly diacritics in newer files (ā ī ū ḥ ṣ ḍ ṭ ẓ ʿ ʾ) and ASCII-ish forms in older ones (`kitaab`, `daa'iman`).
- Pages look items up with `items.find(x => String(x.id) === String(id))`, so IDs are strings.
- Styling is mostly inline style objects plus some Tailwind and CSS files. The dark navy background is global and forced.
- **Screen sizes:** the app must work on phones (≤600px), iPads/tablets (≤1024px), laptops and desktops. `src/styles/responsive.css` (imported in `index.js`) adapts inline-styled pages by matching their inline style text (e.g. `[style*="grid-template-columns: repeat(5"]`), so fixed grids collapse to 3 columns on tablets and 2 or 1 on phones, and flex button rows wrap. The navbar becomes a swipeable row below 1240px (`Navbar.css`). For new grids prefer `repeat(auto-fit, minmax(180px, 1fr))`, and check new pages at 375px and 768px wide.
- Defensive accessors are common (`verb.arabic?.past || verb.past || …`) because data shapes vary. Normalizing data is better than adding more fallbacks.
- Windows dev machine (CRLF warnings appear in git), and filenames contain Unicode (ʿ ʾ ḥ ṣ ā). Quote paths in shell commands.

### Working agreement for future sessions (carried over from `.agent.md` and good practice)
1. Make **minimal, targeted changes** and explain the reasoning.
2. Ask before large refactors, mass deletions (e.g. dead pages), commits or pushes.
3. After code changes, verify with `npm run build` (or `npm start` plus a page check). There is no automated test suite.
4. When adding or editing verb data, follow the canonical object in §4.1. Keep `id` aligned with the filename, use a standard `form` label and `verbType`, and fill `overrides` when the engine output is wrong.
5. Never commit secrets (`.env.local` is ignored, and Stripe/Resend/service-role keys live only in Supabase).

---

## 10. Known issues / tech-debt backlog

1. `react` / `react-dom` are missing from `package.json` dependencies, and React 19 is running on CRA 4 (an unsupported combination, which works through the legacy OpenSSL flag).
2. `AppRoutes.jsx` is dead, and ~50 pages are unrouted (§6).
3. Stale ID list: `verbTopics.js` uses numeric IDs. (`freeVerbs.js`/`premium.js` were removed and replaced by `freeWords.js`.)
4. `schema.js` doesn't match the real data.
5. Inconsistent field names across nouns, adjectives and adverbs.
6. Two empty verb files in `weak/lam/form5/`. The `Form Iq (quadriliteral)` form is unsupported by `conjugate()`.
7. `VerbPage` calls `conjugate()` without using the result, and many tense pages ignore `overrides`.
8. `/admin` and `/dev/*` are now admin-only in the app, but this is client-side; any data they read needs its own RLS. `ga4.js` returns placeholders.
14. ~~`/flashcards` crashed ("Objects are not valid as a React child")~~ Fixed 2026-11-25: verb cards now use `arabic.past` / `english.simple`, and `?start=<id>` matches string IDs.
9. The `reports` table has no migration. `send-report-email` is unauthenticated.
10. The README is outdated boilerplate with a repeated garbled "silver-octo-journey" heading.
11. Stray files and folders: `check-ids.js/` (empty dir), `src/pages/src/pages/`, `src/pages/SRS Engine (Spaced Repetition)`, `src/hooks/useSRS` (empty), the PNG in `src/`.
12. Duplicate utilities: `extractRoot.js` exists in both `utils/` and `styles/`, there are two dashboards and multiple saved-word stores.
13. Uncommitted work at survey time: Supabase v2 migration, billing/auth pages, Edge Functions and migrations, and the weak-verb folder restructure. All of it is staged as modified or untracked and not yet committed.
