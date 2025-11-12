import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Projects</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/projects/:id" element={<ItemDetail />} />
        </Routes>
      </main>
    </div>
  );
}
