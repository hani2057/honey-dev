import { axios } from "@lib/axios";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@apis/queryKeys";

export type GetPostRes = {
  postId: number;
  title: string;
  subtitle: string;
  description: string;
  createdAt: Date;
  viewCnt: number;
  content: string;
  category: string;
  categoryId: number;
  posts: {
    postId: number;
    title: string;
    createdAt: Date;
  }[];
};

const getPostDetail = async (id: string): Promise<GetPostRes> => {
  // TODO: 불필요한 콘솔 삭제
  console.log(id);
  const dummy = {
    postId: 1,
    title: "Post 1 Title",
    subtitle: "Post 1 subtitle",
    description: "Post 1 description",
    createdAt: new Date(),
    viewCnt: 0,
    content:
      "<h1>테스트용 제목</h1><p>이것저것 써 보자</p><p>테스트 테스트</p><p><br></p><p>이미지도 넣어 봐야 하는데</p><p><br></p><p>이렇게 쓰면 계속 추가되나?</p><p><br></p><h1>제목2</h1><p>이미지는 뺄까 봐... 아니면 에디터를 아예 위지윅이 아니라 마크다운으로 넣거나... 그게 낫지 않나? 어차피 내가 쓸 건데 예쁜 거 위지윅 필요 없고 그냥 편하게 쓰기 좋은 게 필요한 거니까.. 하지만 일 벌리지 말고 일단은 기본적인 거 먼저 해 두고 나중에 바꾸자 지금 중요한 건 일단 하는 거니까...</p><p><br></p><p>근데 여기에 내용 타이핑하는데 카테고리쪽까지 계속 페이지 전체가 리렌더링되네 왜 그러지 </p>",
    category: "TypeScript",
    categoryId: 4,
    posts: [
      { postId: 1, title: "Post 1 Title", createdAt: new Date() },
      { postId: 2, title: "Post 2 Title", createdAt: new Date() },
      { postId: 3, title: "Post 3 Title", createdAt: new Date() },
      { postId: 4, title: "Post 4 Title", createdAt: new Date() },
      { postId: 5, title: "Post 5 Title", createdAt: new Date() },
    ],
  };
  return dummy;
  return await axios.get(`/blog/${id}`);
};

export const useGetPostDetail = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEY.blog.detail(id),
    queryFn: () => getPostDetail(id),
  });
};
