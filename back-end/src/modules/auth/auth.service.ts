import { Injectable } from '@nestjs/common';
import type { RegisterReqDto } from './dto/req/register-req.dto';
import type { LoginReqDto } from './dto/req/login-req.dto';

@Injectable()
export class AuthService {
  register(body: RegisterReqDto): string {
    console.log(body);
    return 'A token string that you will save in the database and check if it exists. If it does, then you are authorized.';
  }

  login(body: LoginReqDto): string {
    console.log(body);
    return 'A token string that you will save in the database and check if it exists. If it does, then you are authorized.';
  }
}
