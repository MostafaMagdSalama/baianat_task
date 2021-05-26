import { Args, Query, Resolver } from '@nestjs/graphql';
import { Follow } from './follow.entity';
import { FollowService } from './follow.service';

@Resolver(of=>Follow)
export class FollowResolver {
    constructor(private readonly followService:FollowService){}
    //  function for following 
    // input => 2 string (followerId,followedId)
     
    @Query(()=>(Follow), {nullable:true})
    async follow(@Args("follower")follower:string,@Args("followed")followed:string):Promise<Follow>{
        return this.followService.follow(follower,followed);
    }

//    get all followers of spacific user 
    @Query(()=>[Follow])
    async followers(@Args("UserId")userId:string):Promise<Follow[]>{
        return this.followService.followedUsers(userId);
    }
    //  get all followed users for spacofic user
    @Query(()=>[Follow])
    async followedUsers(@Args("UserId")userId:string):Promise<Follow[]>{
        return this.followService.followersUsers(userId);
    }
}
