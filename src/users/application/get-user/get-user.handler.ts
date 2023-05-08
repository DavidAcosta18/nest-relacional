import { QueryHandler } from '@nestjs/cqrs';
import { IQueryHandler } from '@nestjs/cqrs/dist';
import { UsersRepository } from 'src/users/infrastructure/repositories/users.repository';
import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly userRepository: UsersRepository) {}

  async execute(command: GetUserQuery): Promise<any> {
    return this.userRepository.findOneOrFail(command.userId);
  }
}
