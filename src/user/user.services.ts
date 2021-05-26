
import { Injectable, Inject, Get } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserInput } from './dto/inputs/create-user.input';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }
  
  async create(user: CreateUserInput): Promise<User> {

    const checkExist = await this.usersRepository.findOne({where:{email:user.email}});
if(checkExist){
  return null;
}
    const addUser={id:uuidv4(),...user}
    return await this.usersRepository.create<User>(addUser);
}

async findByEmail(email:string):Promise<User>{
return await this.usersRepository.findOne({where:{email:email}});
}

}