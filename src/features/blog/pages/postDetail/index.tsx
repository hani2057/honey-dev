// import { useEffect } from "react";
import { useCallback, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

// import { selectedCategoryIdAtom } from "@features/blog/store";
import { PATH } from "@router/path";
import { COLORS } from "@styles/colors";

// import { useAtom } from "jotai";
import { FlexDiv, Text } from "@components/elements";

import {
  Description,
  PostDetailWrapper,
  PostListWrapper,
  ProgressBar,
  TOC,
  TableBody,
  TableRow,
  Wrapper,
} from "./style";

export const PostDetail = () => {
  const navigate = useNavigate();
  const { id: currentPostId } = useParams();
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  // const [selectedCategoryId, setSelectedCategoryId] = useAtom(
  //   selectedCategoryIdAtom
  // );

  // TODO: 더미데이터임
  const dummyData = [
    { postId: 1, title: "Post Title", createdAt: "2024.02.11." },
    { postId: 2, title: "Post Title", createdAt: "2024.02.11." },
    { postId: 3, title: "Post Title", createdAt: "2024.02.11." },
    { postId: 4, title: "Post Title", createdAt: "2024.02.11." },
    { postId: 5, title: "Post Title", createdAt: "2024.02.11." },
  ];
  const isLoggedIn = false; // TODO: 로그인 정보 받아와서 수정
  const dummyContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.";

  /**
   * 블로그 상세 페이지를 스크롤한 길이를 계산하여 상단 스크롤 프로그레스 바의 너비를 결정
   */
  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // const el = document.documentElement;
    // const scrollTop = el.scrollTop || document.body.scrollTop;
    // const scrollHeight = el.scrollHeight || document.body.scrollHeight;

    const windowHeight = scrollHeight - clientHeight;
    setProgressBarWidth((scrollTop / windowHeight) * 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // TODO: 해당 포스트의 카테고리로 selectedCategoryId 설정
  // useEffect(() => {
  //   setSelectedCategoryId()
  // }, []);

  return (
    <>
      {/* 상단 스크롤 프로그레스 바 */}
      <ProgressBar width={progressBarWidth} />
      <FlexDiv align="start">
        {/* 화면 중앙 블로그 포스트 내용 영역*/}
        <Wrapper>
          <PostDetailWrapper>
            {/* 포스트 제목 */}
            <FlexDiv pWidth={100} direction="column" align="start">
              <FlexDiv
                pWidth={100}
                justify="space-between"
                style={{
                  borderBottom: `1px solid ${COLORS.grey[300]}`,
                  paddingBottom: "0.8rem",
                }}
              >
                <FlexDiv direction="column" align="start" gap={1.25}>
                  <Text as={"h1"} size={1.6} bold={true}>
                    240125 개발블로그 제작기 #1
                  </Text>
                  <Text as={"h2"} bold={true}>
                    히스토리와 제작 배경
                  </Text>
                </FlexDiv>
                {/* TODO: 로그인시 수정, 삭제 로직 구현 */}
                {isLoggedIn && (
                  <Text>
                    <span>수정</span> | <span>삭제</span>
                  </Text>
                )}
              </FlexDiv>
              <FlexDiv gap={1} py={0.2} style={{ alignSelf: "end" }}>
                <Text size={0.75}>2024.01.25.</Text>
                <Text size={0.75}>0 views</Text>
              </FlexDiv>
            </FlexDiv>

            {/* 포스트 본문 */}
            <FlexDiv direction="column" pWidth={100} align="start" gap={2}>
              {/* TODO: Description은 nullable */}
              <Description>
                나중에 이 글을 보면 미숙함에 부끄러워질 걸 안다. 그때 "이런
                시절도 있었지"라며 웃기 위해 기록해둔다.
              </Description>
              {/* TODO: content 데이터 더미임 */}
              <div
                style={{ lineHeight: "10rem" }}
                dangerouslySetInnerHTML={{ __html: dummyContent }}
              ></div>
            </FlexDiv>
          </PostDetailWrapper>

          {/* 하단 페이지네이션: 동일한 카테고리에 속한 포스트 목록 */}
          <PostListWrapper>
            <Text
              size={0.75}
              bold={true}
              color={COLORS.grey[600]}
              style={{ alignSelf: "start", marginBottom: "0.5rem" }}
            >
              카테고리:{" "}
              <span
                onClick={() => navigate(PATH.BLOG.INDEX)}
                style={{ cursor: "pointer" }}
              >
                TypeScript
              </span>
            </Text>
            <table style={{ width: "100%" }}>
              <TableBody>
                {dummyData.map(({ postId, title, createdAt }) => (
                  <TableRow
                    isCurrent={Number(currentPostId) === postId}
                    key={postId}
                  >
                    <td>
                      <Text
                        pointer={true}
                        onClick={() => navigate(PATH.BLOG.POST.INDEX(postId))}
                      >
                        {title}
                      </Text>
                    </td>
                    <td>
                      <Text size={0.75}>{createdAt}</Text>
                    </td>
                  </TableRow>
                ))}
              </TableBody>
            </table>
            {/* TODO: API 연동 이후 이전, 이후 포스트 목록 받아와 재렌더링 */}
            <FlexDiv height={4} gap={5}>
              <Text pointer={true} onClick={() => {}}>
                {"< 이전"}
              </Text>
              <Text pointer={true} onClick={() => {}}>
                {"이후 >"}
              </Text>
            </FlexDiv>
          </PostListWrapper>
        </Wrapper>

        {/* 화면 우측 TOC 영역 */}
        {/* TODO: 포스트 작성 페이지 구현 이후 구현 예정 */}
        {/* <FlexDiv style={{ width: "17vw" }}>
          <TOC />
        </FlexDiv> */}
      </FlexDiv>
    </>
  );
};
