import { css, styled } from "styled-components";

const Text = styled.p<{
  bold?: boolean;
  size?: number;
  color?: string | null;
  pointer?: boolean;
}>`
  ${({ bold, size = 1, color, pointer }) => css`
    font-size: ${size}rem;
    font-weight: ${bold ? "700" : "400"};
    color: ${color || "#000000"};
    cursor: ${pointer ? "pointer" : "auto"};
  `}
`;

export { Text };
