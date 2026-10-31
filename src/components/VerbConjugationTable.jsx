// src/pages/VerbConjugationPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import conjugate from "../utils/conjugate";
import TopNav from "./TopNav";

/* ============================================================
   PRONOUN MEANINGS (ENGLISH VERB PHRASES)
============================================================ */
const pronounMeanings = {
  "هو": "he goes",
  "هي": "she goes",

  "أنتَ": "you (m) go",
  "أنتِ": "you (f) go",
  "أنتما": "you two go",
  "أنتم": "you (m. pl) go",
  "أنتنّ": "you (f. pl) go",

  "هما (م)": "they two (m) go",
  "هما (ف)": "they two (f) go",

  "هم": "they (m) go",
  "هنّ": "they (f) go",

  "أنا": "I go",
  "نحن": "we go",
};

/* ============================================================
   AUDIO
============================================================ */
const playAudio = (text) => {
  if (!text) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";
  u.rate = 0.9;
  speechSynthesis.speak(u);
};

/* ============================================================
   SIMPLE TRANSLITERATION
============================================================ */
const transliterate = (arabic) => {
  if (!arabic) return "";

  const map = {
    "ا": "ā", "أ": "ʾa", "إ": "ʾi", "آ": "ʾā",
    "ب": "b", "ت": "t", "ث": "th",
    "ج": "j", "ح": "ḥ", "خ": "kh",
    "د": "d", "ذ": "dh", "ر": "r", "ز": "z",
    "س": "s", "ش": "sh", "ص": "ṣ", "ض": "ḍ",
    "ط": "ṭ", "ظ": "ẓ", "ع": "ʿ", "غ": "gh",
    "ف": "f", "ق": "q", "ك": "k",
    "ل": "l", "م": "m", "ن": "n",
    "ه": "h", "و": "w", "ي": "y",

    "َ": "a",  // fatḥa
    "ِ": "i",  // kasra
    "ُ": "u",  // ḍamma

    "ً": "an",
    "ٍ": "in",
    "ٌ": "un",

    "ْ": "",   // sukoon
    "ّ": "SHADDA", // special marker
  };

  let result = "";
  let last = "";

  for (let ch of arabic) {
    if (ch === "ّ") {
      if (last) result += last; // double the consonant
      continue;
    }

    const latin = map[ch] || ch;
    result += latin;
    last = latin;
  }

  return result;
};

/* ============================================================
   STYLES
============================================================ */
const styles = {
  tableWrapper: {
    direction: "rtl",
    width: "100%",
    marginTop: "1.5rem",
    textAlign: "center",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.75rem",
    marginBottom: "0.75rem",
  },
  cell: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0.5rem 0.75rem",
    textAlign: "center",
    backgroundColor: "#fafafa",
    color: "#0A1A3A",
  },
  arabic: {
    fontSize: "40px",
    fontWeight: "600",
    lineHeight: "1.2",
    color: "#0A1A3A",
  },
  meaning: {
    fontSize: "17px",
    opacity: 0.7,
    marginTop: "6px",
    marginBottom: "6px",
  },
  audioButton: {
    fontSize: "0.75rem",
    padding: "0.15rem 0.4rem",
    borderRadius: "999px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    marginTop: "4px",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#0A1A3A",
    textAlign: "center",
  },
};

/* ============================================================
   CELL + ROW
============================================================ */
const VerbCell = ({ form, pronoun }) => {
  if (!form) return null;

  return (
    <div style={styles.cell}>
      <div style={styles.arabic}>{form}</div>
      {/* ONE PRONOUN ONLY: Arabic pronoun + English meaning */}
      <div style={styles.meaning}>{pronounMeanings[pronoun] || ""}</div>
      <button style={styles.audioButton} onClick={() => playAudio(form)}>🔊</button>
    </div>
  );
};

