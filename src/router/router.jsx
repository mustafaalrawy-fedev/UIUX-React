import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Index from './routes/Index';
import AboutUs from './routes/AboutUs.JSX';
import Pricing from './routes/Pricing';
import ContactUs from './routes/ContactUs';
import ErrorPage from './routes/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: '*', element: <ErrorPage /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'contact-us', element: <ContactUs /> },
    ],
  },
]);
