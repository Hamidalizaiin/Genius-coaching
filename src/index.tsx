import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import Layout from './Components/Layout';
import Courses from './courses/Courses';
import CoursesForms from './courses/Components/CoursesForms';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:id",
        element: <CoursesForms />,
      },
      {
        path: "careers",
        element: <div>careers</div>,
      },
      {
        path: "fee-vouchers",
        element: <div>fee vouchers</div>,
      },

    ],
  }
];

const router = createBrowserRouter(routes);  // Create a router using defined routes

// Get the root element in the DOM and type it
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);  // Type inference from TypeScript
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(() => <></>);  // Keep this if you're logging or sending to analytics
