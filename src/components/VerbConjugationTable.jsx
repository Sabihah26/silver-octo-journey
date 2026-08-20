import React from "react";
import TopNav from "./TopNav";

/* ============================================================
   PRONOUN MEANINGS — MATCHES YOUR ACTUAL KEYS
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
  "نحن": "we go"
};

/* ============================================================
   AUDIO
============================================================ */
const playAudio = (text) => {
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
    "ا": "a", "أ": "a", "إ": "i", "آ": "aa",
    "ب": "b", "ت": "t", "ث": "th",
    "ج": "j", "ح": "h", "خ": "kh",
    "د": "d", "ذ": "dh", "ر": "r", "ز": "z",
    "س": "s", "ش": "sh", "ص": "s", "ض": "d",
    "ط": "t", "ظ": "z", "ع": "ʿ", "غ": "gh",
    "ف": "f", "ق": "q", "ك": "k",
    "ل": "l", "م": "m", "ن": "n",
    "ه": "h", "و": "w", "ي": "y",
    "َ": "a", "ِ": "i", "ُ": "u",
    "ً": "an", "ٍ": "in", "ٌ": "un",
    "ّ": "", "ْ": ""
  };
  return arabic.split("").map(ch => map[ch] || ch).join("");
};

/* ============================================================
   PRONOUN LABELS
============================================================ */
const pronouns = {
  "هو": "he",
  "هما_m": "they (dual masc)",
  "هما_f": "they (dual fem)",
  "هم": "they (masc plural)",

  "هي": "she",
  "هنّ": "they (fem plural)",

  "أنتَ": "you (m. sg)",
  "أنتما": "you (dual)",
  "أنتم": "you (m. pl)",

  "أنتِ": "you (f. sg)",
  "أنتنّ": "you (f. pl)",

  "أنا": "I",
  "نحن": "we"
};

const getPronounLabel = (p, genderHint = null) => {
  if (p === "هما") return genderHint === "f" ? pronouns["هما_f"] : pronouns["هما_m"];
  return pronouns[p] || "";
};

/* ============================================================
   STYLES
============================================================ */
const styles = {
  tableWrapper: {
    direction: "rtl",
    width: "100%",
    marginTop: "1.5rem",
    textAlign: "center"
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.75rem",
    marginBottom: "0.75rem"
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
  translit: {
    fontSize: "0.85rem",
    color: "#0A1A3A",
  },
  english: {
    fontSize: "22px",
    color: "#0A1A3A",
    marginBottom: "6px"
  },
  meaning: {
    fontSize: "17px",
    opacity: 0.7,
    marginBottom: "6px"
  },
  audioButton: {
    fontSize: "0.75rem",
    padding: "0.15rem 0.4rem",
    borderRadius: "999px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    marginTop: "4px"
  },
  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#0A1A3A",
    textAlign: "center"
  }
};

/* ============================================================
   CELL + ROW
============================================================ */
const VerbCell = ({ form, pronoun, genderHint }) => {
  if (!form) return null;

  return (
    <div style={styles.cell}>
      <div style={styles.arabic}>{form}</div>

      <div style={styles.english}>{pronoun}</div>

      <div style={styles.meaning}>{pronounMeanings[pronoun] || ""}</div>

      <button style={styles.audioButton} onClick={() => playAudio(form)}>🔊</button>
    </div>
  );
};

const VerbRow = ({
  singular, dual, plural,
  singularPronoun, dualPronoun, pluralPronoun,
  genderHint
}) => {
  if (!singular && !dual && !plural) return null;

  return (
    <div style={styles.row}>
      <VerbCell form={singular} pronoun={singularPronoun} genderHint={genderHint} />
      <VerbCell form={dual} pronoun={dualPronoun} genderHint={genderHint} />
      <VerbCell form={plural} pronoun={pluralPronoun} genderHint={genderHint} />
    </div>
  );
};

