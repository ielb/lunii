/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { LanguageWhereUniqueInput } from "./LanguageWhereUniqueInput";
import { LanguageUpdateInput } from "./LanguageUpdateInput";

@ArgsType()
class UpdateLanguageArgs {
  @Field(() => LanguageWhereUniqueInput, { nullable: false })
  where!: LanguageWhereUniqueInput;
  @Field(() => LanguageUpdateInput, { nullable: false })
  data!: LanguageUpdateInput;
}

export { UpdateLanguageArgs };
