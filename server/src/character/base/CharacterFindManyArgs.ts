/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CharacterWhereInput } from "./CharacterWhereInput";
import { Type } from "class-transformer";
import { CharacterOrderByInput } from "./CharacterOrderByInput";

@ArgsType()
class CharacterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CharacterWhereInput,
  })
  @Field(() => CharacterWhereInput, { nullable: true })
  @Type(() => CharacterWhereInput)
  where?: CharacterWhereInput;

  @ApiProperty({
    required: false,
    type: [CharacterOrderByInput],
  })
  @Field(() => [CharacterOrderByInput], { nullable: true })
  @Type(() => CharacterOrderByInput)
  orderBy?: Array<CharacterOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CharacterFindManyArgs };
