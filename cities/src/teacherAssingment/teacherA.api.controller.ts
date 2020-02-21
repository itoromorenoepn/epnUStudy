import { Controller, Post, Body, Session, BadRequestException, Get, Param, Delete } from "@nestjs/common";
import { TeacherAService } from "./teacherA.service";

@Controller('api/teacherA')
export class TeacherAApiController {
    constructor(
        private readonly _dbService: TeacherAService,
    ) { }

    validatePermissions(session) {
        if (!session.user) {
            throw new BadRequestException("Not logged user")
        }

        if (session.user.rol != 'P') {
            throw new BadRequestException('Not enough permission')
        }
    }

    @Post('create')
    async create(
        @Body() data,
        @Session() session,
    ) {
        try {
            this.validatePermissions(session)
            return await this._dbService.create(data)
        } catch {
            throw new BadRequestException('User not logged in or not have enough permission')
        }
    }

    @Get(':teacherId')
    async search(
        @Param('teacherId') teacherId: string,
        @Session() session,
    ) {
        try {
            this.validatePermissions(session)
            return await this._dbService.search(
                { user: teacherId }
            )
        } catch {
            throw new BadRequestException('User not logged in or not have enough permission')
        }
    }

    @Delete('id')
    async delete(
        @Param('id') id: string,
        @Session() session,
    ) {
        try {
            this.validatePermissions(session)
            return await this._dbService.delete(+id)
        } catch {
            throw new BadRequestException('User not logged in or not have enough permission')
        }
    }
}