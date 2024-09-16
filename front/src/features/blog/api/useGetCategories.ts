import { axios } from "@lib/axios";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@apis/queryKeys";

import { ICategory } from "../types";

const getCategories = async (): Promise<ICategory[]> => {
  // 더미데이터
  // TODO: API 연동 후 데이터 교체
  const res = {
    data: [
      {
        categoryId: 0,
        name: "All", // 카테고리명
        cnt: 40, // 카테고리에 포함된 포스트 수
        children: null,
      },
      {
        categoryId: 2,
        name: "Front-end",
        cnt: 20,
        children: [
          {
            categoryId: 3,
            name: "JavaScript",
            cnt: 10,
            children: null,
          },
          {
            categoryId: 4,
            name: "TypeScript",
            cnt: 5,
            children: null,
          },
          {
            categoryId: 5,
            name: "React",
            cnt: 5,
            children: null,
          },
        ],
      },
      {
        categoryId: 6,
        name: "Back-end",
        cnt: 20,
        children: [
          {
            categoryId: 7,
            name: "Node.js",
            cnt: 10,
            children: null,
          },
          {
            categoryId: 8,
            name: "express",
            cnt: 5,
            children: null,
          },
          {
            categoryId: 9,
            name: "NestJS",
            cnt: 5,
            children: null,
          },
        ],
      },
      {
        categoryId: 10,
        name: "Infra",
        cnt: 0,
        children: null,
      },
    ],
  };

  return res.data;
  return (await axios.get("/blog/category")).data;
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: QUERY_KEY.blog.category.list(),
    queryFn: getCategories,
  });
};
