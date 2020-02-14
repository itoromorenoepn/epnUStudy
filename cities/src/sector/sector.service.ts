import {Injectable, InternalServerErrorException} from "@nestjs/common";
//import { CityEntity } from "./city.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {DeleteResult, Like, MoreThan, Repository} from "typeorm";
import { SectorEntity } from "./sector.entity";
@Injectable()
export class SectorService {
    constructor(
        @InjectRepository(SectorEntity) // Inyectar Dependencias
        private _repositorySector: Repository<SectorEntity>
    ) {
    }
    createOne(sector): Promise<SectorEntity> {
        try {
            return this._repositorySector
            .save(sector);
        } catch (e) {
            throw new InternalServerErrorException('Error creando')
        }
    }

    buscar(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',
            name: 'ASC'
        }
    ): Promise<SectorEntity[]> {

        //Exactly the name or exactly the sector
        const consultaWhere = [
            {
                name: ''
            }
        ];

        // Exactly the name or LIKE the sector
        const consultaWhereLike = [
            {
                name: Like('a%')
            }
        ];

        // id sea mayor a 20
        const consultaWhereMoreThan = {
            id: MoreThan(20)
        };

        // id sea igual a x
        const consultaWhereIgual = {
            id: 30
        };

        return this._repositorySector
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }

}
