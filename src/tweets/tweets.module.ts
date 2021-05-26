import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TweetsService } from './tweets.service';
import { TweetsProviders } from './tweets.provider';
import { TweetsResolver } from './tweets.resolver';


@Module({
  imports:[DatabaseModule],
providers: [TweetsService,...TweetsProviders, TweetsResolver]
})
export class TweetsModule {}
