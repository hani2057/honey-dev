import { TCategory } from "@features/blog/types";
import { atom } from "jotai";

// 더미데이터
// TODO: API 연동 후 데이터 교체
const dummyCategories: TCategory[] = [
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

// 포스트 목록, 포스트 상세 화면 좌측 카테고리 목록 조회시 사용할 카테고리 id
export const categoryIdToShowAtom = atom(0);

// 포스트 등록시 사용할 카테고리 id
export const categoryIdToRegisterAtom = atom(0);

export const categoriesAtom = atom(dummyCategories);

// 카테고리 수정시 사용할 이름 변경 여부 플래그
export const isEditingCategoryNameAtom = atom(false);
