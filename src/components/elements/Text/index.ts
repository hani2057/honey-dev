import { COLORS } from "@styles/colors";
import { css, styled } from "styled-components";

const Text = styled.p<{
  bold?: boolean;
  size?: number;
  color?: string | null;
  pointer?: boolean;
  line?: number;
}>`
  ${({ bold, size = 1, color, pointer, line }) => css`
    font-size: ${size}rem;
    font-weight: ${bold ? "700" : "400"};
    color: ${color || COLORS.grey[900]};
    cursor: ${pointer ? "pointer" : "auto"};
    line-height: ${line}rem;
  `}
`;

export { Text };
