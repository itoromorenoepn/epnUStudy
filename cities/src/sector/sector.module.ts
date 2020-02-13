import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { SectorEntity } from "./sector.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    SectorEntity ,
                ],
                'default', // Nombre de la cadena de conex.
            ),
    ],  
})
export class SectorModule {
}