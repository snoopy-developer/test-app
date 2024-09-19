import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { LoginReqDto } from './dto/req/login-req.dto';
import type { RegisterReqDto } from './dto/req/register-req.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register user' })
  @Post('register')
  async register(@Body() body: RegisterReqDto) {
    return await this.authService.register(body);
  }

  @ApiOperation({ summary: 'Login user' })
  @Post('login')
  async login(@Body() body: LoginReqDto) {
    return await this.authService.login(body);
  }
}
