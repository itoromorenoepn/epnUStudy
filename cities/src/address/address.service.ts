import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AddressEntity } from "./address.entity";

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private _repositorio: Repository<AddressEntity>
    ) {

    }

    find(id: number): Promise<AddressEntity | undefined> {
        return this._repositorio.findOne(id);
    }

    create(data: AddressEntity): Promise<AddressEntity | undefined> {
        return this._repositorio.save(data);
    }

    search(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',
        },
    ): Promise<AddressEntity[]> {
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