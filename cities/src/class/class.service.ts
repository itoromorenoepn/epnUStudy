import {Injectable, InternalServerErrorException} from "@nestjs/common";
//import { CityEntity } from "./city.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {DeleteResult, Like, MoreThan, Repository} from "typeorm";
import { ClassEntity } from "./class.entity";
@Injectable()
export class ClassService {
    constructor(
        @InjectRepository(ClassEntity) // Inyectar Dependencias
        private _repositoryclass: Repository<ClassEntity>
    ) {
    }
}