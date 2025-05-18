import styles from "./CallToActionBanner.module.css";

import { Link } from "react-router-dom";

function CallToActionBanner({
  title,
  subtitle,
  buttonText,
  buttonLink, // Poate fi un link intern (ex: "/contact") sau extern
  backgroundImageUrl, // Opțional, pentru un fundal personalizat
  backgroundColor, // Opțional, pentru un fundal de culoare solidă
}) {
  const bannerStyle = {};
  if (backgroundImageUrl) {
    bannerStyle.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`;
  } else if (backgroundColor) {
    bannerStyle.backgroundColor = backgroundColor;
  }

  // Verifică dacă link-ul este extern sau intern
  const isExternalLink =
    buttonLink &&
    (buttonLink.startsWith("http://") || buttonLink.startsWith("https://"));

  return (
    <section className={styles.ctaBanner} style={bannerStyle}>
      <div className={styles.ctaContent}>
        {title && <h2 className={styles.ctaTitle}>{title}</h2>}
        {subtitle && <p className={styles.ctaSubtitle}>{subtitle}</p>}
        {buttonText &&
          buttonLink &&
          (isExternalLink ? (
            <a
              href={buttonLink}
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText}
            </a>
          ) : (
            <Link to={buttonLink} className={styles.ctaButton}>
              {buttonText}
            </Link>
          ))}
      </div>
    </section>
  );
}

export default CallToActionBanner;
