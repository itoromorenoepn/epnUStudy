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
import { DeleteResult } from 'typeorm';
import * as Joi from '@hapi/joi';
import { validate } from 'class-validator';
import { CityService } from "./city.service";
import { CityEntity } from "./city.entity";
import { CityCreateDto } from "./city.create-dto";


@Controller('city')
export class CityController {
    constructor(
        private readonly _cityService: CityService,
    ) {
    }
    @Get('route/edit-city/:idCity')
    async routeEditCity(
        @Query('error') error: string,
        @Param('idCity') idCity: string,
        @Res() res,
    ) {
        const query = {
            id: idCity,
        };
        try {
            const arrayCity = await this._cityService.search(query);
            if (arrayCity.length > 0) {
                res.render(
                    'city/routes/create-city',
                    {
                        data: { error, city: arrayCity[0] },
                    },
                );
            } else {
                res.redirect(
                    '/city/route/create-city?error=No existe ese usuario',
                );
            }
        } catch (error) {
            console.log(error);
            res.redirect(
                '/create/route/search-city/?error=Error editando usuario',
            );
        }

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
        const cityCreateDTO = new CityCreateDto();
        cityCreateDTO.name = city.name;
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
        const city = await this._cityService.search();
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
    @Post('deleteone/:id')
    async deleteOne(
        @Param('id') id: string,
        @Res() res,
    ): Promise<void> {
        try {
            await this._cityService
                .deleteOne(
                    +id,
                );
            res.redirect(`/city/route/search-city?sms=City ID: ${id} delete`);
        } catch (error) {
            console.error(error);
            res.redirect('/city/route/search-city?error=Error-Server');
        }
    }


    @Post(':idCity')
    async updateACity(
        @Body() city: CityEntity,
        @Param('idCity') id: string,
        @Res() res,
    ): Promise<void> {
        await this._cityService
            .updateOne(
                +id,
                city,
            );
        res.redirect(
            '/city/route/search-city?sms=City ' + city.name + ' updating',
        );
    }


}