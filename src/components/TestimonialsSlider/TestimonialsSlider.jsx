import styles from "./TestimonialsSlider.module.css";
import React, { useState, useEffect } from "react";


import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Date exemplu pentru testimoniale
const defaultTestimonials = [
  {
    id: 1,
    quote:
      "Această aplicație mi-a schimbat complet modul de lucru! Este intuitivă și extrem de eficientă.",
    author: "Ana M.",
    role: "Manager Proiect",
    avatar: "https://i.pravatar.cc/100?img=1", // Pravatar pentru imagini placeholder
  },
  {
    id: 2,
    quote:
      "Suportul tehnic este fantastic. Am primit răspunsuri rapide și soluții la toate problemele mele.",
    author: "Bogdan C.",
    role: "Dezvoltator Software",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    quote: "Recomand cu încredere! O investiție care merită fiecare bănuț.",
    author: "Elena P.",
    role: "Antreprenor",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    quote:
      "Designul este curat și modern, iar funcționalitățile sunt exact ce aveam nevoie.",
    author: "Radu S.",
    role: "Designer Grafic",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

function TestimonialsSlider({
  testimonials = defaultTestimonials,
  sectionTitle = "Ce spun clienții noștri",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-play 
  useEffect(() => {
    if (testimonials.length > 1) {
      const timer = setTimeout(() => {
        goToNext();
      }, 5000); // Schimbă la fiecare 5 secunde
      return () => clearTimeout(timer);
    }
  }, [currentIndex, testimonials.length, goToNext]);

  if (!testimonials || testimonials.length === 0) {
    return null; // Nu afisa nimic dacă nu exista testimoniale
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={styles.testimonialsSection}>
      {sectionTitle && <h2 className={styles.sectionTitle}>{sectionTitle}</h2>}
      <div className={styles.sliderContainer}>
        {testimonials.length > 1 && (
          <button
            onClick={goToPrevious}
            className={`${styles.sliderButton} ${styles.prevButton}`}
            aria-label="Testimonial precedent"
          >
            <FaChevronLeft />
          </button>
        )}

        <div className={styles.testimonialCard}>
          {currentTestimonial.avatar && (
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.author}
              className={styles.avatar}
            />
          )}
          <blockquote className={styles.quote}>
            {currentTestimonial.quote}
          </blockquote>
          <cite className={styles.author}>
            {currentTestimonial.author}
            {currentTestimonial.role && (
              <span className={styles.role}> {currentTestimonial.role}</span>
            )}
          </cite>
        </div>

        {testimonials.length > 1 && (
          <button
            onClick={goToNext}
            className={`${styles.sliderButton} ${styles.nextButton}`}
            aria-label="Testimonial următor"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
      {testimonials.length > 1 && (
        <div className={styles.dotsContainer}>
          {testimonials.map((_, slideIndex) => (
            <button
              key={slideIndex}
              className={`${styles.dot} ${
                currentIndex === slideIndex ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentIndex(slideIndex)}
              aria-label={`Mergi la testimonialul ${slideIndex + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TestimonialsSlider;
