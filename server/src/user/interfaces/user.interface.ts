import { Document, ObjectId } from 'mongoose';

export interface IUserDocument extends Document {
  _id: string | ObjectId;
  email: string;
  password: string;
  createdAt: Date;
  name: string;
  comparePassword(password: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}
