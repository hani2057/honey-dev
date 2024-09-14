import { axios } from "@lib/axios";
import { useMutation } from "@tanstack/react-query";

import { QUERY_KEY } from "@apis/queryKeys";

type PostPostReq = {
  title: string; // 제목 (null, 빈 문자열 불가능)
  subtitle: string; // 부제 (null 가능)
  description: string; // 한줄요약 (null 가능)
  content: string; // 코드 상세 설명 (null, 빈 문자열 불가능)
  categoryId: number; // (null 불가능)
};

type PostPostRes = {
  postId: number;
};

const postPost = async (data: PostPostReq): Promise<PostPostRes> => {
  console.log("post params", data);
  return { postId: 1 };
  return await axios.post("blog", data);
};

export const usePostPost = () => {
  return useMutation({
    mutationKey: QUERY_KEY.blog.post(),
    mutationFn: (data: PostPostReq) => postPost(data),
  });
};
