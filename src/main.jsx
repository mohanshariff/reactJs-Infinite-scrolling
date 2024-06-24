import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Scroll from "./components/scrolling/Scroll.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Set Login as the root path
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "nav",
        element: <Nav />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "scroll",
        element: <Scroll />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
