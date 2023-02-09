import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  age?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
