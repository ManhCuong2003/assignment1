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
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getAllProduct() {
    return await this.productService.getAll();
  }

  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.getById(id);
  }

  @Post()
  async createProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('categoryId', ParseIntPipe) categoryId: number,
  ) {
    if (!name || name.trim() === '' || !price || !categoryId) {
      throw new BadRequestException('Enter all field needed');
    }
    return await this.productService.addProduct(name, price, categoryId);
  }

  @Delete(':id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    await this.productService.deleteOne(id);
    return { message: 'Product is deleted' };
  }
}
