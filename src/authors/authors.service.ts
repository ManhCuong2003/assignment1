import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from 'src/schemas/author.schema';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  async create(name: string) {
    return await this.authorModel.create({ name });
  }

  async findAll() {
    return await this.authorModel.find();
  }

  async findOne(id: string) {
    return await this.authorModel.findById(id);
  }

  async delete(id: string) {
    return this.authorModel.findByIdAndDelete(id);
  }
}
