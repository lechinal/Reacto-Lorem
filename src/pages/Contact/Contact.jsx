import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactInfo from "./components/ContactInfo/ContactInfo";

function Contact() {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.pageTitle}>Contactează-ne</h1>
      <div className={styles.contactLayout}>
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;
