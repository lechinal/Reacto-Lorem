import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Bun venit în Aplicația Noastră!</h1>
        <p className={styles.heroSubtitle}>
          Descoperă funcționalități uimitoare și o experiență de neuitat.
        </p>
        <Link to="/about" className={styles.ctaButton}>
          Află mai multe
        </Link>
      </div>
      <img
        src="https://picsum.photos/seed/homehero/1200/500" // Imagine placeholder
        alt="Abstract hero"
        className={styles.heroImage}
      />
    </section>
  );
}

export default HeroSection;
