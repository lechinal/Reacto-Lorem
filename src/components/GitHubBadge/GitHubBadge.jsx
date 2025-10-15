import React from "react";
import { FaGithub } from "react-icons/fa"; 
import styles from "./GitHubBadge.module.css";

/**
 * Props pentru GitHubBadge:
 * @param {string} username - Username-ul  GitHub (obligatoriu).
 * @param {string} [initialText="Creat de"] - Textul afisat initial langa iconita.
 * @param {string} [hoverTextPrefix=""] - Un prefix adaugat inaintea username-ului la hover (ex: "Vezi ").
 * @param {string} [ariaLabel] - Eticheta ARIA pentru accesibilitate.
 * @param {string} [className] - Clase CSS suplimentare pentru a suprascrie/adauga stiluri.
 */
function GitHubBadge({
  username,
  initialText = "Creat de",
  hoverTextPrefix = "",
  ariaLabel,
  className = "",
}) {
  if (!username) {
    console.warn("GitHubBadge: proprietatea 'username' este obligatorie.");
    return null;
  }

  const githubUrl = `https://github.com/${username}`;
  const defaultAriaLabel = `Link către profilul GitHub al lui ${username}`;

  return (
    <>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.githubBadge} ${className}`}
        aria-label={ariaLabel || defaultAriaLabel}
        title={ariaLabel || defaultAriaLabel}
      >
        <FaGithub className={styles.icon} aria-hidden="true" />
        <span className={styles.textContainer}>
          <span className={styles.initialText}>{initialText}</span>
          <span className={styles.hoverText}>
            {hoverTextPrefix}
            <span className={styles.username}>{username}</span>
          </span>
        </span>
      </a>
    </>
  );
}

export default GitHubBadge;
