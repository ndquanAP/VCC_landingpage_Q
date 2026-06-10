import React, { useState } from "react";
import styles from "./TestimonialSection.module.css";
import { useTranslation } from "../../../hooks/useTranslation";
import Modal from "../../ui/Modal/Modal";
import Button from "../../ui/Button/Button";
import { ExternalLink } from "lucide-react";

const TestimonialSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      image: `${import.meta.env.BASE_URL}src/v2/assets/image.webp`,
      testimonial: t('testimonial_1_text'),
      fullTestimonial: t('testimonial_1_full'), // Full version
      name: t('testimonial_1_name'),
      position: t('testimonial_1_position'),
      hasMore: true,
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}src/v2/assets/image2.webp`,
      testimonial: t('testimonial_2_text'),
      fullTestimonial: t('testimonial_2_full'), // Full version from file
      name: t('testimonial_2_name'),
      position: t('testimonial_2_position'),
      hasMore: true,
    },
  ];

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.contentContainer}>
        <div className={styles.testimonialCards}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.imageContainer}>
                <div className={styles.imageBackground}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={styles.testimonialImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              </div>

              <div className={styles.testimonialContent}>
                <div className={styles.testimonialTextContainer}>
                  <div className={styles.testimonialText}>
                    "{testimonial.testimonial}"
                    {testimonial.hasMore && (
                      <a
                        className={styles.seeMoreLink}
                        onClick={() => openModal(testimonial)}
                      >
                        {t('see_more')}
                      </a>
                    )}
                  </div>
                </div>
                <div className={styles.testimonialNamePosition}>
                  <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                  <p className={styles.testimonialPosition}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full testimonial */}
      {selectedTestimonial && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedTestimonial.name}
        >
          <div className={styles.modalContent}>
            <div className={styles.modalTestimonialInfo}>
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className={styles.modalImage}
              />
              <div className={styles.modalTestimonialDetails}>
                <h3 className={styles.modalName}>{selectedTestimonial.name}</h3>
                <p className={styles.modalPosition}>{selectedTestimonial.position}</p>
              </div>
            </div>

            <div className={styles.modalTestimonial}>
              {selectedTestimonial.fullTestimonial.split('\n\n').map((paragraph, index) => (
                <p key={index} className={styles.modalParagraph}>
                  {paragraph.replace(/^\n/, '').replace(/\n$/, '')}
                </p>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default TestimonialSection;
