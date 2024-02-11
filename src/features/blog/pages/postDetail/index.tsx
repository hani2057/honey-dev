// import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import { selectedCategoryIdAtom } from "@features/blog/store";
import { PATH } from "@router/path";
import { COLORS } from "@styles/colors";

// import { useAtom } from "jotai";
import { FlexDiv, Text } from "@components/elements";

import {
  PostDetailWrapper,
  PostListWrapper,
  TOC,
  TableBody,
  TableRow,
} from "./style";

export const PostDetail = () => {
  const navigate = useNavigate();
  const { id: currentPostId } = useParams();
  // const [selectedCategoryId, setSelectedCategoryId] = useAtom(
  //   selectedCategoryIdAtom
  // );

  const dummyData = [
    { postId: 1, title: "Post Title", createdAt: "2024.02.11." },
    { postId: 2, title: "Post Title", createdAt: "2024.02.11." },
    { postId: 3, title: "Post Title", createdAt: "2024.02.11." },
    { postId: 4, title: "Post Title", createdAt: "2024.02.11." },
    { postId: 5, title: "Post Title", createdAt: "2024.02.11." },
  ];

  // TODO: 해당 포스트의 카테고리로 selectedCategoryId 설정
  // useEffect(() => {
  //   setSelectedCategoryId()
  // }, []);

  return (
    <FlexDiv>
      <PostDetailWrapper>
        <>post</>

        {/* 페이지네이션: 동일한 카테고리에 속한 포스트 목록 */}
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
      </PostDetailWrapper>

      {/* 화면 우측 TOC */}
      <TOC />
    </FlexDiv>
  );
};
