import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import type { CreateBlogDto } from './dto/req/create-blog-req.dto';
import type { FindAllBlogResDto } from './dto/res/find-all-blog-res.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BlogService } from './blog.service';

@ApiTags('Blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @ApiOperation({ summary: 'Create blog' })
  @Post()
  create(@Body() body: CreateBlogDto): Promise<FindAllBlogResDto> {
    return this.blogService.create(body);
  }

  @ApiOperation({ summary: 'Find all blogs' })
  @Get()
  findAll(): Promise<FindAllBlogResDto[]> {
    return this.blogService.findAll();
  }

  @ApiOperation({ summary: 'Find one blog by id' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<FindAllBlogResDto> {
    return this.blogService.findOne(id);
  }
}
