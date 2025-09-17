import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Configurația comună pentru build, pe care o vom folosi în ambele cazuri
  const buildConfig = {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Aici poți adăuga opțiuni specifice dacă va fi necesar în viitor
      },
    },
  };

  // Verificăm dacă suntem într-un build de producție
  if (command === "build") {
    // Build pentru Netlify
    if (process.env.CONTEXT === "production") {
      return {
        plugins: [react(), svgr()],
        base: "/", // Calea pentru Netlify
        build: buildConfig, // Folosim configurația de build
      };
    }
    // Build pentru GitHub Pages (când rulezi `npm run deploy`)
    else {
      return {
        plugins: [react(), svgr()],
        base: "/Reacto-Lorem/", // Calea pentru GitHub Pages
        build: buildConfig, // Folosim configurația de build și aici
      };
    }
  }

  // Configurație pentru serverul de dezvoltare (când rulezi `npm run dev`)
  return {
    plugins: [react(), svgr()],
    // Nu este nevoie de base sau build aici, Vite se descurcă
  };
});
