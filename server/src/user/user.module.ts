import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...UserProviders],
  exports: [...UserProviders],
})
export class UserModule {}
