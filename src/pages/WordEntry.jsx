import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WordEntry() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!input.trim()) return;
    navigate(`/search?q=${encodeURIComponent(input.trim())}`);
  };

  return (
    <div style={{ padding: 20, fontSize: 22 }}>
      <h1 style={{ fontSize: 36, marginBottom: 20 }}>Arabic Dictionary</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Enter Arabic or English..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: 10,
            fontSize: 20,
            width: 320,
            marginRight: 10,
          }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: "10px 20px", fontSize: 20, cursor: "pointer" }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

