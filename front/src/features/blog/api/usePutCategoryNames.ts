// import { QUERY_KEY } from "@apis/queryKeys";
import { axios } from "@lib/axios";
import { useMutation } from "@tanstack/react-query";

import { IPutCategoryName } from "../types";

const putCategoryNames = async (data: IPutCategoryName[]) => {
  console.log("category name changes", data);
  await axios.put("/blog/category", { data });
};

export const usePutCategoryNames = () => {
  return useMutation({
    mutationFn: putCategoryNames,
  });
};
