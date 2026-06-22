import React, { useState, useEffect } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Users,
} from "lucide-react";

import Title from "../../ui/Title/Title";
import TriangleButton from "../../ui/TriangleButton/TriangleButton";
import { useTranslation } from "../../../hooks/useTranslation";
import { getActivitiesData } from "../../../data/placeholderData";

import styles from "./HightlightPhotoSection.module.css";

import frameRed from "../../../assets/v1/frame-red.png";
import framePink from "../../../assets/v1/frame-pink.png";

const HightlightPhotoSection = () => {
  const { t } = useTranslation();

  const activitiesData = getActivitiesData(t);

  const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % activitiesData.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [activitiesData.length]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % activitiesData.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + activitiesData.length) %
        activitiesData.length
    );
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleActivities = isMobile
    ? [activitiesData[currentSlide]]
    : [
        activitiesData[currentSlide],
        activitiesData[(currentSlide + 1) % activitiesData.length],
      ];

  return (
    <section
      id="hightlightPhoto"
      className={styles.section}
    >
      <div className={styles.container}>
        <Title
          level="h2"
          color="blue"
        >
          {t("hightlight")}
        </Title>

        <div className={styles.sliderWrapper}>
          {/* Prev */}
          <TriangleButton
            direction="left"
            onClick={prevSlide}
          />

          <div className={styles.activitiesGrid}>
            {visibleActivities.map(
              (activity, index) => (
                <div
                  key={`${activity.title}-${index}`}
                  className={styles.activityCard}
                >
                <img
                  src={
                    isMobile
                      ? frameRed
                      : index % 2 === 0
                      ? frameRed
                      : framePink
                  }
                  alt=""
                  className={styles.frame}
                />

                  <div className={styles.content}>
                    <h3
                      className={
                        styles.activityTitle
                      }
                    >
                      {activity.title} 
                    </h3>

                    <div
                      className={
                        styles.activityDate
                      }
                    >

                      <span>
                        {activity.date}
                      </span>
                    </div>

                    <img
                      src={activity.image}
                      alt={activity.title}
                      className={
                        styles.activityImage
                      }
                    />
                  </div>
                </div>
              )
            )}
          </div>

          {/* Next */}
        <TriangleButton
          direction="right"
          onClick={nextSlide}
        />
        </div> 

        <div className={styles.pagination}>
          {activitiesData.map((_, index) => (
            <span
              key={index}
              className={
                currentSlide === index
                  ? styles.active
                  : ""
              }
              onClick={() =>
                setCurrentSlide(index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HightlightPhotoSection;