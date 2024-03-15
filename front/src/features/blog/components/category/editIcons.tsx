import { AiOutlineEdit } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";

import { categoriesAtom } from "@features/blog/store";
import { TCategory } from "@features/blog/types";
import { useAtom } from "jotai";

import { Text } from "@components/elements";

import { IconsWrapper } from "./style";

interface EditIconsProps {
  selectedCategoryId: number;
}

export const EditIcons = ({ selectedCategoryId }: EditIconsProps) => {
  const [categoryData, setCategoryData] = useAtom(categoriesAtom);

  /**
   * 선택한 카테고리의 하위에 새로운 카테고리를 생성
   */
  const handleClickPlus = () => {
    const addNewChild = (category: TCategory) => {
      if (category.children === null) {
        if (category.categoryId === selectedCategoryId) {
          // TODO: create new category
          category.children = [
            {
              categoryId: 100,
              name: "child add test",
              cnt: 0,
              children: null,
            },
          ];
          // TODO: 취소할 때를 대비해서 createdCategoryId 저장해두기
        }
        return category;
      } else {
        console.log("aa");
        if (category.categoryId === selectedCategoryId) {
          // TODO: create new category
          category.children.push({
            categoryId: 100,
            name: "child add test",
            cnt: 0,
            children: null,
          });
          // TODO: 취소할 때를 대비해서 createdCategoryId 저장해두기
        } else {
          category.children = category.children.map((category) =>
            addNewChild(category)
          );
        }
      }
      return category;
    };

    const newCategoryData = categoryData.map((category) =>
      addNewChild(category)
    );
    setCategoryData(newCategoryData);
  };

  if (selectedCategoryId === 0)
    return (
      <IconsWrapper>
        <Text pointer={true} onClick={handleClickPlus}>
          <GoPlus />
        </Text>
      </IconsWrapper>
    );
  else
    return (
      <IconsWrapper>
        <Text pointer={true} onClick={handleClickPlus}>
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
        <Text pointer={true}>
          <AiOutlineEdit />
        </Text>
      </IconsWrapper>
    );
};
