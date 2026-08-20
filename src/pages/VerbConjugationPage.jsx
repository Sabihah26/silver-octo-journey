import React from "react";
import { useParams, Link } from "react-router-dom";
import verbs from "../data/verbs";
import conjugate from "../utils/conjugate";
import VerbConjugationTable from "../components/VerbConjugationTable";

export default function VerbConjugationPage() {
  const { id } = useParams();

  const verb = verbs.find((v) => v.id === Number(id));
  if (!verb) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Verb not found</h1>
        <Link to="/verbs">← Back to Verb List</Link>
      </div>
    );
  }

  const formKey = verb.form.replace("Form", "").trim();
  const c = conjugate(verb.root, formKey);

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h1 style={{ fontSize: 40, direction: "rtl" }}>{verb.arabic}</h1>

        {/* FIXED: English meaning must NOT render the object */}
        <p style={{ fontSize: 20, opacity: 0.7 }}>
          {verb.english?.simple || verb.english?.detailed || ""}
        </p>
      </div>

      {/* CONJUGATION TABLE */}
      <VerbConjugationTable conjugation={c} />

      {/* BACK LINK */}
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <Link
          to={`/verb/${verb.id}`}
          style={{
            textDecoration: "underline",
            color: "#0A1A3A",
            fontSize: 18,
          }}
        >
          ← Back to Verb Page
        </Link>
      </div>
    </div>
  );
}
