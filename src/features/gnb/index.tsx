import DogPawImage from "@assets/dog-paw.png";

import { FlexDiv, Image } from "@components/elements";

import { GNBMenuText } from "./components";

export const GNB = () => {
  return (
    <>
      <FlexDiv
        justify="space-between"
        px={2}
        style={{ height: "var(--nav-height)" }}
      >
        <Image src={DogPawImage} alt="home" width={1.5} height={1.5} />
        <FlexDiv gap={1}>
          <GNBMenuText menu="blog" />
          <GNBMenuText menu="resume" />
          <GNBMenuText menu="portfolio" />
        </FlexDiv>
      </FlexDiv>
      <div style={{ height: "var(--nav-height)" }}></div>
    </>
  );
};
