export interface TCategory {
  categoryId: number;
  name: string;
  cnt: number;
  children: TCategory[] | null;
}

export type categoryType = "list" | "register" | "edit";
