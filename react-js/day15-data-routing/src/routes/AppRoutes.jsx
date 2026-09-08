import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import MainLayout from "../layout/MainLayout";
import AuthLAyout from "../layout/AuthLAyout";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLAyout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
