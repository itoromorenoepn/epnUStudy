import { Controller, Get, Res, Session } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('usuario')
export class UsuarioViewController {

    constructor(
        private readonly _usuarioService: UsuarioService,
    ) { }

    @Get('login')
    login(
        @Res() res,
        @Session() session,
    ) {
        console.log(session);
        if (session.usuario) {

        }
        res.render('logIn',
            {
                datos: {
                    session,
                }
            });
    }

    @Get('registry')
    registry(
        @Res() res,
        @Session() session,
    ) {
        if (session.usuario) {
            res.redirect('/marcas');
        }
        res.render('registry',
            {
                datos: {
                    session,
                }
            })
    }

    @Get('mostrar-usuarios')
    async mostrarUsuarios(
        @Res() res,
    ) {
        const usuarios = await this._usuarioService.buscar();
        res.render(
            'usuario/vistas/buscar-mostrar-usuario',
            {
                datos: {
                    usuarios,
                }
            },
        );
    }
}