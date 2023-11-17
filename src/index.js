import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Import redux's Provider component
import { Provider as ReduxProvider } from "react-redux";

// Setup Store
import configureStore from "./redux/configureStore";
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
