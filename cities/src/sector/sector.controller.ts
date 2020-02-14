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
//import { Controller } from "@nestjs/common";
import {DeleteResult} from 'typeorm';
import * as Joi from '@hapi/joi';
import {validate} from 'class-validator';
import { SectorService } from "./sector.service";
import { SectorEntity } from "./sector.entity";
import { SectorCreateDto } from "./sector.create-dto";
import { CityService } from "src/city/city.service";




@Controller('city/sector')
export class SectorController {
    // nombre="";
    constructor(
        private readonly _sectorService: SectorService,
        private readonly _cityService: CityService
    ) {
    }
    @Get()
    hola(
        
    ) {
        return 'Hola Pendejo';
    }

    @Get('route/create-sector/:idCity')
    async routeCreateSector(
        @Param('idCity') idCity: string | number,
        @Param('error') error: string,
        @Res() res,
    ) {
        idCity = +idCity;
        const city = await this._cityService.buscarUno(idCity);
        console.log(city)
        const sector = await this._sectorService.buscar();
        res.render(
            'sector/routes/create-sector',
            {
                data: {
                    city,
                    sector,
                    error,
                },
            },
        );
    }

    @Post()
    async createSector(
        @Body() sector: SectorEntity,
        @Res() res,
    ): Promise<void> {
        //const cityCreateDTO = new City;
        const sectorCreateDTO = new SectorCreateDto();
        sectorCreateDTO.name = sector.name;
        //usuarioCreateDTO.cedula = usuario.cedula;
        const errores = await validate(sectorCreateDTO);
        if (errores.length > 0) {
            res.redirect(
                '/sector/route/create-sector?error=Error validating',
            );
        } else {
            try {
                await this._sectorService
                    .createOne(
                        sector,
                    );
                res.redirect(
                    '/sector/route/search-sector',
                );
            } catch (error) {
                console.error(error);
                res.redirect(
                    '/create/routes/create-sector?error=Error of server',
                );
            }

        }

    }
    @Get('route/search-sector/:idCity')
    async routeSearchCity(
        @Param('idCity') idCity: string | number,
        @Param('error') error: string,
        @Res() res,
    ) {
try{
    idCity = +idCity;
    const city = await this._cityService.buscarUno(idCity);
    console.log(city)
    const sector = await this._sectorService.buscar();
    res.render(
        'sector/routes/search-show-sector',
        {
            data: {
                city,
                sector,
                error,
            },
        },
    );
}
catch(error){console.error("error",error)}
    
    }
    
    @Post('route/create-sector/:idCity')
    async creteSector(
        @Param('idCity') idCity: string | number,
        @Body() sector: SectorEntity,
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
        return respuesta;
    }
}