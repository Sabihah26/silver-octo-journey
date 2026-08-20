import { Link } from "react-router-dom";

export default function BackLink({ color = "#ffffff" }) {
  return (
    <Link
      to="/"
      style={{
        display: "inline-block",
        marginBottom: 20,
        textDecoration: "none",
        color,
      }}
    >
      ← Back
    </Link>
  );
}
