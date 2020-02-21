import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioApiController } from './usuario.api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioViewController } from './usuario.view.controller';

@Module({
    controllers: [
        UsuarioApiController,
        UsuarioViewController,
    ],
    providers: [
        UsuarioService,
    ],
    exports: [
        UsuarioService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            UsuarioEntity,
        ])],
})
export class UsuarioModule {
}