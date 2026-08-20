import React from "react";

function GrammarInfoBox({ grammar }) {
  if (!grammar) return null;

  return (
    <div className="grammar-box">
      <h3>Grammar</h3>
      <p><strong>Type:</strong> {grammar.type}</p>
      <p><strong>Pattern:</strong> {grammar.pattern}</p>
      <p><strong>Root:</strong> {grammar.root}</p>
    </div>
  );
}

export default GrammarInfoBox;
