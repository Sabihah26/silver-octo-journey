import React from "react";
import { useLocation, Link } from "react-router-dom";
import conjugate from "../utils/conjugate";

function ActiveParticiplePage() {
  const location = useLocation();
  const { verb, root, form } = location.state || {};

  if (!verb || !root || !form) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No verb data provided</h2>
        <Link to="/">Back to Dictionary</Link>
      </div>
    );
  }

  const result = conjugate(root, form);
  const tables = result?.tables || {};
  const activeParticiple = tables.activeParticiple ?? "—";

  return (
    <div style={{ padding: "20px", fontSize: "22px" }}>
      <h1 style={{ fontSize: "40px" }}>{verb}</h1>

      <p><strong>Root:</strong> {root}</p>
      <p><strong>Form:</strong> {form}</p>

      <h2 style={{ marginTop: "30px" }}>Active Participle (اسم الفاعل)</h2>

      <p style={{ fontSize: "30px", marginTop: "20px" }}>
        <strong>{activeParticiple}</strong>
      </p>

      <div style={{ marginTop: "40px" }}>
        <Link to="/verb-summary" state={{ verb, root, form }}>
          ← Back to Verb Summary
        </Link>
      </div>
    </div>
  );
}

export default ActiveParticiplePage;
