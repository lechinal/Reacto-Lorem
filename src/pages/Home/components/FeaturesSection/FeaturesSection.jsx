import styles from "./FeaturesSection.module.css";

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>De ce să ne alegi?</h2>
      <div className={styles.featureGrid}>
        <div className={styles.featureCard}>
          <img
            src="https://picsum.photos/seed/feature1/300/200"
            alt="Feature 1"
          />
          <h3>Design Modern</h3>
          <p>O interfață intuitivă și plăcută vizual.</p>
        </div>
        <div className={styles.featureCard}>
          <img
            src="https://picsum.photos/seed/feature2/300/200"
            alt="Feature 2"
          />
          <h3>Performanță Rapidă</h3>
          <p>Navigare fluidă și încărcare instantanee.</p>
        </div>
        <div className={styles.featureCard}>
          <img
            src="https://picsum.photos/seed/feature3/300/200"
            alt="Feature 3"
          />
          <h3>Suport Dedicat</h3>
          <p>Suntem aici pentru tine, oricând ai nevoie.</p>
        </div>
        <div className={styles.featureCard}>
          <img
            src="https://picsum.photos/seed/feature4/300/200"
            alt="Feature 4"
          />
          <h3>Securitate Robustă</h3>
          <p>
            Datele tale sunt protejate cu cele mai noi tehnologii de securitate.
          </p>
        </div>
        <div className={styles.featureCard}>
          <img
            src="https://picsum.photos/seed/feature5/300/200"
            alt="Feature 5 - Integrare Ușoară"
          />
          <h3>Integrare Flexibilă</h3>
          <p>
            Se conectează ușor cu alte servicii și platforme pe care le
            folosești.
          </p>
        </div>

        <div className={styles.featureCard}>
          <img
            src="https://picsum.photos/seed/feature6/300/200"
            alt="Feature 6 - Actualizări Constante"
          />
          <h3>Actualizări Frecvente</h3>
          <p>Beneficiezi constant de noi funcționalități și îmbunătățiri.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
