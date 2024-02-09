import { COLORS } from "@styles/colors";
import { styled } from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  overflow-x: scroll;

  -ms-overflow-style: none; // 인터넷 익스플로러
  scrollbar-width: none; // 파이어폭스
  &::-webkit-scrollbar {
    display: none; // 크롬, 사파리, 오페라, 엣지
  }
`;

const PortfolioSummary = styled.div`
  width: 28vh;
  max-height: 35vh;
  border: 1px solid ${COLORS.main[300]};
  border-radius: 12px;
  padding: 0.5rem;
  margin-right: 0.5rem;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const PersonnelToken = styled.div`
  position: absolute;
  top: calc(50% - 1.8rem);
  right: 1rem;
  font-size: 0.8rem;
  padding: 0.3rem;
  border: 1px solid ${COLORS.main[200]};
  border-radius: 0.3rem;
  background-color: ${COLORS.main["050"]};
`;

const SkillToken = styled.div`
  padding: 0.4rem;
  border: 1px solid #000000;
  border-radius: 1rem;
  margin-right: 0.3rem;
  font-size: 0.7rem;
`;

export { CardWrapper, PortfolioSummary, PersonnelToken, SkillToken };
