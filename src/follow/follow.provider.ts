
import { Follow } from './follow.entity';
export const FollowProviders = [
  {
    provide: 'FOLLOW_REPOSITORY',
    useValue: Follow,
  },
];