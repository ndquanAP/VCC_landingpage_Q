import React from 'react';
import styles from './NewsSection.module.css';
import NewsCard from '../../ui/NewsCard/NewsCard';
import { useTranslation } from '../../../hooks/useTranslation';

function NewsSection() {
  const {t} = useTranslation();
  // TODO: Replace with actual news data from API or translation file
  const newsItems = [
    {
      id: 1,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/news1.webp`,
      link: "https://example.com/news/1",
      time: t('news_item_1_time'),
      title: t('news_item_1_title'),
      description: t('news_item_1_description'),
    },
    {
      id: 2,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/news2.webp`,
      link: "https://example.com/news/2",
      time: t('news_item_2_time'),
      title: t('news_item_2_title'),
      description: t('news_item_2_description'),
    },
      {
      id: 3,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/news3.webp`,
      link: "https://example.com/news/3",
      time: t('news_item_3_time'),
      title: t('news_item_3_title'),
      description: t('news_item_3_description'),
    },
    {
      id: 4,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/news4.webp`,
      link: "https://example.com/news/4",
      time: t('news_item_4_time'),
      title: t('news_item_4_title'),
      description: t('news_item_4_description'),
    },
    {
      id: 5,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/news5.webp`,
      link: "https://example.com/news/5",
      time: t('news_item_5_time'),
      title: t('news_item_5_title'),
      description: t('news_item_5_description'),
    },
    {
      id: 6,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/news6.webp`,
      link: "https://example.com/news/6",
      time: t('news_item_6_time'),
      title: t('news_item_6_title'),
      description: t('news_item_6_description'),
    },
    {
      id: 7,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/news7.webp`,
      link: "https://example.com/news/7",
      time: t('news_item_7_time'),
      title: t('news_item_7_title'),
      description: t('news_item_7_description'),
    },
    {
      id: 8,
      img: `${import.meta.env.BASE_URL}src/v2/assets/news/news8.webp`,
      link: "https://example.com/news/8",
      time: t('news_item_8_time'),
      title: t('news_item_8_title'),
      description: t('news_item_8_description'),
    }
  ];

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
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example"
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
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              img={item.img}
              link={item.link}
              time={item.time}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;