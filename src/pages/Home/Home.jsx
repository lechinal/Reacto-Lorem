import styles from "./Home.module.css";

import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import CallToActionBanner from "../../components/CallToActionBanner/CallToActionBanner";

function Home() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <FeaturesSection />
      <CallToActionBanner
        title="Gata să începi?"
        subtitle="Descoperă cum te putem ajuta să îți atingi obiectivele. Nu mai aștepta!"
        buttonText="Contactează-ne Acum"
        buttonLink="/contact"
        backgroundImageUrl="https://picsum.photos/seed/ctabackground/1200/400" // Opțional
        // backgroundColor="var(--color-secondary)" // Opțional, o altă culoare
      />
    </div>
  );
}

export default Home;
