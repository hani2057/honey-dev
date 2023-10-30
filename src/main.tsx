import React from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "@router/router";
import { GlobalStyles } from "@styles/global-styles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
