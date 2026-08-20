import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-buttons">

        {/* HOME */}
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">🏠</span>
          <span>Home</span>
        </NavLink>

        {/* VERBS */}
        <NavLink 
          to="/verbs" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">📘</span>
          <span>Verbs</span>
        </NavLink>

        {/* NOUNS */}
        <NavLink 
          to="/nouns" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">📗</span>
          <span>Nouns</span>
        </NavLink>

        {/* ADJECTIVES — NEW BUTTON */}
        <NavLink 
          to="/adjectives" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">🎨</span>
          <span>Adjectives</span>
        </NavLink>

        {/* ADVERBS */}
        <NavLink 
          to="/adverbs" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">📙</span>
          <span>Adverbs</span>
        </NavLink>

      </div>

    </nav>
  );
}
