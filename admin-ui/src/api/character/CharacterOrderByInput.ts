import { SortOrder } from "../../util/SortOrder";

export type CharacterOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  languageId?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
