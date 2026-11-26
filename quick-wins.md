# Quick Wins Backlog

Small, low-risk cleanups found during the 2026-11-22 repo survey (see `constitution.md` §10).
None of these are done yet. Run `npm run build` after tackling them.

## Ready to do

| # | Fix | Where | Effort | Risk |
|---|---|---|---|---|
| 1 | Declare `react` and `react-dom` (pin `19.2.8`, the version already installed) in `dependencies` | `package.json` | 1 line | Very low |
| 2 | Delete the two empty (0-byte) verb files | `src/data/verbs/weak/lam/form5/TKHL_takhallaa.js`, `TWLY_tawallaa.js` | 2 deletions | None |
| 3 | Remove stray items after checking they are empty or unused | `check-ids.js/` (empty dir), `src/hooks/useSRS` (empty), `src/pages/SRS Engine (Spaced Repetition)`, `src/pages/src/pages/` | Minutes | None if empty |
| 4 | Remove the unused `conjugate(verb.root, formKey)` call | `src/pages/VerbPage.jsx` (~line 28) | 1 line | None |
| 5 | Pass `verb.overrides` to `conjugate()` in routed consumers, so weak-verb corrections apply | `src/pages/VerbQuiz.jsx`, `src/components/VerbConjugationTable.jsx` | A few lines | Low; fixes wrong quiz answers |
| 6 | ~~Hide `/dev/*` and `/admin` in production~~ Done 2026-11-23: admin-only via `AdminRoute` | `src/App.js` | n/a | n/a |
| 7 | Rewrite the README: real description, setup, env vars (`REACT_APP_SUPABASE_ANON_KEY`), and remove the garbled repeated heading | `README.md` | Short | None |

## Needs a quick check first

- **Stale ID lists**: `freeVerbs.js` and `premium.js` were removed 2026-11-23 (replaced by `freeWords.js`). `src/data/verbTopics.js` still uses numeric IDs that no longer exist. Grep for imports, then delete it or rewrite it with the current string IDs.
- **`reports` table migration**: `ReportIssue.jsx` inserts into `public.reports`, but there's no migration. Pull the real column list from Supabase first, then add the migration plus RLS (insert-only for `anon`/`authenticated`).

## Not quick (separate projects)

- Prune or route the ~50 unrouted pages and delete `src/AppRoutes.jsx`
- Normalize field names across nouns, adjectives and adverbs (`arabic/english/transliteration` everywhere)
- Support `Form Iq (quadriliteral)` in `conjugate()`
- Move off CRA 4 (to Vite) and resolve React 19 compatibility
