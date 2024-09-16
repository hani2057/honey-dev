import { useNavigate } from "react-router-dom";

import {
  categoryIdToRegisterAtom,
  categoryIdToShowAtom,
} from "@features/blog/store";
import { TCategory } from "@features/blog/types";
import { PATH } from "@router/path";
import { useAtom } from "jotai";

import { RenderCategory } from "./renderCategory";
import { CategoryWrapperInquire, CategoryWrapperRegister } from "./style";

interface CategoryProps {
  type: Extract<TCategory, "list" | "register">;
}

export function Category({ type }: CategoryProps) {
  const [categoryIdToShow, setCategoryIdToShow] = useAtom(categoryIdToShowAtom);
  const [categoryIdToRegister, setCategoryIdToRegister] = useAtom(
    categoryIdToRegisterAtom
  );
  const navigate = useNavigate();

  /**
   * 카테고리 id를 받아 해당하는 포스트 목록으로 이동. 포스트 조회 화면에서 이용.
   *
   * @param {number} categoryId 카테고리 id
   */
  const handleClickInquire = (categoryId: number) => {
    if (categoryId === categoryIdToShow) return;
    setCategoryIdToShow(categoryId);
    navigate(PATH.BLOG.INDEX);
    // TODO: 페이지 1로 보내기
    // setPage(1)
  };

  /**
   * 카테고리 id를 변경. 포스트 등록 화면에서 이용.
   *
   * @param {number} categoryId 카테고리 id
   */
  const handleClickRegister = (categoryId: number) => {
    if (categoryId === categoryIdToRegister) return;
    setCategoryIdToRegister(categoryId);
  };

  if (type === "list")
    return (
      <CategoryWrapperInquire>
        <RenderCategory
          type="list"
          handleClickCategory={handleClickInquire}
          selectedCategoryId={categoryIdToShow}
        />
      </CategoryWrapperInquire>
    );
  else if (type === "register")
    return (
      <CategoryWrapperRegister>
        <RenderCategory
          type="register"
          handleClickCategory={handleClickRegister}
          selectedCategoryId={categoryIdToRegister}
        />
      </CategoryWrapperRegister>
    );
}
