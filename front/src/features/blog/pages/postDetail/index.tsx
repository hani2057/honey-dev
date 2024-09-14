import { useCallback, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useGetPostDetail } from "@features/blog/api";
import { categoryIdToShowAtom } from "@features/blog/store";
import { PATH } from "@router/path";
import { COLORS } from "@styles/colors";
import dayjs from "dayjs";
import { useSetAtom } from "jotai";

import { FlexDiv, Text } from "@components/elements";

import { TOC } from "./components";
import {
  Content,
  Description,
  PostDetailWrapper,
  PostListWrapper,
  ProgressBar,
  TableBody,
  TableRow,
  Wrapper,
} from "./style";

export const PostDetail = () => {
  const navigate = useNavigate();
  const { id: currentPostId } = useParams() as { id: string };
  const setCategoryIdToShow = useSetAtom(categoryIdToShowAtom);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  // TODO: 로그인 정보 받아와서 수정
  const isLoggedIn = false;

  /**
   * 블로그 상세 페이지를 스크롤한 길이를 계산하여 상단 스크롤 프로그레스 바의 너비를 결정
   */
  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const windowHeight = scrollHeight - clientHeight;
    setProgressBarWidth((scrollTop / windowHeight) * 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const { data } = useGetPostDetail(currentPostId);
  useEffect(() => {
    // 해당 포스트의 카테고리로 categoryIdToShow 설정
    setCategoryIdToShow(data?.categoryId ?? 0);
  }, [data?.categoryId, setCategoryIdToShow]);

  if (!data) return;
  const {
    title,
    subtitle,
    description,
    content,
    createdAt,
    viewCnt,
    category,
    posts,
  } = data;

  return (
    <>
      {/* 상단 스크롤 프로그레스 바 */}
      <ProgressBar width={progressBarWidth} />
      <FlexDiv $align="start">
        {/* 화면 중앙 블로그 포스트 내용 영역*/}
        <Wrapper>
          <PostDetailWrapper>
            {/* 포스트 제목 */}
            <FlexDiv
              as="header"
              $pWidth={100}
              direction="column"
              $align="start"
            >
              <FlexDiv
                $pWidth={100}
                $justify="space-between"
                style={{
                  borderBottom: `1px solid ${COLORS.grey[300]}`,
                  paddingBottom: "0.8rem",
                }}
              >
                <FlexDiv direction="column" $align="start" $gap={1.25}>
                  <Text size={1.6} $bold={true}>
                    {title}
                  </Text>
                  <Text $bold={true}>{subtitle}</Text>
                </FlexDiv>
                {/* TODO: 로그인시 수정, 삭제 로직 구현 */}
                {isLoggedIn && (
                  <Text>
                    <span>수정</span> | <span>삭제</span>
                  </Text>
                )}
              </FlexDiv>
              <FlexDiv $gap={1} $py={0.2} style={{ alignSelf: "end" }}>
                <Text size={0.75}>
                  {dayjs(createdAt).format("YYYY.MM.DD.")}
                </Text>
                <Text size={0.75}>{`${viewCnt} views`}</Text>
              </FlexDiv>
            </FlexDiv>

            {/* 포스트 본문 */}
            <FlexDiv
              as="article"
              direction="column"
              $pWidth={100}
              $align="start"
              $gap={1.5}
            >
              {description && (
                <Description $highlited={true}>{description}</Description>
              )}
              <Content dangerouslySetInnerHTML={{ __html: content }} />
            </FlexDiv>
          </PostDetailWrapper>

          {/* 하단 페이지네이션: 동일한 카테고리에 속한 포스트 목록 */}
          <PostListWrapper>
            <Text
              size={0.75}
              $bold={true}
              color={COLORS.grey[600]}
              style={{ alignSelf: "start", marginBottom: "0.5rem" }}
            >
              카테고리:{" "}
              <span
                onClick={() => navigate(PATH.BLOG.INDEX)}
                style={{ cursor: "pointer" }}
              >
                {category}
              </span>
            </Text>
            <table style={{ width: "100%" }}>
              <TableBody>
                {posts.map(({ postId, title, createdAt }) => (
                  <TableRow
                    $isCurrent={Number(currentPostId) === postId}
                    key={postId}
                  >
                    <td>
                      <Text
                        $pointer={true}
                        onClick={() => navigate(PATH.BLOG.POST.INDEX(postId))}
                      >
                        {title}
                      </Text>
                    </td>
                    <td>
                      <Text size={0.75}>
                        {dayjs(createdAt).format("YYYY.MM.DD.")}
                      </Text>
                    </td>
                  </TableRow>
                ))}
              </TableBody>
            </table>
            {/* TODO: API 연동 이후 이전, 이후 포스트 목록 받아와 재렌더링 */}
            <FlexDiv height={4} $gap={5}>
              <Text $pointer={true} onClick={() => {}}>
                {"< 이전"}
              </Text>
              <Text $pointer={true} onClick={() => {}}>
                {"이후 >"}
              </Text>
            </FlexDiv>
          </PostListWrapper>
        </Wrapper>

        {/* 화면 우측 TOC 영역 */}
        <FlexDiv as="aside" style={{ width: "17vw" }}>
          <TOC content={content} />
        </FlexDiv>
      </FlexDiv>
    </>
  );
};
