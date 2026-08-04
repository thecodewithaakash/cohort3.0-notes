import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Home />
  </Provider>,
);
