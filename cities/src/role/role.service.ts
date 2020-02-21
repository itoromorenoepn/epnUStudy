import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RoleEntity } from "./role.entity";

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private _repositorio: Repository<RoleEntity>
    ) {

    }

    find(id: number): Promise<RoleEntity | undefined> {
        return this._repositorio.findOne(id);
    }

    create(data: RoleEntity): Promise<RoleEntity | undefined> {
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
    ): Promise<RoleEntity[]> {
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