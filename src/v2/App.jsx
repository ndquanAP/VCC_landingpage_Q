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

function App() {
  return (
    <div className={styles.app}>
      <Router basename={import.meta.env.BASE_URL}>
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