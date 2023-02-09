import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const LanguageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="audioPreview" source="audioPreview" />
        <TextInput label="characters" source="characters" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="duration" source="duration" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <ReferenceInput
          source="product.id"
          reference="Product"
          label="productId"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="subTitle" source="subTitle" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
