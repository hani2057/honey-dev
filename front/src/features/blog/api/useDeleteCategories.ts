import { axios } from "@lib/axios";
import { useMutation } from "@tanstack/react-query";

const deleteCategories = async (data: number[]) => {
  console.log("deleted categoryIds", data);
  return;
  return await axios.delete("/blog/category", { data });
};

export const useDeleteCategories = () => {
  return useMutation({
    mutationFn: deleteCategories,
  });
};
