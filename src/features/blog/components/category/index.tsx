import { useNavigate } from "react-router-dom";

import { selectedCategoryIdAtom } from "@features/blog/store";
import { PATH } from "@router/path";
import { useAtom } from "jotai";

import { FlexDiv, Text } from "@components/elements";

import { CategoryDiv, CategoryWrapper } from "./style";

interface Category {
  categoryId: number;
  name: string;
  cnt: number;
  children: Category[] | null;
}

export const Category = () => {
  const navigate = useNavigate();
  const [selectedCategoryId, setSelectedCategoryId] = useAtom(
    selectedCategoryIdAtom
  );

  // TODO: API 연동 후 데이터 교체
  const dummyData = [
    {
      categoryId: 0,
      name: "All", // 카테고리명
      cnt: 40, // 카테고리에 포함된 포스트 수
      children: null,
    },
    {
      categoryId: 2,
      name: "Front-end",
      cnt: 20,
      children: [
        {
          categoryId: 3,
          name: "JavaScript",
          cnt: 10,
          children: null,
        },
        {
          categoryId: 4,
          name: "TypeScript",
          cnt: 5,
          children: null,
        },
        {
          categoryId: 5,
          name: "React",
          cnt: 5,
          children: null,
        },
      ],
    },
    {
      categoryId: 6,
      name: "Back-end",
      cnt: 20,
      children: [
        {
          categoryId: 7,
          name: "Node.js",
          cnt: 10,
          children: null,
        },
        {
          categoryId: 8,
          name: "express",
          cnt: 5,
          children: null,
        },
        {
          categoryId: 9,
          name: "NestJS",
          cnt: 5,
          children: null,
        },
      ],
    },
    {
      categoryId: 10,
      name: "Infra",
      cnt: 0,
      children: null,
    },
  ];

  /**
   * 카테고리 목록을 받아 JSX를 반환
   *
   * @param {Category[]} categoryList 카테고리 목록
   * @returns children(하위 카테고리)이 있는 경우 하위 카테고리를 포함하여 JSX elements를 반환
   */
  const renderCategory = (categoryList: Category[]) =>
    categoryList.map(({ categoryId, name, cnt, children }) => {
      if (children)
        return (
          <div key={categoryId}>
            <CategoryDiv isSelected={categoryId === selectedCategoryId}>
              <Text
                pointer={true}
                onClick={() => {
                  setSelectedCategoryId(categoryId);
                  navigate(PATH.BLOG.INDEX);
                }}
              >{`${name} (${cnt})`}</Text>
            </CategoryDiv>
            <FlexDiv
              direction="column"
              align="start"
              style={{ paddingLeft: "1rem" }}
            >
              {renderCategory(children)}
            </FlexDiv>
          </div>
        );
      else
        return (
          <CategoryDiv
            isSelected={categoryId === selectedCategoryId}
            key={categoryId}
          >
            <Text
              pointer={true}
              onClick={() => {
                setSelectedCategoryId(categoryId);
                navigate(PATH.BLOG.INDEX);
              }}
            >{`${name} (${cnt})`}</Text>
          </CategoryDiv>
        );
    });

  return <CategoryWrapper>{renderCategory(dummyData)}</CategoryWrapper>;
};
