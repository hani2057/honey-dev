import { useNavigate } from "react-router-dom";

import GitHubLogoImg from "@assets/images/githubLogo.png";
import { CardWhite } from "@features/home/style";
import { PATH } from "@router/path";

import { FlexDiv, Image, Spacing, Text } from "@components/elements";

export const ResumeCard = () => {
  const navigate = useNavigate();

  return (
    <CardWhite type="resume">
      <FlexDiv
        direction="column"
        $pWidth={100}
        $pHeight={100}
        $justify="space-between"
      >
        <FlexDiv direction="column" $gap={1}>
          <Text size={1.6} $bold={true}>
            Kim Hani
          </Text>
          <Text size={1.2} $bold={true}>
            Front-end Web Developer
          </Text>
        </FlexDiv>
        <FlexDiv direction="column" $gap={0.5}>
          <Text $line={1.5} $center={true}>
            Prefer to understand properly before using
          </Text>
          <Text $line={1.5} $center={true}>
            Try to make clean design <br />
            and do reasonable modularization
          </Text>
        </FlexDiv>
        <Image
          src={GitHubLogoImg}
          alt="GitHub Logo"
          width={3.5}
          height={3.5}
          $pointer={true}
          onClick={() => window.open("https://github.com/hani2057")}
        />
      </FlexDiv>

      <Spacing $space={1.5} />
      <Text
        size={1.25}
        $bold={true}
        $pointer={true}
        onClick={() => navigate(PATH.RESUME.INDEX, {})} // 디폴트는 '한국어', '이력서'로 이동
      >
        See More!
      </Text>
    </CardWhite>
  );
};
