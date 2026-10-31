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
          to="/verbs/categories"
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">📘</span>
          <span>Verbs</span>
        </NavLink>

        {/* ⭐ FIXED — NOUNS NOW GOES TO /nouns */}
        <NavLink 
          to="/nouns/categories"
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">📗</span>
          <span>Nouns</span>
        </NavLink>

        {/* ADJECTIVES */}
        <NavLink 
          to="/adjectives/category" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">🎨</span>
          <span>Adjectives</span>
        </NavLink>

        {/* ⭐ FIXED — this was the cause of the blank page */}
        <NavLink 
          to="/adverbs"
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">📙</span>
          <span>Adverbs</span>
        </NavLink>

        {/* ⭐ ABOUT PAGE */}
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">ℹ️</span>
          <span>About</span>
        </NavLink>

        {/* ⭐ CONTACT PAGE */}
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">✉️</span>
          <span>Contact</span>
        </NavLink>

        {/* ⭐ REPORT ERROR PAGE — NEW */}
        <NavLink 
          to="/report-error" 
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          <span className="nav-icon">⚠️</span>
          <span>Report Error</span>
        </NavLink>

      </div>

    </nav>
  );
}
