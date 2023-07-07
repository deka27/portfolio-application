import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// Render the application
ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.querySelector("#root")
);
