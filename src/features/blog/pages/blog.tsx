import { Outlet } from "react-router-dom";

import { BlogLNB } from "@features/blog/components";

import { FlexDiv } from "@components/elements";

export const BlogPage = () => {
  return (
    <FlexDiv>
      <BlogLNB />
      <div
        style={{
          width: "100%",
          height: "calc(100vh - var(--nav-height))",
          overflowY: "scroll",
        }}
      >
        <Outlet />
      </div>
    </FlexDiv>
  );
};
