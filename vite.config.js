import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/Reacto-Lorem/",
  build: {
    // Adaugă această secțiune
    cssCodeSplit: true, // Asigură-te că este true (default)
    rollupOptions: {
      output: {
        // Oprește Vite din a încerca să preîncarce CSS-ul pentru chunk-urile async
        // Acest lucru se face prin a nu genera link-uri de preload pentru CSS-ul din chunk-uri
        // O modalitate este de a manipula manual `modulePreload` sau de a folosi un plugin
        // Dar o setare mai directă în Vite pentru acest caz specific de CSS preload este mai greu de găsit.
        // Vite încearcă să fie inteligent.
        // O alternativă ar fi să forțezi ca tot CSS-ul să fie într-un singur fișier,
        // dar asta anulează beneficiile code splitting-ului pentru CSS.
        // cssCodeSplit: false, // NU face asta dacă vrei code splitting
        // Vite >2.9 are opțiunea experimentală `experimental__ոչpreloadCssChunks`
        // În versiuni mai noi, s-ar putea să existe o opțiune mai stabilă.
        // Pentru Vite 4/5, nu există o opțiune simplă de a dezactiva doar CSS preload pentru chunks.
      },
    },
  },
});
