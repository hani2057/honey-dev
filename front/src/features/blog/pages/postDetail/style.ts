import { COLORS } from "@styles/colors";
import { styled } from "styled-components";

import { FlexDiv } from "@components/elements";

const Wrapper = styled(FlexDiv)`
  width: 66vw;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  min-height: calc(100vh - var(--nav-height));
  gap: 3rem;
`;

const ProgressBar = styled.div<{ width: number }>`
  position: fixed;
  top: var(--nav-height);
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    to right,
    ${COLORS.main[800]} ${({ width }) => width + "%"},
    transparent 0
  );
  z-index: 3;
`;

const PostDetailWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
`;

const Description = styled.div`
  width: 100%;
  padding: 0.6rem 1rem;
  border-left: 3px solid ${COLORS.main[500]};
  color: ${COLORS.main[500]};
  font-size: 0.9rem;
`;

const Content = styled.div`
  & p,
  & h1,
  & h2,
  & h3 {
    line-height: 160%;
  }
`;

const PostListWrapper = styled(FlexDiv)`
  border-top: 1px solid ${COLORS.grey[400]};
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px;

  & p {
    color: ${COLORS.grey[400]};
  }
`;

const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

const TableRow = styled.tr<{ isCurrent: boolean }>`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLORS.grey[300]};

  & p {
    color: ${COLORS.grey[600]};
    font-weight: ${({ isCurrent }) => (isCurrent ? 700 : 400)};
  }
`;

const TOCWrapper = styled.aside`
  width: 14vw;
  position: fixed;
  top: calc(var(--nav-height) + 2rem);
  height: 20rem;
  background-color: pink;
`;

export {
  Wrapper,
  ProgressBar,
  PostDetailWrapper,
  Description,
  Content,
  PostListWrapper,
  TableBody,
  TableRow,
  TOCWrapper,
};
