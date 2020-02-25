import { Controller, Post, Body, Session, BadRequestException, Get, Param, Delete, Put, Res } from "@nestjs/common";
import { AssingmentService } from "./assingment.service";
import { AssingmentDto } from './assingment.dto';
import { validate } from "class-validator";

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
        @Res() res,
    ) {
        try {
            this.validatePermissions(session)
            let assingmentDto = new AssingmentDto();
            assingmentDto.name = data.name;
            const errores = await validate(assingmentDto);
            if (errores.length > 0) {
                console.log(errores);
                throw new BadRequestException(errores[0]);
            } else {
                res.redirect('assingment/create',
            {
                datos: {
                    session
                }
            });
                return await this._dbService.create(data)
                ///assingment/create
                
            }
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
            let assingmentDto = new AssingmentDto();
            assingmentDto.name = data.name;
            const errores = await validate(assingmentDto);
            if (errores.length > 0) {
                console.log(errores);
                throw new BadRequestException(errores[0]);
            } else {
                return await this._dbService.update(+id, data)
            }
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