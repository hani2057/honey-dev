import { useNavigate } from "react-router-dom";

import DogPawImg from "@assets/images/dogPaw.png";
import Flicking from "@egjs/react-flicking";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/react-flicking/dist/flicking.css";
import { CardWhite } from "@features/home/style";
import { PATH } from "@router/path";
import { COLORS } from "@styles/colors";

import { FlexDiv, Image, Spacing, Text } from "@components/elements";

import {
  CardWrapper,
  PersonnelToken,
  PortfolioSummary, // SkillToken,
} from "./style";

export const PortfolioCard = () => {
  const navigate = useNavigate();

  return (
    <CardWhite type="portfolio" style={{ overflow: "hidden" }}>
      <CardWrapper>
        {/* 캐러셀 */}
        <Flicking
          align="center"
          easing={(x) => 1 - Math.pow(1 - x, 2)}
          duration={600}
          inputType={["touch", "mouse"]}
          bounce="20%"
          onSelect={() => navigate(PATH.PORTFOLIO.PROJECT.INDEX(1))}
          // onMoveEnd={(e) => {
          //   console.log(e);
          // }}
          style={{ height: "auto" }}
        >
          {[0, 1, 2, 3, 4].map((v) => (
            <PortfolioSummary key={v}>
              <Image
                src={DogPawImg}
                pWidth={100}
                pHeight={50}
                style={{ backgroundColor: "pink" }}
              />
              <PersonnelToken>팀 | 6인</PersonnelToken>
              <FlexDiv
                direction="column"
                justify="space-evenly"
                align="start"
                pHeight={50}
              >
                <Text size={1.2} bold={true}>
                  title
                </Text>
                <Text size={0.8} line={1.2}>
                  portfolio description 한줄요약 어쩌구저쩌구 이러저러한
                  프로젝트입니다.
                </Text>
                <div style={{ width: "100%", overflow: "hidden" }}>
                  <Text
                    size={0.8}
                    color={COLORS.main[800]}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {[
                      "TypeScript",
                      "React",
                      "react-query",
                      "styled-components",
                    ].join(" | ")}
                  </Text>
                </div>
                {/* <Flicking align="prev" style={{ height: "auto" }}>
                  {["TypeScript", "React", "react-query"].map((v) => (
                    <SkillToken>{v}</SkillToken>
                  ))}
                </Flicking> */}
              </FlexDiv>
            </PortfolioSummary>
          ))}
        </Flicking>
      </CardWrapper>

      <Spacing space={1} />
      <Text
        size={1.25}
        bold={true}
        pointer={true}
        onClick={() => navigate(PATH.PORTFOLIO.INDEX)}
      >
        See More!
      </Text>
    </CardWhite>
  );
};