const VerbRow = ({
  singular, dual, plural,
  singularPronoun, dualPronoun, pluralPronoun,
}) => {
  if (!singular && !dual && !plural) return null;

  return (
    <div style={styles.row}>
      <VerbCell form={singular} pronoun={singularPronoun} />
      <VerbCell form={dual} pronoun={dualPronoun} />
      <VerbCell form={plural} pronoun={pluralPronoun} />
    </div>
  );
};

/* ============================================================
   TENSE COMPONENTS (ENGINE PERSON KEYS)
============================================================ */
const PastTense = ({ c }) => {
  const p = c.past;
  if (!p) return null;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Past Tense</div>

      <VerbRow
        singular={p["3ms"]}
        dual={p["3md"]}
        plural={p["3mp"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
      />

      <VerbRow
        singular={p["3fs"]}
        dual={p["3fd"]}
        plural={p["3fp"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
      />

      <VerbRow
        singular={p["2ms"]}
        dual={p["2md"]}
        plural={p["2mp"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
      />

      <VerbRow
        singular={p["2fs"]}
        dual={p["2fd"]}
        plural={p["2fp"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
      />

      <VerbRow
        singular={p["1s"]}
        dual={null}
        plural={p["1p"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};

const PresentTense = ({ c }) => {
  const pr = c.present;
  if (!pr) return null;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Present Tense</div>

      <VerbRow
        singular={pr["3ms"]}
        dual={pr["3md"]}
        plural={pr["3mp"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
      />

      <VerbRow
        singular={pr["3fs"]}
        dual={pr["3fd"]}
        plural={pr["3fp"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
      />

      <VerbRow
        singular={pr["2ms"]}
        dual={pr["2md"]}
        plural={pr["2mp"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
      />

      <VerbRow
        singular={pr["2fs"]}
        dual={pr["2fd"]}
        plural={pr["2fp"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
      />

      <VerbRow
        singular={pr["1s"]}
        dual={null}
        plural={pr["1p"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};

const Imperative = ({ c }) => {
  const imp = c.imperative;
  if (!imp) return null;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Imperative</div>

      <VerbRow
        singular={imp["2ms"]}
        dual={imp["2md"]}
        plural={imp["2mp"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
      />

      <VerbRow
        singular={imp["2fs"]}
        dual={imp["2fd"]}
        plural={imp["2fp"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
      />
    </div>
  );
};

const ActiveParticiple = ({ c }) => (
  <div style={styles.tableWrapper}>
    <div style={styles.sectionTitle}>Active Participle</div>
    <div style={styles.cell}>
      <div style={styles.arabic}>{c.activeParticiple}</div>
      <div style={styles.meaning}>{transliterate(c.activeParticiple)}</div>
    </div>
  </div>
);

const PassiveParticiple = ({ c }) => (
  <div style={styles.tableWrapper}>
    <div style={styles.sectionTitle}>Passive Participle</div>
    <div style={styles.cell}>
      <div style={styles.arabic}>{c.passiveParticiple}</div>
      <div style={styles.meaning}>{transliterate(c.passiveParticiple)}</div>
    </div>
  </div>
);

const Masdar = ({ c }) => {
  const list = Array.isArray(c.masdar) ? c.masdar : [c.masdar];
  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Masdar</div>
      {list.map((m, i) => (
        <div key={i} style={styles.cell}>
          <div style={styles.arabic}>{m}</div>
          <div style={styles.meaning}>{transliterate(m)}</div>
        </div>
      ))}
    </div>
  );
};

const Subjunctive = ({ c }) => {
  const s = c.subjunctive;
  if (!s) return null;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Subjunctive</div>

      <VerbRow
        singular={s["3ms"]}
        dual={s["3md"]}
        plural={s["3mp"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
      />

      <VerbRow
        singular={s["3fs"]}
        dual={s["3fd"]}
        plural={s["3fp"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
      />

      <VerbRow
        singular={s["2ms"]}
        dual={s["2md"]}
        plural={s["2mp"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
      />

      <VerbRow
        singular={s["2fs"]}
        dual={s["2fd"]}
        plural={s["2fp"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
      />

      <VerbRow
        singular={s["1s"]}
        dual={null}
        plural={s["1p"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};

const Jussive = ({ c }) => {
  const j = c.jussive;
  if (!j) return null;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Jussive</div>

      <VerbRow
        singular={j["3ms"]}
        dual={j["3md"]}
        plural={j["3mp"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
      />

      <VerbRow
        singular={j["3fs"]}
        dual={j["3fd"]}
        plural={j["3fp"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
      />

      <VerbRow
        singular={j["2ms"]}
        dual={j["2md"]}
        plural={j["2mp"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
      />

      <VerbRow
        singular={j["2fs"]}
        dual={j["2fd"]}
        plural={j["2fp"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
      />

      <VerbRow
        singular={j["1s"]}
        dual={null}
        plural={j["1p"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};

/* ============================================================
   FUTURE (سَـ) AND FUTURE (سَوْفَ)
============================================================ */
const FutureSa = ({ c }) => {
  const f = c.future_sa;
  if (!f) return null;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Future (سَـ)</div>

      <VerbRow
        singular={f["3ms"]}
        dual={f["3md"]}
        plural={f["3mp"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
      />

      <VerbRow
        singular={f["3fs"]}
        dual={f["3fd"]}
        plural={f["3fp"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
      />

      <VerbRow
        singular={f["2ms"]}
        dual={f["2md"]}
        plural={f["2mp"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
      />

      <VerbRow
        singular={f["2fs"]}
        dual={f["2fd"]}
        plural={f["2fp"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
      />

      <VerbRow
        singular={f["1s"]}
        dual={null}
        plural={f["1p"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};

const FutureSawfa = ({ c }) => {
  const f = c.future_sawfa;
  if (!f) return null;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Future (سَوْفَ)</div>

      <VerbRow
        singular={f["3ms"]}
        dual={f["3md"]}
        plural={f["3mp"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
      />

      <VerbRow
        singular={f["3fs"]}
        dual={f["3fd"]}
        plural={f["3fp"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
      />

      <VerbRow
        singular={f["2ms"]}
        dual={f["2md"]}
        plural={f["2mp"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
      />

      <VerbRow
        singular={f["2fs"]}
        dual={f["2fd"]}
        plural={f["2fp"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
      />

      <VerbRow
        singular={f["1s"]}
        dual={null}
        plural={f["1p"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};

/* ============================================================
   MAIN PAGE — ONE TENSE PER PAGE
============================================================ */
export default function VerbConjugationPage() {
  const { id, tense } = useParams();

  const verb = verbs.find((v) => v.id === id);
  if (!verb) return <div>Verb not found</div>;

  // Use overrides so Akala and weak verbs work
  const c = conjugate(verb.root, verb.form, verb.overrides || {});

  const renderTense = () => {
    switch (tense) {
      case "past": return <PastTense c={c} />;
      case "present": return <PresentTense c={c} />;
      case "imperative": return <Imperative c={c} />;
      case "activeParticiple": return <ActiveParticiple c={c} />;
      case "passiveParticiple": return <PassiveParticiple c={c} />;
      case "masdar": return <Masdar c={c} />;
      case "subjunctive": return <Subjunctive c={c} />;
      case "jussive": return <Jussive c={c} />;
      case "future_sa": return <FutureSa c={c} />;
      case "future_sawfa": return <FutureSawfa c={c} />;
      default: return <div>Invalid tense</div>;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <TopNav />

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        {verb.past} — {tense}
      </h1>

      {renderTense()}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link
          to={`/verb/${verb.id}`}
          style={{ color: "#1061e4", marginRight: "20px" }}
        >
          ← Back to Verb Page
        </Link>

        <Link
          to={`/verb/${verb.id}/grid`}
          style={{ color: "#1061e4" }}
        >
          Full Conjugation Grid →
        </Link>
      </div>
    </div>
  );
}
