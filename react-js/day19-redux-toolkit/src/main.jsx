import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";

createRoot(document.getElementById("root")).render(
  // serving phase managed by react-redux
  // Provider is a HOF component
  <Provider store={store}>
    <App />
  </Provider>
);
