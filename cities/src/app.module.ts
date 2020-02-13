import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CityModule } from './city/city.module';
import { CityEntity } from './city/city.entity';
import { SectorEntity } from './sector/sector.entity';
import { SectorModule } from './sector/sector.module';


@Module({
  imports: [
    CityModule,
    SectorModule,
    TypeOrmModule.forRoot(
        {
          name: 'default', // Nombre cadena de Conex.
          type: 'mysql',
          host: 'localhost',
          port: 32769,
          username: 'roger',
          password: '1234',
          database: 'ustudy',
          dropSchema: false, // si ponemos falso no se borran los datos en la base 
          entities: [
            CityEntity,
            SectorEntity
            
          ],
          synchronize: true, // Crear -> true , Conectar -> false
        }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 
}
