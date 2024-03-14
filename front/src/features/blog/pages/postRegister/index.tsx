import { Category } from "@features/blog/components";

import { FlexDiv, Text } from "@components/elements";

import { CategoryWrapper, PostButton } from "./style";

export const PostRegister = () => {
  return (
    <CategoryWrapper>
      <FlexDiv direction="column" pWidth={70}></FlexDiv>
      <FlexDiv
        direction="column"
        justify="space-between"
        align="start"
        pWidth={30}
      >
        <FlexDiv direction="column" gap={1} align="start">
          <Text bold={true}>카테고리 선택</Text>
          <Category type="register" />
        </FlexDiv>
        <PostButton>Post</PostButton>
      </FlexDiv>
    </CategoryWrapper>
  );
};
