import { useEffect, useMemo, useState } from "react";

const MOCK_PROJECTS = [
  {
    id: 1,
    name: "First Project",
    description: "Create Vite app",
    status: "active",
  },
  {
    id: 2,
    name: "Second Project",
    description: "Use Custom Hooks",
    status: "completed",
  },
  {
    id: 3,
    name: "Third project",
    description: "Realise filtering feature",
    status: "active",
  },
  {
    id: 4,
    name: "Fourth project",
    description: "Realise testing feature",
    status: "archived",
  },
];

export function useProjects(initialFilter = "") {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState(initialFilter);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      setProjects(MOCK_PROJECTS);
      setLoading(false);
    }, 100);

    return () => clearTimeout(id);
  }, []);

  const filtered = useMemo(() => {
    if (!filter) return projects;
    const q = filter.toLowerCase();
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.status.toLowerCase().includes(q)
    );
  }, [projects, filter]);

  const getById = (id) => projects.find((p) => String(p.id) === String(id));

  return {
    projects: filtered,
    rawProjects: projects,
    filter,
    setFilter,
    loading,
    getById,
  };
}

export default useProjects;
