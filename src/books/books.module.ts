import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { AuthorsModule } from 'src/authors/authors.module';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from 'src/schemas/book.schema';
import { Author, AuthorSchema } from 'src/schemas/author.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Author.name, schema: AuthorSchema },
    ]),
    AuthorsModule,
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
