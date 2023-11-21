import { createBrowserRouter } from "react-router-dom";

import { BlogPage } from "@pages/blog";
import { HomePage } from "@pages/home";
import { PortfolioPage } from "@pages/portfolio";
import { ResumePage } from "@pages/resume";

import { App } from "@/App";

import { PATH } from "./path";

export const router = createBrowserRouter([
  {
    path: PATH.HOME.INDEX,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: PATH.BLOG.INDEX, element: <BlogPage /> },
      { path: PATH.RESUME.INDEX, element: <ResumePage /> },
      { path: PATH.PORTFOLIO.INDEX, element: <PortfolioPage /> },
    ],
  },
  { path: "*", element: <div>404 page not found</div> },
]);
