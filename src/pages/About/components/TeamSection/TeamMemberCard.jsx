import React from "react";
import styles from "./TeamMemberCard.module.css";

// Primește datele ca props pentru a fi reutilizabil
function TeamMemberCard({ imgSrc, imgAlt, name, role }) {
  return (
    <div className={styles.teamMemberCard}>
      <img src={imgSrc} alt={imgAlt} className={styles.memberImage} />
      <h3 className={styles.memberName}>{name}</h3>
      <p className={styles.memberRole}>{role}</p>
    </div>
  );
}

export default TeamMemberCard;
