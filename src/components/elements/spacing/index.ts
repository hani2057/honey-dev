import { styled } from "styled-components";

const Spacing = styled.div<{ space: number }>`
  height: ${({ space }) => space}rem;
`;

export { Spacing };
