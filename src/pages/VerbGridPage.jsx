// src/pages/VerbGridPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import conjugate from "../utils/conjugate";

// ⭐ Proper Arabic → Latin transliteration (Option B)
const autoTranslit = (ar) => {
  if (typeof ar !== "string") return "";

  let s = ar.replace(/ـ/g, "");
  s = s.replace(/(.)ّ/g, "$1$1");

  s = s.replace(/َا/g, "ā").replace(/ُو/g, "ū").replace(/ِي/g, "ī");
  s = s.replace(/[َُِْ]/g, "").replace(/[ًٌٍ]/g, "");

  s = s
    .replace(/أ/g, "ʾa")
    .replace(/إ/g, "ʾi")
    .replace(/ؤ/g, "ʾu")
    .replace(/ئ/g, "ʾi")
    .replace(/ء/g, "ʾ");

  s = s
    .replace(/ا/g, "ā")
    .replace(/ب/g, "b")
    .replace(/ت/g, "t")
    .replace(/ث/g, "th")
    .replace(/ج/g, "j")
    .replace(/ح/g, "ḥ")
    .replace(/خ/g, "kh")
    .replace(/د/g, "d")
    .replace(/ذ/g, "dh")
    .replace(/ر/g, "r")
    .replace(/ز/g, "z")
    .replace(/س/g, "s")
    .replace(/ش/g, "sh")
    .replace(/ص/g, "ṣ")
    .replace(/ض/g, "ḍ")
    .replace(/ط/g, "ṭ")
    .replace(/ظ/g, "ẓ")
    .replace(/ع/g, "ʿ")
    .replace(/غ/g, "gh")
    .replace(/ف/g, "f")
    .replace(/ق/g, "q")
    .replace(/ك/g, "k")
    .replace(/ل/g, "l")
    .replace(/م/g, "m")
    .replace(/ن/g, "n")
    .replace(/ه/g, "h")
    .replace(/و/g, "w")
    .replace(/ي/g, "y")
    .replace(/ة/g, "a");

  return s;
};

// Audio loader
const playAudio = (id, file) => {
  const audio = new Audio(`/audio/verbs/${id}/${file}.mp3`);
  audio.play();
};

// Box component
function GridBox({ labelAr, labelEn, valueAr, valueTr, valueEn, audioFile, id }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "9px",
        width: "250px",
        minHeight: "170px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        border: "1px solid #e5e7eb",
        textAlign: "center",
        color: "#0A1A3A",
      }}
    >
      <div style={{ fontSize: 35, fontWeight: 700, marginBottom: 6, marginTop: 8 }}>
        {valueAr}
      </div>

      <div style={{ fontSize: 19, color: "#646e83", marginBottom: 7 }}>
        {valueTr}
      </div>

      <div style={{ fontSize: 19, color: "#646e83", marginBottom: 7 }}>
        {valueEn}
      </div>

      <div style={{ fontSize: 25, fontWeight: 600, marginTop: 7 }}>
        {labelAr}
      </div>

      <button
        onClick={() => playAudio(id, audioFile)}
        style={{
          marginTop: 10,
          marginBottom: 10,
          background: "#1061e4",
          color: "white",
          border: "none",
          padding: "8px 19px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ▶ Audio
      </button>
    </div>
  );
}

