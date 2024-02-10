import { Outlet } from "react-router-dom";

import { FlexDiv } from "@components/elements";

import { Category } from "./components";
import { BlogOutletWrapper } from "./style";

export const BlogPage = () => {
  return (
    <FlexDiv
      justify="start"
      style={{ height: "calc(100vh - var(--nav-height))" }}
    >
      {/* 카테고리 영역, 화면의 좌측 17% */}
      <Category />
      {/* 컨텐츠 영역, 화면의 중앙 66% */}
      <BlogOutletWrapper>
        <Outlet />
      </BlogOutletWrapper>
    </FlexDiv>
  );
};
