import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import type { CreateBlogDto } from './dto/req/create-blog-req.dto';
import { Blog } from './entities/blog.entity';
import type { FindAllBlogResDto } from './dto/res/find-all-blog-res.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly postRepository: Repository<Blog>,
  ) {}

  async create(body: CreateBlogDto): Promise<FindAllBlogResDto> {
    const newPost = this.postRepository.create(body);
    await this.postRepository.save(newPost);
    return newPost;
  }

  async findAll(): Promise<FindAllBlogResDto[]> {
    return this.postRepository.find();
  }

  async findOne(id: string): Promise<FindAllBlogResDto> {
    return this.postRepository.findOneBy({ id });
  }
}
