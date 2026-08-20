import React from "react";

function ExamplesList({ examples }) {

  if (!examples) return null;

  return (
    <div className="examples-list">
      <h3>Examples</h3>
      {examples.map((ex, i) => (
        <div key={i} className="example-item">
          <p className="ar">{ex.ar}</p>
          <p className="en">{ex.en}</p>
        </div>
      ))}
    </div>
  );
}

export default ExamplesList;
