import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query, Req, Res,
    Session,
    UnauthorizedException
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import * as Joi from '@hapi/joi';
import { validate } from "class-validator";
import { DeleteResult } from 'typeorm';
import { UserCreateDto } from './user.create-dto';
import { UserUpdateDto } from './user.update-dto';

@Controller('user')
export class UserController {

    constructor(
        private readonly _userService: UserService,
    ) {
    }

    @Get(':id')
    getUser(
        @Param('id') identifier: string,
    ): Promise<UserEntity> {
        return this._userService
            .findUser(Number(identifier));
    }

    @Post()
    async createUser(
        @Body() user: UserEntity,
        @Session() session,
    ): Promise<void> {
        const userCreateDTO = new UserCreateDto();
        userCreateDTO.name = user.name;
        userCreateDTO.icNumber = user.icNumber;
        userCreateDTO.phone = user.phone;
        userCreateDTO.email = user.email;
        userCreateDTO.username = user.username;
        const errors = await validate(userCreateDTO);
        if (errors.length > 0) {
            console.log(errors)
            throw new BadRequestException('Validation error');
        } else {
            try {
                this._userService
                    .createUser(
                        user,
                    );
            } catch (error) {
                console.log(error)
            }
        }
    }

    @Put()
    async updateUser(
        @Body() user: UserEntity,
        @Param('id') id: string,
        @Session() session,
    ) {
        const userUpdateDTO = new UserUpdateDto();
        userUpdateDTO.name = user.name;
        userUpdateDTO.icNumber = user.icNumber;
        userUpdateDTO.phone = user.phone;
        userUpdateDTO.email = user.email;
        userUpdateDTO.username = user.username;
        userUpdateDTO.id = +id;
        const errors = await validate(userUpdateDTO);
        if (errors.length > 0) {
            throw new BadRequestException('Validation error');
        } else {
            return this._userService
                .updateUser(
                    +id,
                    user,
                );
        }
    }

    @Delete(':id')
    deleteUser(
        @Param('id') id: string,
        @Session() session,
    ): Promise<DeleteResult> {
        return this._userService
            .deleteUser(
                +id,
            );
    }

    @Get()
    async buscar(
        @Query('skip') skip?: string | number,
        @Query('take') take?: string | number,
        @Query('where') where?: string,
        @Query('order') order?: string,
    ): Promise<UserEntity[]> {
        const newSchema = Joi.object({
            skip: Joi.number(),
        });
        try {
            const validatedObject = await newSchema
                .validateAsync({
                    skip: skip,
                });
            console.log('validatedObject', validatedObject);
        } catch (err) {
            console.error('Error', err);
        }

        if (skip) {
            skip = +skip;
        }
        if (take) {
            take = +take;
        }
        if (where) {
            try {
                where = JSON.parse(where);
            } catch (e) {
                where = undefined;
            }
        }
        if (order) {
            try {
                order = JSON.parse(order);
            } catch (e) {
                order = undefined;
            }
        }
        return this._userService.search(
            where,
            skip as number,
            take as number,
            order,
        );
    }

}