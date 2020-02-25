import { Controller, Get, Res, Session, Post, Body, Query } from "@nestjs/common";
import { RoleApiController } from "src/role/role.api.controller";
import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from "constants";

@Controller('class')
export class ClassViewController {
    @Post('')
    getClass(
        @Query() sms,
        @Body() rol,
        @Res() res,
        @Session() session,
    ) {
        console.log(sms)
        if(rol.check==='student'|| sms.sms==='student'){
            res.render('class/routes/class-form',
            {
                datos: {
                    session
                }
            });
        }
        if(rol.check==='teacher'|| sms.sms==='teacher'){
            res.render('history/routes/history',
            {
                datos: {
                    session
                }
            });
        }
        else{
            res.render('rol/select-rol',
            {
                datos: {
                    session
                }
            });

        }
       
    }
    
}