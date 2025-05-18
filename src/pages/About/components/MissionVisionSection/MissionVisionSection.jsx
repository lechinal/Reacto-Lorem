import styles from "./MissionVisionSection.module.css";

function MissionVisionSection() {
  return (
    <div className={styles.contentSection}>
      <img
        src="https://picsum.photos/seed/aboutus/500/350"
        alt="Echipa noastră la lucru"
        className={styles.aboutImage}
      />
      <div className={styles.textContainer}>
        <h2>Misiunea Noastră</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2>Viziunea Noastră</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  );
}

export default MissionVisionSection;
