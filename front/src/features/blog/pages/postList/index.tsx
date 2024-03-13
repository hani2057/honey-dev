import { useNavigate } from "react-router-dom";

import { Pagination } from "@features/blog/components";
import { PATH } from "@router/path";
import { COLORS } from "@styles/colors";

import { FlexDiv, Text } from "@components/elements";

import { PostCardDiv, PostContent, PostListWrapper } from "./style";

export const PostList = () => {
  const navigate = useNavigate();

  return (
    <PostListWrapper>
      {Array(10)
        .fill(0)
        .map((v) => (
          <PostCardDiv
            onClick={() => navigate(PATH.BLOG.POST.INDEX(1))}
            key={v}
          >
            <FlexDiv direction="column" pWidth={75} align="start" gap={1}>
              <Text size={1.25} bold={true} pointer={true}>
                Post Title
              </Text>
              <PostContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto optio eum numquam ducimus illo nulla ratione aperiam
                quidem cum incidunt vero maxime dolor aspernatur consequatur
                tempore odit, voluptatum repellendus esse?
              </PostContent>
            </FlexDiv>
            <FlexDiv direction="column" gap={2}>
              <Text size={0.75} color={COLORS.main[700]} line={1.25}>
                TypeScript
              </Text>
              <Text size={0.75} line={1}>
                2024.02.09.
              </Text>
            </FlexDiv>
          </PostCardDiv>
        ))}
      <Pagination />
    </PostListWrapper>
  );
};
