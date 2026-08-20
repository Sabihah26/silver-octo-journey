import React, { useState } from "react";
import conjugate from "../utils/conjugate";
import ConjugationTable from "../components/ConjugationTable";

const FORMS = [
  "Form I",
  "Form II",
  "Form III",
  "Form IV",
  "Form V",
  "Form VI",
  "Form VII",
  "Form VIII",
  "Form IX",
  "Form X",
];
const formColors = {
  "Form I": "#4A90E2",
  "Form II": "#50C878",
  "Form III": "#F5A623",
  "Form IV": "#D0021B",
  "Form V": "#7B61FF",
  "Form VI": "#FF6F61",
  "Form VII": "#009688",
  "Form VIII": "#C2185B",
  "Form IX": "#795548",
  "Form X": "#2E7D32",
};


export default function ConjugationInspector() {
  const [root, setRoot] = useState("ك-ت-ب");
  const [form, setForm] = useState("Form I");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const generate = () => {
    try {
      setError("");
      const c = conjugate(root, form);
      setResult(c);
    } catch (e) {
      console.error(e);
      setError("Error generating conjugation.");
      setResult(null);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 40,
        background: "#020617",
        color: "white",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <h1 style={{ marginBottom: 10 }}>Conjugation Inspector</h1>

      <p style={{ color: "#cbd5f5", marginBottom: 20 }}>
        Enter a root and form to inspect full conjugation visually.
      </p>

      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <input
          value={root}
          onChange={(e) => setRoot(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 6,
            background: "#0f172a",
            border: "1px solid #334155",
            color: "white"
          }}
        />

        <select
          value={form}
          onChange={(e) => setForm(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 6,
            background: "#0f172a",
            border: "1px solid #334155",
            color: "white"
          }}
        >
          {FORMS.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>

        <button
          onClick={generate}
          style={{
            padding: "10px 20px",
            background: "#1f6feb",
            color: "white",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontSize: 16
          }}
        >
          Generate
        </button>
      </div>

      {error && (
        <div
          style={{
            marginBottom: 20,
            padding: 10,
            borderRadius: 8,
            background: "#3b1f1f",
            color: "#ffb3b3",
            border: "1px solid #ff4d4d"
          }}
        >
          {error}
        </div>
      )}

      {result && (
        <>
          <ConjugationTable title="Past" data={result.past} />
          <ConjugationTable title="Present" data={result.present} />
          <ConjugationTable title="Subjunctive" data={result.subjunctive} />
          <ConjugationTable title="Jussive" data={result.jussive} />
          <ConjugationTable title="Imperative" data={result.imperative} />

          <div style={{ marginTop: 30 }}>
            <h3 style={{ marginBottom: 10 }}>Derived Forms</h3>
            <div style={{ display: "flex", gap: 20 }}>
              <div>
                <div style={{ color: "#94a3b8" }}>Active Participle</div>
                <div>{result.activeParticiple || "—"}</div>
              </div>
              <div>
                <div style={{ color: "#94a3b8" }}>Passive Participle</div>
                <div>{result.passiveParticiple || "—"}</div>
              </div>
              <div>
                <div style={{ color: "#94a3b8" }}>Masdar</div>
                <div>{result.masdar || "—"}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
