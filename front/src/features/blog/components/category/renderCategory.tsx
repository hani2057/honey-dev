import { Fragment } from "react";

import { useGetCategories } from "@features/blog/api";
import { TCategory, categoryType } from "@features/blog/types";

import { FlexDiv, Text } from "@components/elements";

import { CategoryDiv } from "./style";

interface CategoryProps {
  type: Extract<categoryType, "list" | "register">;
  selectedCategoryId: number;
  handleClickCategory: (categoryId: number) => void;
}

export function RenderCategory({
  type,
  selectedCategoryId,
  handleClickCategory,
}: CategoryProps) {
  /**
   * 카테고리 목록을 받아 JSX를 반환
   *
   * @param {TCategory[]} categoryList 카테고리 목록
   * @returns children(하위 카테고리)이 있는 경우 하위 카테고리를 포함하여 JSX elements를 반환
   */
  const renderCategory = (categoryList: TCategory[]) =>
    categoryList.map(({ categoryId, name, cnt, children }) => {
      const isSelected = categoryId === selectedCategoryId;

      return (
        <Fragment key={categoryId}>
          <CategoryDiv $isSelected={isSelected} type={type}>
            <Text
              $pointer={true}
              onClick={() => handleClickCategory(categoryId)}
            >{`${name} (${cnt})`}</Text>
          </CategoryDiv>
          {children && (
            <FlexDiv
              direction="column"
              $align="start"
              style={{ paddingLeft: "1rem" }}
            >
              {renderCategory(children)}
            </FlexDiv>
          )}
        </Fragment>
      );
    });
  const { data: categories } = useGetCategories();
  if (!categories) return;

  return renderCategory(categories);
}
