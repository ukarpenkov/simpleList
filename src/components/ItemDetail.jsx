import React from "react";
import { useParams, Link } from "react-router-dom";
import useProjects from "../hooks/useProjects";

export default function ItemDetail() {
  const { id } = useParams();
  const { getById, loading } = useProjects();
  const project = getById(id);

  if (loading) return <p role="status">Loading...</p>;
  if (!project)
    return (
      <div>
        <p>Project not found.</p>
        <Link to="/">Back</Link>
      </div>
    );

  return (
    <article aria-labelledby="project-title">
      <h2 id="project-title">{project.name}</h2>
      <p>{project.description}</p>
      <p>
        <strong>Status:</strong> {project.status}
      </p>
      <Link to="/">Back to list</Link>
    </article>
  );
}
