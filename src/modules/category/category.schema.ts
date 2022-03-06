import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;


@Schema()
export class Category{

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    color: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);