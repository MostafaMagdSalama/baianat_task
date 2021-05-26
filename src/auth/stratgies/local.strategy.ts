import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/user/user.entity";
import { AuthService } from './../auth.service';



@Injectable()
export class localStrategy extends  PassportStrategy(Strategy) {
constructor(private readonly authService:AuthService){
    super({usernameField:"email"})
}


async validate(email:string , password:string):Promise<User>{
    const user = this.authService.validator(email,password);
    if(!user){

        throw new UnauthorizedException()
    }
    return  user;

}
}