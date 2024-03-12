import { createBrowserRouter } from "react-router-dom";

import { BlogPage } from "@features/blog";
import { PostDetail, PostList, PostRegister } from "@features/blog/pages";
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
      // 홈
      { index: true, element: <HomePage /> },
      // 블로그
      {
        path: PATH.BLOG.INDEX,
        element: <BlogPage />,
        children: [
          { index: true, element: <PostList /> },
          { path: PATH.BLOG.POST.INDEX(), element: <PostDetail /> },
        ],
      },
      { path: PATH.BLOG.REGISTER.INDEX, element: <PostRegister /> },
      // 이력서
      { path: PATH.RESUME.INDEX, element: <ResumePage /> },
      // 포트폴리오
      { path: PATH.PORTFOLIO.INDEX, element: <PortfolioPage /> },
    ],
  },
  // Not Found
  { path: "*", element: <div>404 page not found</div> },
]);
