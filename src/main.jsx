import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ.jsx"));
const Legal = lazy(() => import("./pages/Legal/Legal.jsx"));

const router = createBrowserRouter(
  [
    // Primul argument: array-ul de rute (rămâne neschimbat)
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "faq",
          element: <FAQ />,
        },
        {
          path: "legal",
          element: <Legal />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: "/Reacto-Lorem/",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
