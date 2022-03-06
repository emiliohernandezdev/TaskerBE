import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TaskService{
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>){
    }

    async create(data): Promise<Task>{
        const createdTask = new this.taskModel(data);
        return createdTask.save();
    }

    
}