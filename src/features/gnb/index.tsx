import { useNavigate } from "react-router-dom";

import DogPawImage from "@assets/dog-paw.png";

import { FlexDiv, Image } from "@components/elements";

import { GNBMenuText } from "./components";

export const GNB = () => {
  const navigate = useNavigate();

  return (
    <>
      <FlexDiv
        justify="space-between"
        px={2}
        pWidth={100}
        height={5}
        style={{ position: "fixed" }}
      >
        <Image
          src={DogPawImage}
          alt="home"
          width={1.5}
          height={1.5}
          pointer={true}
          onClick={() => navigate("/")}
        />
        <FlexDiv gap={1}>
          <GNBMenuText menu="blog" path="blog" />
          <GNBMenuText menu="resume" path="resume" />
          <GNBMenuText menu="portfolio" path="portfolio" />
        </FlexDiv>
      </FlexDiv>
      <div style={{ height: "5rem" }}></div>
    </>
  );
};
