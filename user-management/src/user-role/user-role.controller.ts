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
    UnauthorizedException,
    HttpStatus
} from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleEntity } from './user-role.entity';
import * as Joi from '@hapi/joi';
import { validate } from "class-validator";
import { DeleteResult } from 'typeorm';
import { Response } from 'express';

@Controller('user-role')
export class UserRoleController {

    constructor(
        private readonly _userRoleService: UserRoleService,
    ) {
    }

}