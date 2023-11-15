import { css, styled } from "styled-components";

const FlexDiv = styled.div<{
  direction?: "column";
  justify?: "start" | "end" | "space-between";
  align?: "start" | "end";
  gap?: number;
}>`
  ${({
    direction = "row",
    justify = "center",
    align = "center",
    gap = 0,
  }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap}rem;
  `}
`;

export { FlexDiv };
