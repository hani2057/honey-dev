import React from "react";

import ReactDOM from "react-dom/client";

import { GlobalStyles } from "@styles/global-styles.ts";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
