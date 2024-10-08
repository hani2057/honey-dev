import { Dispatch, Fragment, SetStateAction, useState } from "react";

import { AiOutlineEdit } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { GoChevronDown, GoChevronUp, GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";

import { useDeleteCategories, usePostCategories } from "@features/blog/api";
import { usePutCategoryNames } from "@features/blog/api/usePutCategoryNames";
import {
  ICategory,
  IPostCategory,
  IPutCategoryName,
} from "@features/blog/types";
import { useQueryClient } from "@tanstack/react-query";

import { QUERY_KEY } from "@apis/queryKeys";

import { FlexDiv, Text } from "@components/elements";

import {
  CategoryDiv,
  CategoryWrapperEditForm,
  CategoryWrapperRegister,
  IconsWrapper,
} from "./style";

interface EditCategoryProps {
  setEditCategory: Dispatch<SetStateAction<boolean>>;
}

export function EditCategory({ setEditCategory }: EditCategoryProps) {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState(0);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categoryData, setCategoryData] = useState<ICategory[]>(
    queryClient.getQueryData(QUERY_KEY.blog.category.list()) ?? []
  );
  const [createdList, setCreatedList] = useState<IPostCategory[]>([]);
  const [deletedList, setDeletedList] = useState<number[]>([]);
  const [nameChangedList, setNameChangedList] = useState<IPutCategoryName[]>(
    []
  );

  const handleClickCategory = (categoryId: number) => {
    // 카테고리 이름 수정 중일 때는 다른 카테고리로 이동 불가
    if (isEditingName) return;
    setSelectedId(categoryId);
  };

  /**
   * 현재 선택된 카테고리를 탐색하여 하위에 새로운 카테고리를 생성하여 반환
   * @param category 탐색할 카테고리
   * @param newCategory 새로 생성한 카테고리
   * @returns 처리된 카테고리
   */
  const addNewChild = (category: ICategory, newCategory: ICategory) => {
    if (category.categoryId === selectedId) {
      category.children = category.children
        ? [...category.children, newCategory]
        : [newCategory];
    } else if (category.children) {
      category.children = category.children.map((category) =>
        addNewChild(category, newCategory)
      );
    }
    return category;
  };

  /**
   * 선택한 카테고리의 하위에 새로운 카테고리를 생성
   */
  const handleClickPlus = () => {
    const newCategory = {
      categoryId: Number(new Date()),
      name: "new category",
      cnt: 0,
      children: null,
    };
    setCreatedList((prev) => [...prev, { parentId: selectedId, newCategory }]);
    setCategoryData(
      categoryData.map((category) => addNewChild(category, newCategory))
    );
  };

  /**
   * 카테고리 목록을 받아 selectedId에 해당하는 카테고리를 제거해 반환
   */
  const deleteCategory = (categories: ICategory[]) => {
    return categories.reduce<ICategory[]>((acc, category) => {
      // 현재 카테고리가 삭제 대상이면 skip
      if (category.categoryId === selectedId) {
        return acc;
      }
      // children이 있을 경우, 재귀적으로 처리하여 삭제 후 업데이트
      if (category.children) {
        category.children = deleteCategory(category.children);
      }
      // 삭제되지 않은 카테고리를 결과 배열에 추가
      acc.push(category);
      return acc;
    }, []);
  };

  /**
   * 선택한 카테고리를 삭제
   */
  const handleClickMinus = () => {
    // TODO: 정말 삭제하시겠습니까 alert

    // 생성한 카테고리 목록에 삭제할 카테고리가 있는지 확인하여 있으면 삭제
    const isCreated = createdList.some(
      (v) => v.newCategory.categoryId === selectedId
    );
    if (isCreated) {
      setCreatedList(
        createdList.filter((v) => v.newCategory.categoryId !== selectedId)
      );
    }
    // 없으면 기존 카테고리 목록에서 삭제
    else {
      setDeletedList((prev) => [...prev, selectedId]);
      setCategoryData(deleteCategory(categoryData));
    }

    setSelectedId(0);
  };

  /**
   * 선택한 카테고리를 한 칸 위로 이동. 배열 내 인덱스 -1
   */
  const handleClickUp = () => {
    const moveCategoryUp = (categories: ICategory[]) => {
      // 카테고리 리스트에서 해당 카테고리 아이디를 찾는다
      const categoryToMove = categories.find(
        ({ categoryId }) => categoryId === selectedId
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
    const moveCategoryDown = (categories: ICategory[]) => {
      // 카테고리 리스트에서 해당 카테고리 아이디를 찾는다
      const categoryToMove = categories.find(
        ({ categoryId }) => categoryId === selectedId
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

  const changeName = (categories: ICategory[]) =>
    categories.map((v) => {
      if (v.categoryId === selectedId) {
        v.name = newCategoryName;
      }
      if (v.children) {
        v.children = changeName(v.children);
      }
      return v;
    });

  /**
   * 카테고리 이름을 수정 가능한 상태로 바꾸거나 바꾼 값을 새 카테고리 이름으로 업데이트
   */
  const handleClickEdit = () => {
    if (isEditingName) {
      if (newCategoryName.trim().length === 0) return;
      // 생성 목록에 있으면 업데이트
      setCreatedList(
        createdList.map((v) => {
          if (v.newCategory.categoryId === selectedId)
            v.newCategory.name = newCategoryName;
          return v;
        })
      );
      // 이름 변경 목록에 있으면 업데이트, 없으면 추가
      const isChanged = nameChangedList.some(
        (v) => v.categoryId === selectedId
      );
      if (isChanged) {
        setNameChangedList(
          nameChangedList.map((v) => {
            if (v.categoryId === selectedId) v.name = newCategoryName;
            return v;
          })
        );
      } else {
        setNameChangedList((prev) => [
          ...prev,
          { categoryId: selectedId, name: newCategoryName },
        ]);
      }
      // 공통: 표시 데이터 업데이트
      setCategoryData(changeName(categoryData));
      setNewCategoryName("");
      setIsEditingName(false);
    } else {
      setIsEditingName(true);
    }
  };

  const handleSubmit = async () => {
    if (isEditingName) return;
    // 카테고리 생성
    if (createdList.length !== 0) {
      const res = await postCategories(createdList);
      console.log("postCategory res", res);
    }
    // 카테고리 삭제
    if (deletedList.length !== 0) {
      await deleteCategories(deletedList);
    }
    // 카테고리 이름 변경
    if (nameChangedList.length !== 0) {
      await putCategoryNames(nameChangedList);
    }
    // 서비스콜 완료 후 카테고리 상태를 최신으로 업데이트
    queryClient.invalidateQueries({ queryKey: QUERY_KEY.blog.category.list() });
    // 로컬의 카테고리 수정용 상태값들을 초기화
    setCreatedList([]);
    setDeletedList([]);
    setNameChangedList([]);
    // 카테고리 수정창 닫기
    setEditCategory(false);
  };

  const handleCancel = () => {
    // 로컬의 카테고리 수정용 상태값들을 초기화
    setCreatedList([]);
    setDeletedList([]);
    setNameChangedList([]);
    // 카테고리 수정창 닫기
    setEditCategory(false);
  };

  /**
   * 카테고리 목록을 받아 JSX를 반환
   *
   * @param {ICategory[]} categoryList 카테고리 목록
   * @returns children(하위 카테고리)이 있는 경우 하위 카테고리를 포함하여 JSX elements를 반환
   */
  const renderCategory = (categoryList: ICategory[]) =>
    categoryList.map(({ categoryId, name, cnt, children }) => {
      const isSelected = categoryId === selectedId;

      return (
        <Fragment key={categoryId}>
          <CategoryDiv $isSelected={isSelected} type="edit">
            {isSelected && isEditingName ? (
              <input
                defaultValue={name}
                onChange={(e) => setNewCategoryName(e.target.value)}
                autoFocus
              />
            ) : (
              <Text
                $pointer={true}
                onClick={() => handleClickCategory(categoryId)}
              >{`${name} (${cnt})`}</Text>
            )}
            {isSelected && (
              <IconsWrapper>
                <Text $pointer={true} onClick={handleClickPlus}>
                  <GoPlus />
                </Text>
                {selectedId !== 0 && (
                  <>
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
                      {isEditingName ? <BiSave /> : <AiOutlineEdit />}
                    </Text>
                  </>
                )}
              </IconsWrapper>
            )}
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

  const { mutateAsync: postCategories } = usePostCategories();
  const { mutateAsync: deleteCategories } = useDeleteCategories();
  const { mutateAsync: putCategoryNames } = usePutCategoryNames();

  return (
    <CategoryWrapperEditForm onSubmit={handleSubmit}>
      <FlexDiv $gap={3}>
        <Text $bold={true}>카테고리 수정</Text>
        <Text
          $bold={true}
          size={0.75}
          $pointer={true}
          as="button"
          type="submit"
        >
          완료
        </Text>
        <Text $bold={true} size={0.75} $pointer={true} onClick={handleCancel}>
          취소
        </Text>
      </FlexDiv>
      <CategoryWrapperRegister>
        {renderCategory(categoryData)}
      </CategoryWrapperRegister>
    </CategoryWrapperEditForm>
  );
}
