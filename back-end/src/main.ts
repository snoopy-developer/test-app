import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { PostService } from './modules/post/post.service';
import { BlogService } from './modules/blog/blog.service';
import { posts } from './mock/mockPost';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerHelper } from './helper/swagger.helper';
import { blogs } from './modules/blog/mockBlogs';

dotenv.config();

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('test-task')
    .setDescription('test - NestJS 🏎')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerHelper.setDefaultResponses(document);
  SwaggerModule.setup('api', app, document);

  const postService = app.get<PostService>(PostService);
  const blogService = app.get<BlogService>(BlogService);
  try {
    for (const post of posts) {
      await postService.create(post);
    }
    for (const blog of blogs) {
      await blogService.create(blog);
    }
    Logger.log('Posts created successfully.');
  } catch (e) {
    Logger.error('Error creating posts:', e.message);
  }
  await app.listen(port, () => {
    Logger.log(`- The server started on port ${port} ᕙ(^▿^-ᕙ)`);
  });
}

bootstrap();
