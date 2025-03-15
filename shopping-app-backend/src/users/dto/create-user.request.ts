import { IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserRequest {
  //eslint-disable-next-line
  @IsEmail()
  email: string;
  //eslint-disable-next-line
  @IsStrongPassword()
  password: string;
}
