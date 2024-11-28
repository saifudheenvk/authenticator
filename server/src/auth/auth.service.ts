import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { SignInDto } from './dto';
import { Model } from 'mongoose';
import { IUserDocument } from 'src/user/interfaces/user.interface';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AppLogger } from 'src/logger/logger.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL') private userModel: Model<IUserDocument>,
    private readonly config: ConfigService,
    private jwt: JwtService,
    private logger: AppLogger,
  ) {
    logger.setContext(AuthService.name);
  }
  async signup(dto: SignInDto, session: Record<string, any>) {
    try {
      const user = await this.userModel.create({ ...dto });
      delete user.password;
      return this.signToken(user, session);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async signin(dto: SignInDto, session: Record<string, any>) {
    this.logger.log('signin started with username: ' + dto.email);
    try {
      const user: IUserDocument = (await this.userModel.findOne({
        email: dto.email,
      })) as IUserDocument;
      this.logger.log('user found: ' + user);
      if (!user) {
        throw new ForbiddenException('Credentials Incorrect');
      }
      const passwordsMatch: boolean = await user.comparePassword(dto.password);
      if (!passwordsMatch) {
        throw new ForbiddenException('Invalid credentials');
      }

      return this.signToken(user, session);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async signToken(
    user: IUserDocument,
    session: Record<string, any>,
  ): Promise<{ token: string; user: IUserDocument }> {
    const payload = {
      sub: user.id,
      email: user.email,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret: this.config.get('JWT_SECRET'),
    });
    session.jwt = token;
    return {
      token: token,
      user,
    };
  }
}
