import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../schema/users.schema';
import { EntityNotAcceptable } from 'src/shared/errors/entity-not-acceptable.error';

interface DummyRepositoryInterface {
  findOneOrFail(userId: string): Promise<Users | EntityNotAcceptable>;
}

@Injectable()
export class UsersRepository implements DummyRepositoryInterface {
  constructor(@InjectRepository(Users) private usersModel: Repository<Users>) {}

  async save(user: any): Promise<Users> {
    return this.usersModel.save(user);
  }

  async findOneOrFail(userId: string): Promise<Users | EntityNotAcceptable> {
    const user = await this.usersModel.findOne({
      where: [{ id: Number(userId) }],
    });

    if (!user) {
      return new EntityNotAcceptable('usuario no Existe');
    }

    return user;
  }
}
