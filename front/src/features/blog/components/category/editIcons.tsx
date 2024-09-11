import { AiOutlineEdit } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";

import {
  categoriesAtom,
  isEditingCategoryNameAtom,
  newCategoryNameAtom,
  selectedCategoryIdAtom,
} from "@features/blog/store";
import { TCategory } from "@features/blog/types";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

import { Text } from "@components/elements";

import { IconsWrapper } from "./style";

interface EditIconsProps {
  selectedCategoryId: number;
}

export const EditIcons = ({ selectedCategoryId }: EditIconsProps) => {
  const [categoryData, setCategoryData] = useAtom(categoriesAtom);
  const setSelectedCategoryId = useSetAtom(selectedCategoryIdAtom);
  const [isEditingCategoryName, setIsEditingCategoryName] = useAtom(
    isEditingCategoryNameAtom
  );
  const newCategoryName = useAtomValue(newCategoryNameAtom);

  /**
   * 새로운 카테고리를 생성하여 반환
   *
   * @returns {TCategory} 새로 생성된 카테고리
   */
  const createNewCategory = () => {
    // TODO: 취소할 때를 대비해서 createdCategoryId 저장해두기
    // TODO: API 연동
    return {
      categoryId: 100,
      name: "child add test",
      cnt: 0,
      children: null,
    };
  };

  /**
   * 선택한 카테고리의 하위에 새로운 카테고리를 생성
   */
  const handleClickPlus = () => {
    const newCategory = createNewCategory();
    const addNewChild = (category: TCategory) => {
      if (category.children === null) {
        if (category.categoryId === selectedCategoryId) {
          category.children = [newCategory];
        }
      } else {
        if (category.categoryId === selectedCategoryId) {
          category.children.push(newCategory);
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

  /**
   * 선택한 카테고리를 삭제
   */
  const handleClickMinus = () => {
    const deleteCategory = (categories: TCategory[]) => {
      // 카테고리 리스트에서 해당 카테고리 아이디를 찾는다
      const categoryToDelete = categories.find(
        ({ categoryId }) => categoryId === selectedCategoryId
      );
      // 있으면 삭제하고 리턴
      if (categoryToDelete) {
        return categories.filter(
          ({ categoryId }) => categoryId !== categoryToDelete.categoryId
        );
      }
      // 없으면 children에 대해 반복
      else {
        return categories.map((category) => {
          if (category.children)
            category.children = deleteCategory(category.children);
          return category;
        });
      }
    };

    // TODO: 정말 삭제하시겠습니까 alert
    setCategoryData(deleteCategory(categoryData));
    setSelectedCategoryId(0);
  };

  /**
   * 선택한 카테고리를 한 칸 위로 이동. 배열 내 인덱스 -1
   */
  const handleClickUp = () => {
    const moveCategoryUp = (categories: TCategory[]) => {
      // 카테고리 리스트에서 해당 카테고리 아이디를 찾는다
      const categoryToMove = categories.find(
        ({ categoryId }) => categoryId === selectedCategoryId
      );
      // 있으면 인덱스를 찾아 -1 이동한다
      if (categoryToMove) {
        const idxToDelete = categories.indexOf(categoryToMove);
        const idxToInsert =
          idxToDelete === 0 ? categories.length : idxToDelete - 1;
        categories.splice(idxToDelete, 1);
        categories.splice(idxToInsert, 0, categoryToMove);
        return categories;
      }
      // 없으면 children에 대해 반복
      else {
        return categories.map((category) => {
          if (category.children)
            category.children = moveCategoryUp(category.children);
          return category;
        });
      }
    };

    const newCategoryData = moveCategoryUp(
      categoryData.filter(({ categoryId }) => categoryId !== 0)
    );
    setCategoryData([categoryData[0], ...newCategoryData]);
  };

  /**
   * 선택한 카테고리를 한 칸 아래로 이동. 배열 내 인덱스 +1
   */
  const handleClickDown = () => {
    const moveCategoryDown = (categories: TCategory[]) => {
      // 카테고리 리스트에서 해당 카테고리 아이디를 찾는다
      const categoryToMove = categories.find(
        ({ categoryId }) => categoryId === selectedCategoryId
      );
      // 있으면 인덱스를 찾아 +1 이동한다
      if (categoryToMove) {
        const idxToDelete = categories.indexOf(categoryToMove);
        const idxToInsert =
          idxToDelete === categories.length - 1 ? 0 : idxToDelete + 1;
        categories.splice(idxToDelete, 1);
        categories.splice(idxToInsert, 0, categoryToMove);
        return categories;
      }
      // 없으면 children에 대해 반복
      else {
        return categories.map((category) => {
          if (category.children)
            category.children = moveCategoryDown(category.children);
          return category;
        });
      }
    };

    const newCategoryData = moveCategoryDown(
      categoryData.filter(({ categoryId }) => categoryId !== 0)
    );
    setCategoryData([categoryData[0], ...newCategoryData]);
  };

  /**
   * 카테고리 이름을 수정 가능한 상태로 바꾸거나 바꾼 값을 새 카테고리 이름으로 업데이트
   */
  const handleClickEdit = () => {
    if (isEditingCategoryName) {
      // TODO: 카테고리 이름 업데이트 api 요청
      // TODO: validation
      console.log(newCategoryName);
      setIsEditingCategoryName(false);
    } else {
      setIsEditingCategoryName(true);
    }
  };

  if (selectedCategoryId === 0)
    return (
      <IconsWrapper>
        <Text $pointer={true} onClick={handleClickPlus}>
          <GoPlus />
        </Text>
      </IconsWrapper>
    );
  else
    return (
      <IconsWrapper>
        <Text $pointer={true} onClick={handleClickPlus}>
          <GoPlus />
        </Text>
        <Text $pointer={true} onClick={handleClickMinus}>
          <HiMinusSmall />
        </Text>
        <Text $pointer={true} onClick={handleClickUp}>
          <GoChevronUp />
        </Text>
        <Text $pointer={true} onClick={handleClickDown}>
          <GoChevronDown />
        </Text>
        <Text $pointer={true} onClick={handleClickEdit}>
          {isEditingCategoryName ? <BiSave /> : <AiOutlineEdit />}
        </Text>
      </IconsWrapper>
    );
};
