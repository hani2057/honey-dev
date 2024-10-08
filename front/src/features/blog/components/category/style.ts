import { TCategory } from "@features/blog/types";
import { COLORS } from "@styles/colors";
import { css, styled } from "styled-components";

export const CategoryWrapperInquire = styled.nav`
  width: 17vw;
  height: calc(100vh - var(--nav-height));
  position: fixed;
  padding: 2rem 0 0 0.5rem;
`;

export const CategoryWrapperRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding-right: 1rem;
`;

export const CategoryWrapperEditForm = styled.form`
  width: 25rem;
  height: calc(100vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  background-color: ${COLORS.grey[100]};
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 3rem;
  border-left: 1px solid ${COLORS.grey[300]};
`;

export const CategoryDiv = styled.div<{
  $isSelected: boolean;
  type: TCategory;
}>`
  width: ${({ type }) => (type === "list" ? "100%" : "fit-content")};
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 3rem 0 0 3rem;
  position: relative;
  ${({ $isSelected, type }) =>
    $isSelected && type === "list"
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
      : $isSelected
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

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  left: calc(100% + 1.5rem);
`;
