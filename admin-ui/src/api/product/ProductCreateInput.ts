import { LanguageCreateNestedManyWithoutProductsInput } from "./LanguageCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  age?: string | null;
  category?: string | null;
  languaes?: LanguageCreateNestedManyWithoutProductsInput;
};
