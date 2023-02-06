import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog', {
      useNewUrlParser: true,
    }),
    BlogModule,
    MulterModule.register({
      dest: './files',
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
