import React from "react";
import GameHero from "./components/GameHero";
import VirtualRealitySection from "./components/VirtualRealitySection";
import "./GameDesign.css";

const GameDesignApp = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <div className="game-design-app">
      {/* Navigation back to main site */}
      <nav className="program-nav">
        <div className="nav-container">
          <a href={baseUrl} className="back-link">
            ← Back to PTIT VCC
          </a>
          <h1 className="program-title">Game Design & Development</h1>
        </div>
      </nav>

      {/* Main content */}
      <main className="program-content">
        <GameHero />
        <VirtualRealitySection />
      </main>

      {/* Footer */}
      <footer className="program-footer">
        <div className="footer-container">
          <p>&copy; 2024 PTIT VCC - Game Design & Development Program</p>
          <a href={baseUrl} className="footer-link">
            Return to Main Site
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GameDesignApp;
