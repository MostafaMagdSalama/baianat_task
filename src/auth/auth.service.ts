import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from 'src/user/dto/inputs/create-user.input';
import { User } from 'src/user/user.entity';
import { UserService } from './../user/user.services';
import { jwtSecret } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UserService,
        private readonly jwtService:JwtService
    
    ){}


    async validator(email:string , password : string ):Promise<User>|null{
        const user= await this.userService.findByEmail(email);
        if(!user){
            return null;
        }
        const passworIsValid=password===user.password;
        return  passworIsValid?user:null;
    }



    // login(user:User):{access_token:string}{
    //     const payload={
    //         email:user.email,
    //         sub:user.id
    //     }
    //     return {access_token:this.jwtService.sign(payload)}
    // }

    login(user:CreateUserInput):string{
        const payload={
            email:user.email,
            
        }
        return this.jwtService.sign(payload)
    }


    async verfiy(token:string):Promise<User>{
        const decoded=this.jwtService.verify(token,{
            secret:jwtSecret
        });
        const user=this.userService.findByEmail(decoded.email);
        if(!user){
             throw new Error("Unable to got User From this token ");
        }
        return user;

    }
}
