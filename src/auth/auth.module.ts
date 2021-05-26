import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from './../user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtSecret } from './constants';
import { JwtStartegy } from './stratgies/jwt.strategy';
import { localStrategy } from './stratgies/local.strategy';
import { AuthResolver } from './auth.resolver';
@Module({
  providers: [AuthService,JwtStartegy,localStrategy, AuthResolver],
  imports:[UserModule,

PassportModule.register({defaultStrategy:"jwt"}),
  JwtModule.register({
    secret:jwtSecret,
    signOptions:{expiresIn:"3600s"}
  })
  ]
 
})

export class AuthModule {}
