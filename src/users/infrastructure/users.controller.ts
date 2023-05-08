import { Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../application/create-user/create-user.command';
import { GetUserQuery } from '../application/get-user/get-user.query';

@Controller('users')
export class UsersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createUsers(): Promise<any> {
    return this.commandBus.execute(
      new CreateUserCommand({
        name: 'David',
        lastName: 'Acosta',
        role: 'MANAGER',
      }),
    );
  }

  @Get('/:userId')
  async getUser(): Promise<any> {
    return this.queryBus.execute(new GetUserQuery('1'));
  }
}
