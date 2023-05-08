import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users/infrastructure/schema/users.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async saveUser(user: any): Promise<Users> {
    return this.usersRepository.save(user);
  }
}
