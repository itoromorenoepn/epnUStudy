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
    UnauthorizedException
} from "@nestjs/common";
//import { Controller } from "@nestjs/common";
import {DeleteResult} from 'typeorm';
import * as Joi from '@hapi/joi';
import {validate} from 'class-validator';
import { CityService } from "./city.service";
import { CityEntity } from "./city.entity";
import { CityCreateDto } from "./city.create-dto";


@Controller('city')
export class CityController {
    // nombre="";
    constructor(
        private readonly _cityService: CityService,
    ) {
    }
    @Get()
    hola(
        
    ) {
        return 'Hola';
    }

    @Get('route/create-city')
    routeCreateCity(
        @Query('error') error: string,
        @Res() res,
    ) {
        res.render(
            'city/routes/create-city',
            {
                data: {
                    error,
                },
            },
        );
    }

    @Post()
    async createCity(
        @Body() city: CityEntity,
        @Res() res,
    ): Promise<void> {
        //const cityCreateDTO = new City;
        const cityCreateDTO = new CityCreateDto();
        cityCreateDTO.name = city.name;
        //usuarioCreateDTO.cedula = usuario.cedula;
        const errores = await validate(cityCreateDTO);
        if (errores.length > 0) {
            res.redirect(
                '/city/route/create-city?error=Error validating',
            );
        } else {
            try {
                await this._cityService
                    .createOne(
                        city,
                    );
                res.redirect(
                    '/city/route/search-city',
                );
            } catch (error) {
                console.error(error);
                res.redirect(
                    '/create/routes/create-city?error=Error of server',
                );
            }

        }

    }
    @Get('route/search-city')
    async routeSearchCity(
        @Query('sms') sms: string,
        @Query('error') error: string,
        @Res() res,
    ) {
        const city = await this._cityService.buscar();
        res.render(
            'city/routes/search-show-city',
            {
                data: {
                    sms,
                    city,
                    error,
                },
            },
        );
    }
}