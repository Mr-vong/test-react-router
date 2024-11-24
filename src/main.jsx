import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Pages
import Root from './pages/Root';
import SignIn from './pages/Sign-in';
import { default as Home } from './pages/Index';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';

//CSS
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/features",
        element: <Features />
      },
      {
        path: "pricing",
        element: <Pricing />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "*",
        element: <Page404 />
      },
    ]
  },
  {
    path: "sign-in",
    element: <SignIn />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
