import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CityModule } from './city/city.module';
import { CityEntity } from './city/city.entity';


@Module({
  imports: [
    CityModule,
    TypeOrmModule.forRoot(
        {
          name: 'default', // Nombre cadena de Conex.
          type: 'mysql',
          host: 'localhost',
          port: 32769,
          username: 'roger',
          password: '1234',
          database: 'ustudy',
          dropSchema: true, // si ponemos falso no se borran los datos en la base 
          entities: [
            CityEntity,
            
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
