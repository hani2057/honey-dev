import { axios } from "@lib/axios";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@apis/queryKeys";

export type GetPostsReq = {
  categoryId: number;
  page: number;
};

export type GetPostsRes = {
  totalPages: number;
  posts: {
    id: number;
    title: string;
    category: string;
    createdAt: Date;
    content: string;
  }[];
};

const getPostList = async (request: GetPostsReq): Promise<GetPostsRes> => {
  const dummy = {
    totalPages: 15,
    posts: [
      {
        id: 1,
        title: "Post 1 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
      {
        id: 2,
        title: "Post 2 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
      {
        id: 3,
        title: "Post 3 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
      {
        id: 4,
        title: "Post 4 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
      {
        id: 5,
        title: "Post 5 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
      {
        id: 6,
        title: "Post 6 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
      {
        id: 7,
        title: "Post 7 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
      {
        id: 8,
        title: "Post 8 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
      {
        id: 9,
        title: "Post 9 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
      {
        id: 10,
        title: "Post 10 Title",
        category: "TypeScript",
        createdAt: new Date(),
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae reiciendis laborum dolor eveniet voluptates at sequi tempore dolorum. Deleniti nostrum suscipit iusto deserunt, delectus doloribus sit. Id, numquam dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aperiam iure rerum obcaecati officiis eligendi magni placeat iusto perferendis inventore at quos amet in unde omnis voluptate eveniet saepe nam.",
      },
    ],
  };
  return dummy;
  return await axios.get("/blog", { params: request });
};

export const useGetPostList = (request: GetPostsReq) => {
  return useQuery({
    queryKey: QUERY_KEY.blog.list(request),
    queryFn: () => getPostList(request),
  });
};
