import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TeacherAssingmentEntity } from "./teacherAssigment.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeacherAService {
    constructor(
        @InjectRepository(TeacherAssingmentEntity)
        private _repositorio: Repository<TeacherAssingmentEntity>
    ) {

    }

    find(id: number): Promise<TeacherAssingmentEntity | undefined> {
        return this._repositorio.findOne(id);
    }

    create(data: TeacherAssingmentEntity): Promise<TeacherAssingmentEntity | undefined> {
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
    ): Promise<TeacherAssingmentEntity[]> {
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