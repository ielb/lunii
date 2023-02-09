/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LanguageWhereInput } from "./LanguageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LanguageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LanguageWhereInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereInput)
  @IsOptional()
  @Field(() => LanguageWhereInput, {
    nullable: true,
  })
  every?: LanguageWhereInput;

  @ApiProperty({
    required: false,
    type: () => LanguageWhereInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereInput)
  @IsOptional()
  @Field(() => LanguageWhereInput, {
    nullable: true,
  })
  some?: LanguageWhereInput;

  @ApiProperty({
    required: false,
    type: () => LanguageWhereInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereInput)
  @IsOptional()
  @Field(() => LanguageWhereInput, {
    nullable: true,
  })
  none?: LanguageWhereInput;
}
export { LanguageListRelationFilter };
