import { COLORS } from "@styles/colors";
import { styled } from "styled-components";

import { FlexDiv } from "@components/elements";

const PostDetailWrapper = styled.main`
  width: 66vw;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  min-height: calc(100vh - var(--nav-height));
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

const TOC = styled.aside`
  width: 15vw;
  position: fixed;
  top: calc(var(--nav-height) + 2rem);
  right: 1vw;
  height: 20rem;
  background-color: pink;
`;

export { PostDetailWrapper, PostListWrapper, TableBody, TableRow, TOC };
