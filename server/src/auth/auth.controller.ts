import { Controller, Post, Body, Session, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: SignUpDto, @Session() session: Record<string, any>) {
    return this.authService.signup(dto, session);
  }

  @Post('signin')
  signin(@Body() dto: SignInDto, @Session() session: Record<string, any>) {
    return this.authService.signin(dto, session);
  }

  @Get('signout')
  logout(@Session() session: Record<string, any>) {
    session.jwt = null;
    return {
      message: 'Logout successful',
    };
  }
}
