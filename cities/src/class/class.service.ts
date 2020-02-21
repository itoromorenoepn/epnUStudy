import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClassEntity } from "./class.entity";

@Injectable()
export class ClassService {
    constructor(
        @InjectRepository(ClassEntity)
        private _repositorio: Repository<ClassEntity>
    ) {

    }

    find(id: number): Promise<ClassEntity | undefined> {
        return this._repositorio.findOne(id);
    }

    create(data: ClassEntity): Promise<ClassEntity | undefined> {
        return this._repositorio.save(data);
    }

    search(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',
        },
    ): Promise<ClassEntity[]> {
        return this._repositorio
        .find(
            {
                where,
                skip,
                take,
                order
            }
        );
    }
}