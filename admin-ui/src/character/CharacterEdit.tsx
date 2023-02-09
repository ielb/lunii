import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CharacterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="languageId" source="languageId" />
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
