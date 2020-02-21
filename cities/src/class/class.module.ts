import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClassApiController } from "./class.api.controller";
import { ClassService } from "./class.service";
import { ClassEntity } from "./class.entity";

@Module({
    controllers:[
        ClassApiController,
    ],
    providers: [
        ClassService,
    ],
    exports: [
        ClassService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            ClassEntity,
        ])],
})

export class ClassModule {
    
}