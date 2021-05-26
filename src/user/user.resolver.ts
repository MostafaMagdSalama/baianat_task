import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersProviders } from './user.provider';
import { UserService } from './user.services';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGaurd } from './../auth/guards/gql-auth.guard';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  // @UseGuards(GqlAuthGaurd)
  @Query(() => [User], { name: 'users', nullable: true })
  //  get all users in the system
  async getUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => User, { nullable: true })
  // creating new user in the system 
  async createUser(
    @Args('createuserdata') createUserData: CreateUserInput,
  ): Promise<User> {
    return await this.userService.create(createUserData);
  }

  @Query(() => User)
  // find user By Email
  async FindByEmail(@Args('email') email: string): Promise<User> {
    return await this.userService.findByEmail(email);
  }

  //   @Query(()=>String)

  //   async login(@Args("user")user:User):Promise<string>{
  // return this.authService.login(user);  }
}
