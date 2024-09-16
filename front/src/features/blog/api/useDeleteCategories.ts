import { axios } from "@lib/axios";
import { useMutation } from "@tanstack/react-query";

import { QUERY_KEY } from "@apis/queryKeys";

const deleteCategories = async (data: number[]) => {
  console.log("deleted categoryIds", data);
  return;
  return await axios.delete("/blog/category", { data });
};

export const useDeleteCategories = () => {
  return useMutation({
    mutationKey: QUERY_KEY.blog.category.delete(),
    mutationFn: deleteCategories,
  });
};
