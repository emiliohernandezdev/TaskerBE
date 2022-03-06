import { Body, Controller, Get, Param, Patch, Post, Put, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../user/auth/jwt.auth.guard";
import { TeamService } from "./team.service";

@UseGuards(JwtAuthGuard)
@Controller('teams')
export class TeamController{
    constructor(private teamService: TeamService){}
    
    @Post('create')
    createTeam(@Body() data){
        return this.teamService.create(data)
    }

    @Patch('update/:id')
    updateTeam(@Body() data, @Param('id') id){
        return this.teamService.update(id, data);
    }

    @Put('delete/:id')
    deleteTeam(@Param('id') id){
        return this.teamService.delete(id);
    }
    
    @Get('')
    findTeams(@Request() req){
        return this.teamService.findTeams(req.user.sub);
    }


}