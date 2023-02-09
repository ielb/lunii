import { Product } from "../product/Product";

export type Language = {
  audioPreview: string | null;
  characters: string | null;
  createdAt: Date;
  description: string | null;
  duration: string | null;
  id: string;
  name: string | null;
  price: number | null;
  productId?: Product | null;
  subTitle: string | null;
  title: string | null;
  updatedAt: Date;
};
