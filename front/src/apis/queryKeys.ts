import { GetPostsReq } from "@features/blog/api";

export const QUERY_KEY = {
  all: ["all"],
  blog: {
    all: () => [...QUERY_KEY.all, "posts"],
    list: (request: GetPostsReq) => [...QUERY_KEY.blog.all(), "list", request],
    detail: (id: string) => [...QUERY_KEY.blog.all(), "detail", id],
    category: {
      all: () => [...QUERY_KEY.blog.all(), "category"],
      list: () => [...QUERY_KEY.blog.category.all(), "list"],
    },
  },
};
