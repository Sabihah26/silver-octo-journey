
import React from "react";
import { useLocation, Link } from "react-router-dom";
import conjugate from "../utils/conjugate";
import VerbTenseTable from "../components/VerbTenseTable";

export default function PastPage() {
  const { state } = useLocation();
  const { verb, root, form } = state || {};

  if (!verb || !root || !form) {
    return <div style={{ padding: 20 }}>No verb data provided.</div>;
  }

  const result = conjugate(root, form);
  const past = result?.tables?.past || {};

  const rows = Object.entries(past).map(([pronoun, form]) => ({
    personAr: pronoun,
    personEn: "", // optional
    form,
  }));

  return (
    <div style={{ padding: 20 }}>
      <VerbTenseTable title="الماضي — Past Tense" rows={rows} />

      <Link to="/verb-summary" state={{ verb, root, form }}>
        ← Back to Summary
      </Link>
    </div>
  );
}
