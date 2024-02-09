export const PATH = {
  HOME: { INDEX: "/" },
  BLOG: {
    INDEX: "/blog",
    POST: { INDEX: (id: ":id" | number = ":id") => `/blog/post/${id}` },
  },
  RESUME: { INDEX: "/resume" },
  PORTFOLIO: {
    INDEX: "/portfolio",
    PROJECT: {
      INDEX: (id: ":id" | number = ":id") => `/portfolio/project/${id}`,
    },
  },
};
