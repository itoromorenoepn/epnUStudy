import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Session,
    BadRequestException,
    Req,
    Res,
} from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioCreateDto } from './usuario.create-dto';
import { validate } from 'class-validator';
import { UsuarioService } from './usuario.service';

@Controller('api/usuario')
export class UsuarioApiController {

    constructor(
        private readonly _usuarioService: UsuarioService,
    ) { }

    @Post('login')
    async login(
        @Body('nombreUsuario') nombreUsuario: string,
        @Body('contrasena') contrasena: string,
        @Session() session,
        @Res() res,
    ) {
        try {
            const usuario = await this._usuarioService.buscar({
                nombreUsuario,
                contrasena
            })
            if (usuario.length > 0) {
                session.usuario = usuario[0]
                res.redirect('/marcas')
            } else {
                res.render('logIn', {
                    datos: {
                      session,
                      error: "Credenciales incorrectas"
                    }
                  });
            }
        } catch (error) {
            throw new BadRequestException('Error', 'Error autenticando');
        }
    }

    @Get('logout')
    logout(
        @Session() session,
        @Req() req,
        @Res() res,
    ) {
        session.usuario = undefined;
        req.session.destroy();
        res.redirect('/usuario/login');
    }

    @Post()
    async crearUsuario(
        @Body() usuario: UsuarioEntity,
    ): Promise<UsuarioEntity> {
        const usuarioCreateDTO = new UsuarioCreateDto()
        usuarioCreateDTO.cedula = usuario.cedula;
        usuarioCreateDTO.nombre = usuario.nombre;
        usuarioCreateDTO.nombreUsuario = usuario.nombreUsuario;
        usuarioCreateDTO.contrasena = usuario.contrasena;
        usuarioCreateDTO.rol = usuario.rol;
        const errores = await validate(usuarioCreateDTO);
        if (errores.length > 0) {
            console.log(errores)
            throw new BadRequestException('Los datos ingresados son incorrectos');
        } else {
            return this._usuarioService
                .crearUno(
                    usuario,
                )
        }
    }

    @Get()
    async buscarUsuario() {

    }

    @Get(':id')
    obtenerUsuario(
        @Param('id') idUsuario: string,
    ): Promise<UsuarioEntity> {
        return this._usuarioService.encontrarUno(+ idUsuario)
    }

    @Put()
    async actualizarUsuario(
        @Body() usuario: UsuarioEntity,
        @Param('id') id: string,
        @Session() session,
    ) {

    }

    @Delete()
    eliminarUsuario(
        @Param('id') id: string,
        @Session() session,
    ): Promise<any> {
        return new Promise(response => { })
    }

}