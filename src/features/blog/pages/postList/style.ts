import { COLORS } from "@styles/colors";
import { styled } from "styled-components";

import { FlexDiv, Text } from "@components/elements";

const PostListWrapper = styled(FlexDiv)`
  width: 66vw;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: start;
  padding: 2rem;
  gap: 1.5rem;
`;

const PostCardDiv = styled(FlexDiv)`
  width: 100%;
  padding: 1rem;
  justify-content: space-between;

  &:hover {
    border-radius: 25px;
    box-shadow: 0 0 4px ${COLORS.main[200]};
    cursor: pointer;
  }
`;

const PostContent = styled(Text)`
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export { PostListWrapper, PostCardDiv, PostContent };
