import React, { useState } from "react";
import styles from "./FaqItem.module.css";

function FaqItem({ id, question, answer }) {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Creeaza un ID unic si sigur pentru controalele ARIA
  const uniqueId = `faq-answer-${id}`;

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.itemOpen : ""}`}>
      <button
        className={styles.faqQuestion}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={uniqueId} // Folosim ID-ul unic
      >
        {question}
        <span className={`${styles.faqIcon} ${isOpen ? styles.isOpen : ""}`}>
          {isOpen ? "X" : "+"}{" "}
        </span>
      </button>

      <div
        id={uniqueId} // Folosim ID-ul unic
        className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ""}`}
        role="region"
        hidden={!isOpen} 
      >
        {/* {isOpen && <p className={styles.faqAnswerContent}>{answer}</p>}{" "} */}
        {/* Randeaza paragraful doar cand e deschis */}
        <p className={styles.faqAnswerContent}>{answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;
