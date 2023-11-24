import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.scss";
import ParallaxEffect from "./components/ParallaxEffect.jsx";
import Paralax from "./components/Paralax.jsx";
import Welcome from "./pages/Welcome.jsx";
import Room from "./pages/Room.jsx";
import Event from "./components/Event.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/parallax",
        element: <Paralax />,
      },
      {
        path: "/outdoor",
        element: <ParallaxEffect />,
      },
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/avent",
        element: <Event />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
