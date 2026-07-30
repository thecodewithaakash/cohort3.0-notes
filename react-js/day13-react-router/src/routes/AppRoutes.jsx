import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import NestedAbout from "../pages/nestedAbout";

const AppRoutes = () => {
  return (
    <div>
      {/* Declarative Routing */}
      <Routes>
        {/* Most browsers and servers treat URLs as case‑insensitive for paths. */}
        {/* 
            Default: paths are case-insensitive.
            Use caseSensitive={true} on <Route> to enforce strict matching.
            Example:
            <Route path="/About" element={<About />} caseSensitive />
      */}

        <Route path="/" element={<Home />}>
          <Route path="detail" element={<Detail />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="nested" element={<NestedAbout />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

/* 
1. <Routes>
- Acts as a parent container for multiple <Route> components.
- Ensures only the best matching <Route> is rendered.
- Introduced in React Router v6 (replaces <Switch> from v5).
- Example:
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>

2. <Route>
- Defines a single route mapping.
- Props:
   - path: URL pattern to match.
   - element: Component to render when path matches.
- Example:
  <Route path="/about" element={<About />} />

3. How they work together
- <BrowserRouter> provides routing context.
- <Routes> groups all routes.
- Each <Route> specifies what to render for a given path.
- When URL changes, <Routes> checks and renders the correct <Route>.

4. Key distinction
- <Routes> = container / manager of routes.
- <Route> = individual route definition.
- Without <Routes>, <Route> alone won’t work properly in v6.
*/

/*
### BrowserRouter, Routes, and Route are React components.
They work together by passing routing context down through the children prop.
BrowserRouter provides the routing context (using the History API).
Routes consumes that context and decides which <Route> matches the current path.
Route renders its children when the path matches.
👉 In short: BrowserRouter provides → Routes organizes → Route displays.  
*/
