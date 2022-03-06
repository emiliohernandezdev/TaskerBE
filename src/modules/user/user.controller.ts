import { Body, Controller, Get, Post, UseGuards, Request } from "@nestjs/common";
import { CreateUserDto, LoginUserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    
    constructor(private userService: UserService){}

    @Post('create')
    createUser(@Body() data: CreateUserDto){
        return this.userService.create(data);
    }

    @Post('login')
    login(@Body() credentials: LoginUserDto){
        return this.userService.login(credentials);
    }

}