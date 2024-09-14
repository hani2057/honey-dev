import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useGetPostList } from "@features/blog/api";
import { Pagination } from "@features/blog/components";
import { categoryIdToShowAtom } from "@features/blog/store";
import { PATH } from "@router/path";
import { COLORS } from "@styles/colors";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";

import { FlexDiv, Text } from "@components/elements";

import { PostCardDiv, PostContent, PostListWrapper } from "./style";

export const PostList = () => {
  const [page, setPage] = useState(1);
  const categoryId = useAtomValue(categoryIdToShowAtom);
  const navigate = useNavigate();

  const req = { categoryId, page };
  const { data } = useGetPostList(req);

  if (!data) return <div>loading</div>;
  const { totalPages, posts } = data;

  return (
    <PostListWrapper>
      {posts.map((post) => (
        <PostCardDiv
          onClick={() => navigate(PATH.BLOG.POST.INDEX(post.id))}
          key={post.id}
        >
          <FlexDiv direction="column" $pWidth={75} $align="start" $gap={1}>
            <Text size={1.25} $bold={true} $pointer={true}>
              {post.title}
            </Text>
            <PostContent>{post.content}</PostContent>
          </FlexDiv>
          <FlexDiv direction="column" $gap={2}>
            <Text size={0.75} color={COLORS.main[700]} $line={1.25}>
              {post.category}
            </Text>
            <Text size={0.75} $line={1}>
              {dayjs(post.createdAt).format("YYYY.MM.DD")}
            </Text>
          </FlexDiv>
        </PostCardDiv>
      ))}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </PostListWrapper>
  );
};
