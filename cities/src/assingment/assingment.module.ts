import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssingmentService } from "./assingment.service";
import { AssingmentApiController } from "./assingment.api.controller";
import { AssingmentEntity } from "./assingment.entity";

@Module({
    controllers:[
        AssingmentApiController,
    ],
    providers: [
        AssingmentService,
    ],
    exports: [
        AssingmentService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            AssingmentEntity,
        ])],
})

export class AssingmentModule {
    
}