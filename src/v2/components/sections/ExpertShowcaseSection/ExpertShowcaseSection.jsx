import React, { useState, useEffect } from "react";
import Title from "../../ui/Title/Title";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useTranslation } from "../../../hooks/useTranslation";
import styles from "./ExpertShowcaseSection.module.css";

import image1 from "../../../assets/image.webp";
import image2 from "../../../assets/image2.webp";
import image3 from "../../../assets/TranthiB.webp";
import circleBg from "../../../assets/v1/Circle BG.png";

function ExpertShowcaseSection() {
  const { t } = useTranslation();

  const experts = [
    {
      name: t("expert_name_1"),
      position: t("expert_position_1"),
      opinion: t("expert_opinion_1"),
      image: image1,
    },
    {
      name: t("expert_name_2"),
      position: t("expert_position_2"),
      opinion: t("expert_opinion_2"),
      image: image2,
    },
    {
      name: t("expert_name_3"),
      position: t("expert_position_3"),
      opinion: t("expert_opinion_3"),
      image: image3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [experts.length]);

{/*   const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + experts.length) % experts.length
    );
  }; */}
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 992) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const visibleExperts = Array.from(
    { length: cardsToShow },
    (_, index) => experts[(currentSlide + index) % experts.length]
  );

  return (
    <section
      id="expert-showcase"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
            <Title
                level="h2"
                color="orange"
                variant="gradient-lines"
                icon={<Users size={24} color="#E67A35" />}
                >
                {t("teachers_title")}
            </Title>

          <h2 className={styles.title}>
            {t("expert_opinions_title")}
          </h2>
        </div>

        <div className={styles.sliderWrapper}>
          {/* <button
            className={styles.navButton}
            onClick={prevSlide}
          >
            <ChevronLeft size={22} />
          </button> */}

          <div className={styles.cardGrid}>
            {visibleExperts.map((expert, index) => (
              <div
                key={`${expert.name}-${index}`}
                className={styles.card}
              >
                <div className={styles.imageArea}>
                  <img
                    src={circleBg}
                    className={styles.circle}
                  />

                  {/* <img
                    src={expert.image}
                    alt={expert.name}
                    className={styles.person}
                  /> */}
                </div>

                <div className={styles.content}>
                  <h3>{expert.name}</h3>

                  <p>{expert.opinion}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <button
            className={styles.navButton}
            onClick={nextSlide}
          >
            <ChevronRight size={22} />
          </button> */}
        </div>

        <div className={styles.pagination}>
            {experts.map((_, index) => (
                <span
                key={index}
                className={
                    currentSlide === index
                    ? styles.active
                    : ""
                }
                onClick={() => setCurrentSlide(index)}
                />
            ))}
</div>
      </div>
    </section>
  );
}

export default ExpertShowcaseSection;