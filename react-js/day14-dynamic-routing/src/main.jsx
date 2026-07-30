import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ContextProvider } from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>,
);

// Context rendering...   // top-level provider runs first
// AppRoutes rendering... // parent routes component renders next
// Home rendering...      // child page renders last

// Context renders first because it’s the top‑level provider in your component tree — React must initialize the provider
//  before rendering any of its children (like AppRoutes and Home).


/*

### Way of Rounting in react-router:

- in Declarative approach API call happen after component rendered
  - In declarative React, component renders first → then useEffect triggers → API call happens after render.
- But in Data aprroach,API call pehle bhi ho sakti hai

// Declarative (useEffect): API call happens after component render.
// Data Router (loader): API call can happen before render → loader fetches data first, then component mounts.
- 👉 In React Router’s data approach, loaders run during navigation, 
            so the API call may be triggered before the component is rendered.
*/