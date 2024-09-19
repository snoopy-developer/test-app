import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateBlogDto {
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
}
