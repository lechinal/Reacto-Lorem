import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); 
  // Destructureaza pathname din obiectul location

  useEffect(() => {
    window.scrollTo(0, 0); // Deruleaza la coordonatele (0, 0) - varful paginii
  }, [pathname]); // Ruleaza acest efect de fiecare dată când pathname se schimbă

  return null; // Această componenta nu randează nimic vizibil
}

export default ScrollToTop;
