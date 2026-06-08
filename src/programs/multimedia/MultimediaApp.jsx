import React from "react";
import MultimediaHero from "./components/MultimediaHero";
import HighlightedCourses from "./components/HighlightedCourses";
import Collection from "./components/Collection";
import "./Multimedia.css";

const MultimediaApp = () => {
  return (
    <div className="multimedia-app">
      {/* Navigation back to main site */}
      <nav className="program-nav">
        <div className="nav-container">
          <a href="/" className="back-link">
            ← Back to PTIT VCC
          </a>
          <h1 className="program-title">Multimedia Program</h1>
        </div>
      </nav>

      {/* Main content */}
      <main className="program-content">
        <MultimediaHero />
        <HighlightedCourses />
        <Collection />
      </main>

      {/* Footer */}
      <footer className="program-footer">
        <div className="footer-container">
          <p>&copy; 2024 PTIT VCC - Multimedia Program</p>
          <a href="/" className="footer-link">
            Return to Main Site
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MultimediaApp;
