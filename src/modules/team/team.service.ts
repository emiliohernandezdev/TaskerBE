import { Injectable } from "@nestjs/common";
import { Team, TeamDocument } from "./team.schema";
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class TeamService {

    constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {
    }

    async create(data) {
        const createdTeam = new this.teamModel(data);
        return createdTeam.save();
    }

    async update(id, data) {
        try {
            const update = await this.teamModel.findByIdAndUpdate(id, {
                name: data.name,
                description: data.description,
                color: data.color
            }, { new: true });

            if (update.isModified) {
                return {
                    message: 'Team updated!',
                    result: update,
                    success: true
                }
            } else {
                return {
                    message: 'Team not updated!',
                    result: null,
                    success: false
                }
            }
        } catch (ex) {
            return {
                message: ex,
                result: null,
                success: false
            }
        }
    }


    async delete(id) {
        try {
            const deletion = await this.teamModel.findByIdAndDelete(id);
            if (deletion.$isDeleted) {
                return {
                    message: 'Team deleted!',
                    result: id + " deleted!",
                    success: true
                }
            } else {
                return {
                    message: 'Team not deleted!',
                    result: null,
                    success: true
                }
            }
        } catch (ex) {
            return {
                message: ex,
                result: null,
                success: false
            }
        }
    }

    async findTeams(id) {
        try {
            return this.teamModel.find({
                $or: [
                    {
                        propietary: id
                    },
                    {
                        members: {
                            $in: id
                        }
                    }
                ]
            }).populate('propietary')
                .populate('members').exec();
        } catch (ex) {
            return {
                message: ex,
                success: false,
                result: null
            }
        }
    }
}