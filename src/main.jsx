import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextWrapper from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextWrapper>
    <App />
  </ContextWrapper>
);
