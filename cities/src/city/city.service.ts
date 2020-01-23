import {Injectable} from "@nestjs/common";
import { CityEntity } from "./city.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {DeleteResult, Like, MoreThan, Repository} from "typeorm";
@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity) // Inyectar Dependencias
        private _repositorioUsuario: Repository<CityEntity>
    ) {
    }
   

    buscar(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',
            name: 'ASC'
        }
    ): Promise<CityEntity[]> {

        // Exactamente el nombre o Exactamente la cedula
        const consultaWhere = [
            {
                name: ''
            }
        ];

        // Exactamente el nombre o LIKE la cedula
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

        return this._repositorioUsuario
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }

}
