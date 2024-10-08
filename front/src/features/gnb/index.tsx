import { useLocation, useNavigate } from "react-router-dom";

import DogPawImage from "@assets/images/dogPaw.png";
import { PATH } from "@router/path";

import { FlexDiv, Image } from "@components/elements";

import { GNBHomeText, GNBMenuText } from "./components";

export const GNB = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <FlexDiv
        as={"nav"}
        $justify="space-between"
        $px={1}
        $pWidth={100}
        style={{
          height: "var(--nav-height)",
          position: "fixed",
          backgroundColor: "#ffffff",
          zIndex: 100,
        }}
      >
        <FlexDiv $gap={0.3} onClick={() => navigate(PATH.HOME.INDEX)}>
          <Image
            src={DogPawImage}
            alt="home"
            width={1.4}
            height={1.4}
            $pointer={true}
            style={{ transform: "rotate(-20deg)" }}
          />
          {/* <GNBHomeText>Honey Sweet Dev</GNBHomeText> */}
          <GNBHomeText>개발...의 두번째 발가락쯤</GNBHomeText>
        </FlexDiv>
        <FlexDiv>
          <GNBMenuText menu="Blog" path={PATH.BLOG.INDEX} location={pathname} />
          <GNBMenuText
            menu="Resume"
            path={PATH.RESUME.INDEX}
            location={pathname}
          />
          <GNBMenuText
            menu="Portfolio"
            path={PATH.PORTFOLIO.INDEX}
            location={pathname}
          />
        </FlexDiv>
      </FlexDiv>
      <div style={{ height: "var(--nav-height)" }}></div>
    </>
  );
};
