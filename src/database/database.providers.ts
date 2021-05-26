import { Sequelize } from 'sequelize-typescript';
import { User } from './../user/user.entity';
import { Tweets } from './../tweets/entity/tweets.entity';
import { Follow } from './../follow/follow.entity';
// this must be in .env file
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'mostafa',
        database: 'twitter',
      });
      sequelize.addModels([User,Tweets,Follow]);
      await sequelize.sync();
      return sequelize;
    },
  },
];