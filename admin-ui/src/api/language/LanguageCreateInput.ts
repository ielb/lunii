import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type LanguageCreateInput = {
  audioPreview?: string | null;
  characters?: string | null;
  description?: string | null;
  duration?: string | null;
  name?: string | null;
  price?: number | null;
  productId?: ProductWhereUniqueInput | null;
  subTitle?: string | null;
  title?: string | null;
};
