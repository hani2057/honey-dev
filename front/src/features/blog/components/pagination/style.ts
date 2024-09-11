import { COLORS } from "@styles/colors";
import { css, keyframes, styled } from "styled-components";

const PaginationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

const PageElement = styled.li<{ $isSelected?: boolean }>`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${COLORS.grey[700]};

  ${({ $isSelected = false }) =>
    $isSelected &&
    css`
      border-radius: 5px;
      background-color: ${COLORS.main["050"]};
      color: ${COLORS.main[500]};
      font-weight: 700;
    `};
`;

const tooltipKeyframe = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PrevNextElement = styled(PageElement)<{ tooltip: string }>`
  font-size: 0.9rem;
  color: ${COLORS.grey[400]};
  position: relative;

  &:hover {
    color: ${COLORS.grey[900]};
  }

  &:hover::after {
    content: attr(tooltip);
    white-space: nowrap;
    position: absolute;
    top: 2.5rem;
    /* left: 0.5rem; */
    font-size: 0.7rem;
    padding: 0.5rem;
    color: ${COLORS.grey[700]};
    background-color: ${COLORS.grey[200]};
    border-radius: 0.3rem;
    animation: ${tooltipKeyframe} 350ms ease-in-out forwards;
  }
`;

export { PaginationWrapper, PageElement, PrevNextElement };
