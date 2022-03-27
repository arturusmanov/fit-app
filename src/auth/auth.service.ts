import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthUserModel } from './auth-user.model';
import _ from 'lodash';
import { AuthUserRequestData, GetCodeForGenerate } from '../@types/auth';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthUserModel) private authRepository: typeof AuthUserModel,
  ) {}

  async generateCode(params: GetCodeForGenerate) {
    try {
      const code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

      const { email, phone } = params;

      const data = email ? { email, code } : { phone, code };

      await this.authRepository.create(data);

      return `Код авторизации для ${email ? email : phone} выслан`;
    } catch (e) {
      return console.log(e);
    }
  }

  async login(params: AuthUserRequestData) {
    try {
      const { email, phone, code } = params;

      const query = email ? { email, code } : { phone, code };

      const item = await this.authRepository.findOne({ where: query });

      if (item) {
        // получить пользователя и преобразовать в jwt
        console.log('авторизация успешна');
        return 'jwt';
      }

      return 'Неверный код подтверждения';
    } catch (e) {
      return e;
    }
  }
}
