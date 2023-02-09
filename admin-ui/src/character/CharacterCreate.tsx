import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CharacterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="languageId" source="languageId" />
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Create>
  );
};
