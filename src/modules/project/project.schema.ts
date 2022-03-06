import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;


@Schema()
export class Project{

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    color: string;
    
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    })
    team: string;

    @Prop()
    image: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);