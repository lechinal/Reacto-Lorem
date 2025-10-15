import styles from "./ContactInfo.module.css";
import InteractiveMap from "../../../../components/InteractiveMap/InteractiveMap";

const mapPosition = [46.06879, 23.57168];
const mapPopupText = "Sediul Nostru<br />Strada Exemplu Nr. 123, Oraș";

function ContactInfo() {
  return (
    <div className={styles.contactInfoSection}>
      <h2 className={styles.sectionTitle}>Informații Contact</h2>
      <p className={styles.infoText}>
        <strong>Adresă:</strong> Strada Exemplu Nr. 123, Oraș, Țară
      </p>
      <p className={styles.infoText}>
        <strong>Telefon:</strong> +40 123 456 789
      </p>
      <p className={styles.infoText}>
        <strong>Email:</strong> contact@myapp.com
      </p>

      <div className={styles.mapOuterContainer}>
        {" "}
        {/* Un container exterior pentru map, daca e nevoie de spatiere suplimentara */}
        <InteractiveMap
          position={mapPosition}
          zoom={15}
          popupText={mapPopupText}
          mapClassName={styles.leafletMap} 
         
        />
      </div>
    </div>
  );
}

export default ContactInfo;
