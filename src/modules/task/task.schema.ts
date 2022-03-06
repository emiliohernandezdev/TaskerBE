import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from '../category/category.schema';
import { Project } from '../project/project.schema';
import { Team } from '../team/team.schema';

export type TaskDocument = Task & Document;


@Schema()
export class Task{

    @Prop()
    title: string;

    @Prop()
    date: Date;

    @Prop()
    time: Date;

    @Prop()
    state: string;

    @Prop({
        default: 1
    })
    priority: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    })
    team: Team[];

    @Prop({ type: 
        [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' 
    }]})
    category: Category[];

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    })
    project: Project;

}

export const TaskSchema = SchemaFactory.createForClass(Task);