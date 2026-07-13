import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/ui/NavBar/NavBar";
import ScrollToTop from "./ScrollToTop";
import styles from "./App.module.css";

// Import pages
import HomePage from "./pages/HomePage";
import StudentBenefitsPage from "./pages/StudentBenefitsPage";
import ExpertOpinionPage from "./pages/ExpertOpinionPage";
import NewsActivitiesPage from "./pages/NewsActivitiesPage";
import ContactPage from "./pages/ContactPage";

const getDynamicBasename = () => {
  const path = window.location.pathname;
  if (path === '/' || path === '/index.html') return '/';
  
  const segments = path.split('/').filter(Boolean);
  const routes = ['student-benefits', 'expert-opinions', 'news-activities', 'contact'];
  if (segments.length > 0) {
    const lastSegment = segments[segments.length - 1];
    if (routes.includes(lastSegment) || lastSegment === 'index.html') {
      segments.pop();
    }
  }
  return segments.length > 0 ? `/${segments.join('/')}/` : '/';
};

function App() {
  return (
    <div className={styles.app}>
      <Router basename={getDynamicBasename()}>
        <ScrollToTop />

        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student-benefits" element={<StudentBenefitsPage />} />
          <Route path="/expert-opinions" element={<ExpertOpinionPage />} />
          <Route path="/news-activities" element={<NewsActivitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;