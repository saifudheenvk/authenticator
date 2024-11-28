import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { IUserDocument } from './interfaces/user.interface';
import { JwtAuthGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@Controller('user')
export class UserController {
  constructor() {}
  @Post('currentuser')
  @UseGuards(JwtAuthGuard)
  getMyDetails(@GetUser() user: IUserDocument) {
    return user;
  }

  @Get('id')
  @UseGuards(JwtAuthGuard)
  editUser(@GetUser('id') id: number) {
    return id;
  }
}
