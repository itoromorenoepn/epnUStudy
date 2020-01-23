import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private _userRepository: Repository<UserEntity>,
    ) {
    }

    findUser(id: number): Promise<UserEntity | undefined> {
        return this._userRepository.findOne(id);
    }

    createUser(user: UserEntity): Promise<UserEntity | undefined> {
        return this._userRepository.save(user);
    }

    deleteUser(userId: number): Promise<DeleteResult> {
        return this._userRepository.delete(userId);
    }

    updateUser(id: number, user: UserEntity): Promise<UserEntity> {
        user.id = id;
        return this._userRepository.save(user);
    }

    search(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',
            name: 'ASC',
        },
    ): Promise<UserEntity[]> {
        return this._userRepository
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }
}