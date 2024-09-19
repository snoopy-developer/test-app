import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import type { CreatePostDto } from './dto/req/create-post-req.dto';
import type { FindAllPostResDto } from './dto/res/find-all-post-res.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(private readonly postsService: PostService) {}
  @ApiOperation({ summary: 'Create post' })
  @Post()
  create(@Body() body: CreatePostDto): Promise<FindAllPostResDto> {
    return this.postsService.create(body);
  }

  @ApiOperation({ summary: 'Find all posts' })
  @Get()
  findAll(): Promise<FindAllPostResDto[]> {
    return this.postsService.findAll();
  }

  @ApiOperation({ summary: 'Find one post by id' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<FindAllPostResDto> {
    return this.postsService.findOne(id);
  }
}
