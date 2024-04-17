import React from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { queryClient } from "@lib/reactQuery";
import { router } from "@router/router";
import { GlobalStyles } from "@styles/globalStyles.ts";
import { QueryClientProvider } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <GlobalStyles />
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);
