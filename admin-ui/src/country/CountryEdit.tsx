import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CountryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="flag" source="flag" />
        <TextInput label="languageId" source="languageId" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
