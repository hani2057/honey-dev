export const PATH = {
  HOME: { INDEX: "/" },
  BLOG: { INDEX: "/blog", POST: { INDEX: (id = ":id") => `/blog/post/${id}` } },
  RESUME: { INDEX: "/resume" },
  PORTFOLIO: { INDEX: "/portfolio" },
};
