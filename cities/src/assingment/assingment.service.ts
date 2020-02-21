import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AssignmentEntity } from "./assingment.entity";

@Injectable()
export class AssingmentService {
    constructor(
        @InjectRepository(AssignmentEntity)
        private _repositorio: Repository<AssignmentEntity>
    ) {

    }

    find(id: number): Promise<AssignmentEntity | undefined> {
        return this._repositorio.findOne(id);
    }

    create(data: AssignmentEntity): Promise<AssignmentEntity | undefined> {
        return this._repositorio.save(data);
    }

    search(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',
        },
    ): Promise<AssignmentEntity[]> {
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