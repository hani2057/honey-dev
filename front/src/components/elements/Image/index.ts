import { css, styled } from "styled-components";

const Image = styled.img<{
  width?: number;
  pWidth?: number;
  height?: number;
  pHeight?: number;
  pointer?: boolean;
}>`
  ${({ width, pWidth, height, pHeight, pointer }) => css`
    width: ${pWidth ? pWidth + "%" : width ? width + "rem" : "auto"};
    height: ${pHeight ? pHeight + "%" : height ? height + "rem" : "auto"};
    cursor: ${pointer ? "pointer" : "auto"};
  `}
`;

export { Image };
