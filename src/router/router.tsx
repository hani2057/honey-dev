import { createBrowserRouter } from "react-router-dom";

import { BlogPage, BlogPostDetail, BlogPostList } from "@features/blog";
import { HomePage } from "@features/home";
import { PortfolioPage } from "@features/portfolio";
import { ResumePage } from "@features/resume";

import { App } from "@/App";

import { PATH } from "./path";

export const router = createBrowserRouter([
  {
    path: PATH.HOME.INDEX,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: PATH.BLOG.INDEX,
        element: <BlogPage />,
        children: [
          { index: true, element: <BlogPostList /> },
          { path: PATH.BLOG.POST.INDEX(), element: <BlogPostDetail /> },
        ],
      },
      { path: PATH.RESUME.INDEX, element: <ResumePage /> },
      { path: PATH.PORTFOLIO.INDEX, element: <PortfolioPage /> },
    ],
  },
  { path: "*", element: <div>404 page not found</div> },
]);
