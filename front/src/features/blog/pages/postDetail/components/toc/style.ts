import { COLORS } from "@styles/colors";
import styled from "styled-components";

import { FlexDiv } from "@components/elements";

export const TOCWrapper = styled.ul`
  width: 14vw;
  position: fixed;
  top: calc(var(--nav-height) + 2rem);
`;

export const TOCTitle = styled(FlexDiv)`
  padding-bottom: 1rem;
`;

export const TOCLi = styled.li<{ $highlited: boolean }>`
  width: 100%;
  padding: 0.6rem 1rem;

  & a {
    color: ${({ $highlited }) =>
      $highlited ? COLORS.main[500] : COLORS.grey[400]};
    font-size: 0.9rem;
    font-weight: ${({ $highlited }) => ($highlited ? 600 : 400)};
  }
`;
