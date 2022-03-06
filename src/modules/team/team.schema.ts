import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';

export type TeamDocument = Team & Document;


@Schema()
export class Team {

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    color: string;

    @Prop()
    image: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    })
    propietary: User;

    @Prop({
        type:
            [{
                type: mongoose.Schema.Types.ObjectId, ref: 'User'
            }]
    })
    members: User[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);