import styles from "./Legal.module.css";
import CallToActionBanner from "../../components/CallToActionBanner/CallToActionBanner.jsx";
import React from "react";

function Legal() {
  return (
    <>
      <div className={`container ${styles.legalPage}`}>
        {" "}
        <h1 className={styles.pageTitle}>Informații Legale și Utilitare</h1>
        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Termeni și Condiții</h2>
          <p>
            Bine ați venit pe site-ul nostru! Prin accesarea și utilizarea
            acestui site, sunteți de acord să respectați și să fiți obligați de
            următorii termeni și condiții de utilizare, care, împreună cu
            politica noastră de confidențialitate, guvernează relația [Numele
            Companiei/Site-ului] cu dumneavoastră în legătură cu acest site web.
            Dacă nu sunteți de acord cu oricare parte a acestor termeni și
            condiții, vă rugăm să nu utilizați site-ul nostru.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </p>
         
        </section>
        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Politică de Confidențialitate</h2>
          <p>
            Această politică de confidențialitate stabilește modul în care
            [Numele Companiei/Site-ului] utilizează și protejează orice
            informație pe care o furnizați atunci când utilizați acest site web.
            Ne angajăm să asigurăm protecția confidențialității dumneavoastră.
            În cazul în care vă solicităm să furnizați anumite informații prin
            care puteți fi identificat atunci când utilizați acest site, puteți
            fi sigur că acestea vor fi utilizate numai în conformitate cu
            această declarație de confidențialitate.
          </p>
          <p>
            Suspendisse dictum porta lectus. Donec placerat odio vel elit.
            Nullam ante. Sed libero. Vivamus molestie mi vel urna. In nec enim.
            Phasellus vitae nulla. Nam bibendum. Nunc tincidunt. Aliquam erat
            volutpat.
          </p>
          
        </section>
        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>Politică Cookies</h2>
          <p>
            Site-ul nostru utilizează cookie-uri pentru a îmbunătăți experiența
            dumneavoastră de navigare. Un cookie este un fișier mic care
            solicită permisiunea de a fi plasat pe hard disk-ul computerului
            dumneavoastră. Odată ce sunteți de acord, fișierul este adăugat și
            cookie-ul ajută la analizarea traficului web sau vă informează când
            vizitați un anumit site.
          </p>
          <p>
            Curabitur bibendum justo non orci. Cras elementum. Fusce nibh. Morbi
            scelerisque luctus velit. Etiam dictum tincidunt diam. Ut tempus
            purus at lorem.
          </p>
        
        </section>
      </div>
      <CallToActionBanner
        title="Transparență și Angajament"
        subtitle="Ne dedicăm să oferim o experiență sigură și transparentă. Vă mulțumim pentru timpul acordat parcurgerii informațiilor noastre legale."
        buttonText="Înapoi la Pagina Principală"
        buttonLink="/"
        backgroundImageUrl="https://picsum.photos/seed/legalsimple3/1200/300"
      />
    </>
  );
}

export default Legal;
