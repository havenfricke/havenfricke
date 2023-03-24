import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { App } from './App.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import DemoPage from './pages/DemoPage.jsx';
import PostsPage from './pages/PostsPage.jsx';



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
        },
        {
          path: "demo",
          element: <DemoPage />
        },
        {
          path: 'demo/posts/:id',
          element: <PostsPage />
        }
      ],
    },
  ]);