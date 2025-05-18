import styles from "./ContactForm.module.css";

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Mesajul a fost trimis! (funcționalitate demo)");
    event.target.reset();
  };

  return (
    <div className={styles.contactFormSection}>
      <h2 className={styles.sectionTitle}>Trimite-ne un mesaj</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nume:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mesaj:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className={styles.formTextarea}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Trimite Mesajul
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
