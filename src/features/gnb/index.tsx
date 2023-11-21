import { useLocation, useNavigate } from "react-router-dom";

import DogPawImage from "@assets/images/dog-paw.png";
import { PATH } from "@router/path";

import { FlexDiv, Image } from "@components/elements";

import { GNBHomeText, GNBMenuText } from "./components";

export const GNB = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <FlexDiv
        justify="space-between"
        px={2}
        pWidth={100}
        style={{ height: "var(--nav-height)", position: "fixed" }}
      >
        <FlexDiv gap={0.3} onClick={() => navigate(PATH.HOME.INDEX)}>
          <Image
            src={DogPawImage}
            alt="home"
            width={1.5}
            height={1.5}
            pointer={true}
          />
          <GNBHomeText>Honey Sweet Dev</GNBHomeText>
        </FlexDiv>
        <FlexDiv gap={1}>
          <GNBMenuText menu="blog" path={PATH.BLOG.INDEX} location={pathname} />
          <GNBMenuText
            menu="resume"
            path={PATH.RESUME.INDEX}
            location={pathname}
          />
          <GNBMenuText
            menu="portfolio"
            path={PATH.PORTFOLIO.INDEX}
            location={pathname}
          />
        </FlexDiv>
      </FlexDiv>
      <div style={{ height: "var(--nav-height)" }}></div>
    </>
  );
};
