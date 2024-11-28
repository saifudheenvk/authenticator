import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUserDocument } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private userModel: Model<IUserDocument>) {}

  async getUserById(id: string): Promise<IUserDocument> {
    const user = await this.userModel.findById(id);
    delete user.password;
    return user;
  }
}
