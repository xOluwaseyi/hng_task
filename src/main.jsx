import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./index.css";

import ErrorPage from "./error-page";
import ContactPage from "./routes/Contact/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
