import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { SectorEntity } from "./sector.entity";
import { SectorController, SectorControllerC } from "./sector.controller";
import { SectorService } from "./sector.service";
import { CityModule } from "src/city/city.module";

@Module({
    imports: [
        CityModule,
        TypeOrmModule
            .forFeature([
                    SectorEntity ,
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],  
    controllers:[SectorController, SectorControllerC],
    providers:[SectorService],
    exports: [SectorService]
})
export class SectorModule {
}