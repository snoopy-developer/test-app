import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterReqDto {
  @Transform(({ value }) => value.trim().toLowerCase())
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  password: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  phone: string;
}
