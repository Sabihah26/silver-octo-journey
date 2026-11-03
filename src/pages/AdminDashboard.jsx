// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import {
  fetchRealtimeActiveUsers,
  fetchEventsToday,
  fetchTopPages,
} from "../utils/ga4";

export default function AdminDashboard() {
  const [activeUsers, setActiveUsers] = useState(null);
  const [eventsToday, setEventsToday] = useState(null);
  const [topPages, setTopPages] = useState([]);

  useEffect(() => {
    document.title = "Admin Dashboard";

    async function loadData() {
      const [active, events, pages] = await Promise.all([
        fetchRealtimeActiveUsers(),
        fetchEventsToday(),
        fetchTopPages(),
      ]);

      setActiveUsers(active);
      setEventsToday(events);
      setTopPages(pages);
    }

    loadData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "2rem 1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          Admin Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* ACTIVE USERS */}
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              color: "black",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Active Users (Realtime)</h2>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {activeUsers !== null ? activeUsers : "Loading..."}
            </p>
          </div>

          {/* EVENTS TODAY */}
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              color: "black",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Events Today</h2>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {eventsToday !== null ? eventsToday : "Loading..."}
            </p>
          </div>

          {/* TOP PAGES */}
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              color: "black",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Top Pages</h2>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "1.1rem",
                lineHeight: "1.8rem",
              }}
            >
              {topPages.length > 0 ? (
                topPages.map((p, i) => (
                  <li key={i}>
                    {p.page} — {p.views} views
                  </li>
                ))
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
