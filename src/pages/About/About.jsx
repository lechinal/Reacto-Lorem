import React from "react";
import styles from "./About.module.css";

import MissionVisionSection from "./components/MissionVisionSection/MissionVisionSection";
import TeamSection from "./components/TeamSection/TeamSection";
import TestimonialsSlider from "../../components/TestimonialsSlider/TestimonialsSlider";

function About() {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.pageTitle}>Despre Noi</h1>
      <MissionVisionSection />
      <TeamSection />
      <TestimonialsSlider
        sectionTitle="Părerile partenerilor noștri"
        // testimonials={aboutPageTestimonials} // Dacă ai date specifice
      />
    </div>
  );
}

export default About;
