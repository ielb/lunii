import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LanguageListRelationFilter } from "../language/LanguageListRelationFilter";

export type ProductWhereInput = {
  age?: StringNullableFilter;
  category?: StringNullableFilter;
  id?: StringFilter;
  languaes?: LanguageListRelationFilter;
};
