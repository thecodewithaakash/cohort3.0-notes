# 2. Route Protection

This app uses React Router v8 and Redux state to separate public and private pages.

## Route structure in `src/routes/AppRoutes.jsx`

The main route tree is:

- `/` — public auth area (login/register)
- `/main` — protected area (home page)

The router uses nested routes with layouts:

- `PublicProtected` wraps the auth pages
- `AuthLayout` provides a basic page wrapper for auth screens
- `MainProtected` wraps the private route `/main`
- `MainLayout` contains the protected UI shell and outlet

## Hydration on app startup

In `AppRoutes`, a `useEffect` runs once to hydrate Redux state from `localStorage`:

```js
const hydrateUser = () => {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    toast.error("UnAuthorized user");
    return;
  }
  dispatch(addUser(loggedInUser));
};

useEffect(() => {
  hydrateUser();
}, []);
```

This means:

- if `loggedInUser` exists in browser storage, Redux auth state is restored
- otherwise, the user remains unauthenticated

## `PublicProtected` behavior

File: `src/routes/protected/PublicProtected.jsx`

This component checks Redux auth state:

- if `user` exists, redirect to `/main`
- otherwise render the auth forms

```js
if (user) {
  return <Navigate to={"/main"} />;
}
```

Use case:

- prevents logged-in users from using login/register pages
- keeps the app consistent after refresh

## `MainProtected` behavior

File: `src/routes/protected/MainProtected.jsx`

This component also checks Redux auth state:

- if no user: redirect to `/`
- if user exists: allow access to the protected outlet

```js
if (!user) {
  return <Navigate to={"/"} />;
}
```

This is the core of client-side route guarding.

## Layouts

- `AuthLayout.jsx` is a lightweight wrapper around `<Outlet />`.
- `MainLayout.jsx` renders a simple navbar placeholder and the protected outlet.

These layouts let you separate UI concerns from the auth guard logic.

## What to remember

- Auth protection is based on Redux state, not direct localStorage checks inside routes.
- `AppRoutes` hydrates Redux state from localStorage once on mount.
- Public routes redirect away when the user is already logged in.
- Protected routes redirect to login if the user is missing.
