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

import styles from "./HighlightPhotoSection.module.css";

import frameRed from "../../../assets/v1/frame-red.png";
import framePink from "../../../assets/v1/frame-pink.png";
import NewsModal from "../../ui/NewsModal/NewsModal";

const HighlightPhotoSection = () => {
  const { t } = useTranslation();

  const newsItems = [
    {
      id: 1,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/IMG_1.HEIC`,
      link: "https://example.com/news/8",
      time: t('news_item_1_time'),
      title: t('news_item_1_title'),
      description: t('news_item_1_description'),
      content: [
        {
          detail: t('news_item_1_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/IMG_1.HEIC`,
          detail: t('news_item_1_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/IMG_2.HEIC`,
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/IMG_3.HEIC`,
          detail:t('news_item_1_detail_4'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/chung-ang-university.jpg`,
          detail: t('news_item_1_detail_3'),
        },
      ]
    },
    {
      id: 2,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM1-scaled.jpg`,
      link: "https://example.com/news/7",
      time: t('news_item_2_time'),
      title: t('news_item_2_title'),
      description: t('news_item_2_description'),
      content: [
        {
          detail: t('news_item_2_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM1-scaled.jpg`,
          detail: t('news_item_2_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM2-scaled.jpg`,
          detail: t('news_item_2_detail_3'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM3-scaled.jpg`,
          detail: t('news_item_2_detail_4'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM4-scaled.jpg`,
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM2-scaled.jpg`,
        },
      ]
    },
    {
      id: 3,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/100126/100120261.png`,
      link: "https://example.com/news/6",
      time: t('news_item_3_time'),
      title: t('news_item_3_title'),
      description: t('news_item_3_description'),
      content: [
        {
          detail: t('news_item_3_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/100126/100120261.png`,
          detail: t('news_item_3_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/100126/100120262.png`,
          detail: t('news_item_3_detail_3'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/100126/100120263.png`,
        },
      ]
    },
    {
      id: 4,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/120825/pic11.png`,
      link: "https://example.com/news/4",
      time: t('news_item_5_time'),
      title: t('news_item_5_title_highlight'),
      description: t('news_item_5_description'),
      content: [
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/120825/pic11.png`,
          detail: t('news_item_5_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/120825/pic12.png`,
          detail: t('news_item_5_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/120825/pic13.png`,
          detail: t('news_item_5_detail_3'),
        },
      ]
    },
    {
      id:4,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/company/1.png`,
      link: "https://example.com/news/1",
      time: t('news_item_9_time'),
      title: t('news_item_9_title'),
      description: t('news_item_9_description'),
      content: [
        {

          detail: t('news_item_9_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/company/1.png`,
          detail: t('news_item_9_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/company/2.png`,
          detail: t('news_item_9_detail_3'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/company/3.png`,
          detail: t('news_item_9_detail_4'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/company/4.png`,
          detail: t('news_item_9_detail_5'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/company/5.png`,
          detail: t('news_item_9_detail_6'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/company/6.png`,
          detail: t('news_item_9_detail_7'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/company/7.png`,
          detail: t('news_item_9_detail_8'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/company/9.png`,
          detail: t('news_item_9_detail_10'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/company/10.png`,
          detail: t('news_item_9_detail_11'),
        },
      ]
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);

   useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % newsItems.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [newsItems.length]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + newsItems.length) %
        newsItems.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % newsItems.length
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

  const visibleNews = isMobile
    ? [newsItems[currentSlide]]
    : [
        newsItems[currentSlide],
        newsItems[(currentSlide + 1) % newsItems.length],
        newsItems[(currentSlide + 2) % newsItems.length],
      ];

      const [isModalOpen, setIsModalOpen] = useState(false);
      
        const handleOpenModal = (news) => {
          setSelectedNews(news);
          setIsModalOpen(true);
        };
      
        const handleCloseModal = () => {
          setIsModalOpen(false);
          setSelectedNews(null);
        };

  return (
    <section
      id="HighlightPhoto"
      className={styles.section}
    >
      <div className={styles.container}>
        <Title
          level="h2"
          color="blue"
        >
          {t("highlight")}
        </Title>

        <div className={styles.sliderWrapper}>
          {/* Prev */}
          <TriangleButton
            direction="left"
            onClick={prevSlide}
          />

          <div className={styles.activitiesGrid}>
            {visibleNews.map(
              (item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className={styles.activityCard}
                  onClick={() => handleOpenModal(item)}
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
                    <h3 className={styles.activityTitle}>
                      {item.title} 
                    </h3>

                    <div className={styles.activityDate}>
                      <span>
                        {item.time}
                      </span>
                    </div>

                    <img
                      src={item.img}
                      alt={item.title}
                      className={styles.activityImage}/>
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
          {newsItems.map((_, index) => (
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
        <NewsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        news={selectedNews}
      />
      </div>
    </section>
    
  );
};

export default HighlightPhotoSection;