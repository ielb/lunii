import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CountryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="flag" source="flag" />
        <TextInput label="languageId" source="languageId" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
