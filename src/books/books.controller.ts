import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  create(@Body('title') title: string, @Body('authorId') authorId: string) {
    return this.bookService.create(title, authorId);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
