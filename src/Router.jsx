import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { App } from './App.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';



export const router = createHashRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "portfolio",
          element: <PortfolioPage />,
        },
        {
          path: "contact",
          element: <ContactPage />
        }
      ],
    },
  ]);