export default function VerbGridPage() {
  const { id } = useParams();
  const verb = verbs.find((v) => v.id === id);

  if (!verb) return <div>Verb not found</div>;

  // Correct form key
  const formKey = verb.form.replace("Form", "").trim();
  const c = conjugate(verb.root, formKey);

  // ⭐ UNIVERSAL ARABIC SELECTOR
  const arabicMain =
    verb.arabic?.simple ||
    verb.arabic?.past ||
    verb.arabic ||
    verb.past ||
    "";

  // ⭐ Extract bare verb (remove "to ")
  const bare = verb.english.simple.replace(/^to\s+/, "").trim();

  // ⭐ FULL IRREGULAR VERB DICTIONARY
  const irregular = {
    do: { past: "did", passive: "done", active: "doing" },
    go: { past: "went", passive: "gone", active: "going" },
    eat: { past: "ate", passive: "eaten", active: "eating" },
    write: { past: "wrote", passive: "written", active: "writing" },
    see: { past: "saw", passive: "seen", active: "seeing" },
    take: { past: "took", passive: "taken", active: "taking" },
    give: { past: "gave", passive: "given", active: "giving" },
    make: { past: "made", passive: "made", active: "making" },
    come: { past: "came", passive: "come", active: "coming" },
    become: { past: "became", passive: "become", active: "becoming" },
    understand: { past: "understood", passive: "understood", active: "understanding" },
    open: { past: "opened", passive: "opened", active: "opening" },
    run: { past: "ran", passive: "run", active: "running" },
    speak: { past: "spoke", passive: "spoken", active: "speaking" },
    break: { past: "broke", passive: "broken", active: "breaking" },
    choose: { past: "chose", passive: "chosen", active: "choosing" },
    drive: { past: "drove", passive: "driven", active: "driving" },
    fall: { past: "fell", passive: "fallen", active: "falling" },
    fly: { past: "flew", passive: "flown", active: "flying" },
    grow: { past: "grew", passive: "grown", active: "growing" },
    know: { past: "knew", passive: "known", active: "knowing" },
    read: { past: "read", passive: "read", active: "reading" },
    say: { past: "said", passive: "said", active: "saying" },
    sell: { past: "sold", passive: "sold", active: "selling" },
    send: { past: "sent", passive: "sent", active: "sending" },
    sleep: { past: "slept", passive: "slept", active: "sleeping" },
    swim: { past: "swam", passive: "swum", active: "swimming" },
    think: { past: "thought", passive: "thought", active: "thinking" },
  };

  // ⭐ Determine correct forms
  const past = irregular[bare]?.past || bare + "ed";
  const passive = irregular[bare]?.passive || past;
  const active = irregular[bare]?.active || bare + "ing";

  // ⭐ Build correct English forms
  const englishMeaning = {
    past: `he ${past}`,
    present: `he ${bare === "be" ? "is" : bare === "do" ? "does" : bare + "s"}`,
    continuous: `he is ${active}`,
    "passive-past": `he was ${passive}`,
    "passive-present": `he is ${passive}`,
    subjunctive: `he should ${bare}`,
    jussive: `he may ${bare}`,
    "negative-past": `he did not ${bare}`,
    "negative-present": `he does not ${bare}`,
    "future-sa": `he will ${bare}`,
    "future-sawfa": `he will ${bare}`,
    masdar1: `the act of ${active}`,
    masdar2: `the act of ${active}`,
    "active-participle": `the one who ${bare}s`,
    "passive-participle": `the one who is ${passive}`,
  };

  // Masdar handling
  const masdarSource = verb.masdar || c.masdar;
  const masdars = [];

  if (Array.isArray(masdarSource)) {
    masdarSource.forEach((m) =>
      masdars.push({
        ar: m,
        tr: autoTranslit(m),
        en: englishMeaning.masdar1,
      })
    );
  } else {
    masdars.push({
      ar: masdarSource,
      tr: autoTranslit(masdarSource),
      en: englishMeaning.masdar1,
    });
  }

  // Correct keys for VerbDetailPage
  const items = [
    { key: "past", labelAr: "الماضي", value: c.past["هو"], audio: "past" },
    { key: "present", labelAr: "المضارع", value: c.present["هو"], audio: "present" },
    { key: "active-participle", labelAr: "اسم الفاعل", value: c.activeParticiple, audio: "activeParticiple" },
    { key: "masdar1", labelAr: "المصدر ١", value: masdars[0].ar, audio: "masdar1" },
    { key: "masdar2", labelAr: "المصدر ٢", value: masdars[1]?.ar, audio: "masdar2" },
    { key: "passive-past", labelAr: "الماضي المبني للمجهول", value: c.passivePast["هو"], audio: "passivePast" },
    { key: "passive-present", labelAr: "المضارع المبني للمجهول", value: c.passivePresent["هو"], audio: "passivePresent" },
    { key: "passive-participle", labelAr: "اسم المفعول", value: c.passiveParticiple, audio: "passiveParticiple" },
    { key: "jussive", labelAr: "المجزوم", value: c.jussive["هو"], audio: "jussive" },
    { key: "subjunctive", labelAr: "المنصوب", value: c.subjunctive["هو"], audio: "subjunctive" },
    { key: "negative-past", labelAr: "نفي الماضي", value: c.negativePast["هو"], audio: "negativePast" },
    { key: "negative-present", labelAr: "نفي المضارع", value: c.negativePresent["هو"], audio: "negativePresent" },
    { key: "future-sa", labelAr: "س", value: c.future_sa["هو"], audio: "future_sa" },
    { key: "future-sawfa", labelAr: "سوف", value: c.future_sawfa["هو"], audio: "future_sawfa" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        background: "#0A1A3A",
        minHeight: "100vh",
        color: "white",
        direction: "rtl",
      }}
    >
      <div
        style={{
          background: "white",
          color: "#0A1A3A",
          padding: "20px",
          borderRadius: "14px",
          textAlign: "center",
          marginBottom: "20px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div style={{ fontSize: "60px", fontWeight: "700", marginBottom: "10px" }}>
          {arabicMain}
        </div>

        <div style={{ fontSize: "28px", marginBottom: "10px" }}>
          {verb.english?.simple}
        </div>

        <div style={{ fontSize: "22px", marginBottom: "6px" }}>
          <strong>Root:</strong> {verb.root}
        </div>

        <div style={{ fontSize: "22px", marginBottom: "6px" }}>
          <strong>Form:</strong> {verb.form}
        </div>

        <div style={{ fontSize: "22px" }}>
          <strong>Translit:</strong>{" "}
          {verb.transliteration?.simple ||
            verb.transliteration?.past ||
            autoTranslit(arabicMain)}
        </div>
      </div>

      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Full Conjugation — {verb.arabic?.past} ({verb.root})
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 280px)",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {items.map((item, i) =>
          item.value ? (
            <Link key={i} to={`/verb/${verb.id}/${item.key}`} style={{ textDecoration: "none" }}>
              <GridBox
                id={verb.id}
                labelAr={item.labelAr}
                labelEn={englishMeaning[item.key]}
                valueAr={item.value}
                valueTr={verb.transliteration?.[item.key] || autoTranslit(item.value)}
                valueEn={englishMeaning[item.key]}
                audioFile={item.audio}
              />
            </Link>
          ) : null
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: 30 }}>
        <Link
          to={`/verb/${verb.id}`}
          style={{
            color: "#b9cdee",
            fontSize: 28,
            textDecoration: "underline",
          }}
        >
          ← Back to Verb Page
        </Link>
      </div>
    </div>
  );
}
