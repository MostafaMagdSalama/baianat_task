import { Args, Query, Resolver } from '@nestjs/graphql';
import { Tweets } from './entity/tweets.entity';
import { TweetsService } from './tweets.service';
import { CreateTweet } from './dto/inputs/create-tweet.input';

@Resolver(of=>Tweets)
export class TweetsResolver {
constructor(private readonly tweetsService:TweetsService){}

@Query(()=>Tweets)

// creating tweet by spacific user
async insert(@Args("tweet")tweetData:CreateTweet):Promise<Tweets>{
   return this.tweetsService.createTweet(tweetData);
}

@Query(()=>[Tweets])
// get all tweets for spacific user
async getTweets(@Args("userId")userId:string):Promise<Tweets[]>{
    return this.tweetsService.getTweets(userId);
}


}
