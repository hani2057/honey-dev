import { css, styled } from "styled-components";

const Image = styled.img<{ width?: number; height?: number }>`
  ${({ width, height }) => css`
    width: ${width ? width + "rem" : "auto"};
    height: ${height ? height + "rem" : "auto"};
  `}
`;

export { Image };
