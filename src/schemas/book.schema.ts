import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'Author', required: true })
  author: Types.ObjectId;
}

export const BookSchema = SchemaFactory.createForClass(Book);
