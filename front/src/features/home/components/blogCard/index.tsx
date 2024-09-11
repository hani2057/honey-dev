import { useNavigate } from "react-router-dom";

import { CardWhite } from "@features/home/style";
import { PATH } from "@router/path";
import { COLORS } from "@styles/colors";

import { FlexDiv, Text } from "@components/elements";

import { PostSummary } from "./style";

export const BlogCard = () => {
  const navigate = useNavigate();

  return (
    <CardWhite type="blog">
      <FlexDiv direction="column" $pWidth={100} $gap={1}>
        {[0, 1, 2].map((v) => (
          <PostSummary
            key={v}
            onClick={() => navigate(PATH.BLOG.POST.INDEX(1))}
          >
            <FlexDiv $pWidth={100} $justify="space-between">
              <Text
                color={COLORS.main[600]}
                size={0.75}
                // $pointer={true}
                // onClick={(e) => {
                //   e.stopPropagation();
                //   navigate(PATH.BLOG.INDEX, {}); // 해당 카테고리의 포스트 목록
                // }}
              >
                category
              </Text>
              <Text color={COLORS.grey[700]} size={0.65}>
                2024.01.18
              </Text>
            </FlexDiv>
            <Text $bold={true} $pointer={true}>
              title
            </Text>
          </PostSummary>
        ))}
      </FlexDiv>
      <Text
        size={1.25}
        $bold={true}
        $pointer={true}
        onClick={() => navigate(PATH.BLOG.INDEX)}
      >
        See More!
      </Text>
    </CardWhite>
  );
};
