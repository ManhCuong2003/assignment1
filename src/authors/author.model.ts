import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthorModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
