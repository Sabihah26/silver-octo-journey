import React from "react";
import conjugate from "../../utils/conjugate";   // ✅ FIXED IMPORT

function WordEntry({ word }) {
  if (!word || typeof word !== "object") {
    return (
      <div className="p-6 text-center text-red-600 text-xl font-bold">
        No word data provided.
      </div>
    );
  }

  const {
    word: arabic,
    meaning,
    audio,
    grammar,
    conjugations,
    examples
  } = word;

  // Roman numeral → number map for Forms I–X
  const formMap = {
    I: 1, II: 2, III: 3, IV: 4, V: 5,
    VI: 6, VII: 7, VIII: 8, IX: 9, X: 10
  };

  // Auto‑generate conjugations for verbs
  let autoConjugations = null;

  if (grammar?.type === "verb" && grammar?.root && grammar?.form) {
    const formNumber = formMap[grammar.form] || grammar.form;

    autoConjugations = conjugate({
      root: grammar.root,
      form: formNumber,     // ✅ FIXED CALL SIGNATURE
    });
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl border border-gray-200">

      {/* Arabic Word */}
      <h1 className="text-4xl font-bold text-center mb-4">{arabic}</h1>

      {/* Meaning */}
      <p className="text-center text-xl text-gray-700 mb-6">
        {meaning}
      </p>

      {/* Grammar Box */}
      {grammar && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6">
          <h2 className="text-lg font-semibold mb-2">Grammar</h2>
          <p><strong>Type:</strong> {grammar.type}</p>
          {grammar.gender && <p><strong>Gender:</strong> {grammar.gender}</p>}
          {grammar.root && <p><strong>Root:</strong> {grammar.root}</p>}
          {grammar.form && <p><strong>Form:</strong> {grammar.form}</p>}
        </div>
      )}

      {/* Examples */}
      {examples && examples.length > 0 && (
        <div className="bg-purple-50 border border-purple-200 p-4 rounded mb-6">
          <h2 className="text-lg font-semibold mb-2">Examples</h2>
          <ul className="list-disc pr-6 text-right">
            {examples.map((ex, index) => (
              <li key={index}>{ex}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Auto Conjugations */}
      {autoConjugations && (
        <div className="bg-green-50 border border-green-200 p-4 rounded mb-6">
          <h2 className="text-lg font-semibold mb-4">Conjugations (Auto)</h2>

          {/* Past */}
          <h3 className="font-bold mt-4">Past</h3>
          <ul className="list-disc pr-6 text-right">
            {Object.entries(autoConjugations.past).map(([p, f]) => (
              <li key={p}>{p}: {f}</li>
            ))}
          </ul>

          {/* Present */}
          <h3 className="font-bold mt-4">Present</h3>
          <ul className="list-disc pr-6 text-right">
            {Object.entries(autoConjugations.present).map(([p, f]) => (
              <li key={p}>{p}: {f}</li>
            ))}
          </ul>

          {/* Imperative */}
          <h3 className="font-bold mt-4">Imperative</h3>
          <ul className="list-disc pr-6 text-right">
            {Object.entries(autoConjugations.imperative).map(([p, f]) => (
              <li key={p}>{p}: {f}</li>
            ))}
          </ul>

          {/* Passive Past */}
          <h3 className="font-bold mt-4">Passive Past</h3>
          <ul className="list-disc pr-6 text-right">
            {Object.entries(autoConjugations.passivePast).map(([p, f]) => (
              <li key={p}>{p}: {f}</li>
            ))}
          </ul>

          {/* Passive Present */}
          <h3 className="font-bold mt-4">Passive Present</h3>
          <ul className="list-disc pr-6 text-right">
            {Object.entries(autoConjugations.passivePresent).map(([p, f]) => (
              <li key={p}>{p}: {f}</li>
            ))}
          </ul>

          {/* Active Participle */}
          <h3 className="font-bold mt-4">Active Participle (اسم الفاعل)</h3>
          <p className="text-right text-lg">{autoConjugations.activeParticiple}</p>

          {/* Passive Participle */}
          <h3 className="font-bold mt-4">Passive Participle (اسم المفعول)</h3>
          <p className="text-right text-lg">{autoConjugations.passiveParticiple}</p>

          {/* Masdar */}
          <h3 className="font-bold mt-4">Masdar (المصدر)</h3>
          <p className="text-right text-lg">{autoConjugations.masdar}</p>

          {/* Negative Forms */}
          <h3 className="font-bold mt-4">Negative Forms</h3>
          <ul className="list-disc pr-6 text-right">
            <li>Past (لم): {autoConjugations.negative?.past}</li>
            <li>Present (لا): {autoConjugations.negative?.present}</li>
            <li>Future (لن): {autoConjugations.negative?.future}</li>
          </ul>

          {/* Adverb */}
          <h3 className="font-bold mt-4">Adverb (اسم الزمان والمكان)</h3>
          <p className="text-right text-lg">{autoConjugations.adverb}</p>

        </div>
      )}

    </div>
  );
}

export default WordEntry;
