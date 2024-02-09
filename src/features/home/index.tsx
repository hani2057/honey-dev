import { BlogCard, ResumeCard } from "./components";
import {
  BlogArrow,
  CardWhite,
  PortfolioArrowBody,
  PortfolioArrowHead,
  ResumeArrowBody,
  ResumeArrowHead,
} from "./style";

export const HomePage = () => {
  return (
    <div
      style={{
        height: "calc(100vh - var(--nav-height))",
        position: "relative",
      }}
    >
      {/* blog posts */}
      <BlogCard />
      {/* self introduction */}
      <ResumeCard />
      {/* portfolios */}
      <CardWhite type="portfolio">portfolios</CardWhite>

      {/* 배경 화살표들 */}
      <BlogArrow />
      <ResumeArrowHead />
      <ResumeArrowBody />
      <PortfolioArrowHead />
      <PortfolioArrowBody />
    </div>
  );
};
