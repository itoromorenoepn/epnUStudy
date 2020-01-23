import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Module({
    controllers: [
        UserController,
    ],
    providers: [
        UserService,
    ],
    exports: [
        UserService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
        ])],
})
export class UserModule {
}