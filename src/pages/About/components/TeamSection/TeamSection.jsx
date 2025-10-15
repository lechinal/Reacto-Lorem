import React from "react";
import styles from "./TeamSection.module.css";
import TeamMemberCard from "./TeamMemberCard";

// Datele pentru echipa pot veni dintr-un array, API, etc.
const teamMembersData = [
  {
    id: 1,
    imgSrc: "https://picsum.photos/seed/teammember1/200/200",
    imgAlt: "Membru Echipa 1 - Nume Fictiv",
    name: "Ana Popescu",
    role: "Lead Developer",
  },
  {
    id: 2,
    imgSrc: "https://picsum.photos/seed/teammember2/200/200",
    imgAlt: "Membru Echipa 2 - Nume Fictiv",
    name: "Bogdan Ionescu",
    role: "UX/UI Designer",
  },
  {
    id: 3,
    imgSrc: "https://picsum.photos/seed/teammember3/200/200",
    imgAlt: "Membru Echipa 3 - Nume Fictiv",
    name: "Cristina Georgescu",
    role: "Marketing Specialist",
  },
  {
    id: 4,
    imgSrc: "https://picsum.photos/seed/teammember4/200/200",
    imgAlt: "Membru Echipa 4 - Nume Fictiv",
    name: "Calin Iftimie",
    role: "Lead QA Engineer",
  },
  {
    id: 5,
    imgSrc: "https://picsum.photos/seed/teammember5/200/200",
    imgAlt: "Membru Echipa 5 - Nume Fictiv",
    name: "George Abrudan",
    role: "UX/UI Designer",
  },
  {
    id: 6,
    imgSrc: "https://picsum.photos/seed/teammember6/200/200",
    imgAlt: "Membru Echipa 6 - Nume Fictiv",
    name: "Eliza Lechintan",
    role: "Full Stack Developer",
  },
  {
    id: 7,
    imgSrc: "https://picsum.photos/seed/teammember7/200/200",
    imgAlt: "Membru Echipa 7 - Nume Fictiv",
    name: "Alexandra Lechintan",
    role: "Analist de sisteme la inginer de securitate",
  },
  {
    id: 8,
    imgSrc: "https://picsum.photos/seed/teammember8/200/200",
    imgAlt: "Membru Echipa 8 - Nume Fictiv",
    name: "Andrei Ardius",
    role: "Inginer software/QA/Testare la pentesting",
  },
  {
    id: 9,
    imgSrc: "https://picsum.photos/seed/teammember9/200/200",
    imgAlt: "Membru Echipa 9 - Nume Fictiv",
    name: "Opris Andrei",
    role: "Analist de sisteme de afaceri la risc/conformitate",
  },
  {
    id: 10,
    imgSrc: "https://picsum.photos/seed/teammember10/200/200",
    imgAlt: "Membru Echipa 10 - Nume Fictiv",
    name: "Alin Lechintan",
    role: "Project Manager",
  },
];

function TeamSection() {
  return (
    <div className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>Echipa Noastră</h2>
      <div className={styles.teamGrid}>
        {teamMembersData.map((member) => (
          <TeamMemberCard
            key={member.id}
            imgSrc={member.imgSrc}
            imgAlt={member.imgAlt}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
