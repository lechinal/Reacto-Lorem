import React, { useState } from "react";
import styles from "./FaqItem.module.css";

function FaqItem({ id, question, answer }) {
  // Am adăugat 'id' aici pentru aria-controls
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Creeaza un ID unic si sigur pentru controalele ARIA
  const uniqueId = `faq-answer-${id}`;

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQuestion}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={uniqueId} // Folosim ID-ul unic
      >
        {question}
        <span className={`${styles.faqIcon} ${isOpen ? styles.isOpen : ""}`}>
          {isOpen ? "X" : "+"}{" "}
          {/* Folosind minus în loc de x pentru o deschidere mai clară */}
        </span>
      </button>
      {/* Condiționare mai robustă pentru afișarea răspunsului */}
      <div
        id={uniqueId} // Folosim ID-ul unic
        className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ""}`}
        role="region"
        hidden={!isOpen} // Adaugă hidden pentru accesibilitate când e închis
      >
        {isOpen && <p className={styles.faqAnswerContent}>{answer}</p>}{" "}
        {/* Randează paragraful doar când e deschis */}
      </div>
    </div>
  );
}

export default FaqItem;
