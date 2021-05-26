
import { Tweets } from './entity/tweets.entity';
export const TweetsProviders = [
  {
    provide: 'TWEETS_REPOSITORY',
    useValue: Tweets,
  },
];