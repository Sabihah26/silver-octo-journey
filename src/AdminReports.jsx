import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function AdminReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReports() {
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error("Error loading reports:", error);
      } else {
        setReports(data);
      }

      setLoading(false);
    }

    loadReports();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Loading reports…</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin — Reports</h1>

      {reports.length === 0 && <p>No reports yet.</p>}

      {reports.map((r) => (
        <div
          key={r.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <p><strong>ID:</strong> {r.id}</p>
          <p><strong>Description:</strong> {r.description}</p>
          <p><strong>Created:</strong> {new Date(r.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
