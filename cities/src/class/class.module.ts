import {Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClassEntity } from "./class.entity";
import { ClassController } from "./class.controller";
import { ClassService } from "./class.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    ClassEntity // Entidades a usarse dentro
                                  // del modulo.
                ],
                'default' // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        ClassController,
    ],
    providers: [
        ClassService,
    ],
    exports: [
        ClassService,
    ]
    
})
export class ClassModule {

}
