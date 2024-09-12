import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Services from './pages/sevices';
import Wedo from './pages/wedo';
import Contact from './pages/contact';
import Aboutus from './pages/aboutus';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  /*You Make path to your pages here don't forget to import the pags above*/
{

    path: "/",
    element: <App />,
    errorElement: <h1>The Page doesn't existe anymore...</h1>

  },
  {

    path: "/wedo",
    element: <Wedo />,
    errorElement: <h1>The Page doesn't existe anymore...</h1>
  },
  {

    path: "/services",
    element: <Services />,
    errorElement: <h1>The Page doesn't existe anymore...</h1>

  },
  {

    path: "/contact",
    element: <Contact />,
    errorElement: <h1>Error Message...</h1>

  },  
  {

    path: "/aboutus",
    element: <Aboutus />,
    errorElement: <h1>Error Message...</h1>

  },
]);

/*And the following in the ReadtDom*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
