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
import { AssingmentEntity } from './assingment/assingment.entity';
import { ClassEntity } from './class/class.entity';
import { ClassStudentEntity } from './classStudent/classStudent.entity';
import { RoleEntity } from './role/role.entity';
import { TeacherAssingmentEntity } from './teacherAssingment/teacherAssigment.entity';
import { AssingmentModule } from './assingment/assingment.module';
import { ClassModule } from './class/class.module';
import { ClassStudentModule } from './classStudent/classStudent.module';
import { RoleModule } from './role/role.module';
import { TeacherAModule } from './teacherAssingment/TeacherA.module';


@Module({
  imports: [
    CityModule,
    SectorModule,
    UsuarioModule,
    AssingmentModule,
    ClassModule,
    ClassStudentModule,
    RoleModule,
    TeacherAModule,
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
            SectorEntity,
            UsuarioEntity,
            AssingmentEntity,
            ClassEntity,
            ClassStudentEntity,
            RoleEntity,
            TeacherAssingmentEntity,
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
