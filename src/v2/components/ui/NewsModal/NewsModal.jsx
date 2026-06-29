import React from "react";
import Modal from "../Modal/Modal"; 
import styles from "./NewsModal.module.css";


const NewsModal = ({ isOpen, onClose, news }) => {
  if (!news) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={news.title}
    >
      <div className={styles.content}>
        <p className={styles.time}>{news.time}</p>
        {news.content?.map((item, index) => (
          <React.Fragment key={index}>
            {item.image && (
              <img
                src={item.image}
                alt=""
                className={styles.image}
              />
            )}
 
            {item.detail && (
              <p
                className={styles.detail}
                dangerouslySetInnerHTML={{
                  __html: item.detail
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\*(.*?)\*/g, "<em>$1</em>")
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </Modal>
  );
};

export default NewsModal;