import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CharacterWhereInput = {
  id?: StringFilter;
  languageId?: StringNullableFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
};
