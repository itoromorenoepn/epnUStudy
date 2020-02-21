import { Controller, Post, Body, Session, BadRequestException, Get, Param } from "@nestjs/common";
import { TeacherAService } from "./teacherA.service";
import { UsuarioService } from "src/usuario/usuario.service";

@Controller('api/teacherA')
export class TecharAApiController {
    constructor(
        private readonly _dbService: TeacherAService,
    ) { }

    validatePermissions(session) {
        if (!session.user) {
            throw new BadRequestException("Not logged user")
        }

        if (session.user.rol != 'E') {
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

    @Get(':classId')
    async search(
        @Param('classId') classId: string,
        @Session() session,
    ) {
        try {
            this.validatePermissions(session)
            return await this._dbService.search(
                classId
            )
        } catch {
            throw new BadRequestException('User not logged in or not have enough permission')
        }
    }
}