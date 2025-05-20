import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  //   FaYoutube,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import GitHubBadge from "../GitHubBadge/GitHubBadge";
import Logo from "../Logo/Logo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div
            className={`${styles.footerSection} ${styles.footerSectionLogo}`}
          >
            {/* <h4 className={styles.footerTitle}>Reacto Lorem</h4> */}
            <Logo />
            <p className={styles.footerText}>
              Un proiect demonstrativ pentru a explora diverse funcționalități
              React și design web.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h5 className={styles.footerSubtitle}>Linkuri Utile</h5>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/about">Despre Noi</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/legal">Informații Legale</Link>
              </li>
              {/* Adaugă alte linkuri relevante */}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h5 className={styles.footerSubtitle}>Conectează-te</h5>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`${styles.socialLink} ${styles.facebook}`}
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className={`${styles.socialLink} ${styles.x}`}
              >
                <BsTwitterX />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`${styles.socialLink} ${styles.instagram}`}
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`${styles.socialLink} ${styles.linkedin}`}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={`${styles.socialLink} ${styles.youtube}`}
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {currentYear} Reacto Lorem. Toate drepturile rezervate.</p>
          <div className={styles.creatorBadgeContainer}>
            {" "}
            <GitHubBadge username="lechinal" initialText="Creat de" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