/* ============================================================
   TENSE COMPONENTS (Past, Present, Imperative, etc.)
============================================================ */
const PastTense = ({ c }) => {
  if (!c?.past) return null;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Past Tense</div>

      <VerbRow
        singular={c.past["هو"]}
        dual={c.past["هما (م)"]}
        plural={c.past["هم"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
        genderHint="m"
      />

      <VerbRow
        singular={c.past["هي"]}
        dual={c.past["هما (ف)"]}
        plural={c.past["هنّ"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
        genderHint="f"
      />

      <VerbRow
        singular={c.past["أنتَ"]}
        dual={c.past["أنتما"]}
        plural={c.past["أنتم"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
        genderHint="m"
      />

      <VerbRow
        singular={c.past["أنتِ"]}
        dual={c.past["أنتما"]}
        plural={c.past["أنتنّ"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
        genderHint="f"
      />

      <VerbRow
        singular={c.past["أنا"]}
        dual={null}
        plural={c.past["نحن"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};

const PresentTense = ({ c }) => {
  if (!c?.present) return null;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Present Tense</div>

      <VerbRow
        singular={c.present["هو"]}
        dual={c.present["هما (م)"]}
        plural={c.present["هم"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
        genderHint="m"
      />

      <VerbRow
        singular={c.present["هي"]}
        dual={c.present["هما (ف)"]}
        plural={c.present["هنّ"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
        genderHint="f"
      />

      <VerbRow
        singular={c.present["أنتَ"]}
        dual={c.present["أنتما"]}
        plural={c.present["أنتم"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
        genderHint="m"
      />

      <VerbRow
        singular={c.present["أنتِ"]}
        dual={c.present["أنتما"]}
        plural={c.present["أنتنّ"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
        genderHint="f"
      />

      <VerbRow
        singular={c.present["أنا"]}
        dual={null}
        plural={c.present["نحن"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};

/* ============================================================
   IMPERATIVE, PARTICIPLES, MASDAR
============================================================ */
const Imperative = ({ c }) => {
  if (!c?.imperative) return null;
  const imp = c.imperative;

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
        genderHint="m"
      />

      <VerbRow
        singular={imp["2fs"]}
        dual={imp["2fd"]}
        plural={imp["2fp"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
        genderHint="f"
      />
    </div>
  );
};

const ActiveParticiple = ({ c }) => {
  if (!c?.activeParticiple) return null;
  const form = c.activeParticiple;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Active Participle</div>
      <div style={styles.cell}>
        <div style={styles.arabic}>{form}</div>
        <div style={styles.translit}>{transliterate(form)}</div>
      </div>
    </div>
  );
};

const PassiveParticiple = ({ c }) => {
  if (!c?.passiveParticiple) return null;
  const form = c.passiveParticiple;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Passive Participle</div>
      <div style={styles.cell}>
        <div style={styles.arabic}>{form}</div>
        <div style={styles.translit}>{transliterate(form)}</div>
      </div>
    </div>
  );
};

const Masdar = ({ c }) => {
  if (!c?.masdar) return null;
  const list = Array.isArray(c.masdar) ? c.masdar : [c.masdar];

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Masdar</div>
      {list.map((m, i) => (
        <div key={i} style={styles.cell}>
          <div style={styles.arabic}>{m}</div>
          <div style={styles.translit}>{transliterate(m)}</div>
        </div>
      ))}
    </div>
  );
};

/* ============================================================
   SUBJUNCTIVE — 3 COLUMNS × 5 ROWS (MATCH PAST)
============================================================ */
const Subjunctive = ({ c }) => {
  if (!c?.subjunctive) return null;
  const s = c.subjunctive;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Subjunctive</div>

      {/* Row 1 — 3rd person masculine */}
      <VerbRow
        singular={s["هو"]}
        dual={s["هما (م)"]}
        plural={s["هم"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
        genderHint="m"
      />

      {/* Row 2 — 3rd person feminine */}
      <VerbRow
        singular={s["هي"]}
        dual={s["هما (ف)"]}
        plural={s["هنّ"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
        genderHint="f"
      />

      {/* Row 3 — 2nd person masculine */}
      <VerbRow
        singular={s["أنتَ"]}
        dual={s["أنتما"]}
        plural={s["أنتم"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
        genderHint="m"
      />

      {/* Row 4 — 2nd person feminine */}
      <VerbRow
        singular={s["أنتِ"]}
        dual={s["أنتما"]}
        plural={s["أنتنّ"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
        genderHint="f"
      />

      {/* Row 5 — 1st person */}
      <VerbRow
        singular={s["أنا"]}
        dual={null}
        plural={s["نحن"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};


/* ============================================================
   JUSSIVE — 3 COLUMNS × 5 ROWS (MATCH PAST)
============================================================ */
const Jussive = ({ c }) => {
  if (!c?.jussive) return null;
  const j = c.jussive;

  return (
    <div style={styles.tableWrapper}>
      <div style={styles.sectionTitle}>Jussive</div>

      {/* Row 1 — 3rd person masculine */}
      <VerbRow
        singular={j["هو"]}
        dual={j["هما (م)"]}
        plural={j["هم"]}
        singularPronoun="هو"
        dualPronoun="هما (م)"
        pluralPronoun="هم"
        genderHint="m"
      />

      {/* Row 2 — 3rd person feminine */}
      <VerbRow
        singular={j["هي"]}
        dual={j["هما (ف)"]}
        plural={j["هنّ"]}
        singularPronoun="هي"
        dualPronoun="هما (ف)"
        pluralPronoun="هنّ"
        genderHint="f"
      />

      {/* Row 3 — 2nd person masculine */}
      <VerbRow
        singular={j["أنتَ"]}
        dual={j["أنتما"]}
        plural={j["أنتم"]}
        singularPronoun="أنتَ"
        dualPronoun="أنتما"
        pluralPronoun="أنتم"
        genderHint="m"
      />

      {/* Row 4 — 2nd person feminine */}
      <VerbRow
        singular={j["أنتِ"]}
        dual={j["أنتما"]}
        plural={j["أنتنّ"]}
        singularPronoun="أنتِ"
        dualPronoun="أنتما"
        pluralPronoun="أنتنّ"
        genderHint="f"
      />

      {/* Row 5 — 1st person */}
      <VerbRow
        singular={j["أنا"]}
        dual={null}
        plural={j["نحن"]}
        singularPronoun="أنا"
        dualPronoun={null}
        pluralPronoun="نحن"
      />
    </div>
  );
};


/* ============================================================
   TABS + MAIN COMPONENT
============================================================ */
const TENSES = [
  { key: "past", label: "Past" },
  { key: "present", label: "Present" },
  { key: "imperative", label: "Imperative" },
  { key: "activeParticiple", label: "Active Participle" },
  { key: "passiveParticiple", label: "Passive Participle" },
  { key: "masdar", label: "Masdar" },
  { key: "subjunctive", label: "Subjunctive" },
  { key: "jussive", label: "Jussive" }
];

const tabStyles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem",
    justifyContent: "center"
  },
  button: (active) => ({
    width: "140px",
    padding: "0.6rem 0",
    borderRadius: "10px",
    border: active ? "2px solid #0A1A3A" : "2px solid #ccc",
    backgroundColor: active ? "#0A1A3A" : "#fff",
    color: active ? "#fff" : "#0A1A3A",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: "600",
    textAlign: "center",
    transition: "0.2s"
  })
};

const VerbConjugationTable = ({ conjugation, table, tense }) => {
  const c = conjugation || table || {};

  const [activeTense, setActiveTense] = React.useState(
    tense && TENSES.some(t => t.key === tense) ? tense : "past"
  );

  React.useEffect(() => {
    if (tense && TENSES.some(t => t.key === tense)) {
      setActiveTense(tense);
    }
  }, [tense]);

  const renderTense = () => {
    switch (activeTense) {
      case "past": return <PastTense c={c} />;
      case "present": return <PresentTense c={c} />;
      case "imperative": return <Imperative c={c} />;
      case "activeParticiple": return <ActiveParticiple c={c} />;
      case "passiveParticiple": return <PassiveParticiple c={c} />;
      case "masdar": return <Masdar c={c} />;
      case "subjunctive": return <Subjunctive c={c} />;
      case "jussive": return <Jussive c={c} />;
      default: return null;
    }
  };

  return (
    <div>
      <TopNav />

      <div style={tabStyles.wrapper}>
        {TENSES.map((t) => (
          <button
            key={t.key}
            style={tabStyles.button(activeTense === t.key)}
            onClick={() => setActiveTense(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {renderTense()}
    </div>
  );
};

export default VerbConjugationTable;
