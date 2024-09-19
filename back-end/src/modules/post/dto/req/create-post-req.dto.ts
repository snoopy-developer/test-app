import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  description: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  imageUrl: string;

  @IsString()
  @IsOptional()
  @Length(0, 300)
  moreInfo: string;
}
