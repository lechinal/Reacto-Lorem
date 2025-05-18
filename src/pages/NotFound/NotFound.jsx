import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <img
        src="https://picsum.photos/seed/notfound/400/300"
        alt="Sad robot"
        className={styles.notFoundImage}
      />
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorMessage}>Oops! Pagina nu a fost găsită.</h2>
      <p className={styles.errorDescription}>
        Se pare că pagina pe care o cauți nu există sau a fost mutată.
      </p>
      <Link to="/" className={styles.homeButton}>
        Înapoi la Acasă
      </Link>
    </div>
  );
}

export default NotFound;
