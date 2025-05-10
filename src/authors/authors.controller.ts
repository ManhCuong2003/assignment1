import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorsService) {}

  @Post()
  create(@Body('name') name: string) {
    return this.authorService.create(name);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.authorService.delete(id);
  }
}
