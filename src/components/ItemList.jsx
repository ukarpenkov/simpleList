import React from "react";
import { Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import SearchBar from "./SearchBar";

export default function ItemList() {
  const { projects, filter, setFilter, loading } = useProjects("");

  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" style={{ marginTop: 8 }}>
        All projects
      </h2>

      <SearchBar value={filter} onChange={setFilter} />

      {loading ? (
        <p role="status">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p role="status">No projects found.</p>
      ) : (
        <ul aria-live="polite" style={{ listStyle: "none", padding: 0 }}>
          {projects.map((p) => (
            <li key={p.id} className="card" role="listitem">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p>
                <strong>Status:</strong> {p.status}
              </p>
              <Link to={`/projects/${p.id}`}>View details</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
