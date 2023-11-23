import { css, styled } from "styled-components";

const Wrapper = styled.div<{
  px?: number; // padding-left && padding-right
  py?: number; // padding-top && padding-bottom
  p?: string; // padding
}>`
  ${({ px = 0, py = 0, p }) => css`
    width: "100%";
    height: "calc(100vh - var(--nav-height))";
    overflow-y: "scroll";
    padding: ${p || `${py}rem ${px}rem`};
  `}
`;

export { Wrapper };
