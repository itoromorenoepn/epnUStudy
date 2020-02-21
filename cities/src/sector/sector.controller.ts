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
import { SectorService } from "./sector.service";
import { SectorEntity } from "./sector.entity";
import { SectorCreateDto } from "./sector.create-dto";
import { CityService } from "src/city/city.service";




@Controller('city/:idCity/sector')
export class SectorController {
    constructor(
        private readonly _sectorService: SectorService,
        private readonly _cityService: CityService
    ) {
    }
    @Get('route/create-sector')
    routeCreateSector(
        @Query('error') error: string,
        @Res() res,
    ) {
        res.render(
            'sector/routes/create-sector',
            {
                data: {
                    error,
                },
            },
        );
    }
    @Post('')
    async creteASector(
        @Param('idCity') idCity: string | number,
        @Body() sector: SectorEntity,
        @Res() res,
    ) {
        idCity = +idCity;
        const query = {
            city: idCity,
            name: sector.name
        }

        const respuesta = await this._sectorService.createOne(query);
        if (!respuesta) {
            throw new InternalServerErrorException('Error creado');
        }
        res.redirect(
            '../sector/route/search-sector',
        );

    }


    @Get('route/search-sector')
    async routeSearchCity(
        @Query('sms') sms: string,
        @Param('idCity') idCity: string | number,
        @Param('error') error: string,
        @Res() res,
    ) {

        const query = {
            city: idCity,

        };
        try {

            const sector = await this._sectorService.search(query);
            console.log('id City: ', idCity)
            res.render(
                'sector/routes/search-show-sector',
                {
                    data: {
                        sms,
                        sector,
                        error,
                    },
                },
            );
        }
        catch (error) { console.error("error", error) }
    }

    @Post('route/create-sector/')
    async creteSector(
        @Param('idCity') idCity: string | number,
        @Body() sector: SectorEntity,
        @Res() res,
    ) {
        idCity = +idCity;
        const query = {
            city: idCity,
            name: sector.name
        }

        const respuesta = await this._sectorService.createOne(query);
        if (!respuesta) {
            throw new InternalServerErrorException('Error creado');
        }
        res.redirect(
            ' ../route/search-sector',
        );
        return respuesta;
    }
    @Post('route/deleteone/:id')
    async deleteOne(
        @Param('id') id: string,
        @Res() res,
    ): Promise<void> {
        try {
            await this._sectorService
                .deleteOne(
                    +id,
                );
            res.redirect(`../search-sector?sms=Sector ID: ${id} delete`);
        } catch (error) {
            console.error(error);
            res.redirect('../sector/search-sector?error=Error-Server');
        }
    }
    @Post(':idSector')
    async updateASector(
        @Body() sector: SectorEntity,
        @Param('idSector') id: string,
        @Res() res,
    ): Promise<void> {

        await this._sectorService
            .updateOne(
                +id,
                sector,
            );
        res.redirect(
            '../route/search-sector?sms=Sector ' + sector.name + ' updating',
        );

    }

    @Get('edit-sector/:idSector')
    async routeEditCity(
        @Query('error') error: string,
        @Param('idSector') idSector: string,
        @Res() res,
    ) {
        const consulta = {
            id: idSector,
        };
        try {
            const arraySector = await this._sectorService.search(consulta);
            if (arraySector.length > 0) {
                res.render(
                    'sector/routes/create-sector',
                    {
                        data: { error, sector: arraySector[0] },
                    },
                );
            } else {
                res.redirect(
                    '/sector/route/create-sector?error=No existe ese usuario',
                );
            }
        } catch (error) {
            console.log(error);
            res.redirect(
                '/create/route/search-sector/?error=Error editando usuario',
            );
        }

    }

}

@Controller('api/sector')
export class SectorControllerC {

    constructor(
        private readonly _sectorService: SectorService,
    ) { }

    @Get('searchCity/:cityId')
    async getCitySector(
        @Param('cityId') cityId: string,
    ) {
        return await this._sectorService.search({
            cityId: +cityId
        })
    }
}