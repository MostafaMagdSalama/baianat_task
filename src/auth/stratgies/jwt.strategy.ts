import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/user/user.entity";
import { UserService } from './../../user/user.services';
import { jwtSecret } from './../constants';

@Injectable()


export class JwtStartegy extends PassportStrategy(Strategy){
    constructor(private readonly userService: UserService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret
        })
    }
    async validate(validationPayload:{email:string,password:string}):Promise<User>{
        return this.userService.findByEmail(validationPayload.email)
    }
}   