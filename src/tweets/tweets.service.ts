import { Inject, Injectable } from '@nestjs/common';
import { Tweets } from './entity/tweets.entity';
import { CreateTweet } from './dto/inputs/create-tweet.input';
import { v4 as uuidv4 } from 'uuid';
import { StringifyOptions } from 'querystring';

@Injectable()
export class TweetsService {
    constructor( 
         @Inject('TWEETS_REPOSITORY')
    private tweetsRepository: typeof Tweets){}


async createTweet(tweet:CreateTweet):Promise<Tweets>{
    const tw={id:uuidv4(),...tweet};
    return this.tweetsRepository.create(tw);
}

// show tweets for spacific user
async getTweets(userId:string):Promise<Tweets[]>{
return this.tweetsRepository.findAll({where:{userId:userId}})
}

}
