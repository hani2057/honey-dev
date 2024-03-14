import { COLORS } from "@styles/colors";
import { css, styled } from "styled-components";

// 포스트 목록 페이지 wrapper
const CategoryWrapper = styled.div`
  width: 17vw;
  height: calc(100vh - var(--nav-height));
  position: fixed;
  padding: 2rem 0 0 0.5rem;
`;

// 포스트 등록 페이지 wrapper
const CategoryEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding-right: 1rem;
`;

const CategoryDiv = styled.div<{
  isSelected: boolean;
  type: "list" | "register";
}>`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 3rem 0 0 3rem;
  position: relative;
  ${({ isSelected, type }) =>
    isSelected && type === "list"
      ? css`
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
        `
      : isSelected && type === "register"
      ? css`
          & > p {
            font-weight: 700;
            color: ${COLORS.main[500]};
          }

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2.5rem;
            background-color: ${COLORS.grey[100]};
            border-radius: 3rem;
            left: 0;
            z-index: -1;
          }
        `
      : ""}
`;

export { CategoryWrapper, CategoryEditWrapper, CategoryDiv };
