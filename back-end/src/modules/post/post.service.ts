import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import type { CreatePostDto } from './dto/req/create-post-req.dto';
import { Post } from './entities/post.entity';
import type { FindAllPostResDto } from './dto/res/find-all-post-res.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(body: CreatePostDto): Promise<FindAllPostResDto> {
    const newPost = this.postRepository.create(body);
    await this.postRepository.save(newPost);
    return newPost;
  }

  async findAll(): Promise<FindAllPostResDto[]> {
    return this.postRepository.find();
  }

  async findOne(id: string): Promise<FindAllPostResDto> {
    return this.postRepository.findOneBy({ id });
  }
}
