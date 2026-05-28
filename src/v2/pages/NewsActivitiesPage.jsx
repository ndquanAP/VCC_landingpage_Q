import React from "react";
import NewsSection from "../components/sections/NewsSection/NewsSection";
import ActivitiesSection from "../components/sections/ActivitiesSection/ActivitiesSection";
import styles from "./Page.module.css";

const NewsActivitiesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div id="news-activities">
        <NewsSection />
      </div>
      <div id="activities">
        <ActivitiesSection />
      </div>
    </div>
  );
};

export default NewsActivitiesPage;