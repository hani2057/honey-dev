import { createBrowserRouter } from "react-router-dom";

import { BlogPage } from "@pages/blog";
import { HomePage } from "@pages/home";
import { PortfolioPage } from "@pages/portfolio";
import { ResumePage } from "@pages/resume";

import { App } from "@/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "portfolio", element: <PortfolioPage /> },
    ],
  },
  { path: "*", element: <div>404 page not found</div> },
]);
