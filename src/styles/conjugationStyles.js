// src/styles/conjugationStyles.js

export const conjugationStyles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    background: "white",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    textAlign: "center",
  },

  verb: {
    fontSize: "40px",
    fontWeight: 700,
    marginBottom: "6px",
    color: "#0A1A3A",
  },

  pronoun: {
    fontSize: "30px",
    fontWeight: 700,
    marginBottom: "4px",
    color: "#0A1A3A",
  },

  english: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#64748b",
  },
};
