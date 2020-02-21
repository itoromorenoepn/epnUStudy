import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CityModule } from './city/city.module';
import { CityEntity } from './city/city.entity';
import { SectorEntity } from './sector/sector.entity';
import { SectorModule } from './sector/sector.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioEntity } from './usuario/usuario.entity';


@Module({
  imports: [
    CityModule,
    SectorModule,
    UsuarioModule,
    TypeOrmModule.forRoot(
        {
          name: 'default', // Nombre cadena de Conex.
          type: 'mysql',
          host: '192.168.99.100',
          port: 32769,
          username: 'appAdmin',
          password: '1234',
          database: 'ustudy',
          dropSchema: false, // si ponemos falso no se borran los datos en la base 
          entities: [
            CityEntity,
            SectorEntity,
            UsuarioEntity,
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
