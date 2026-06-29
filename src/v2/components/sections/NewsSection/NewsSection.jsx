import React, { useState } from 'react';
import styles from './NewsSection.module.css';
import NewsCard from '../../ui/NewsCard/NewsCard';
import { useTranslation } from '../../../hooks/useTranslation';
import CreditsSection from "../CreditsSection/CreditsSection.jsx";
import NewsModal from "../../ui/NewsModal/NewsModal";
import { ArrowRight } from 'lucide-react';

function NewsSection() {
  const {t} = useTranslation();

  const newsItems = [
    {
      id: 1,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/act1.webp`,
      link: "https://example.com/news/1",
      time: t('news_item_1_time'),
      title: t('news_item_1_title'),
      description: t('news_item_1_description'),
      content: [
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/act1.webp`,
          detail: t('news_item_1_detail_1'),
        },
      ]
    }, 
    {
      id: 2,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/act3.webp`,
      link: "https://example.com/news/2",
      time: t('news_item_2_time'),
      title: t('news_item_2_title'),
      description: t('news_item_2_description'),
      content: [
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/act3.webp`,
          detail: t('news_item_2_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/act3.webp`,
          detail: t('news_item_2_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/act3.webp`,
          detail: t('news_item_2_detail_3'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/act3.webp`,
          detail: t('news_item_2_detail_4'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/act3.webp`,
          detail: t('news_item_2_detail_5'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/act3.webp`,
          detail: t('news_item_2_detail_6'),
        },
      ]
    },
      {
      id: 3,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/140525/14051.png`,
      link: "https://example.com/news/3",
      time: t('news_item_3_time'),
      title: t('news_item_3_title'),
      description: t('news_item_3_description'),
      content: [
        {
          detail: t('news_item_3_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/140525/14051.png`,
          detail: t('news_item_3_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/140525/14052.png`,
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/140525/14053.png`,
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/140525/14054.png`,
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/140525/14055.png`,
        },
      ]
    },
    {
      id: 4,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/120825/pic11.png`,
      link: "https://example.com/news/4",
      time: t('news_item_4_time'),
      title: t('news_item_4_title'),
      description: t('news_item_4_description'),
      content: [
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/120825/pic11.png`,
          detail: t('news_item_4_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/120825/pic12.png`,
          detail: t('news_item_4_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/120825/pic13.png`,
          detail: t('news_item_4_detail_3'),
        },
      ]
    },
    {
      id: 5,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/251125/pic1.png`,
      link: "https://example.com/news/5",
      time: t('news_item_5_time'),
      title: t('news_item_5_title'),
      description: t('news_item_5_description'),
      content: [
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/251125/pic1.png`,
          detail: t('news_item_5_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/251125/pic2.png`,
          detail: t('news_item_5_detail_2'),
        },
      ]
    },
    {
      id: 6,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/100126/100120261.png`,
      link: "https://example.com/news/6",
      time: t('news_item_6_time'),
      title: t('news_item_6_title'),
      description: t('news_item_6_description'),
      content: [
        {
          detail: t('news_item_6_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/100126/100120261.png`,
          detail: t('news_item_6_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/100126/100120262.png`,
          detail: t('news_item_6_detail_3'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/100126/100120263.png`,
        },
      ]
    },
    {
      id: 7,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM1-scaled.jpg`,
      link: "https://example.com/news/7",
      time: t('news_item_7_time'),
      title: t('news_item_7_title'),
      description: t('news_item_7_description'),
      content: [
        {
          detail: t('news_item_7_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM1-scaled.jpg`,
          detail: t('news_item_7_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM2-scaled.jpg`,
          detail: t('news_item_7_detail_3'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/110526/DHM3-scaled.jpg`,
          detail: t('news_item_7_detail_4'),
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
      id: 8,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/IMG_1.HEIC`,
      link: "https://example.com/news/8",
      time: t('news_item_8_time'),
      title: t('news_item_8_title'),
      description: t('news_item_8_description'),
      content: [
        {
          detail: t('news_item_8_detail_1'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/IMG_1.HEIC`,
          detail: t('news_item_8_detail_2'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/IMG_2.HEIC`,
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/IMG_3.HEIC`,
          detail:t('news_item_8_detail_4'),
        },
        {
          image: `${import.meta.env.BASE_URL}src/v2/assets/news/meetting_110526/chung-ang-university.jpg`,
          detail: t('news_item_8_detail_3'),
        },
      ]
    },
  ];

  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  const [showAll, setShowAll] = useState(false);

  const displayedNews = showAll
    ? newsItems
    : newsItems.slice(0, 12);

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        {/* Header with title and video */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            {t("news_title")}
          </h1>

          <div className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src=""
              title="VCC News Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* News Grid */}
         <div className={styles.newsGrid}>
            {displayedNews.map((item) => (
              <NewsCard
                key={item.id}
                img={item.img}
                time={item.time}
                title={item.title}
                description={item.description}
                onClick={() => handleOpenModal(item)}
              />
            ))}
          </div>

          {!showAll && newsItems.length > 12 && (
            <div className={styles.viewButton}>
              <button
                className={styles.view}
                onClick={() => setShowAll(true)}
              >
                View All
                <ArrowRight size={20} />
              </button>
            </div>
          )}
      </div>
      <NewsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        news={selectedNews}
      />
      {/* Credits Section */}
      <CreditsSection />
    </section>
  );
}

export default NewsSection;