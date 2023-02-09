import { LanguageUpdateManyWithoutProductsInput } from "./LanguageUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  age?: string | null;
  category?: string | null;
  languaes?: LanguageUpdateManyWithoutProductsInput;
};
