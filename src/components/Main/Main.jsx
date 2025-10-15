import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";

import { RingLoader } from "react-spinners";

const PageContentLoadingFallback = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 120px)", // Ajusteaz la nevoie (ex: înalțimea header + footer)
    }}
  >
    <RingLoader color="#007bff" loading={true} size={60} />
    <p style={{ marginTop: "20px", color: "#555" }}>Loading page content...</p>
  </div>
);

function Main() {
  return (
    <main className={styles.main}>
      <div className="container">
        <Suspense fallback={<PageContentLoadingFallback />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}

export default Main;
