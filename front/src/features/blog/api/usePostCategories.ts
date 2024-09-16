import { axios } from "@lib/axios";
import { useMutation } from "@tanstack/react-query";

import { QUERY_KEY } from "@apis/queryKeys";

import { IPostCategory } from "../types";

type PostCategoryListRes = {
  prevId: number;
  createdId: number;
}[];

const postCategories = async (
  data: IPostCategory[]
): Promise<PostCategoryListRes> => {
  console.log("post category data", data);
  return data.map((category) => ({
    prevId: category.newCategory.categoryId,
    createdId: 100,
  }));
  return await axios.post("blog/category", data);
};

export const usePostCategories = () => {
  return useMutation({
    mutationKey: QUERY_KEY.blog.category.post(),
    mutationFn: postCategories,
  });
};
