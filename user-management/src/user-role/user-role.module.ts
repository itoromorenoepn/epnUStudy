import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserRoleController } from './user-role.controller';
import { UserRoleService } from './user-role.service';
import { UserRoleEntity } from './user-role.entity';

@Module({
    controllers: [
        UserRoleController,
    ],
    providers: [
        UserRoleService,
    ],
    exports: [
        UserRoleService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            UserRoleEntity,
        ])],
})
export class UserRoleModule {
}