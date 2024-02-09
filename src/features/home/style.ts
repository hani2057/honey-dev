import { css, styled } from "styled-components";

const position = {
  blog: {
    top: "3rem",
    left: "3rem",
  },
  resume: {
    top: "calc(25vh - 0.5 * var(--nav-height))",
    left: "calc(50% - 20vh)",
  },
  portfolio: {
    top: "calc(50vh - var(--nav-height) - 3rem)",
    left: "calc(100vw - 40vh - 3rem)",
  },
};

const CardWhite = styled.div<{ type: "blog" | "resume" | "portfolio" }>`
  ${({ type }) => css`
    height: 50vh;
    aspect-ratio: 4 / 5;
    background-color: #ffffff;
    box-shadow: 0 0 25px #ffffff;
    border-radius: 20px;
    position: absolute;
    top: ${position[type].top};
    left: ${position[type].left};
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 1.5rem 3rem 1.5rem;
  `}
`;

const BlogArrow = styled.div`
  display: block;
  margin: 30px auto;
  width: 35px;
  height: 35px;
  border-top: 6px solid #ffffff;
  border-left: 6px solid #ffffff;
  transform: rotate(45deg);
  position: absolute;
  top: -1.5rem;
  right: 13rem;

  &::before {
    content: "";
    display: block;
    width: 6px;
    height: 5rem;
    background-color: #ffffff;
    transform: rotate(-45deg) translate(-3px, -3px);
    transform-origin: top;
    left: 0;
    top: 0;
  }
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: calc(100vw - 20vh - 13rem);
    background-color: #ffffff;
    transform: rotate(45deg) translate(1.2rem, -3.5rem);
    transform-origin: top;
    left: 0;
    top: 0;
  }
`;

const ResumeArrowHead = styled.div`
  display: block;
  margin: 30px auto;
  width: 35px;
  height: 35px;
  border-top: 6px solid #ffffff;
  border-left: 6px solid #ffffff;
  transform: rotate(45deg);
  position: absolute;
  top: -1.5rem;
  right: 8.5rem;
`;

const ResumeArrowBody = styled.div`
  display: block;
  margin: 30px auto;
  width: 6px;
  height: calc(32vh - var(--nav-height));
  background-color: #ffffff;
  position: absolute;
  top: -1.5rem;
  right: 9.45rem;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: calc(50vw - 8.5rem);
    background-color: #ffffff;
    transform: rotate(90deg) translate(calc(32vh - var(--nav-height) - 3px));
    transform-origin: top;
    left: 0;
    top: 0;
  }
`;

const PortfolioArrowHead = styled.div`
  display: block;
  margin: 30px auto;
  width: 35px;
  height: 35px;
  border-top: 6px solid #ffffff;
  border-left: 6px solid #ffffff;
  transform: rotate(45deg);
  position: absolute;
  top: -1.5rem;
  right: 3.7rem;
`;

const PortfolioArrowBody = styled.div`
  display: block;
  margin: 30px auto;
  width: 6px;
  height: 50vh;
  background-color: #ffffff;
  position: absolute;
  top: -1.5rem;
  right: 4.55rem;
`;

export {
  CardWhite,
  BlogArrow,
  ResumeArrowHead,
  ResumeArrowBody,
  PortfolioArrowHead,
  PortfolioArrowBody,
};
