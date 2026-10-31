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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Active Users */}
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Active Users (Realtime)</h2>
          <p className="text-3xl font-bold text-blue-600">
            {activeUsers !== null ? activeUsers : "Loading..."}
          </p>
        </div>

        {/* Events Today */}
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Events Today</h2>
          <p className="text-3xl font-bold text-green-600">
            {eventsToday !== null ? eventsToday : "Loading..."}
          </p>
        </div>

        {/* Top Pages */}
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Top Pages</h2>
          <ul className="text-gray-700">
            {topPages.length > 0 ? (
              topPages.map((p, i) => (
                <li key={i} className="py-1">
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
  );
}
