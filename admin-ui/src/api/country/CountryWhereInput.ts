import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CountryWhereInput = {
  flag?: StringNullableFilter;
  id?: StringFilter;
  languageId?: StringNullableFilter;
  name?: StringNullableFilter;
};
