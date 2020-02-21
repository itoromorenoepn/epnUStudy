import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AssingmentEntity } from "./assingment.entity";

@Injectable()
export class AssingmentService {
    constructor(
        @InjectRepository(AssingmentEntity)
        private _repositorio: Repository<AssingmentEntity>
    ) {

    }

    find(id: number): Promise<AssingmentEntity | undefined> {
        return this._repositorio.findOne(id);
    }

    create(data: AssingmentEntity): Promise<AssingmentEntity | undefined> {
        return this._repositorio.save(data);
    }

    update(id: number, data: AssingmentEntity) {
        return this._repositorio.update(id, data);
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
    ): Promise<AssingmentEntity[]> {
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