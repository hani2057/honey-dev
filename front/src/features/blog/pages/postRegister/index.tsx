import { useState } from "react";

import { Category } from "@features/blog/components";

import { FlexDiv, Text } from "@components/elements";

import { CategoryWrapper, PostButton } from "./style";

export const PostRegister = () => {
  const [type, setType] = useState<"register" | "edit">("register");

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
          <FlexDiv gap={3}>
            <Text bold={true}>카테고리 선택</Text>
            <Text
              bold={true}
              size={0.75}
              pointer={true}
              onClick={() => setType(type === "register" ? "edit" : "register")}
            >
              {type === "register" ? "수정" : "완료"}
            </Text>
          </FlexDiv>
          <Category type={type} />
        </FlexDiv>
        <PostButton>Post</PostButton>
      </FlexDiv>
    </CategoryWrapper>
  );
};
