import React from "react";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import MissionVisionSection from "../components/sections/MissionVisionSection/MissionVisionSection";
import OrganizationalSection from "../components/sections/OrganizationalSection/OrganizationalSection";
import FacultySection from "../components/sections/FacultySection/FacultySection";
import FacilitiesSection from "../components/sections/FacilitiesSection/FacilitiesSection";
import VideoSection from "../components/sections/VideoSection/VideoSection";
import TestimonialSection from "../components/sections/TestimonialSection/TestimonialSection";
import CreditsSection from "../components/sections/CreditsSection/CreditsSection";

const HomePage = () => {
  return (
    <>
      {/* About Section */}
      <div id="home">
        <AboutSection />
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
      <div id="faculty">
        <FacultySection />
      </div>

      {/* Modern Facilities Section */}
      <div id="facilities">
        <FacilitiesSection />
      </div>

      {/* Video Section */}
      <div id="video">
        <VideoSection />
      </div>

      

      {/* Credits Section */}
      <CreditsSection />
    </>
  );
};

export default HomePage;