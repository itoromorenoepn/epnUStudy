import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClassStudentApiController } from "./classStudent.api.controller";
import { ClassStudentService } from "./classStudent.service";
import { ClassStudentEntity } from "./classStudent.entity";

@Module({
    controllers:[
        ClassStudentApiController,
    ],
    providers: [
        ClassStudentService,
    ],
    exports: [
        ClassStudentService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            ClassStudentEntity,
        ])],
})

export class ClassStudentModule {
    
}