import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public getUsers(): Promise<User[]> {
    return this.repository.find()
  }

  public getUser(id: number): Promise<User> {

    return this.repository.findOneBy({id});
  }

  public createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.name = body.name;
    user.email = body.email;
    user.firstName = body.firstName;
    user.lastName = body.lastName;

    return this.repository.save(user);
  }
}
