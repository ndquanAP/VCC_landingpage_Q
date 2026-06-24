import React from "react";
import { useEffect } from "react";
import { useLanguageStore } from "./store/languageStore";
import V2Layout from "./components/V2Layout";

// Import V2 UI components
import NavBar from "./components/ui/NavBar/NavBar";
import Title from "./components/ui/Title/Title";
import Card from "./components/ui/Card/Card";
import MissionCard from "./components/ui/MissionCard/MissionCard";
import Button from "./components/ui/Button/Button";
import { Target, Lightbulb, Users } from "lucide-react";

// Import V2 sections
import AboutSection from "./components/sections/AboutSection/AboutSection";
import MissionVisionSection from "./components/sections/MissionVisionSection/MissionVisionSection";
import OrganizationalSection from "./components/sections/OrganizationalSection/OrganizationalSection";
import FacultySection from "./components/sections/FacultySection/FacultySection";
import FacilitiesSection from "./components/sections/FacilitiesSection/FacilitiesSection";
import ActivitiesSection from "./components/sections/ActivitiesSection/ActivitiesSection";
import VideoSection from "./components/sections/VideoSection/VideoSection";
import ExpertOpinionSection from "./components/sections/ExpertOpinionSection/ExpertOpinionSection";
import TestimonialSection from "./components/sections/TestimonialSection/TestimonialSection";
import StudentBenefitSection from "./components/sections/StudentBenefitSection/StudentBenefitSection";
import NewsSection from "./components/sections/NewsSection/NewsSection";
import ContactSection from "./components/sections/ContactSection/ContactSection";
import CreditsSection from "./components/sections/CreditsSection/CreditsSection";
import SignUpSection from "./components/sections/SignUpSection/SignUpSection";
import ExpertShowcaseSection from "./components/sections/ExpertShowcaseSection/ExpertShowcaseSection";

// Import V2 sections (will be created progressively)
// import V2NavBar from './components/ui/NavBar/V2NavBar';
// import AboutSection from './components/sections/AboutSection/AboutSection';
// import MissionVisionSection from './components/sections/MissionVisionSection/MissionVisionSection';
// ... other sections

function V2App() {
  const { currentLang, setLanguage } = useLanguageStore();

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage");
    const browserLang = navigator.language.startsWith("vi") ? "VN" : "EN";
    const initialLang = savedLang || browserLang;

    if (initialLang !== currentLang) {
      setLanguage(initialLang);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("preferredLanguage", currentLang);
    document.documentElement.lang = currentLang === "VN" ? "vi" : "en";
  }, [currentLang]);

  return (
    <V2Layout>
      {/* Navigation Bar - Sticky */}
      <NavBar />

      {/* About Section */}
      <div id="home">
        <AboutSection />
      </div>

      {/* Sign Up Section */}
      <div id="sign-up">
        <SignUpSection />
      </div>

      {/* Testimonial Section */}
      <div id="testimonials">
        <TestimonialSection />
      </div>

      {/* Mission & Vision Section */}
      <div id="mission-vision">
        <MissionVisionSection />
      </div>

      {/* Organizational Structure Section */}
      <div id="organizational">
        <OrganizationalSection />
      </div>

      {/* Faculty Members Section */}
      {/* <div id="faculty">
        <FacultySection />
      </div> */}

      {/* Modern Facilities Section */}
      <div id="facilities">
        <FacilitiesSection />
      </div>

      {/* Activities Section */}
      <div id="activities">
        <ActivitiesSection />
      </div>

      {/* Video Section */}
      <div id="video">
        <VideoSection />
      </div>

      {/* Expert Showcase Section */}
      <div id="expert-showcase">
        <ExpertShowcaseSection />
      </div>

      {/* Expert Opinion Section */}
      <div id="expert-opinions">
        <ExpertOpinionSection />
      </div>

      

      {/* Student Benefits Section */}
      <div id="student-benefits">
        <StudentBenefitSection />
      </div>

      {/* News Section */}
      <div id="news-activities">
        <NewsSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Credits Section */}
      <CreditsSection />
    </V2Layout>
  );
}

export default V2App;
