import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }

  @Get(':id')
  async getCategoryById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Category | null> {
    return await this.categoriesService.getById(id);
  }

  @Post()
  async createCategory(@Body('name') name: string): Promise<Category> {
    if (!name || name.trim() === '') {
      throw new BadRequestException('Category must have name');
    }
    return await this.categoriesService.addCategory(name);
  }

  @Delete(':id')
  async deleteCategoryById(@Param('id', ParseIntPipe) id: number) {
    await this.categoriesService.deleteCategory(id);
    return { messsage: 'Category is deleted' };
  }
}
