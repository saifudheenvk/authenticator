import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsStrongPassword } from '../decorator';

export class SignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword({
    message:
      'Password must have a minimum length of 8 characters, include at least 1 letter, 1 number, and 1 special character.',
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
