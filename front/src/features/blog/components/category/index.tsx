import { useEffect } from "react";

import { GoPlus } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import { selectedCategoryIdAtom } from "@features/blog/store";
import { TCategory, categoryType } from "@features/blog/types";
import { PATH } from "@router/path";
import { useAtom } from "jotai";

import { FlexDiv, Text } from "@components/elements";

import {
  CategoryDiv,
  CategoryEditWrapper,
  CategoryWrapper,
  IconsWrapper,
} from "./style";

interface CategoryProps {
  type: categoryType;
}

export const Category = ({ type }: CategoryProps) => {
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

  useEffect(() => setSelectedCategoryId(0), []);

  /**
   * 카테고리 id를 받아 selectedCategoryId 상태를 업데이트.
   * 포스트 목록 또는 상세 페이지일 경우 카테고리 id에 해당하는 포스트 목록으로 이동.
   *
   * @param {number} categoryId 카테고리 id
   */
  const handleClickCategory = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    if (type === "list") {
      navigate(PATH.BLOG.INDEX);
    }
  };

  /**
   * 카테고리 목록을 받아 JSX를 반환
   *
   * @param {TCategory[]} categoryList 카테고리 목록
   * @param {categoryType} type 포스트 목록 페이지일 경우 'list' 포스트 등록 페이지일 경우 'register'
   * @returns children(하위 카테고리)이 있는 경우 하위 카테고리를 포함하여 JSX elements를 반환
   */
  const renderCategory = (categoryList: TCategory[], type: categoryType) =>
    categoryList.map(({ categoryId, name, cnt, children }) => {
      const isSelected = categoryId === selectedCategoryId;

      if (children)
        return (
          <div key={categoryId}>
            <CategoryDiv isSelected={isSelected} type={type}>
              <Text
                pointer={true}
                onClick={() => handleClickCategory(categoryId)}
              >{`${name} (${cnt})`}</Text>
              {isSelected && type === "edit" && (
                <IconsWrapper>
                  <Text pointer={true}>
                    <GoPlus />
                  </Text>
                  <Text pointer={true}>
                    <HiMinusSmall />
                  </Text>
                  <Text pointer={true}>
                    <GoChevronUp />
                  </Text>
                  <Text pointer={true}>
                    <GoChevronDown />
                  </Text>
                </IconsWrapper>
              )}
            </CategoryDiv>
            <FlexDiv
              direction="column"
              align="start"
              style={{ paddingLeft: "1rem" }}
            >
              {renderCategory(children, type)}
            </FlexDiv>
          </div>
        );
      else
        return (
          <CategoryDiv isSelected={isSelected} type={type} key={categoryId}>
            <Text
              pointer={true}
              onClick={() => handleClickCategory(categoryId)}
            >{`${name} (${cnt})`}</Text>
            {isSelected && type === "edit" && (
              <IconsWrapper>
                <Text>
                  <GoPlus />
                </Text>
                <Text>
                  <HiMinusSmall />
                </Text>
                <Text>
                  <GoChevronUp />
                </Text>
                <Text>
                  <GoChevronDown />
                </Text>
              </IconsWrapper>
            )}
          </CategoryDiv>
        );
    });

  return type === "list" ? (
    <CategoryWrapper>{renderCategory(dummyData, type)}</CategoryWrapper>
  ) : (
    <CategoryEditWrapper>{renderCategory(dummyData, type)}</CategoryEditWrapper>
  );
};
