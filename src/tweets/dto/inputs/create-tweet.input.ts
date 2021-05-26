import { InputType,Field } from "@nestjs/graphql";


@InputType()
export class CreateTweet{
    @Field()
    content:string;
    @Field()
    userId:string;
}