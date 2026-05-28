import React from 'react';
import styles from './NewsSection.module.css';
import NewsCard from '../../ui/NewsCard/NewsCard';

import placeholderImg from '../../../assets/placeholder.webp';

function NewsSection() {

  // TODO: Replace with actual news data from API or translation file
  const newsItems = [
    {
      id: 1,
      img: placeholderImg,
      link: "https://example.com/news/1",
      time: "March 15, 2024",
      title: "PTIT VCC Opens New AI Research Lab",
      description: "The Vietnam-Korea Center inaugurates state-of-the-art artificial intelligence research facilities."
    },
    {
      id: 2,
      img: placeholderImg,
      link: "https://example.com/news/2",
      time: "March 10, 2024",
      title: "Student Exchange Program Launch",
      description: "First batch of VCC students depart for Chung-Ang University in South Korea."
    },
    {
      id: 3,
      img: placeholderImg,
      link: "https://example.com/news/3",
      time: "March 5, 2024",
      title: "Game Development Competition 2024",
      description: "Annual gaming contest showcases innovative projects from VCC students."
    },
    {
      id: 4,
      img: placeholderImg,
      link: "https://example.com/news/4",
      time: "February 28, 2024",
      title: "Industry Partnership Announcement",
      description: "VCC signs MOU with leading tech companies for internship programs."
    },
    {
      id: 5,
      img: placeholderImg,
      link: "https://example.com/news/5",
      time: "February 20, 2024",
      title: "New Curriculum Updates 2024",
      description: "Enhanced course structure includes cutting-edge technologies and practical training."
    },
    {
      id: 6,
      img: placeholderImg,
      link: "https://example.com/news/6",
      time: "February 15, 2024",
      title: "VCC Alumni Success Stories",
      description: "Former students share their achievements in the global tech industry."
    },
    {
      id: 7,
      img: placeholderImg,
      link: "https://example.com/news/7",
      time: "February 10, 2024",
      title: "Faculty Research Publications",
      description: "VCC professors contribute to international journals on computer science and AI."
    },
    {
      id: 8,
      img: placeholderImg,
      link: "https://example.com/news/8",
      time: "February 5, 2024",
      title: "Campus Infrastructure Upgrade",
      description: "Modern laboratories and study spaces enhance the learning environment."
    }
  ];

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        {/* Header with title and video */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            News from us!
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