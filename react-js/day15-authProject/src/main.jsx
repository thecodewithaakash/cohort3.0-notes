import { createRoot } from "react-dom/client";
import "./index.css";

import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRoutes />
    <ToastContainer />
  </AuthProvider>
);


// React.StrictMode
// - A wrapper component for development.
// - Double-renders components to detect side effects.
// - Warns about deprecated APIs and unsafe lifecycles.
// - Helps catch accidental mutations or bad patterns.
// - Removed automatically in production → no runtime cost.
