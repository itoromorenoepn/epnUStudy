import { Controller, Get, Res, Session } from "@nestjs/common";

@Controller('class')
export class ClassViewController {


    @Get(":id")
    getClass(
        @Res() res,
        @Session() session,
    ) {
        res.render('class/routes/class-form',
        {
            datos: {
                session
            }
        });
    }
    
}