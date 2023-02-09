import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "age";

export const ProductTitle = (record: TProduct): string => {
  return record.age || String(record.id);
};
