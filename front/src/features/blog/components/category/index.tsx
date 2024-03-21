import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {
  categoriesAtom,
  isEditingCategoryNameAtom,
  newCategoryNameAtom,
  selectedCategoryIdAtom,
} from "@features/blog/store";
import { TCategory, categoryType } from "@features/blog/types";
import { PATH } from "@router/path";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

import { FlexDiv, Text } from "@components/elements";

import { EditIcons } from "./editIcons";
import { CategoryDiv, CategoryEditWrapper, CategoryWrapper } from "./style";

interface CategoryProps {
  type: categoryType;
}

export const Category = ({ type }: CategoryProps) => {
  const navigate = useNavigate();
  const [selectedCategoryId, setSelectedCategoryId] = useAtom(
    selectedCategoryIdAtom
  );
  const categoryData = useAtomValue(categoriesAtom);
  const isEditingCategoryName = useAtomValue(isEditingCategoryNameAtom);
  const setNewCategoryName = useSetAtom(newCategoryNameAtom);

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
              {isSelected && isEditingCategoryName ? (
                <input
                  defaultValue={name}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  autoFocus
                />
              ) : (
                <Text
                  pointer={true}
                  onClick={() => handleClickCategory(categoryId)}
                >{`${name} (${cnt})`}</Text>
              )}
              {isSelected && type === "edit" && (
                <EditIcons selectedCategoryId={categoryId} />
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
              <EditIcons selectedCategoryId={categoryId} />
            )}
          </CategoryDiv>
        );
    });

  return type === "list" ? (
    <CategoryWrapper>{renderCategory(categoryData, type)}</CategoryWrapper>
  ) : (
    <CategoryEditWrapper>
      {renderCategory(categoryData, type)}
    </CategoryEditWrapper>
  );
};
