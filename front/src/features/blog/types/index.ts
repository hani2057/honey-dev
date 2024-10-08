export type TCategory = "list" | "register" | "edit";

export interface ICategory {
  categoryId: number;
  name: string;
  cnt: number;
  children: ICategory[] | null;
}

export interface IPostCategory {
  parentId: number;
  newCategory: ICategory;
}

export interface IPutCategoryName {
  categoryId: number;
  name: string;
}
