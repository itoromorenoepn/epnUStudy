import { Controller, Post, Body, Session, BadRequestException, Get, Param, Delete } from "@nestjs/common";
import { RoleService } from "./role.service";

@Controller('api/teacherA')
export class RoleApiController {
    constructor(
        private readonly _dbService: RoleService,
    ) { }

    validatePermissions(session) {
        if (!session.user) {
            throw new BadRequestException("Not logged user")
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

    @Get(':userId')
    async search(
        @Param('userId') userId: string,
        @Session() session,
    ) {
        try {
            this.validatePermissions(session)
            return await this._dbService.search(
                { user: userId }
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