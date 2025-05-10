import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from 'src/schemas/author.schema';
import { Book, BookDocument } from 'src/schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<BookDocument>,
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  async create(title: string, authorId: string) {
    const author = await this.authorModel.findById(authorId);
    if (!author) throw new NotFoundException('Author not exist');

    return await this.bookModel.create({ title, author: author._id });
  }

  async findAll() {
    return await this.bookModel.find().populate('author');
  }

  async findOne(id: string) {
    return await this.bookModel.findById(id).populate('author');
  }

  async delete(id: string) {
    return await this.bookModel.findByIdAndDelete(id);
  }
}
