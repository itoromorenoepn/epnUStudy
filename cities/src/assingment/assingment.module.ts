import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssingmentService } from "./assingment.service";
import { AssingmentApiController } from "./assingment.api.controller";
import { AssingmentEntity } from "./assingment.entity";
import { AssingmentViewController } from "./assigment.view.controller";

@Module({
    controllers:[
        AssingmentApiController,
        AssingmentViewController,
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