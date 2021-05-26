import { Module } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowResolver } from './follow.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { FollowProviders } from './follow.provider';


@Module({
  imports:[DatabaseModule],
providers: [FollowService, FollowResolver,...FollowProviders]
})
export class FollowModule {}
