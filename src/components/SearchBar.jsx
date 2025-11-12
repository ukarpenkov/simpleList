import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label htmlFor="search" style={{ display: "block", marginBottom: 6 }}>
        Search
      </label>
      <input
        id="search"
        aria-label="Search projects"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, description or status"
        style={{ width: "100%", padding: "8px", borderRadius: 6 }}
      />
    </div>
  );
}
