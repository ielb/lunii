import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type LanguageWhereInput = {
  audioPreview?: StringNullableFilter;
  characters?: StringNullableFilter;
  description?: StringNullableFilter;
  duration?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  productId?: ProductWhereUniqueInput;
  subTitle?: StringNullableFilter;
  title?: StringNullableFilter;
};
