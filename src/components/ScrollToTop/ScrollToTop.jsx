import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // Destructurează pathname din obiectul location

  useEffect(() => {
    window.scrollTo(0, 0); // Derulează la coordonatele (0, 0) - vârful paginii
  }, [pathname]); // Rulează acest efect de fiecare dată când pathname se schimbă

  return null; // Această componentă nu randează nimic vizibil
}

export default ScrollToTop;
