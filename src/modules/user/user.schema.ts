import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;


@Schema()
export class User {

    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    birthDate: Date;

    @Prop()
    image: string;

}

export const UserSchema = SchemaFactory.createForClass(User);