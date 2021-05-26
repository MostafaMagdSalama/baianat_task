import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TweetsModule } from './tweets/tweets.module';
import { FollowModule } from './follow/follow.module';


@Module({
  imports: [
    TweetsModule,
    UserModule,
    GraphQLModule.forRoot({
    autoSchemaFile:true
  }),
    AuthModule,
    TweetsModule,
    FollowModule],
controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
