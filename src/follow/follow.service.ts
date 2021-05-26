import { Inject, Injectable } from '@nestjs/common';
import { Follow } from './follow.entity';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class FollowService {
constructor(   
      @Inject('FOLLOW_REPOSITORY')
       private fOLLOWRepository: typeof Follow
){}

// following function 
async follow(follower:string,followed:string):Promise<Follow>{
    const ifExist=await this.fOLLOWRepository.findOne({where:{ follower,followed }})
    if(ifExist){
        return null;
    }
    const follow={id:uuidv4(),follower,followed};

    return  this.fOLLOWRepository.create(follow);
}

// return all followed users 
async followedUsers(UserId:string):Promise<Follow[]>{
 return this.fOLLOWRepository.findAll({ attributes: ['followed'] , where:{follower:UserId}});
}

// return all followers users 
async followersUsers(UserId:string):Promise<Follow[]>{
   return this.fOLLOWRepository.findAll({ attributes: ['follower'],where:{followed:UserId}});
}


}
