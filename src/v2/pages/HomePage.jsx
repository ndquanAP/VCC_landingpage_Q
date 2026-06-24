import React from "react";
import styles from "../App.module.css";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import MissionVisionSection from "../components/sections/MissionVisionSection/MissionVisionSection";
import OrganizationalSection from "../components/sections/OrganizationalSection/OrganizationalSection";
import FacultySection from "../components/sections/FacultySection/FacultySection";
import FacilitiesSection from "../components/sections/FacilitiesSection/FacilitiesSection";
import VideoSection from "../components/sections/VideoSection/VideoSection";
import TestimonialSection from "../components/sections/TestimonialSection/TestimonialSection";
import CreditsSection from "../components/sections/CreditsSection/CreditsSection";
import SignUpSection from "../components/sections/SignUpSection/SignUpSection";
import ExpertShowcaseSection from "../components/sections/ExpertShowcaseSection/ExpertShowcaseSection";
import HightlightPhotoSection from "../components/sections/HightlightPhotoSection/HightlightPhotoSection";

const HomePage = () => {
  return (
    <>
      {/* Testimonial Section */}
      <div id="testimonials">
        <TestimonialSection />
      </div>

      <div className={styles.background}>

        {/* About Section */}
        <div id="home">
          <AboutSection />
        </div>

        {/* Sign Up Section 
        <div id="sign-up">
          <SignUpSection />
        </div>*/}

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
      </div>

      {/* Modern Facilities Section */}
      <div id="facilities">
        <FacilitiesSection />
      </div>

      {/* Activities Section */}
      <div id="hightlight-photo">
        <HightlightPhotoSection />
      </div>

      {/* Video Section */}
      <div id="video">
        <VideoSection />
      </div>

      {/* Expert Showcase Section */}
      <div id="expert-showcase">
        <ExpertShowcaseSection />
      </div>

      {/* Credits Section */}
      <CreditsSection />
    </>
  );
};

export default HomePage;