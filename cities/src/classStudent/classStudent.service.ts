import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClassStudentEntity } from "./classStudent.entity";

@Injectable()
export class ClassStudentService {
    constructor(
        @InjectRepository(ClassStudentEntity)
        private _repositorio: Repository<ClassStudentEntity>
    ) {

    }

    find(id: number): Promise<ClassStudentEntity | undefined> {
        return this._repositorio.findOne(id);
    }

    create(data: ClassStudentEntity): Promise<ClassStudentEntity | undefined> {
        return this._repositorio.save(data);
    }

    delete(id: number) {
        return this._repositorio.delete(id);
    }

    search(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',
        },
    ): Promise<ClassStudentEntity[]> {
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