import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateUserHandler } from '../application/create-user/create-users.handler';
import { GetUserHandler } from '../application/get-user/get-user.handler';
import { UsersRepository } from './repositories/users.repository';
import { Users } from './schema/users.schema';
import { UsersController } from './users.controller';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [CreateUserHandler, UsersRepository, GetUserHandler],
})
export class UsersModule {}
