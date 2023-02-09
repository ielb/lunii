import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LanguageTitle } from "../language/LanguageTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="age" source="age" />
        <TextInput label="category" source="category" />
        <ReferenceArrayInput
          source="languaes"
          reference="Language"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LanguageTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
