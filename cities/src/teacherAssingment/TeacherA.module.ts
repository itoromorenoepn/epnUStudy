import { Module } from "@nestjs/common";
import { TeacherAApiController } from './teacherA.api.controller'
import { TeacherAService } from "./teacherA.service";
import { TeacherAssingmentEntity } from "./teacherAssigment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    controllers:[
        TeacherAApiController,
    ],
    providers: [
        TeacherAService,
    ],
    exports: [
        TeacherAService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            TeacherAssingmentEntity,
        ])],
})

export class TeacherAModule {
    
}