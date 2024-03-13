import { css, styled } from "styled-components";

const FlexDiv = styled.div<{
  direction?: "column";
  justify?: "start" | "end" | "space-between" | "space-evenly"; // justify-content
  align?: "start" | "end"; // align-items
  gap?: number;
  px?: number; // padding-left && padding-right
  py?: number; // padding-top && padding-bottom
  p?: string; // padding
  width?: number;
  pWidth?: number; // width using percent unit
  height?: number;
  pHeight?: number; // height using percent unit
}>`
  ${({
    direction = "row",
    justify = "center",
    align = "center",
    gap = 0,
    px = 0,
    py = 0,
    p,
    width,
    pWidth,
    height,
    pHeight,
  }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap}rem;
    padding: ${p || `${py}rem ${px}rem`};
    width: ${pWidth ? pWidth + "%" : width ? width + "rem" : "auto"};
    height: ${pHeight ? pHeight + "%" : height ? height + "rem" : "auto"};
  `}
`;

export { FlexDiv };
