export type CategoriesStateType = {
  brand: TBrandData | null;
};

export type TBrandData = {
  id: number;
  name: string;
  description: string;
};
