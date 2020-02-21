import { Controller, Get, Res } from "@nestjs/common";

@Controller('class')
export class ClassViewController {
    @Get()
    getClasses(
        @Res() res,
    ) {
        res.render('class/routes/show-class');
    }
    
}