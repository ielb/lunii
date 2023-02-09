import { Language } from "../language/Language";

export type Product = {
  age: string | null;
  category: string | null;
  createdAt: Date;
  id: string;
  languaes?: Array<Language>;
  updatedAt: Date;
};
