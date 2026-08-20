import React from "react";

function ConjugationTable({ conjugations }) {
  if (!conjugations) return null;

  return (
    <div className="conjugation-table">
      <h3>Conjugations</h3>

      <p><strong>Past:</strong> {conjugations.past}</p>
      <p><strong>Present:</strong> {conjugations.present}</p>
      <p><strong>Imperative:</strong> {conjugations.imperative}</p>
      <p><strong>Active Participle:</strong> {conjugations.activeParticiple}</p>
      <p><strong>Passive Participle:</strong> {conjugations.passiveParticiple}</p>
    </div>
  );
}

export default ConjugationTable;
