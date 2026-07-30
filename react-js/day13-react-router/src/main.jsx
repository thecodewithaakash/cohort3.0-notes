import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  // here BrowserRouter act as Provider like ContextProvder
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

/*
### is re-rendering happens due to path changes of route ? 

# React Router + State Notes:
- <BrowserRouter> provides routing context using the History API.
- Internally, it tracks the current path (location) and re-renders when path changes.

Example:
let [path, setPath] = useState("/home");

- Here, `path` holds the current route.
- `setPath` updates the route → triggers re-render.
- BrowserRouter listens to history changes (pushState, replaceState, popstate).
- When path updates, React Router recalculates matching <Route> and re-renders only those components.
*/

/*
### How React Router Works Internally ?
  - React Router works internally by wrapping your app in a router instance that listens to the browser’s
  - History API (pushState, replaceState, popstate) and synchronizes navigation state with React components.
  -  It intercepts link clicks, updates the URL without reloading, and re-renders only the matched route components.
*/


/*
React Routing → multiple pages without full reload

1) <BrowserRouter> → main wrapper, provides routing context via History API.
2) <Routes> → container that holds all route definitions.
3) <Route> → maps a path to a component.
4) <NavLink> → navigation link with active styling.
5) Nested Route → define <Route> inside another <Route> for hierarchy.
6) <Outlet> → placeholder to render child routes inside parent.
7) useNavigate() → hook for programmatic navigation (redirects, dynamic routing).
*/
