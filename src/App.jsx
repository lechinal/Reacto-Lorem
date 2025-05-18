import React, { useState, useEffect, Suspense } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer.jsx";
import "leaflet/dist/leaflet.css";
import "./index.css";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Pentru a închide meniul la schimbarea rutei

  const PageContentLoadingFallback = () => (
    <div style={{ padding: "20px", textAlign: "center" }}>
      Loading page content...
    </div>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Închide meniul mobil la schimbarea rutei
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  // Optional: Închide meniul dacă se redimensionează la desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <NavLink
            to="/"
            className={styles.titleLink}
            onClick={closeMobileMenu}
          >
            {" "}
            {/* Wrap title in NavLink */}
            <h1 className={styles.title}>Reacto Lorem</h1>
          </NavLink>

          <button
            className={`${styles.hamburgerButton} ${
              isMobileMenuOpen ? styles.open : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="navigation-list"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          <ul
            id="navigation-list"
            className={`${styles.navList} ${
              isMobileMenuOpen ? styles.mobileMenuOpen : ""
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                }
                onClick={closeMobileMenu}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/legal"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                }
                onClick={closeMobileMenu}
              >
                Legal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main className={styles.main}>
        <div className="container">
          <Suspense fallback={<PageContentLoadingFallback />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
