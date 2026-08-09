import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TanStack from "./TanStack.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Infinite from "./Infinite.jsx";
import Products from "../implementation-needed-ui/pages/Products.jsx";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* <App /> */}
    {/* <TanStack /> */}
    <Infinite />

    {/* made by Aakash saha */}
    {/* <Products /> */}
  </QueryClientProvider>
);


/*
### flow to learn pagination & infinite scroll
1. App.jsx : custom Pagination
2. TanStack.jsx : tanstack pagination
3. Infinite.jsx : Infinite load data
*/