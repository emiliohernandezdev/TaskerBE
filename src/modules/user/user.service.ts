import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./user.schema";
import { Model } from 'mongoose';
import { CreateUserDto, LoginUserDto } from "./user.dto";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private jwt: JwtService) { }


    async login(dto: LoginUserDto) {
        try {
            const find = await this.userModel.findOne({ email: dto.email.toLowerCase() });
            if (find) {
                const verification = await bcrypt.compare(dto.password, find.password);
                if (verification) {
                    let payload = {
                        email: find.email,
                        sub: find._id
                    };
                    return {
                        message: 'Authenticated',
                        result: this.jwt.sign(payload),
                        success: true
                    }
                } else {
                    return {
                        message: 'Invalid password/email',
                        result: null,
                        success: false
                    }
                }
            } else {
                return {
                    message: 'User doesnt exist',
                    result: null,
                    success: false
                };
            }
        } catch (ex) {
            return {
                message: 'An error has been ocurred',
                result: ex,
                success: false
            };
        }
    }

    async create(dto: CreateUserDto) {
        try {
            const find = await this.userModel.find({ email: dto.email.toLowerCase() });
            if (find.length < 1) {
                const createdUser = new this.userModel(dto);
                const salt = await bcrypt.genSalt();
                const hash = await bcrypt.hash(dto.password, salt);
                createdUser.password = hash;
                await createdUser.save();
                return {
                    message: 'Record saved!',
                    result: createdUser,
                    success: true
                };
            } else {
                return {
                    message: 'User already registered!',
                    result: null,
                    success: false
                };
            }
        } catch (ex) {
            return {
                message: 'An error has been ocurred',
                result: ex,
                success: false
            };
        }

    }
}