# 1. Authentication Flow

This lesson implements a simple auth system without a backend. The core idea is:

- Register user data and save it in `localStorage`
- Log in by matching email/password against stored users
- Keep the logged-in user in Redux state and `localStorage`

## Key files

- `src/hooks/authHooks.jsx`
- `src/pages/LoginPage.jsx`
- `src/pages/RegisterPage.jsx`
- `src/features/authSlice.jsx`
- `src/routes/AppRoutes.jsx`

## `useAuth` hook

The reusable hook manages auth form actions and navigation.

Important behavior:

- `registeredUsers` is initialized from `localStorage`:
  - `localStorage.getItem("registeredUsers")`
- `registerForm` adds a new user and stores the updated list.
- `loginForm` finds a matching user by `email` and `password`.
- If login succeeds:
  - dispatch `addUser(user)`
  - save `loggedInUser` in `localStorage`
  - show a success toast

### Register implementation

```js
const registerForm = (data) => {
  let arr = [...registeredUsers, data];
  setRegisteredUsers(arr);
  localStorage.setItem("registeredUsers", JSON.stringify(arr));
  toast.success("user registered..");
};
```

### Login implementation

```js
const loginForm = (data) => {
  let user = registeredUsers.find((val) => {
    return val.email === data.email && val.password === data.password;
  });

  if (!user) {
    toast.error("invalid something..");
    return;
  }

  dispatch(addUser(user));
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  toast.success("user logged in");
  reset();
};
```

## Page flow

### `RegisterPage.jsx`

- Collects `name`, `email`, and `password`
- Validates required fields using `react-hook-form`
- After successful submit, the user is stored in localStorage
- There is a button to navigate back to login

### `LoginPage.jsx`

- Collects `email` and `password`
- Validates required fields and minimum length for password
- On success, dispatches Redux action and persists the login
- If the user is already logged in, public routes redirect away automatically

## Why this is useful for revision

This is the first point to revisit: the app does not rely on a server.
Instead, localStorage + Redux state simulate a real login flow, which is a great way to understand form handling and persistence.

## Common gotcha

- Registration user list and login user list are both stored in `localStorage`, but only the login state is saved as `loggedInUser`.
- If you clear localStorage or browser data, you must register again.
