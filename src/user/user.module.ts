import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.services';
import { UsersProviders } from './user.provider';
import { UserResolver } from './user.resolver';
import { AuthService } from './../auth/auth.service';
import { AuthModule } from './../auth/auth.module';

@Module({
  imports: [DatabaseModule],
controllers: [],
providers:[UserService,...UsersProviders,UserResolver],exports:[UserService]
})
export class UserModule {}