import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleApiController } from "./role.api.controller";
import { RoleService } from "./role.service";
import { RoleEntity } from "./role.entity";

@Module({
    controllers:[
        RoleApiController,
    ],
    providers: [
        RoleService,
    ],
    exports: [
        RoleService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            RoleEntity,
        ])],
})

export class RoleModule {
    
}