/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import OurMenu from "./pages/OurMenu/OurMenu.jsx";
import { HelmetProvider } from "react-helmet-async";
import OurShop from "./pages/OurShop/OurShop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/our-shop",
        element: <OurShop />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div>
      <RouterProvider router={router} />
    </div>
  </HelmetProvider>
);
