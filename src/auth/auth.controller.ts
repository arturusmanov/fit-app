import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import {
  AuthByEmailDto,
  AuthByPhoneDto,
  GenerateCodeForEmailDto,
  GenerateCodeForPhoneDto,
} from './dto/auth.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/generateCodeForEmail')
  async generateCodeForEmail(@Body() body: GenerateCodeForEmailDto) {
    return await this.authService.generateCode(body);
  }

  @Post('/generateCodeForPhone')
  async generateCodeForPhone(@Body() body: GenerateCodeForPhoneDto) {
    return await this.authService.generateCode(body);
  }

  @Post('/loginByEmail')
  async loginByEmail(@Body() body: AuthByEmailDto) {
    return await this.authService.login(body);
  }

  @Post('/loginByPhone')
  async loginByPhone(@Body() body: AuthByPhoneDto) {
    return await this.authService.login(body);
  }
}
