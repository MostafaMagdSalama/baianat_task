import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from './../user/user.entity';
import { CreateUserInput } from './../user/dto/inputs/create-user.input';

@Resolver()
export class AuthResolver {
constructor(private readonly authServic:AuthService){}

@Query(()=>String,{nullable:true})

async login(@Args("user")user:CreateUserInput):Promise<string>{
    const checkUser= await this.authServic.validator(user.email,user.password);
    console.log(checkUser)
    if(!checkUser){
        return null;
    }
    return this.authServic.login(user);

}

}
