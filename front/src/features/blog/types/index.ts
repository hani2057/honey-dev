export type TCategory = "list" | "register" | "edit";

export interface ICategory {
  categoryId: number;
  name: string;
  cnt: number;
  children: ICategory[] | null;
}
