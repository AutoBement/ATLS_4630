//import { useState } from 'react'
import './App.css'

// New files 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import NewEntry from "./Pages/NewEntry";
import History from "./Pages/History";
import { EntriesProvider } from './Context/EntriesContext';

console.log("App is rendering!");

export default function App() {
  return (
    <EntriesProvider>
      <Router>
        
        <div className="header">
          <h1>✨MoodBloom🌸</h1>
        </div>

        {/* Minimal navigation*/}
        <div className="navbar">
          <Link to="/" style={{ marginRight: "20px" }}>Dashboard</Link>
          <Link to="/new" style={{ marginRight: "20px" }}>New Entry</Link>
          <Link to="/history">History</Link>
        </div>

        {/* Used Routes and Route to keep it a single page application without making the screen feel overcrowded*/}
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/new" element={<NewEntry />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </Router>
    </EntriesProvider>
  );
}