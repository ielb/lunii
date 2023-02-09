import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LanguageTitle } from "../language/LanguageTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
