import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { UserRoleEntity } from './user-role/user-role.entity';
import { UserRoleModule } from './user-role/user-role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host: '192.168.99.100',
      port: 32768,
      username: 'appAdmin',
      password: '1234',
      database: 'appUsers',
      dropSchema: true,
      entities: [
        UserEntity,
        UserRoleEntity
      ],
      synchronize: true,
    }),
    UserModule,
    UserRoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
