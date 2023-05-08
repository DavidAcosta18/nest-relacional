export class CreateUserCommand {
  readonly name: string;
  readonly lastName: string;
  readonly role: string;

  constructor(data: CreateUserCommand) {
    Object.assign(this, data);
  }
}
