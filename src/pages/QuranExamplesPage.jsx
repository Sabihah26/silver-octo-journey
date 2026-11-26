import React from "react";
import { Link, useParams } from "react-router-dom";
import verbs from "../data/verbs";
import "./QuranExamplesPage.css";

export default function QuranExamplesPage() {
  const { id } = useParams();
  const verb = verbs.find((item) => String(item.id) === String(id));

  if (!verb) {
    return (
      <main className="quran-examples-page">
        <h1>Verb not found</h1>
        <Link to="/verbs">Back to Verb List</Link>
      </main>
    );
  }

  const examples = verb.quranExamples || [];

  return (
    <main className="quran-examples-page">
      <header className="quran-examples-header">
        <Link to={`/verb/${verb.id}`} className="quran-examples-back">
          ← Back to verb
        </Link>
        <h1>Quran examples</h1>
        <p>
          <span lang="ar" dir="rtl">{verb.arabic?.past || verb.past || ""}</span>
          {verb.english?.simple ? ` — ${verb.english.simple}` : ""}
        </p>
      </header>

      {examples.length === 0 ? (
        <p className="quran-examples-empty">
          No Quran examples have been added for this verb yet.
        </p>
      ) : (
        <div className="quran-examples-list">
          {examples.map((example, index) => (
            <article
              className="quran-example-card"
              key={`${example.reference || "quran-example"}-${index}`}
            >
              <div className="quran-example-details">
                <h2>Quran</h2>
                {example.reference && <p className="quran-reference">{example.reference}</p>}
                {example.lemma && (
                  <p><strong>Lemma:</strong> {example.lemma}</p>
                )}
                {example.focusWord && (
                  <p><strong>Focus word:</strong> {example.focusWord}</p>
                )}
                {example.morphology && <p>{example.morphology}</p>}
              </div>

              <div className="quran-example-text">
                {example.arabic && (
                  <p className="quran-arabic" lang="ar" dir="rtl">
                    {example.arabic}
                  </p>
                )}
                {example.translation && (
                  <p className="quran-translation" lang="en">
                    {example.translation}
                  </p>
                )}
                {example.source && example.sourceUrl && (
                  <p className="quran-source">
                    {example.translation ? "Arabic, word-by-word translation and morphology from" : "Arabic and morphology from"}{" "}
                    <a href={example.sourceUrl} target="_blank" rel="noreferrer">
                      {example.source}
                    </a>
                    .{" "}
                    <a
                      href="https://corpus.quran.com/download/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Usage terms
                    </a>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
