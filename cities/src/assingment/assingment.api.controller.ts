import { Controller, Post, Body, Session, BadRequestException, Get, Param, Delete, Put } from "@nestjs/common";
import { AssingmentService } from "./assingment.service";

@Controller('api/teacherA')
export class AssingmentApiController {
    constructor(
        private readonly _dbService: AssingmentService,
    ) { }

    validatePermissions(session) {
        if (!session.user) {
            throw new BadRequestException("Not logged user")
        }

        if (session.user.rol != 'A') {
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

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() data,
        @Session() session,
    ) {
        try {
            this.validatePermissions(session)
            return await this._dbService.update(+id, data)
        } catch {
            throw new BadRequestException('User not logged in or not have enough permission')
        }
    }

    @Get()
    async searchByTeacher(
        @Param('teacherId') teacherId: string,
        @Session() session,
    ) {
        try {
            this.validatePermissions(session)
            return await this._dbService.search()
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