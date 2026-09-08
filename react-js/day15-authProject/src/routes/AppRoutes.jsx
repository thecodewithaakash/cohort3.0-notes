import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

// Types of Routing

// 1. Declarative Routing
// - Use when you declare routes in JSX (e.g., <Route path="/about" element={<About/>}/>).
// - Good for simple apps where data fetching happens inside components (useEffect).
// - Flow: Component renders → then fetch data → update UI.

// 2. Data Approach Routing
// - Use when you need data before rendering (React Router loaders).
// - Good for complex apps where you want pre‑fetched data, better UX (no flicker).
// - Flow: Navigation triggers loader → fetch data → render component with ready data.
// - in data approach routing, we can fetch data before rendering.

const AppRoutes = () => {
  //  Data Approach routing
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
        },
      ],
    },
  ]);

  // 1. Data approach Routing(comparing with declarative routing)
    // - createBrowserRouter - BrowserRouter
    // - [] - Routes - <Routes> <Route path="" element={} /> </Routes>
    // - {} -> {path, element} - <Route path="" element={} />
    // - RouterProvider - <RouterProvider router={router} />

  return <RouterProvider router={router} />;
};

export default AppRoutes;
