import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async getById(id: number): Promise<Category | null> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category not found`);
    }
    return category;
  }

  async addCategory(categoryName: string): Promise<Category> {
    return await this.categoryRepository.save({ name: categoryName });
  }

  async deleteCategory(id: number): Promise<void> {
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Category not found`);
    }
  }
}
