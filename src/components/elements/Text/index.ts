import { css, styled } from "styled-components";

const Text = styled.p<{
  bold?: boolean;
  size?: number;
  color?: string;
  hColor?: string; // color when hovered
  pointer?: boolean;
}>`
  ${({ bold, size = 1, color, hColor, pointer }) => css`
    font-size: ${size}rem;
    font-weight: ${bold ? "700" : "400"};
    color: ${color || "#000000"};
    cursor: ${pointer ? "pointer" : "auto"};

    &:hover {
      color: ${hColor || "#000000"};
    }
  `}
`;

export { Text };
