```js
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


// React Router Features (useNavigate, useLocation, NavLink)
// 👉 To use these hooks/components, the app must be wrapped in <BrowserRouter>.
// Reason: BrowserRouter provides the routing context.
// Without it → hooks/components throw errors (no router context).
// Declarative Approach → always wrap your main/root component with <BrowserRouter>.


// React Router Data APIs (useLoaderData, loader, action)
// 👉 To use these features, the app must be wrapped in <RouterProvider router={...}>.
// Reason: RouterProvider provides the data‑aware routing context.
// Without it → loaders/actions/useLoaderData won’t work (no data router context).
// Data Approach → always wrap your main/root component with <RouterProvider>.

// React.StrictMode
// - A wrapper component for development.
// - Double-renders components to detect side effects.
// - Warns about deprecated APIs and unsafe lifecycles.
// - Helps catch accidental mutations or bad patterns.
// - Removed automatically in production → no runtime cost.


```

- npm create vite@7
- npm i react-router
- 