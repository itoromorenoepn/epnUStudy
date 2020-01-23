import {Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CityEntity } from "./city.entity";
import { CityController } from "./city.controller";
import { CityService } from "./city.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    CityEntity // Entidades a usarse dentro
                                  // del modulo.
                ],
                'default' // Nombre de la cadena de conex.
            ),
    ],
    controllers: [
        CityController,
    ],
    providers: [
        CityService,
    ],
    exports: [
        CityService,
    ]
    
})
export class CityModule {

}
