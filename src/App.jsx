import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "leaflet/dist/leaflet.css";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

function App() {
  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
