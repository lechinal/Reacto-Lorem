import React from "react";
import styles from "./FAQ.module.css";
import FaqItem from "../FAQ/components/FaqItem.jsx";

// Date exemplu pentru FAQ
const faqData = [
  {
    id: "q1",
    question: "Ce garanții oferiți pentru produsele văndute?",
    answer:
      "Ofrecem garanție de satisfacție pentru toate produsele vândute. În cazul în care produsul nu vă satisface, puteți solicita un ramburs în termen de 30 de zile de la primirea produsului.",
  },
  {
    id: "q2",
    question: "Cum pot urmări comanda mea?",
    answer:
      "După ce ați plasat comanda, veți primi un email de confirmare care conține un link pentru a urmări statusul comenzii. Poateți, de asemenea, să urmăriți comanda în secțiunea 'Istoricul Comandelor' din contul dvs.",
  },
  {
    id: "q3",
    question: "Ce metode de plată acceptați?",
    answer:
      "Acceptăm plata prin card bancar (Visa, Mastercard, Maestro), transfer bancar și, în anumite cazuri, plata la livrare. Verificați opțiunile disponibile la finalizarea comenzii.",
  },
  {
    id: "q4",
    question: "Cât durează livrarea?",
    answer:
      "Timpul standard de livrare este de 2-5 zile lucrătoare pentru comenzile naționale. Pentru livrări internaționale, timpul poate varia. Veți primi un estimat la plasarea comenzii.",
  },
  {
    id: "q5",
    question: "Pot returna un produs?",
    answer:
      "Da, aveți la dispoziție 14 zile calendaristice de la primirea produsului pentru a solicita un retur, conform legislației în vigoare. Produsul trebuie să fie în starea inițială și cu ambalajul original.",
  },
  {
    id: "q6",
    question: "Ce se întâmplă dacă produsul este defect?",
    answer:
      "Dacă produsul este defect, puteți contacta departamentul de asistență tehnică în termen de 7 zile de la primirea produsului. Vă vom oferi un produs de schimb sau un ramburs, în funcție de situație.",
  },
  {
    id: "q7",
    question: "Cum pot schimba adresa mea de livrare?",
    answer:
      "Pentru a schimba adresa de livrare, accesează secțiunea 'Contul meu' și apoi 'Adresele mele'. Alege adresa pe care dorești să o modifici și actualizează informațiile. Dacă ai plasat deja o comandă, nu poți modifica adresa de livrare după plasarea comenzii.",
  },
  {
    id: "q8",
    question: "Ce se întâmplă dacă nu sunt acasă la momentul livrării?",
    answer:
      "Dacă nu sunteți acasă la momentul livrării, curierul va lăsa un aviz în scrinia poștală sau la locul de livrare. Acest aviz va conține informații despre cum să planificați o nouă livrare sau cum să ridicați produsul de la o locație specifică.",
  },
];

function FAQ() {
  return (
    <div className={`container ${styles.faqPage}`}>
      <h1 className={styles.pageTitle}>Întrebări Frecvente (FAQ)</h1>
      <div className={styles.faqList}>
        {faqData.map((item) => (
          <FaqItem
            key={item.id}
            id={item.id} // Pasează id-ul către FaqItem
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
