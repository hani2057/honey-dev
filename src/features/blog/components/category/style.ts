import { COLORS } from "@styles/colors";
import { css, styled } from "styled-components";

const CategoryWrapper = styled.div`
  width: 17vw;
  height: calc(100vh - var(--nav-height));
  position: fixed;
  padding: 2rem 0 0 0.5rem;
`;

const CategoryDiv = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-radius: 3rem 0 0 3rem;
  position: relative;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #ffffff;
      & > p {
        font-weight: 700;
      }

      &::before {
        content: "";
        position: absolute;
        width: 2rem;
        height: 2rem;
        background-color: #ffffff;
        top: -2rem;
        right: 0;
        z-index: -2;
      }
      &::after {
        content: "";
        position: absolute;
        width: 2rem;
        height: 2rem;
        background-color: #ffffff;
        top: 2.5rem;
        right: 0;
        z-index: -2;
      }
      & > p::before {
        content: "";
        position: absolute;
        width: 2rem;
        height: 2rem;
        background-color: ${COLORS.main[100]};
        border-radius: 0 0 1.8rem 0;
        top: -2rem;
        right: 0;
        z-index: -1;
      }
      & > p::after {
        content: "";
        position: absolute;
        width: 2rem;
        height: 2rem;
        background-color: ${COLORS.main[100]};
        border-radius: 0 1.8rem 0 0;
        top: 2.5rem;
        right: 0;
        z-index: -1;
      }
    `}
`;

export { CategoryWrapper, CategoryDiv };
