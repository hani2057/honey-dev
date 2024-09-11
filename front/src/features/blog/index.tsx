import { Outlet } from "react-router-dom";

import { FlexDiv } from "@components/elements";

import { Category } from "./components";
import { BlogOutletWrapper } from "./style";

export const BlogPage = () => {
  return (
    <FlexDiv $justify="start" $align="start">
      {/* 카테고리 영역, 화면의 좌측 17% */}
      <Category type="list" />
      {/* 컨텐츠 영역 */}
      <BlogOutletWrapper>
        <Outlet />
      </BlogOutletWrapper>
    </FlexDiv>
  );
};
