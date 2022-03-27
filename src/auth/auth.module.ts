import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthUserModel } from './auth-user.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [SequelizeModule.forFeature([AuthUserModel])],
})
export class AuthModule {}
