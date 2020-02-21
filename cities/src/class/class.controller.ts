import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query, Req, Res,
    Session,
    UnauthorizedException,
    InternalServerErrorException
} from "@nestjs/common";
import { DeleteResult } from 'typeorm';
import * as Joi from '@hapi/joi';
import { validate } from 'class-validator';
import { ClassService } from "./class.service";
import { ClassEntity } from "./class.entity";

@Controller('class')
export class ClassController {
    constructor(
        private readonly _classService: ClassService,
    ) {
    }
    @Get('hola')
    hola(
    ) {
        return "CREATE CLASS";
    }
    @Get('route/create-class')
    routeCreateClass(
        @Query('error') error: string,
        @Res() res,
    ) {
        res.render(
            'class/routes/create-request',
            {
                data: {
                    error,
                },
            },
        );
    }
    @Post('')
    async createOne(
        @Body() clas: ClassEntity,
        @Param('id') id: string,
        @Res() res,
    ): Promise<void> {
            console.log(clas)
            res.redirect('class/hola/');        
    }
}