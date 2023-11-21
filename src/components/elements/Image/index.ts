import { css, styled } from "styled-components";

const Image = styled.img<{
  width?: number;
  height?: number;
  pointer?: boolean;
}>`
  ${({ width, height, pointer }) => css`
    width: ${width ? width + "rem" : "auto"};
    height: ${height ? height + "rem" : "auto"};
    cursor: ${pointer ? "pointer" : "auto"};
  `}
`;

export { Image };
