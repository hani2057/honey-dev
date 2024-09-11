// 참고한 블로그 글:
// https://velog.io/@ssoon-m/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%AA%A9%EC%B0%A8TOC-%EB%A7%8C%EB%93%A4%EA%B8%B0-with-contentlayer-rehype#1-%EC%A0%9C%EB%AA%A9-%ED%83%9C%EA%B7%B8%EC%97%90-id%EA%B0%92%EC%9D%84-%EB%8B%AC%EC%95%84%EC%A3%BC%EA%B8%B0
// https://wookshin.github.io/2022/04/19/toc.html
// https://www.heropy.dev/p/ydKoQO
import { useEffect, useState } from "react";

import GithubSlugger from "github-slugger";

import { FlexDiv, Text } from "@components/elements";

import { Description, TOCWrapper } from "../style";

interface TOCProps {
  content: string;
}

export const TOC = ({ content }: TOCProps) => {
  const [activeToc, setActiveToc] = useState(new Set());

  /**
   * 헤더 레벨(h1이면 1)의 배열을 받아 최소 레벨을 1로 조정하여 조정한 배열을 반환
   * @param levels 헤더 레벨을 담은 배열
   * @returns 최소 레벨을 1로 조정한 헤더 레벨을 담은 배열
   */
  const adjustLevels = (levels: Array<number>) => {
    const min = Math.min(...levels);
    const adjustedLevels = levels.map((level) => level - min + 1);
    return adjustedLevels;
  };

  // 정규식 설명
  // <(?<flag>h1|h2)>: <h1> 또는 <h2> 태그를 매칭하며, flag라는 이름의 그룹에 h1 또는 h2를 캡처합니다.
  // [^>]*: 태그 내의 속성(예: id)을 허용합니다.
  // (?<title>.*?): title이라는 이름의 그룹에 <h1> 또는 <h2> 태그와 </h1> 또는 </h2> 태그 사이의 내용을 비탐욕적으로 캡처합니다.
  // <\/\k<flag>>: flag 그룹에서 캡처한 값(h1 또는 h2)에 해당하는 종료 태그를 매칭합니다. 이 구문은 flag 그룹의 값을 참조하여 동적으로 종료 태그를 매칭합니다.
  // g: 전역 플래그를 사용하여 모든 매칭 항목을 찾습니다.
  const regex = /<(?<flag>h1|h2|h3)[^>]*>(?<title>.*?)<\/\k<flag>>/g;
  const matches = [...content.matchAll(regex)];
  const levels = adjustLevels(
    matches.map((match) => Number(match.groups?.flag.split("h")[1]))
  ) as Array<number>;

  const slugger = new GithubSlugger();

  const tableOfContents = matches.map((match, idx) => {
    const title = match.groups?.title ?? "";
    const slug = slugger.slug(title);
    return {
      level: levels[idx],
      title,
      slug,
    };
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // FIXME: setActiveToc 함수로 state 업데이트 필요(Set.prototype.delete() 메서드가 boolean을 반환해서 타입에러 발생)
            activeToc.delete(entry.target.id);
          } else {
            setActiveToc((TOCSet) => TOCSet.add(entry.target.id));
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
        threshold: 1,
      }
    );

    const elements = document.querySelectorAll("h1,h2,h3");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TOCWrapper>
      <FlexDiv>
        <Text bold={true}>Table Of Contents</Text>
      </FlexDiv>
      {tableOfContents.map((toc) => (
        <Description
          as="li"
          key={toc.slug}
          style={{ paddingLeft: toc.level * 1 + "rem" }}
          highlited={activeToc.has(toc.slug)}
        >
          <a href={`#${toc.slug}`}>{toc.title}</a>
        </Description>
      ))}
    </TOCWrapper>
  );
};
