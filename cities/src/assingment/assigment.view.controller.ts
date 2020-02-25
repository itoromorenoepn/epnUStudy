import { Controller, Get, Res, Session, Post, Body, Query } from "@nestjs/common";
import { RoleApiController } from "src/role/role.api.controller";
import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from "constants";

@Controller('assingment')
export class AssingmentViewController {
    @Post('')
    getAssingment(
        @Query() sms,
        @Res() res,
        @Session() session,
    ) {
        console.log(sms)
        if(sms.sms==='assingment'){
            res.render('assingment/routes/your-subject',
            {
                datos: {
                    session
                }
            });
        }
        if(sms.sms==='classes'){
            res.render('history/routes/history',
            {
                datos: {
                    session
                }
            });
        }        
       
    }
    
    @Get('create')
    createAssingment(
        @Res() res,
        @Session() session,
    ) {
        
            res.render('assingment/routes/create-assingment',
            {
                datos: {
                    session
                }
            });
        
    }
}