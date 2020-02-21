import { Controller, Post, Body, Session, BadRequestException, Get, Param, Delete } from "@nestjs/common";
import { ClassStudentService } from "./classStudent.service";

@Controller('api/teacherA')
export class ClassStudentApiController {
    constructor(
        private readonly _dbService: ClassStudentService,
    ) { }

    validatePermissionsStudent(session) {
        if (!session.user) {
            throw new BadRequestException("Not logged user")
        }

        if (session.user.rol != 'E') {
            throw new BadRequestException('Not enough permission')
        }
    }

    validatePermissionST(session) {
        if (!session.user) {
            throw new BadRequestException("Not logged user")
        }
        if (session.user.rol != 'P' || session.user.rol != 'E') {
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

    @Get(':classId')
    async search(
        @Param('classId') classId: string,
        @Session() session,
    ) {
        try {
            this.validatePermissionST(session)
            return await this._dbService.search(
                { class: classId }
            )
        } catch {
            throw new BadRequestException('User not logged in or not have enough permission')
        }
    }

    @Get(':studentId')
    async searchClasses(
        @Param('studentId') studentId: string,
        @Session() session,
    ) {
        try {
            this.validatePermissionST(session)
            return await this._dbService.search(
                { user: studentId }
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