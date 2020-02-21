import { Controller, Post, Body, Session, BadRequestException, Get, Param, Delete, Put } from "@nestjs/common";
import { ClassService } from "./class.service";

@Controller('api/teacherA')
export class ClassApiController {
    constructor(
        private readonly _dbService: ClassService,
    ) { }

    validatePermissionsStudent(session) {
        if (!session.user) {
            throw new BadRequestException("Not logged user")
        }

        if (session.user.rol != 'E') {
            throw new BadRequestException('Not enough permission')
        }
    }

    validatePermissionTeacher(session) {
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
            this.validatePermissionsStudent(session)
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
            this.validatePermissionsStudent(session)
            return await this._dbService.update(+id, data)
        } catch {
            throw new BadRequestException('User not logged in or not have enough permission')
        }
    }

    @Get('/teacher/:teacherId')
    async searchByTeacher(
        @Param('teacherId') teacherId: string,
        @Session() session,
    ) {
        try {
            this.validatePermissionTeacher(session)
            return await this._dbService.search(
                { teacher: teacherId }
            )
        } catch {
            throw new BadRequestException('User not logged in or not have enough permission')
        }
    }

    @Get(':id')
    async searchOne(
        @Param('id') id: string,
        @Session() session,
    ) {
        try {
            this.validatePermissionsStudent(session)
            return await this._dbService.search(
                { id: +id }
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
            this.validatePermissionsStudent(session)
            return await this._dbService.delete(+id)
        } catch {
            throw new BadRequestException('User not logged in or not have enough permission')
        }
    }

}