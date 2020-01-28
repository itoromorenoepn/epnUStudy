import {Injectable} from "@nestjs/common";
import { CityEntity } from "./city.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {DeleteResult, Like, MoreThan, Repository} from "typeorm";
@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity) // Inyectar Dependencias
        private _repositoryCity: Repository<CityEntity>
    ) {
    }
    createOne(city: CityEntity) {
        return this._repositoryCity
            .save(city);
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

        //Exactly the name or exactly the city
        const consultaWhere = [
            {
                name: ''
            }
        ];

        // Exactly the name or LIKE the city
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

        return this._repositoryCity
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }

}
