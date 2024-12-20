import mongoose from 'mongoose';
import { hash, compare } from 'bcryptjs';
import { IUserDocument } from '../interfaces/user.interface';

const SALT_ROUND = 10;

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  password: { type: String },
  name: { type: String },
});

UserSchema.pre('save', async function (this: IUserDocument, next: () => void) {
  const hashedPassword: string = await hash(
    this.password as string,
    SALT_ROUND,
  );
  this.password = hashedPassword;
  next();
});

UserSchema.methods.comparePassword = async function (
  password: string,
): Promise<boolean> {
  const hashedPassword: string = (this as unknown as IUserDocument).password!;
  return compare(password, hashedPassword);
};

UserSchema.methods.hashPassword = async function (
  password: string,
): Promise<string> {
  return hash(password, SALT_ROUND);
};

export default UserSchema;
